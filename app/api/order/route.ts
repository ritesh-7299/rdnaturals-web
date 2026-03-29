import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, phone, description } = await req.json();

    // Check if required fields are present
    if (!email || !phone || !description) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure the transporter
    // For production, you should use environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.MY_EMAIL || process.env.EMAIL_USER, // The destination email
      subject: `New Mushroom Order from ${phone}`,
      text: `
        New Order Request:
        ------------------
        Email: ${email}
        Phone: ${phone}
        
        Details:
        ${description}
      `,
      html: `
        <h2>New Order Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br/>
        <h3>Details:</h3>
        <p>${description.replace(/\n/g, "<br/>")}</p>
      `,
    };

    // Only send if credentials are provided
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Order sent successfully" }, { status: 200 });
    } else {
      console.warn("Email credentials missing. Order logged but not sent.");
      console.log("Order details:", { email, phone, description });
      // We return 200 for now so the UI doesn't break, but ideally, we'd want this configured
      return NextResponse.json(
        { message: "Order logged (simulated - email config missing)" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error sending order email:", error);
    return NextResponse.json(
      { message: "Error processing order" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email, location, variety, quantity, frequency, message } = await req.json();

    // Check if required fields are present
    if (!name || !phone || !location || !variety || !quantity || !frequency) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.MY_EMAIL || "rdnaturals.in@gmail.com",
      subject: `New Mushroom Order/Quote from ${name} (${phone})`,
      text: `
        New Order/Quotation Request:
        ------------------
        Name: ${name}
        Phone: ${phone}
        Email: ${email || "Not provided"}
        Location: ${location}
        Variety: ${variety}
        Quantity: ${quantity}
        Frequency: ${frequency}

        Message/Instructions:
        ${message || "No additional instructions provided."}
      `,
      html: `
        <h2>New Order/Quotation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Variety:</strong> ${variety}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Frequency:</strong> ${frequency}</p>
        <br/>
        <h3>Message/Instructions:</h3>
        <p>${(message || "No additional instructions provided.").replace(/\n/g, "<br/>")}</p>
      `,
    };

    // Only send if credentials are provided
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Order sent successfully" }, { status: 200 });
    } else {
      console.warn("Email credentials missing. Order logged but not sent.");
      console.log("Order details:", { name, phone, email, location, variety, quantity, frequency, message });
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

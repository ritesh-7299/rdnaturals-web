import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RD Naturals – Fresh Mushrooms Supplier in Gujarat",
  description: "Fresh farm mushrooms, hygienic and daily supply. Contact RD Naturals for bulk and retail orders. Pure • Fresh • Natural",
  keywords: ["fresh mushrooms", "mushroom supplier Gujarat", "farm fresh mushrooms", "organic mushrooms", "mushroom delivery", "RD Naturals"],
  authors: [{ name: "RD Naturals" }],
  metadataBase: new URL("https://rdnaturals.com"),
  openGraph: {
    title: "RD Naturals – Fresh Mushrooms Supplier in Gujarat",
    description: "Fresh farm mushrooms, hygienic and daily supply. Contact RD Naturals for bulk and retail orders.",
    type: "website",
    siteName: "RD Naturals",
  },
  icons: {
    icon: "/main_logo_square.png",
    apple: "/main_logo_square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-forest">
        {children}
      </body>
    </html>
  );
}

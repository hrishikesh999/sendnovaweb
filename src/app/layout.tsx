import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SendNova — Thoughtful Cold Outreach, Powered by Research",
  description:
    "SendNova researches companies and generates personalized outbound emails based on real observations. Join the early access waitlist.",
  openGraph: {
    title: "SendNova — Thoughtful Cold Outreach, Powered by Research",
    description:
      "SendNova researches companies and generates personalized outbound emails based on real observations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

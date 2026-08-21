import { Manrope, Unbounded } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nadia Nisar | Frontend Developer",
  description: "Frontend Developer Portfolio",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${unbounded.variable} bg-[#0B0B0B] text-white font-[var(--font-manrope)]`}>

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
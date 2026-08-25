import {
  Manrope,
  Unbounded,
  Great_Vibes,
  Dancing_Script,
} from "next/font/google";

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

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: "400",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${unbounded.variable} ${greatVibes.variable} ${dancingScript.variable} bg-[#0B0B0B] text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
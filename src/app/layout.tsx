import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavBar } from "@/components/Navbar";
import { StarsCanvas } from "@/components/Stars";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Denzel Iskandar",
  description: "Denzel | Student at UNSW",
  icons: [{ rel: "icon", url: "/icon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <NavBar />
        <StarsCanvas />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

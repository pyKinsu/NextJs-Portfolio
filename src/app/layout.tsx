import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StarsCanvas } from "@/components/sections/Star-Background";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ✅ Global viewport theme color
export const viewport: Viewport = {
  themeColor: "#030014",
};

// ✅ Global site metadata (SEO)
export const metadata: Metadata = {
  title: "Kinsu Rajput | Portfolio",
  description: "Welcome to my portfolio.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/kinsu.svg", type: "image/svg+xml" },
    ],
  },
  authors: [
    {
      name: "Kinsu Rajput",
      url: "https://github.com/pykinsu",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://nextjs-portfolio.vercel.app",
    title: "Kinsu Rajput | Portfolio",
    description: "Welcome to my portfolio.",
    images: [
      {
        url: "/kinsu.svg",
        width: 1200,
        height: 630,
        alt: "Kinsu Rajput",
      },
    ],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

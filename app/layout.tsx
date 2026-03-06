import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlassCursorEffect from "@/components/Effects/cursorEffect";
import { MusicProvider } from "@/components/Effects/musicModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshit Vashisht - Portfolio",
  description: "I am a Frontend focused Software Developer from India, coding and crafting web apps to turn imagination into reality, specialized in creating scalable, user-centric applications with a focus on performance and accessibility.",
  keywords: ["Harshit Vashisht", "Frontend Developer", "Web Developer Portfolio", "React", "Creative Coding"],
  authors: [{ name: "Harshit Vashisht" }],
  openGraph: {
    type: "website",
    url: "https://iamhv856156.github.io/Hv_Garage/",
    title: "Harshit Vashisht - Portfolio",
    description: "Crafting scalable web apps and high-fidelity digital experiences. Explore my projects.",
    images: [{ url: "https://iamhv856156.github.io/Hv_Garage/preview-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlassCursorEffect/>
        <MusicProvider>
        {children}
        </MusicProvider>
      </body>
    </html>
  );
}

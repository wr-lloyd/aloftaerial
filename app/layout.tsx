import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aloft Aerial — The capture layer",
  description:
    "We capture the visuals and data that power your work. Aerial photography, video, and survey-grade imaging for property, construction, inspection, film, and events.",
  metadataBase: new URL("https://aloftaerial.com"),
  icons: {
    icon: [
      { url: "/image-logo.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Aloft Aerial — The capture layer",
    description:
      "We capture the visuals and data that power your work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

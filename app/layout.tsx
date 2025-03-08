import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anvith | Personal Website",
    template: "%s | Anvith",
  },
  description: "Personal website and portfolio of Anvith - Software Engineer and Developer",
  keywords: ["Software Engineer", "Web Developer", "Portfolio", "Blog"],
  authors: [{ name: "Anvith" }],
  creator: "Anvith",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Anvith | Personal Website",
    description: "Personal website and portfolio of Anvith - Software Engineer and Developer",
    siteName: "Anvith's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvith | Personal Website",
    description: "Personal website and portfolio of Anvith - Software Engineer and Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-black text-black dark:text-white`}
      >
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}

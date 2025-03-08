import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Providers } from "./providers";
import ThemeToggle from "./components/ThemeToggle";
import ParticleBackground from "./components/ParticleBackground";
import Script from "next/script";

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
  description: "Personal website and portfolio of Anvith - Software Engineer at Cisco",
  keywords: ["Software Engineer", "Web Developer", "Full Stack Developer", "React", "Node.js", "TypeScript"],
  authors: [{ name: "Anvith Vobbilisetty" }],
  creator: "Anvith Vobbilisetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Anvith | Personal Website",
    description: "Personal website and portfolio of Anvith - Software Engineer at Cisco",
    siteName: "Anvith's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvith | Personal Website",
    description: "Personal website and portfolio of Anvith - Software Engineer at Cisco",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-black text-black dark:text-white`}
      >
        <Providers>
          <ParticleBackground />
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}

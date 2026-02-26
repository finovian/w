import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Urbanist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "WealthUp",
  description: "Track your WealthUp score, compare trajectories, and follow a personalized roadmap to improve long-term financial outcomes.",
  openGraph: {
    title: "WealthUp",
    description: "Track your WealthUp score and follow a personalized roadmap to improve your financial outcomes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WealthUp",
    description: "Track your WealthUp score and follow a personalized roadmap to improve your financial outcomes.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

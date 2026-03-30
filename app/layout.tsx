import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesse Man | Software Developer & AI Builder",
  description:
    "Software developer specializing in AI/ML, full-stack web development, and building tools that solve real problems. B.Tech CS at VIT Chennai.",
  keywords: [
    "software developer",
    "AI",
    "machine learning",
    "full-stack",
    "Python",
    "TypeScript",
    "Next.js",
    "PyTorch",
  ],
  openGraph: {
    title: "Jesse Man | Software Developer & AI Builder",
    description:
      "Software developer specializing in AI/ML, full-stack web development, and building tools that solve real problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesse Man | Software Developer & AI Builder",
    description:
      "Software developer specializing in AI/ML, full-stack web development, and building tools that solve real problems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

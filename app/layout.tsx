import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesse Man | Full-Stack Engineer",
  description:
    "Full-stack engineer building production web apps with Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB. AI/ML research published in IEEE. B.Tech CS at VIT Chennai.",
  keywords: [
    "full-stack engineer",
    "software engineer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React",
    "PostgreSQL",
    "MongoDB",
    "Python",
    "REST API",
  ],
  openGraph: {
    title: "Jesse Man | Full-Stack Engineer",
    description:
      "Full-stack engineer building production web apps with Next.js, TypeScript, Node.js, and modern databases.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesse Man | Full-Stack Engineer",
    description:
      "Full-stack engineer building production web apps with Next.js, TypeScript, Node.js, and modern databases.",
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

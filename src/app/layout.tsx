import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego Zegarra | Frontend Developer",
  description: "Frontend developer with 5+ years of experience building scalable, high-performance web applications.",
  keywords: ["frontend developer", "react", "next.js", "typescript", "web development"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-gray-100 antialiased`}>
        <ScrollProgress />
        <HamburgerMenu />
        {children}
      </body>
    </html>
  );
} 
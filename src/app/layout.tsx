import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideLayout from "../components/Layouts/SideLayout";
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
  title: "Task Manager",
  description:
    "A simple task manager application built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased`}
    >
      <body className="min-w-full min-h-full flex flex-col">
        <SideLayout>{children}</SideLayout>
      </body>
    </html>
  );
}

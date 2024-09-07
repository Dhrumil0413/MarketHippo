import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  className,
  children,
}: {
  className?: string,
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('relative h-full font-sans antialised', inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar/>
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/providers";
import { Toaster } from "sonner";

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
          <Providers>
            <Navbar/>
            <div className="flex-grow flex-1 min-h-screen flex flex-col items-center justify-start">{children}</div>
          </Providers>
        </main>

        <Toaster position="top-center" richColors />

      </body>
    </html>
  );
}

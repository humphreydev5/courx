import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { Suspense } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "CourX",
  description: "Essential Learning Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider> {/* Provides authentication context */}
      <html lang="en">
        <body className={`${dmSans.className}`}>
          <Providers> {/* Global state management provider */}
            <Suspense fallback={null}> {/* Handles lazy-loaded components */}
              <div className="root-layout">{children}</div> {/* Main content container */}
            </Suspense>
            <Toaster richColors closeButton /> {/* Toast notifications */}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

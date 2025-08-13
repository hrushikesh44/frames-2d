import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { FooterProvider, Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Frames 2D",
  icons: {
    icon: '/favicon-32x32.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning >
        <body
          className={GeistSans.className}
        >
        <Providers >
          <Navbar />
          <Toaster position="bottom-right"/>
          {children}
          <FooterProvider/>
        </Providers>
        </body>
      </html>
  );
}

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "AI 2D Video Generator",
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
          <Toaster position="bottom-right"/>
          {children}
        </Providers>
        </body>
      </html>
  );
}

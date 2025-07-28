import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "@/components/theme-provider";

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
          {children}
        </Providers>
        </body>
      </html>
  );
}

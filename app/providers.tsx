"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";

export function Providers(props: Readonly<{ children: ReactNode }>) {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {props.children}
      </ThemeProvider>
  );
}

export function FooterProvider(){
  const pathname = usePathname();
  if(pathname === "/login") return null;

  return <Footer/>
}
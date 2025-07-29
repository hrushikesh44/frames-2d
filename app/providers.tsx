"use client";

import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";

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
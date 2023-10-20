"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const localTheme = window ? window.localStorage.theme: null
  return (
    <NextThemeProvider attribute="class" defaultTheme={localTheme || "system"}>
      {children}
    </NextThemeProvider>
  );
}

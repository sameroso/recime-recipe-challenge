import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { myTheme } from "@/libs/styled-components/theme";
import { ThemeProvider } from "@/libs/styled-components";
import StyledComponentsRegistry from "@/libs/styled-components/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipes",
  description: "recipes website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={myTheme}>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  GlobalStyle,
  recipeTheme,
  ThemeProvider,
} from "@/libs/styled-components";
import StyledComponentsRegistry from "@/libs/styled-components/registry";
import { Container } from "@/components/Container";

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
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={recipeTheme}>
            <GlobalStyle />
            <Container>{children}</Container>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

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
import { Suspense } from "react";
import { Loading } from "@/components";
import { ReactQueryProvider } from "@/libs/react-query/providers";

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
        <ThemeProvider theme={recipeTheme}>
          <ReactQueryProvider>
            <StyledComponentsRegistry>
              <GlobalStyle />
              <Suspense fallback={<Loading />}>
                <Container>{children}</Container>
              </Suspense>
            </StyledComponentsRegistry>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

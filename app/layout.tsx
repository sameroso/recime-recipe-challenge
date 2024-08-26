import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { Loading } from "@/components";
import { AppProvider } from "@/providers";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "900"],
  subsets: ["latin"],
});

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
      <body className={roboto.className}>
        <AppProvider>
          <Suspense fallback={<Loading />}>
            <Container>{children}</Container>
          </Suspense>
        </AppProvider>
      </body>
    </html>
  );
}

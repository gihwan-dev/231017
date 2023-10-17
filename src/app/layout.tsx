import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUiClientProvider from "@/providers/NextUiClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kmk 웹 사이트",
  description: "웹 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUiClientProvider>{children}</NextUiClientProvider>
      </body>
    </html>
  );
}

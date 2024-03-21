import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "./provider";
import Header from "@/components/main/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "별 헤는 밤",
  description: "별자리에 대한 정보를 제공해주는 웹 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.className} min-h-screen bg-main bg-cover bg-no-repeat bg-fixed`}
      >
        <Header />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

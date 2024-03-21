import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "./provider";
import Header from "@/components/main/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starry Night",
  description: "Starry Night by HOT6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-main bg-cover bg-no-repeat bg-fixed`}
      >
        <Header />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

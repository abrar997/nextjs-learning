import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abrar Muthana",
  description: "front end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark text-main lg:px-12 lg:pt-6 lg:pb-10 p-4">
      <body className="grid gap-6">
        <Header />
        <main className="text-main">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
    <html lang="en">
      <body>
        <Header />
        <ToastContainer theme="colored" />
        <main className="text-main">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//good to  add foe SEO  محركات البحث
export const metadata: Metadata = {
  title: "Abrar Muthana",
  description: "front end developer", // لمحركات البحث لمن الشخص يبحث عن شي من خلال هذا الوصف المحركات راح تخي ضمن الاختيارات
  icons: "",
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

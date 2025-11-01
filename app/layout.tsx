import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "سلام رفیق",
  description: "یک فضای دیجیتال برای خوش‌آمدگویی و اتصال فارسی‌زبانان.",
  icons: {
    icon: "/favicon.ico"
  }
};

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>{children}</body>
    </html>
  );
}

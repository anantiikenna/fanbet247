import type { Metadata } from "next";
import {Noto_Sans, Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/sections/Nav";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-noto-sans'
});

const notoSansDisplay = Noto_Sans_Display({
  subsets: ["latin"],
  weight: ['400', '700', '900'], // 900 for Black weight
  style: ['normal', 'italic'],    // Enable italic styles
  variable: '--font-noto-sans-display',
});

export const metadata: Metadata = {
  title: "Fanbet247",
  description: "Bet 24hours 7 Days",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${notoSansDisplay.variable} bg-[#f3f7f6] antialiased w-full`}
      >
      <Nav/>
      <div></div>
        {children}
      </body>
    </html>
  );
}

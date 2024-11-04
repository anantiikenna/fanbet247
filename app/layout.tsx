// layout.tsx
import { QueryClientProvider } from '@tanstack/react-query';
import  queryClient from '@/lib/queryClient';
import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import MobileNavbar from "../components/sections/MobileNavbar";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-noto-sans'
});

const notoSansDisplay = Noto_Sans_Display({
  subsets: ["latin"],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-noto-sans-display',
});

export const metadata: Metadata = {
  title: "Fanbet247",
  description: "Bet 24hours 7 Days",
  icons: {
    icon: "/assets/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Updated for clarity, but you can keep it as it is
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoSansDisplay.variable} bg-[#f3f7f6] p-0 m-0 antialiased w-screen h-screen`}>
        <QueryClientProvider client={queryClient}>
          <Nav />
          <MobileNavbar />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}

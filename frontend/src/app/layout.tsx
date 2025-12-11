import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STMPD Studios",
  description: "Amsterdam's MOST ADVANCED recording studio STMPD recording studios is Amsterdam’s largest recording studio facility. Designed as the ultimate playground for music and audio post-production.",
  openGraph: {
    images: ["https://160.wpcdnnode.com/stmpdstudios.com/wp-content/uploads/2019/07/LOGO.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
        <PopupWidget />
      </body>
    </html>
  );
}

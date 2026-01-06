import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

async function loader() {
  const { fetchData } = await import("@/lib/fetch");

  const path = "/api/global";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      Metadata: {
        populate: {
          openGraphImage: {
            fields: ["url"],
          },
        },
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = `?${query}`;

  return fetchData(url.href);
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await loader();
  const meta = data?.Metadata;

  const siteUrl = new URL("https://smtpd-six.vercel.app");

  if (!meta) {
    return {
      metadataBase: siteUrl,
      title: "STMPD Studios",
      description: "Amsterdam’s most advanced recording studio.",
    };
  }

  return {
    metadataBase: siteUrl, // 🔴 REQUIRED
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: "website",
      title: meta.title,
      description: meta.description,
      images: meta.openGraphImage?.url
        ? [
            {
              url: getStrapiURL() + meta.openGraphImage.url,
            },
          ]
        : [],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <SmoothScroll />
        <Navbar />
        <main className="bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

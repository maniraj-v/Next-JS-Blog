import "@/app/globals.css";
import { siteMetaData } from "@/constants/siteMetaData";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manRope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title,
  },
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noarchive: false, // If true --> google cache will not come in search result for premium/subscription
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetaData.title,
    description: siteMetaData.description,
    images: [siteMetaData.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          manRope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        {children}
      </body>
    </html>
  );
}

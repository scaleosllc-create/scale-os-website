import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Scale OS — E-Commerce Growth Partner",
    template: "%s | Scale OS",
  },
  description:
    "We scale Shopify brands with human strategy and AI infrastructure. Lower your CAC, expand margins, and automate operations.",
  openGraph: {
    title: "Scale OS — E-Commerce Growth Partner",
    description:
      "We scale Shopify brands with human strategy and AI infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale OS — E-Commerce Growth Partner",
    description:
      "We scale Shopify brands with human strategy and AI infrastructure.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Scale OS LLC",
              description: "Premium e-commerce growth agency combining human strategy with AI infrastructure for Shopify brands.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1309 Coffeen Avenue STE 1200",
                addressLocality: "Sheridan",
                addressRegion: "WY",
                postalCode: "82801",
                addressCountry: "US",
              },
              url: "https://scaleos.com",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-ink`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

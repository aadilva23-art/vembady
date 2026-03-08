import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Vembady – Kitchen Appliances, Crockery & Gifts | Thoppumpady, Kochi",
    template: "%s | Vembady",
  },
  description:
    "Vembady is Thoppumpady's trusted kitchen appliances, crockery, and gift store. Genuine brands, best prices, wide variety since 2005.",
  keywords: [
    "kitchen appliances Kochi",
    "crockery store Thoppumpady",
    "gift shop Kochi",
    "Prestige dealer Kochi",
    "Butterfly appliances Kerala",
    "mixer grinder Kochi",
    "pressure cooker Thoppumpady",
  ],
  icons: {
    icon: "/logos/vembady-favicon.svg",
    apple: "/logos/vembady-favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vembady",
    title: "Vembady – Kitchen Appliances, Crockery & Gifts",
    description: "Trusted kitchen store in Thoppumpady, Kochi since 2005.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

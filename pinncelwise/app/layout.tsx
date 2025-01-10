import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinncalewise | Professional Financial Services",
  description: "Expert financial services and consulting in Hong Kong. We provide comprehensive financial planning, investment strategies, and professional guidance for your financial future.",
  keywords: ["financial services", "investment planning", "Hong Kong finance", "financial consulting", "wealth management"],
  openGraph: {
    title: "Pinncalewise | Professional Financial Services",
    description: "Expert financial services and consulting in Hong Kong. Comprehensive financial planning and investment strategies.",
    url: "https://pinncalewise.com",
    siteName: "Pinncalewise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pinncalewise Financial Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinncalewise | Professional Financial Services",
    description: "Expert financial services and consulting in Hong Kong",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://pinncalewise.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

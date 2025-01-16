import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/components-layout-wrapper";
import { defaultMetadata } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    template: '%s | Pinnaclewise',
    default: 'Pinnaclewise | Professional Financial Services in Hong Kong',
  },
  description: 'Expert financial services and consulting in Hong Kong. We provide comprehensive financial planning, investment strategies, and professional guidance for your financial future.',
  keywords: [
    'financial services',
    'investment planning',
    'Hong Kong finance',
    'financial consulting',
    'wealth management',
    'accounting services',
    'audit services',
    'company formation',
    'tax services',
    'business consulting'
  ],
  openGraph: {
    title: 'Pinnaclewise | Professional Financial Services',
    description: 'Expert financial services and consulting in Hong Kong. Comprehensive financial planning and investment strategies.',
    url: 'https://pinnaclewise.com',
    siteName: 'Pinnaclewise',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pinnaclewise Financial Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinnaclewise | Professional Financial Services',
    description: 'Expert financial services and consulting in Hong Kong',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification',
  },
  other: {
    'baidu-site-verification': 'your-baidu-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

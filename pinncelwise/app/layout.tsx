import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/metadata";
import { NavBar } from "@/components/nav-bar";
import Script from "next/script";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    template: '%s | Pinnaclewise',
    default: 'Pinnaclewise - Professional Accounting Services in Hong Kong',
  },
  description: 'Professional accounting, audit, and company secretarial services in Hong Kong. We help businesses with their financial needs.',
  keywords: ['accounting', 'audit', 'hong kong', 'company secretary', 'tax', 'business'],
  openGraph: {
    title: 'Pinnaclewise - Professional Accounting Services in Hong Kong',
    description: 'Professional accounting, audit, and company secretarial services in Hong Kong. We help businesses with their financial needs.',
    url: 'https://pinnaclewise.com',
    siteName: 'Pinnaclewise',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pinnaclewise',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinnaclewise - Professional Accounting Services in Hong Kong',
    description: 'Professional accounting, audit, and company secretarial services in Hong Kong. We help businesses with their financial needs.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://pinnaclewise.com'),
};

type RootLayoutProps = {
  children: React.ReactNode
  params: { lang?: string }
}

export default function RootLayout(props: RootLayoutProps) {
  const language = props.params?.lang === 'zh' ? 'zh' : 'en';

  return (
    <html lang={language === 'zh' ? 'zh-HK' : 'en'} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZRHLCEY42Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZRHLCEY42Y');
          `}
        </Script>
        
        {/* Schema.org */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Pinnaclewise",
              "image": "https://pinnaclewise.com/og-image.png",
              "description": "Professional accounting services in Hong Kong. Expert bookkeeping, audit, tax filing, and company secretary services.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Hong Kong",
                "addressRegion": "Hong Kong",
                "addressCountry": "HK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "YOUR_LATITUDE",
                "longitude": "YOUR_LONGITUDE"
              },
              "url": "https://pinnaclewise.com",
              "telephone": "+85295311156",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "YOUR_FACEBOOK_URL",
                "YOUR_LINKEDIN_URL"
              ]
            })
          }}
        />
        <div className="relative min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <NavBar language={language} />
            </div>
          </header>
          {props.children}
        </div>
      </body>
    </html>
  );
}

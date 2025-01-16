import type { Metadata } from "next"

export const defaultMetadata = {
  metadataBase: new URL('https://pinnaclewise.com'),
  authors: [{ name: 'Pinnaclewise' }],
  creator: 'Pinnaclewise',
  publisher: 'Pinnaclewise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
}

export const generateMetadata = (
  title: string,
  description: string,
  keywords: string[],
  path: string
): Metadata => ({
  ...defaultMetadata,
  title,
  description,
  keywords,
  alternates: {
    canonical: `https://pinnaclewise.com${path}`,
    languages: {
      'en-US': `/en${path}`,
      'zh-HK': `/zh${path}`,
    },
  },
  openGraph: {
    title,
    description,
    url: `https://pinnaclewise.com${path}`,
    siteName: 'Pinnaclewise',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
})

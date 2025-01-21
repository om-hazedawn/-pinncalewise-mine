import type { Metadata } from "next"

const defaultRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
  },
}

const defaultKeywords = [
  'hong kong accounting',
  'hk accounting services',
  'hong kong audit',
  'accounting firm hong kong',
  'company secretary hong kong',
  'tax services hong kong',
  'bookkeeping hong kong',
  'sme accounting hong kong',
  'audit firm hong kong',
  'business accounting hk',
  'corporate accounting services',
  'financial statements hong kong',
  'tax filing hong kong',
  'accounting consultation hk',
  'monthly accounting service'
]

export const defaultMetadata: Metadata = {
  title: 'Hong Kong Accounting & Audit Services | Pinnaclewise',
  description: 'Professional accounting services in Hong Kong. Expert bookkeeping, audit, tax filing, and company secretary services. Trusted by local and international businesses. Get a free consultation.',
  keywords: defaultKeywords,
  alternates: {
    canonical: 'https://pinnaclewise.com',
    languages: {
      'en-US': 'https://pinnaclewise.com/en',
      'zh-HK': 'https://pinnaclewise.com/zh',
    },
  },
  openGraph: {
    title: 'Hong Kong Accounting & Audit Services | Pinnaclewise',
    description: 'Professional accounting services in Hong Kong. Expert bookkeeping, audit, tax filing, and company secretary services. Trusted by local and international businesses.',
    url: 'https://pinnaclewise.com',
    siteName: 'Pinnaclewise',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pinnaclewise - Professional Accounting Services in Hong Kong',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hong Kong Accounting & Audit Services | Pinnaclewise',
    description: 'Professional accounting services in Hong Kong. Expert bookkeeping, audit, tax filing, and company secretary services. Trusted by local and international businesses.',
    images: ['/og-image.png'],
  },
  robots: defaultRobots,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://pinnaclewise.com'),
  authors: [
    {
      name: 'Pinnaclewise',
      url: 'https://pinnaclewise.com',
    }
  ],
  category: 'Accounting Services',
  creator: 'Pinnaclewise',
  publisher: 'Pinnaclewise',
  other: {
    'baidu-site-verification': 'your-baidu-verification', // Important for Chinese market
    'google-site-verification': 'your-google-verification',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const generateMetadata = (
  title: string,
  description: string,
  keywords: string[],
  path: string
): Metadata => {
  // Combine keywords safely
  const combinedKeywords = defaultMetadata.keywords 
    ? [...keywords, ...(defaultMetadata.keywords as string[])]
    : keywords

  return {
    ...defaultMetadata,
    title: `${title} | Hong Kong Accounting Services - Pinnaclewise`,
    description: `${description} Professional accounting and audit services in Hong Kong.`,
    keywords: combinedKeywords,
    alternates: {
      ...defaultMetadata.alternates,
      canonical: `https://pinnaclewise.com${path}`,
      languages: {
        'en-US': `https://pinnaclewise.com/en${path}`,
        'zh-HK': `https://pinnaclewise.com/zh${path}`,
      },
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | Hong Kong Accounting Services`,
      description,
      url: `https://pinnaclewise.com${path}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | Hong Kong Accounting Services`,
      description,
    },
  }
}

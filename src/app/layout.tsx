import type { Metadata, Viewport } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xentro.in'),
  title: {
    default: "XENTRO | India's Digital Entrepreneurship Ecosystem",
    template: "%s | XENTRO"
  },
  description: "XENTRO is an all-in-one digital entrepreneurship ecosystem connecting students, founders, mentors, and investors in India. Guided learning, startup discovery, and syndicate co-investing.",
  keywords: [
    "Xentro", "entrepreneurship", "startup ecosystem India", "startup funding", 
    "mentor connect", "investors", "founders", "VC firms", "incubators", 
    "startup showcase", "pitch deck", "deal flow pipeline", "syndicate investing",
    "digital entrepreneurship"
  ],
  authors: [{ name: "Xentro" }],
  creator: "Xentro",
  publisher: "Xentro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "XENTRO | India's Digital Entrepreneurship Ecosystem",
    description: "Connect with founders, mentors, and investors. The ultimate digital ecosystem for startups in India.",
    url: 'https://xentro.in',
    siteName: 'XENTRO',
    images: [
      {
        url: '/favicon.svg',
        width: 800,
        height: 600,
        alt: 'XENTRO Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "XENTRO | India's Digital Entrepreneurship Ecosystem",
    description: "Connect with founders, mentors, and investors. The ultimate digital ecosystem for startups in India.",
    images: ['/favicon.svg'],
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
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${redHatDisplay.variable}`} style={{ colorScheme: 'light' }}>
      <body className="antialiased bg-white text-[#0b192c]">{children}</body>
    </html>
  );
}

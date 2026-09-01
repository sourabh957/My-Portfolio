import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sourabh-portfolio.vercel.app'),
  title: 'Sourabh Chaudhary — Backend Engineer | Distributed Systems | AI',
  description:
    'Sourabh Chaudhary is a backend engineer specializing in distributed systems, cloud architecture, and AI engineering. SDE II at StatusNeo, working with Piramal Finance.',
  keywords: [
    'Sourabh Chaudhary',
    'Backend Engineer',
    'Software Engineer',
    'Java Backend Engineer',
    'Spring Boot',
    'Distributed Systems',
    'AI Engineer',
    'FDE',
    'Forward Deployed Engineer',
  ],
  authors: [{ name: 'Sourabh Chaudhary' }],
  openGraph: {
    title: 'Sourabh Chaudhary — Backend Engineer | Distributed Systems | AI',
    description:
      'Building scalable backend systems, distributed architectures and AI-powered applications.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://sourabh-portfolio.vercel.app',
    siteName: 'Sourabh Chaudhary Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sourabh Chaudhary — Backend Engineer',
    description:
      'Building scalable backend systems, distributed architectures and AI-powered applications.',
  },
  alternates: {
    canonical: 'https://sourabh-portfolio.vercel.app',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${inter.className} bg-[#0a0a0f] text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://sourabh-portfolio-lac.vercel.app'),
  title: { default: 'Sourabh Chaudhary - Java Backend Engineer', template: '%s | Sourabh Chaudhary' },
  description:
    'Java backend engineer for Spring Boot APIs, Kafka integrations, Redis performance, PostgreSQL, and cloud delivery. Available for freelance backend projects.',
  keywords: [
    'Sourabh Chaudhary',
    'Backend Engineer',
    'Software Engineer',
    'Java Backend Engineer',
    'Spring Boot',
    'Distributed Systems',
    'Freelance Backend Developer',
    'Apache Kafka',
    'Redis',
  ],
  authors: [{ name: 'Sourabh Chaudhary' }],
  openGraph: {
    title: 'Sourabh Chaudhary - Java Backend Engineer',
    description:
      'Java backend delivery and rescue: Spring Boot, Kafka, Redis, PostgreSQL, AWS, and GCP.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://sourabh-portfolio-lac.vercel.app',
    siteName: 'Sourabh Chaudhary Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sourabh Chaudhary - Java Backend Engineer',
    description:
      'Java backend delivery and rescue: Spring Boot, Kafka, Redis, PostgreSQL, AWS, and GCP.',
  },
  alternates: {
    canonical: 'https://sourabh-portfolio-lac.vercel.app',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} ${inter.className} bg-[#07100d] text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}

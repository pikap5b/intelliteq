import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Intelliteq - Intelligent Technology Solutions',
  description: 'Professional technology consulting and innovative solutions for modern businesses. Transform your digital presence with Intelliteq.',
  keywords: 'technology consulting, digital transformation, software development, IT solutions',
  authors: [{ name: 'Intelliteq Team' }],
  openGraph: {
    title: 'Intelliteq - Intelligent Technology Solutions',
    description: 'Professional technology consulting and innovative solutions for modern businesses.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
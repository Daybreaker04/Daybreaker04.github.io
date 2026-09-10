import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://daybreaker04.github.io'),
  title: 'Haoxuan “Harry” Li — AI & Software Engineer',
  description:
    'Georgia Tech MSCS student building dependable software and intelligent systems across backend engineering, applied AI, data, and privacy.',
  keywords: [
    'Haoxuan Li',
    'Harry Li',
    'Georgia Tech',
    'Software Engineer',
    'Backend Developer',
    'Machine Learning Engineer',
    'Artificial Intelligence Engineer',
  ],
  authors: [{ name: 'Haoxuan “Harry” Li' }],
  openGraph: {
    type: 'website',
    url: 'https://daybreaker04.github.io',
    title: 'Haoxuan “Harry” Li — AI & Software Engineer',
    description: 'Engineering ideas into impact through dependable software, applied AI, and data.',
    siteName: 'Haoxuan “Harry” Li',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Haoxuan Harry Li — Engineering ideas into impact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haoxuan “Harry” Li — AI & Software Engineer',
    description: 'Engineering ideas into impact through dependable software, applied AI, and data.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

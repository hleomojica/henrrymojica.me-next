import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GeistSans, GeistMono } from 'geist/font';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Henrry Mojica',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${GeistSans.className} h-screen`}>
      <head>
        <Script
          strategy='afterInteractive'
          src={'https://www.googletagmanager.com/gtag/js?id=G-B2W5ZG9KKM'}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'G-B2W5ZG9KKM');
            `,
          }}
        />
      </head>
      <body className=''>
        <main className=''>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

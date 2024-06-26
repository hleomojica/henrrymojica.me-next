import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Henrry Mojica',
  description: 'Software Engineer',
};

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';

storyblokInit({
  accessToken: process.env.SB_ACCESS_TOKEN,
  use: [apiPlugin],
});

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
      <body className='dark:bg-neutral-900'>
        <main className=''>
          {children}
          <Analytics />
          <StoryblokBridgeLoader options={{}} />
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://henrrymojica.me'),
  title: {
    default:
      'Henrry Mojica - Full-Stack Developer | React, Node.js, TypeScript',
    template: '%s | Henrry Mojica',
  },
  description:
    'Highly skilled Full-Stack Software Developer with 6+ years of experience building innovative digital experiences with React, Next.js, Node.js, and TypeScript. Available for freelance projects and full-time opportunities.',
  keywords: [
    'Full-Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Henrry Mojica',
    'Portfolio',
    'Freelance Developer',
  ],
  authors: [{ name: 'Henrry Mojica', url: 'https://henrrymojica.me' }],
  creator: 'Henrry Mojica',
  publisher: 'Henrry Mojica',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://henrrymojica.me',
    title: 'Henrry Mojica - Full-Stack Developer',
    description:
      'Full-Stack Software Developer with 6+ years of experience. Specialized in React, Next.js, Node.js, and TypeScript.',
    siteName: 'Henrry Mojica Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Henrry Mojica - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henrry Mojica - Full-Stack Developer',
    description:
      'Full-Stack Software Developer with 6+ years of experience. Specialized in React, Next.js, Node.js, and TypeScript.',
    images: ['/og-image.jpg'],
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
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
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
        {/* Google Analytics */}
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
        {/* Structured Data - Person Schema */}
        <Script
          id='structured-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Henrry Mojica',
              url: 'https://henrrymojica.me',
              image: 'https://henrrymojica.me/og-image.jpg',
              jobTitle: 'Full-Stack Software Developer',
              description:
                'Full-Stack Software Developer with 6+ years of experience specializing in React, Next.js, Node.js, and TypeScript',
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Express',
                'PostgreSQL',
                'MongoDB',
                'Tailwind CSS',
                'Git',
                'Docker',
                'AWS',
                'Vercel',
              ],
              sameAs: [
                'https://www.linkedin.com/in/hleomojica',
                'https://github.com/hleomojica',
              ],
            }),
          }}
        />
        {/* Structured Data - Website Schema */}
        <Script
          id='structured-data-website'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Henrry Mojica Portfolio',
              url: 'https://henrrymojica.me',
              description:
                'Portfolio website of Henrry Mojica, showcasing full-stack development projects and experience',
              author: {
                '@type': 'Person',
                name: 'Henrry Mojica',
              },
            }),
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

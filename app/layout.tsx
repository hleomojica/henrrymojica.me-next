import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans, GeistMono } from 'geist/font';
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Henrry Mojica',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html 
      lang="en"
      className={`${GeistSans.className} h-screen`}>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>  
      </body>
    </html>
  )
}

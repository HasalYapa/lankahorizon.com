import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { Toaster } from '@/components/ui/toaster';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Explore Sri Lanka`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: 'Your dream Sri Lankan adventure starts here. We offer customized tours, trusted local guides, and the best prices for an unforgettable experience.',
  openGraph: {
      title: `${COMPANY_NAME} | Explore Sri Lanka`,
      description: 'Your dream Sri Lankan adventure starts here. We offer customized tours, trusted local guides, and the best prices for an unforgettable experience.',
      url: 'https://lankahorizon.vercel.app',
      siteName: COMPANY_NAME,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1531201890865-fb64780d16e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzcmklMjBsYW5rYSUyMGJlYWNofGVufDB8fHx8MTc2NjY2ODc5MHww&ixlib=rb-4.1.0&q=80&w=1200',
          width: 1200,
          height: 630,
          alt: 'A stunning aerial view of Sri Lanka tropical beach with palm trees and blue ocean.',
        },
      ],
      locale: 'en_US',
      type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | Explore Sri Lanka`,
    description: 'Your dream Sri Lankan adventure starts here. We offer customized tours, trusted local guides, and the best prices for an unforgettable experience.',
    images: ['https://images.unsplash.com/photo-1531201890865-fb64780d16e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzcmklMjBsYW5rYSUyMGJlYWNofGVufDB8fHx8MTc2NjY2ODc5MHww&ixlib=rb-4.1.0&q=80&w=1200'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background text-foreground font-body antialiased flex flex-col overflow-x-hidden')}>
        <div className="flex flex-col w-full">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}

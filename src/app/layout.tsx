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
          url: 'https://picsum.photos/seed/og-image/1200/630',
          width: 1200,
          height: 630,
          alt: 'A beautiful landscape in Sri Lanka.',
        },
      ],
      locale: 'en_US',
      type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | Explore Sri Lanka`,
    description: 'Your dream Sri Lankan adventure starts here. We offer customized tours, trusted local guides, and the best prices for an unforgettable experience.',
    images: ['https://picsum.photos/seed/og-image/1200/630'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased flex flex-col')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_NAME, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${COMPANY_NAME}. We're here to help you plan your perfect Sri Lankan getaway. Contact us via WhatsApp, email, or find our location.`,
};

const contactMethods = [
  {
    icon: Phone,
    title: 'WhatsApp (Primary)',
    content: `+${WHATSAPP_NUMBER}`,
    action: 'Chat Now',
    href: `${WHATSAPP_LINK}?text=${encodeURIComponent("Hello LankaHorizon!")}`,
    isPrimary: true,
  },
  {
    icon: Mail,
    title: 'Email',
    content: COMPANY_EMAIL,
    action: 'Send Email',
    href: `mailto:${COMPANY_EMAIL}`,
    isPrimary: false,
  },
  {
    icon: MapPin,
    title: 'Our Office',
    content: COMPANY_LOCATION,
    action: 'View on Map',
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_LOCATION)}`,
    isPrimary: false,
  },
];

export default function ContactPage() {
  const heroImage = getImage('contact-page-hero');

  return (
    <div className="bg-background">
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            We're excited to help you plan your adventure. Reach out to us with any questions!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method) => (
            <Card key={method.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow ${method.isPrimary ? 'border-primary border-2' : ''}`}>
              <CardHeader className="items-center text-center">
                <div className={`p-4 rounded-full mb-4 ${method.isPrimary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <CardTitle>{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground text-lg">{method.content}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full" variant={method.isPrimary ? 'default' : 'outline'}>
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
         <div className="text-center mt-20">
            <h2 className="text-2xl font-bold tracking-tight">Have a custom request?</h2>
            <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
                Let us build your dream itinerary from scratch.
            </p>
            <Button size="lg" asChild className="mt-6">
                <Link href="/custom-itinerary">
                    Plan a Custom Trip <Send className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

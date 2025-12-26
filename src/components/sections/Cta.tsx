import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import { WHATSAPP_LINK } from '@/lib/constants';
import { MessageSquare } from 'lucide-react';

export function Cta() {
  const ctaImage = getImage('cta-background');
  const message = encodeURIComponent("Hello LankaHorizon, I'm ready for my Sri Lankan Adventure!");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-ocean-blue dark:bg-black/40 z-10 mix-blend-multiply opacity-80"></div>
            <Image
                src={ctaImage.imageUrl}
                alt={ctaImage.description}
                fill
                className="object-cover"
                data-ai-hint={ctaImage.imageHint}
            />
            <div className="relative z-20 px-8 py-16 md:py-24 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight max-w-2xl mx-auto">Ready for your Sri Lankan Adventure?</h2>
                <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">Contact us today to plan your perfect trip. We are available 24/7 on WhatsApp to assist you.</p>
                <Button size="lg" asChild className="h-14 px-8 bg-primary hover:bg-green-400 text-ocean-blue text-lg font-bold rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(19,236,37,0.39)] hover:shadow-[0_6px_20px_rgba(19,236,37,0.23)] hover:-translate-y-1">
                    <Link href={`${WHATSAPP_LINK}?text=${message}`} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-3" />
                        Start Chat on WhatsApp
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}

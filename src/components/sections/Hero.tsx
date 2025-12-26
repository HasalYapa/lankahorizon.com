import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import { WHATSAPP_LINK } from '@/lib/constants';

export function Hero() {
  const heroImage = getImage('hero-background');
  const message = encodeURIComponent("Hello LankaHorizon, I'm interested in planning a trip to Sri Lanka. Can you help me?");
  
  return (
    <section className="relative h-[80vh] min-h-[500px] max-h-[700px] w-full flex items-center justify-center text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
          Explore Sri Lanka with LankaHorizon
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-200 mb-8 drop-shadow-sm">
          Customized tours | Trusted local guides | Best prices
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`${WHATSAPP_LINK}?text=${message}`} target="_blank" rel="noopener noreferrer">
            Plan Your Trip on WhatsApp
          </Link>
        </Button>
      </div>
    </section>
  );
}

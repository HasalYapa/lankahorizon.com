import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { tourPackages } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Destinations',
  description: `Explore the breathtaking destinations of Sri Lanka with ${COMPANY_NAME}. From ancient cities to pristine beaches, discover your next adventure.`,
};

// Create a unique list of destinations from tour packages
const allDestinationsMap = new Map<string, { id: string, image: string, hint: string }>();

tourPackages.forEach(tour => {
  tour.destinations.forEach(dest => {
    if (!allDestinationsMap.has(dest)) {
      // Create a simplified ID for the image lookup
      const imageId = dest.toLowerCase().replace(/ /g, '-') + '-destination';
      const fallbackImageId = tour.image;
      const image = getImage(imageId) ?? getImage(fallbackImageId);
      
      allDestinationsMap.set(dest, {
        id: dest,
        image: image.imageUrl,
        hint: image.imageHint,
      });
    }
  });
});

const uniqueDestinations = Array.from(allDestinationsMap.values());


export default function DestinationsPage() {
  const heroImage = getImage('hero-background');

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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Destinations</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Discover the vibrant culture, stunning landscapes, and hidden gems of Sri Lanka.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Explore the Island</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Each destination offers a unique window into the soul of Sri Lanka.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {uniqueDestinations.map((dest) => (
            <Card key={dest.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={dest.image}
                    alt={`Image of ${dest.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={dest.hint}
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-5 bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold tracking-tight text-foreground">{dest.id}</h3>
                  </div>
                  <Button asChild variant="link" className="p-0 h-auto font-semibold">
                    <Link href="/tours">
                      View Tours <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

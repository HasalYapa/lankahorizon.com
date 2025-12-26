import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Send } from 'lucide-react';
import type { TourPackage } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import { WHATSAPP_LINK } from '@/lib/constants';

interface TourCardProps {
  tour: TourPackage;
}

export function TourCard({ tour }: TourCardProps) {
  const tourImage = getImage(tour.image);
  const message = encodeURIComponent(`Hello LankaHorizon, I want to book the "${tour.name}" package.`);

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0 relative">
        <Image
          src={tourImage.imageUrl}
          alt={tour.name}
          width={600}
          height={400}
          className="object-cover w-full h-auto aspect-[3/2]"
          data-ai-hint={tourImage.imageHint}
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{tour.duration}</Badge>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tour.description}</p>
        <div className="flex items-center text-sm text-muted-foreground gap-2">
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="truncate">{tour.destinations.join(', ')}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`${WHATSAPP_LINK}?text=${message}`} target="_blank" rel="noopener noreferrer">
            <Send className="w-4 h-4 mr-2" /> Book via WhatsApp
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

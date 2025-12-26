import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';

interface Destination {
  name: string;
  description: string;
  imageId: string;
}

interface DestinationHighlightsProps {
  destinations: Destination[];
}

export function DestinationHighlights({ destinations }: DestinationHighlightsProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Top Destinations</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Discover the most captivating spots Sri Lanka has to offer, each with its unique charm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((dest) => {
            const image = getImage(dest.imageId);
            return (
              <Card key={dest.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={image.imageUrl}
                      alt={dest.name}
                      width={600}
                      height={400}
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{dest.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{dest.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

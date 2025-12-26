import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import { Award, Heart, Leaf, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About LankaHorizon',
  description: 'Learn about LankaHorizon Travel Company, our passion for Sri Lanka, and our commitment to creating authentic, customer-focused travel experiences.',
};

const values = [
  {
    icon: Leaf,
    title: 'Authentic Experiences',
    description: 'We go beyond the tourist trails to offer you a genuine taste of Sri Lankan culture, nature, and hospitality.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Our team is composed of passionate locals who know the island inside and out. We bring you insights that only a local would know.',
  },
  {
    icon: Heart,
    title: 'Customer-Focused Service',
    description: 'Your dream vacation is our priority. We listen to your needs and craft personalized journeys with a smile.',
  },
  {
    icon: Award,
    title: 'Quality & Trust',
    description: 'We partner with the best local guides, drivers, and hotels to ensure your safety, comfort, and satisfaction.',
  },
];

export default function AboutPage() {
  const aboutImage = getImage('about-us-image');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Who We Are</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A passionate team of local experts dedicated to sharing the magic of Sri Lanka with the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              LankaHorizon was born from a simple idea: to share the unparalleled beauty and rich culture of our homeland, Sri Lanka, with travelers seeking more than just a vacation. We are not just a travel agency; we are storytellers, adventurers, and proud ambassadors of our island nation.
            </p>
            <p className="text-muted-foreground">
              Founded by a group of friends who have spent their lives exploring every corner of this paradise, our mission is to create authentic, immersive, and unforgettable travel experiences. We believe that the best way to see Sri Lanka is through the eyes of a local.
            </p>
          </div>
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl">
             <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={400}
              className="object-cover w-full"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
        </div>

        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Why Choose LankaHorizon?</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    We are committed to providing exceptional value and service.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value) => (
                    <Card key={value.title} className="text-center p-6 border-0 shadow-lg bg-card hover:-translate-y-2 transition-transform duration-300">
                      <CardHeader className="flex justify-center items-center">
                        <div className="bg-primary/10 p-4 rounded-full">
                          <value.icon className="w-8 h-8 text-primary" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-xl font-semibold mb-2">{value.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        
        <div className="text-center mt-24 bg-primary/10 p-10 rounded-lg">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Ready for Your Adventure?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Let's start planning your unforgettable Sri Lankan journey today.
            </p>
            <Button size="lg" asChild className="mt-6">
                <Link href="/custom-itinerary">
                    Plan My Trip
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

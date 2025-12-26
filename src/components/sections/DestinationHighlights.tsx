import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

interface Destination {
  name: string;
  description: string;
  imageId: string;
  shortDesc: string;
}

interface DestinationHighlightsProps {
  destinations: Destination[];
}

export function DestinationHighlights({ destinations }: DestinationHighlightsProps) {
  return (
    <section className="py-20 bg-white dark:bg-[#0c1a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Destinations</span>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground dark:text-white tracking-tight">Popular Getaways</h2>
                </div>
                <Link href="/tours" className="inline-flex items-center gap-2 font-bold text-foreground dark:text-primary hover:underline">
                    View all places <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinations.map((dest) => {
                    const image = getImage(dest.imageId);
                    return (
                        <div key={dest.name} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                            <Image
                                src={image.imageUrl}
                                alt={dest.name}
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                data-ai-hint={image.imageHint}
                            />
                            <div className="absolute bottom-0 left-0 p-6 z-20">
                                <h3 className="text-xl font-bold text-white mb-1">{dest.name}</h3>
                                <p className="text-white/80 text-sm flex items-center gap-1">
                                    <MapPin className="w-4 h-4" /> {dest.shortDesc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
}

import type { Metadata } from 'next';
import { tourPackages } from '@/lib/data';
import { TourCard } from '@/components/TourCard';

export const metadata: Metadata = {
  title: 'Our Tour Packages',
  description: 'Explore our curated tour packages designed to give you the best experience of Sri Lanka. From cultural explorations to beach adventures, find your perfect trip.',
};

export default function ToursPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Tour Packages</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Find the perfect journey that matches your travel style. Each tour is crafted with care by our local experts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}

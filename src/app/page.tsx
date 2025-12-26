import { generateDestinationDescription } from '@/ai/flows/generate-destination-descriptions';
import { Hero } from '@/components/sections/Hero';
import { DestinationHighlights } from '@/components/sections/DestinationHighlights';
import { Testimonials } from '@/components/sections/Testimonials';
import { FaqSection } from '@/components/sections/FaqSection';
import { FeaturedTours } from '@/components/sections/FeaturedTours';

const destinations = [
  { name: 'Kandy', imageId: 'kandy-destination' },
  { name: 'Ella', imageId: 'ella-destination' },
  { name: 'Sigiriya', imageId: 'sigiriya-destination' },
  { name: 'Galle', imageId: 'galle-destination' },
  { name: 'Yala', imageId: 'yala-destination' },
];

export default async function Home() {
  const destinationData = await Promise.all(
    destinations.map(async (dest) => {
      try {
        const result = await generateDestinationDescription({ destinationName: dest.name });
        return {
          name: dest.name,
          description: result.description,
          imageId: dest.imageId,
        };
      } catch (error) {
        console.error(`Failed to generate description for ${dest.name}:`, error);
        return {
          name: dest.name,
          description: `Explore the wonders of ${dest.name}, a must-visit location in Sri Lanka offering unique cultural and natural experiences.`,
          imageId: dest.imageId,
        };
      }
    })
  );

  return (
    <div className="flex flex-col">
      <Hero />
      <DestinationHighlights destinations={destinationData} />
      <FeaturedTours />
      <Testimonials />
      <FaqSection />
    </div>
  );
}

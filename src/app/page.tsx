import { Hero } from '@/components/sections/Hero';
import { DestinationHighlights } from '@/components/sections/DestinationHighlights';
import { Features } from '@/components/sections/Features';
import { Cta } from '@/components/sections/Cta';
import { Testimonials } from '@/components/sections/Testimonials';

const destinations = [
  { name: 'Sigiriya', imageId: 'sigiriya-destination', shortDesc: 'Ancient Rock Fortress' },
  { name: 'Kandy to Ella', imageId: 'kandy-ella-train', shortDesc: 'Scenic Train Ride' },
  { name: 'Mirissa', imageId: 'mirissa-beach', shortDesc: 'South Coast Beaches' },
  { name: 'Yala National Park', imageId: 'yala-safari', shortDesc: 'Safari Adventure' },
];

export default async function Home() {

  const destinationData = destinations.map(dest => ({
    ...dest,
    description: `Explore the wonders of ${dest.name}, a must-visit location in Sri Lanka offering unique cultural and natural experiences.`,
  }));

  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <DestinationHighlights destinations={destinationData} />
      <Testimonials />
      <Cta />
    </div>
  );
}

import type { TourPackage, Testimonial, FaqItem } from './types';

export const tourPackages: TourPackage[] = [
  {
    id: 'sri-lanka-essentials',
    name: 'Sri Lanka Essentials',
    duration: '7 Days / 6 Nights',
    destinations: ['Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella'],
    description: 'Discover the heart of Sri Lanka, from ancient rock fortresses to misty tea plantations and scenic train rides.',
    image: 'sri-lanka-essentials-tour',
  },
  {
    id: 'southern-coast-adventure',
    name: 'Southern Coast Adventure',
    duration: '5 Days / 4 Nights',
    destinations: ['Galle', 'Mirissa', 'Yala National Park'],
    description: 'Experience the best of the south: historic forts, whale watching, and thrilling wildlife safaris.',
    image: 'southern-coast-adventure-tour',
  },
  {
    id: 'cultural-triangle-explorer',
    name: 'Cultural Triangle Explorer',
    duration: '6 Days / 5 Nights',
    destinations: ['Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Dambulla'],
    description: 'Step back in time as you explore the ancient capitals and sacred sites of Sri Lanka\'s glorious past.',
    image: 'cultural-triangle-explorer-tour',
  },
  {
    id: 'highlands-and-wildlife',
    name: 'Highlands & Wildlife',
    duration: '10 Days / 9 Nights',
    destinations: ['Kandy', 'Nuwara Eliya', 'Horton Plains', 'Yala'],
    description: 'A journey through lush hill country, tea estates, and one of Sri Lanka\'s most famous national parks.',
    image: 'highlands-and-wildlife-tour',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    location: 'United Kingdom',
    avatar: 'testimonial-avatar-2',
    message: 'Our 10-day tour with LankaHorizon was absolutely magical! The guide was incredibly knowledgeable and friendly. Every detail was taken care of perfectly.',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    avatar: 'testimonial-avatar-1',
    message: 'Best travel agency in Sri Lanka hands down. We saw leopards in Yala and the train ride to Ella was breathtaking. Highly recommend their customized packages.',
  },
  {
    name: 'Emma & Tom',
    location: 'Australia',
    avatar: 'testimonial-avatar-3',
    message: 'From the airport pickup to the drop-off, everything was seamless. The hotels were fantastic and within our budget. Thank you for an amazing honeymoon!',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What is the best time to visit Sri Lanka?',
    answer: 'Sri Lanka is a year-round destination. The best time to visit the west and south coasts and hill country is from December to March, while the east coast is best from April/May to September.',
  },
  {
    question: 'Do I need a visa to enter Sri Lanka?',
    answer: 'Most nationalities require an Electronic Travel Authorization (ETA) to visit Sri Lanka. You can apply for it online before your trip. Please check the official government website for the latest requirements.',
  },
  {
    question: 'Is it safe to travel in Sri Lanka?',
    answer: 'Yes, Sri Lanka is generally a very safe country for tourists. LankaHorizon provides experienced local guides and drivers to ensure your safety and comfort throughout your journey.',
  },
  {
    question: 'How do I book a tour?',
    answer: 'You can book a tour package directly from our Tours page or request a custom itinerary. All bookings and inquiries are handled conveniently through WhatsApp for a personal touch.',
  },
];

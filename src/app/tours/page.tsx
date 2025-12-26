import type { Metadata } from 'next';
import { tourPackages } from '@/lib/data';
import { TourCard } from '@/components/TourCard';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Map, CreditCard, Users, Route, MessageSquare, Calendar, ShieldCheck, User, ThumbsUp, Tag, ChevronDown } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';
import { WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Tour Packages',
  description: 'Explore our curated tour packages designed to give you the best experience of Sri Lanka. From cultural explorations to beach adventures, find your perfect trip.',
};

export default function ToursPage() {
    const heroImage = getImage('contact-page-hero');
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 sm:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90 z-10"></div>
          <Image
            alt="Stunning aerial view of Sri Lankan coastline with palm trees and blue ocean"
            src={heroImage.imageUrl}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary font-medium text-xs uppercase tracking-wider mb-4">
            Best Travel Agency 2024
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Discover the Pearl of <br className="hidden sm:block" />the Indian Ocean
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Curated tours tailored for your perfect Sri Lankan getaway. From misty mountains to golden beaches, experience it all with our premium packages.
          </p>
          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            <Button variant="outline" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white text-slate-800 hover:bg-primary hover:text-primary-foreground transition-all shadow-lg font-medium text-sm">
              <Clock className="text-[20px] text-slate-400 group-hover:text-primary-foreground" />
              Duration
              <ChevronDown className="text-[18px]" />
            </Button>
            <Button variant="outline" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium text-sm">
              <Map className="text-[20px]" />
              Destinations
              <ChevronDown className="text-[18px]" />
            </Button>
            <Button variant="outline" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium text-sm">
              <CreditCard className="text-[20px]" />
              Budget
              <ChevronDown className="text-[18px]" />
            </Button>
            <Button variant="outline" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium text-sm">
              <Users className="text-[20px]" />
              Type
              <ChevronDown className="text-[18px]" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats / Trust Signals */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="text-green-600 text-3xl" />
              <p className="text-sm font-semibold text-slate-800">Safe &amp; Secure</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <User className="text-green-600 text-3xl" />
              <p className="text-sm font-semibold text-slate-800">24/7 Support</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ThumbsUp className="text-green-600 text-3xl" />
              <p className="text-sm font-semibold text-slate-800">Top Rated</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Tag className="text-green-600 text-3xl" />
              <p className="text-sm font-semibold text-slate-800">Best Price Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Tour Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Popular Packages</h2>
              <p className="text-slate-500">Explore handpicked adventures tailored for every traveler.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">Sort by:</span>
              <Select>
                <SelectTrigger className="bg-white border-none text-sm font-semibold text-slate-900 rounded-lg focus:ring-2 focus:ring-primary/50 cursor-pointer shadow-sm py-2 px-3 w-auto">
                  <SelectValue placeholder="Recommended" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="duration-shortest">Duration: Shortest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
             {/* Card 4 - Placeholder */}
             <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-100 transition-all duration-300 border border-slate-100 flex flex-col h-full">
                <div className="relative h-60 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                        <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">Luxury</span>
                    </div>
                    <Image src={getImage('southern-coast-adventure-tour').imageUrl} alt="Luxury boutique hotel pool overlooking the ocean in Galle" layout='fill' className="object-cover transform group-hover:scale-110 transition-transform duration-700" data-ai-hint={getImage('southern-coast-adventure-tour').imageHint}/>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 text-white font-bold text-xl drop-shadow-md">
                        $1200 <span className="text-sm font-normal opacity-90">/ couple</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Southern Luxury Escape</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                            <Clock className="text-green-600 text-lg" />
                            <span>7 Days</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Map className="text-green-600 text-lg" />
                            <span>3 Locations</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-start gap-2 mb-2">
                            <Route className="text-slate-400 text-lg mt-0.5" />
                            <p className="text-sm font-medium text-slate-700">Galle <span className="text-slate-400 mx-1">→</span> Unawatuna <span className="text-slate-400 mx-1">→</span> Bentota</p>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                            Indulge in 5-star villas, private beach dinners, and spa treatments. The ultimate romantic getaway.
                        </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <Button asChild className="w-full">
                        <Link href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello LankaHorizon, I am interested in the Southern Luxury Escape package.")}`} target="_blank">
                          <MessageSquare className="mr-2 h-4 w-4" />Book via WhatsApp
                        </Link>
                      </Button>
                    </div>
                </div>
            </div>
            {/* Card 5 - Placeholder */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-100 transition-all duration-300 border border-slate-100 flex flex-col h-full">
                <div className="relative h-60 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                        <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">Adventure</span>
                    </div>
                    <Image src={getImage('sri-lanka-essentials-tour').imageUrl} alt="Hiker standing on top of a mountain peak in Ella" layout='fill' className="object-cover transform group-hover:scale-110 transition-transform duration-700" data-ai-hint={getImage('sri-lanka-essentials-tour').imageHint}/>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 text-white font-bold text-xl drop-shadow-md">
                        $290 <span className="text-sm font-normal opacity-90">/ person</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Backpacker's Dream</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                            <Clock className="text-green-600 text-lg" />
                            <span>6 Days</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Map className="text-green-600 text-lg" />
                            <span>4 Locations</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-start gap-2 mb-2">
                           <Route className="text-slate-400 text-lg mt-0.5" />
                           <p className="text-sm font-medium text-slate-700">Ella <span className="text-slate-400 mx-1">→</span> Haputale <span className="text-slate-400 mx-1">→</span> Nuwara Eliya</p>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                           A budget-friendly tour for those who love hiking, waterfalls, and local street food culture.
                        </p>
                    </div>
                     <div className="mt-auto pt-4 border-t border-slate-100">
                      <Button asChild className="w-full">
                        <Link href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello LankaHorizon, I am interested in the Backpacker's Dream package.")}`} target="_blank">
                          <MessageSquare className="mr-2 h-4 w-4" />Book via WhatsApp
                        </Link>
                      </Button>
                    </div>
                </div>
            </div>
             {/* Card 6 - Placeholder */}
             <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-100 transition-all duration-300 border border-slate-100 flex flex-col h-full">
                <div className="relative h-60 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                        <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">Family</span>
                    </div>
                    <Image src={getImage('testimonial-avatar-3').imageUrl} alt="Family playing on a sandy beach in Sri Lanka at sunset" layout='fill' className="object-cover transform group-hover:scale-110 transition-transform duration-700" data-ai-hint={getImage('testimonial-avatar-3').imageHint}/>

                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 text-white font-bold text-xl drop-shadow-md">
                        $850 <span className="text-sm font-normal opacity-90">/ family</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Family Fun &amp; Sun</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                             <Clock className="text-green-600 text-lg" />
                            <span>8 Days</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <Map className="text-green-600 text-lg" />
                            <span>2 Locations</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-start gap-2 mb-2">
                            <Route className="text-slate-400 text-lg mt-0.5" />
                            <p className="text-sm font-medium text-slate-700">Bentota <span className="text-slate-400 mx-1">→</span> Hikkaduwa</p>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                            Kid-friendly resorts with pools, turtle hatcheries, and gentle boat rides. Perfect for making memories.
                        </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                        <Button asChild className="w-full">
                          <Link href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello LankaHorizon, I am interested in the Family Fun & Sun package.")}`} target="_blank">
                             <MessageSquare className="mr-2 h-4 w-4" />Book via WhatsApp
                          </Link>
                        </Button>
                    </div>
                </div>
            </div>
          </div>
          {/* Load More */}
          <div className="mt-16 flex justify-center">
            <Button variant="outline" className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-200 text-slate-600 font-semibold hover:border-green-400 hover:text-green-600 transition-all bg-white hover:shadow-lg">
              Load More Packages
              <ChevronDown />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Can't decide where to go?</h2>
              <p className="text-slate-300 text-lg">Our travel experts are ready to craft a custom itinerary just for you. Get a free consultation today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button asChild>
                    <Link href="/custom-itinerary" className="bg-primary text-primary-foreground hover:bg-green-400 px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-2">
                        <Calendar />
                        Customize My Trip
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

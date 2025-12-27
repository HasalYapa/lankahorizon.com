
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Compass, ArrowRight, Star, User, Shield, Award } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';
import { getImage } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'About LankaHorizon',
  description: 'Learn about LankaHorizon Travel Company, our passion for Sri Lanka, and our commitment to creating authentic, customer-focused travel experiences.',
};

export default function AboutPage() {
  const heroImage = getImage('about-us-hero-main');
  const stiltFishermenImage = getImage('stilt-fishermen');
  const sigiriyaImage = getImage('sigiriya-destination');
  const sereneBeachImage = getImage('serene-beach');
  const kumaraPereraImage = getImage('kumara-perera-portrait');
  const dilaniSilvaImage = getImage('dilani-silva-portrait');
  const nuwanFernandoImage = getImage('nuwan-fernando-portrait');
  const anjaliDeSilvaImage = getImage('anjali-de-silva-portrait');
  const reviewerAvatarImage = getImage('testimonial-avatar-2');
  const ctaBackgroundImage = getImage('cta-background-train');

  return (
    <div className="bg-background text-foreground font-body antialiased font-sans overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col gap-6 items-center">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] font-display">
                Discover the Real Sri Lanka with <span className="text-primary">LankaHorizon</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                We are more than just a travel agency; we are your local friends in paradise, ready to show you the hidden wonders of our island home.
            </p>
            <Link href="/tours" className="mt-4 flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-foreground text-base font-bold transition transform hover:scale-105">
                Explore Our Tours
            </Link>
        </div>
      </header>

      {/* Stats Ribbon */}
      <section className="relative -mt-16 z-20 px-4 mb-20">
        <div className="max-w-6xl mx-auto bg-card dark:bg-[#1a2e1d] rounded-xl shadow-xl p-8 flex flex-wrap justify-around gap-8 border border-border dark:border-[#2a4e2d]">
          <div className="flex flex-col items-center text-center">
            <p className="text-primary tracking-tight text-4xl font-black leading-tight">5,000+</p>
            <p className="text-foreground dark:text-gray-300 text-sm font-medium uppercase tracking-wide mt-1">Happy Travelers</p>
          </div>
          <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          <div className="flex flex-col items-center text-center">
            <p className="text-primary tracking-tight text-4xl font-black leading-tight">10+</p>
            <p className="text-foreground dark:text-gray-300 text-sm font-medium uppercase tracking-wide mt-1">Years Experience</p>
          </div>
          <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          <div className="flex flex-col items-center text-center">
            <p className="text-primary tracking-tight text-4xl font-black leading-tight">150+</p>
            <p className="text-foreground dark:text-gray-300 text-sm font-medium uppercase tracking-wide mt-1">Destinations Covered</p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Story</span>
            </div>
            <h2 className="text-foreground dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight font-display">
                Authentic Journeys, <br/>Rooted in Culture
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 text-lg leading-relaxed">
                Born and raised amidst the misty hills and golden shores of Sri Lanka, we know the hidden gems that guidebooks often miss. LankaHorizon was founded with a simple mission: to share the authentic beauty of our island with the world.
            </p>
            <p className="text-muted-foreground dark:text-gray-300 text-lg leading-relaxed">
                We believe in travel that respects nature and uplifts local communities. Whether you're seeking the thrill of a leopard safari or the serenity of a hilltop temple, we craft experiences that leave footprints in your heart, not on the environment.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full h-full relative">
              <div className="col-span-1 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg transform hover:rotate-1 transition duration-500">
                  <Image
                      src={stiltFishermenImage.imageUrl}
                      alt={stiltFishermenImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={stiltFishermenImage.imageHint}
                  />
              </div>
              <div className="col-span-1 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg transform hover:-rotate-1 transition duration-500">
                  <Image
                      src={sigiriyaImage.imageUrl}
                      alt={sigiriyaImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={sigiriyaImage.imageHint}
                  />
              </div>
              <div className="col-span-2 relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
                  <Image
                      src={sereneBeachImage.imageUrl}
                      alt={sereneBeachImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={sereneBeachImage.imageHint}
                  />
              </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card dark:bg-[#162918] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-foreground dark:text-white text-3xl md:text-4xl font-black leading-tight font-display">Why Choose LankaHorizon</h2>
            <p className="text-muted-foreground dark:text-gray-400 text-lg">Experience Sri Lanka like never before with our expert services tailored just for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group bg-background dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <MapPin className="text-primary group-hover:text-foreground text-3xl transition-colors" />
              </div>
              <h3 className="text-foreground dark:text-white text-xl font-bold mb-3">Expert Local Knowledge</h3>
              <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                  Our guides are locals who know every twist in the road and every story behind the ruins.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group bg-background dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Award className="text-primary group-hover:text-foreground text-3xl transition-colors" />
              </div>
              <h3 className="text-foreground dark:text-white text-xl font-bold mb-3">Tailor-Made Itineraries</h3>
              <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                  Your holiday, your way. We customize every detail to suit your pace, budget, and interests.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group bg-background dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Shield className="text-primary group-hover:text-foreground text-3xl transition-colors" />
              </div>
              <h3 className="text-foreground dark:text-white text-xl font-bold mb-3">Sustainable Travel</h3>
              <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                  We prioritize eco-friendly accommodations and practices to protect our beautiful island.
              </p>
            </div>
            {/* Card 4 */}
            <div className="group bg-background dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <User className="text-primary group-hover:text-foreground text-3xl transition-colors" />
              </div>
              <h3 className="text-foreground dark:text-white text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                  From arrival to departure, our dedicated team is just a phone call away, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-foreground dark:text-white text-3xl md:text-4xl font-black mb-4 font-display">Meet Our Local Guides</h2>
            <p className="text-muted-foreground dark:text-gray-400">Passionate individuals who make your journey unforgettable.</p>
          </div>
          <a className="text-primary font-bold hover:underline flex items-center gap-1" href="#">See All Team <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Member 1 */}
          <div className="flex flex-col items-center gap-4 text-center group">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300 relative">
                <Image width={160} height={160} alt={kumaraPereraImage.description} className="w-full h-full object-cover" data-ai-hint={kumaraPereraImage.imageHint} src={kumaraPereraImage.imageUrl}/>
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-foreground p-2 rounded-full shadow-lg">
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground dark:text-white">Kumara Perera</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">Senior Guide</p>
            </div>
          </div>
          {/* Member 2 */}
          <div className="flex flex-col items-center gap-4 text-center group">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300 relative">
                <Image width={160} height={160} alt={dilaniSilvaImage.description} className="w-full h-full object-cover" data-ai-hint={dilaniSilvaImage.imageHint} src={dilaniSilvaImage.imageUrl}/>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground dark:text-white">Dilani Silva</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">Cultural Expert</p>
            </div>
          </div>
          {/* Member 3 */}
          <div className="flex flex-col items-center gap-4 text-center group">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300 relative">
                <Image width={160} height={160} alt={nuwanFernandoImage.description} className="w-full h-full object-cover" data-ai-hint={nuwanFernandoImage.imageHint} src={nuwanFernandoImage.imageUrl}/>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground dark:text-white">Nuwan Fernando</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">Safari Specialist</p>
            </div>
          </div>
          {/* Member 4 */}
          <div className="flex flex-col items-center gap-4 text-center group">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300 relative">
                <Image width={160} height={160} alt={anjaliDeSilvaImage.description} className="w-full h-full object-cover" data-ai-hint={anjaliDeSilvaImage.imageHint} src={anjaliDeSilvaImage.imageUrl}/>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground dark:text-white">Anjali De Silva</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">Travel Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider / Highlight */}
      <section className="py-16 bg-primary/5 dark:bg-[#142616] mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <svg className="mx-auto h-12 w-12 text-primary" fill="currentColor" viewBox="0 0 48 48" aria-hidden="true">
             <path d="M12.94,22.31a3.17,3.17,0,0,0-4,2.37l-2,10.27a3.17,3.17,0,0,0,3.12,3.94H16.2a3.17,3.17,0,0,0,4-2.37l2-10.27a3.17,3.17,0,0,0-3.12-3.94Zm20.2,0a3.17,3.17,0,0,0-4,2.37l-2,10.27a3.17,3.17,0,0,0,3.12,3.94h6.14a3.17,3.17,0,0,0,4-2.37l2-10.27a3.17,3.17,0,0,0-3.12-3.94Z"/>
          </svg>
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-foreground dark:text-gray-200 my-8">
              "We had the most amazing honeymoon thanks to LankaHorizon. The itinerary was perfect, balancing adventure with relaxation. Our driver, Kumara, felt like family by the end of the trip!"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
              <Image width={48} height={48} alt={reviewerAvatarImage.description} className="object-cover" data-ai-hint={reviewerAvatarImage.imageHint} src={reviewerAvatarImage.imageUrl}/>
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground dark:text-white">Sarah Jenkins</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400">United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="relative max-w-5xl mx-auto rounded-xl bg-foreground overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image
                src={ctaBackgroundImage.imageUrl}
                alt={ctaBackgroundImage.description}
                fill
                className="object-cover object-center opacity-40 mix-blend-overlay"
                data-ai-hint={ctaBackgroundImage.imageHint}
              />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-20 space-y-8">
            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl font-display">
                Ready for your tropical escape?<br/> Let's plan your trip today.
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
                Whether you want a relaxing beach holiday or an adventurous mountain trek, we are here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link href="/custom-itinerary" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-foreground text-base font-bold hover:bg-green-400 transition-colors shadow-lg shadow-primary/20">
                  Book Now
              </Link>
              <Link href="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white hover:text-foreground transition-colors">
                  Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

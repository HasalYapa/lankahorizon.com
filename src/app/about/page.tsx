
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About LankaHorizon',
  description: 'Learn about LankaHorizon Travel Company, our passion for Sri Lanka, and our commitment to creating authentic, customer-focused travel experiences.',
};

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111812] dark:text-white font-display antialiased">
      {/* Hero Section */}
      <header className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
          data-alt="lush green sri lankan tea plantations mist" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1549492423-400259a21914?q=80&w=2574&auto=format&fit=crop")',
          }}
        >
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col gap-6 items-center">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                Discover the Real Sri Lanka with <span className="text-primary">LankaHorizon</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                We are more than just a travel agency; we are your local friends in paradise, ready to show you the hidden wonders of our island home.
            </p>
            <button className="mt-4 flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-[#111812] text-base font-bold transition transform hover:scale-105">
                Learn More
            </button>
        </div>
      </header>

      {/* Stats Ribbon */}
      <section className="relative -mt-16 z-20 px-4 mb-20">
        <div className="max-w-6xl mx-auto bg-card dark:bg-[#1a2e1d] rounded-xl shadow-xl p-8 flex flex-wrap justify-around gap-8 border border-border dark:border-[#2a4e2d]">
          <div className="flex flex-col items-center text-center">
            <p className="text-primary tracking-tight text-4xl font-black leading-tight">5000+</p>
            <p className="text-foreground dark:text-gray-300 text-sm font-medium uppercase tracking-wide mt-1">Happy Travelers</p>
          </div>
          <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          <div className="flex flex-col items-center text-center">
            <p className="text-primary tracking-tight text-4xl font-black leading-tight">10</p>
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
            <h2 className="text-foreground dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                Authentic Journeys, <br/>Rooted in Culture
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 text-lg leading-relaxed">
                Born and raised amidst the misty hills and golden shores of Sri Lanka, we know the hidden gems that guidebooks often miss. LankaHorizon was founded with a simple mission: to share the authentic beauty of our island with the world.
            </p>
            <p className="text-muted-foreground dark:text-gray-300 text-lg leading-relaxed">
                We believe in travel that respects nature and uplifts local communities. Whether you're seeking the thrill of a leopard safari or the serenity of a hilltop temple, we craft experiences that leave footprints in your heart, not on the environment.
            </p>
            <button className="mt-4 flex items-center gap-2 text-foreground dark:text-white font-bold text-lg hover:text-primary transition-colors group">
              <span>Read our full story</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full h-full relative">
            <div className="col-span-1">
              <div className="w-full h-64 md:h-80 rounded-xl bg-cover bg-center shadow-lg transform hover:rotate-1 transition duration-500" data-alt="traditional sri lankan stilt fishermen sunset" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1588264283547-41842878c775?q=80&w=2574&auto=format&fit=crop")'}}>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-64 md:h-80 rounded-xl bg-cover bg-center shadow-lg transform hover:-rotate-1 transition duration-500" data-alt="sigiriya rock fortress ancient ruins jungle" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1595130761245-7a6f29633633?q=80&w=2574&auto=format&fit=crop")'}}>
              </div>
            </div>
             <div className="col-span-2">
                <div className="w-full h-64 rounded-xl bg-cover bg-center shadow-lg transform hover:scale-105 transition duration-500" data-alt="serene beach in sri lanka" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1531201890865-fb64780d16e9?q=80&w=2592&auto=format&fit=crop")'}}>
                </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card dark:bg-[#162918] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-foreground dark:text-white text-3xl md:text-4xl font-black leading-tight">Why Choose LankaHorizon</h2>
            <p className="text-muted-foreground dark:text-gray-400 text-lg">Experience Sri Lanka like never before with our expert services tailored just for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group bg-background-light dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-[#111812] text-3xl transition-colors">map</span>
              </div>
              <h3 className="text-foreground dark:text-white text-xl font-bold mb-3">Expert Local Knowledge</h3>
              <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                  Our guides are locals who know every twist in the road and every story behind the ruins.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group bg-background-light dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-[#111812] text-3xl transition-colors">edit_note</span>
              </div>
              <h3 className="text-foreground dark:text-white text-xl font-bold mb-3">Tailor-Made Itineraries</h3>
              <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                  Your holiday, your way. We customize every detail to suit your pace, budget, and interests.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group bg-background-light dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-[#111812] text-3xl transition-colors">eco</span>
              </div>
              <h3 className="text-foreground dark:text-white text-xl font-bold mb-3">Sustainable Travel</h3>
              <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                  We prioritize eco-friendly accommodations and practices to protect our beautiful island.
              </p>
            </div>
            {/* Card 4 */}
            <div className="group bg-background-light dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-[#111812] text-3xl transition-colors">support_agent</span>
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
            <h2 className="text-foreground dark:text-white text-3xl md:text-4xl font-black mb-4">Meet Our Local Guides</h2>
            <p className="text-muted-foreground dark:text-gray-400">Passionate individuals who make your journey unforgettable.</p>
          </div>
          <a className="text-primary font-bold hover:underline flex items-center gap-1" href="#">See All Team <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Member 1 */}
          <div className="flex flex-col items-center gap-4 text-center group">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                <Image width="160" height="160" alt="Portrait of Kumara, Senior Guide" className="w-full h-full object-cover" data-alt="smiling sri lankan man close up portrait" src="https://images.unsplash.com/photo-1599530548461-89c6d97497b4?q=80&w=512&auto=format&fit=crop"/>
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-[#111812] p-2 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-sm font-bold">star</span>
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
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                <Image width="160" height="160" alt="Portrait of Dilani, Cultural Expert" className="w-full h-full object-cover" data-alt="smiling woman professional portrait business" src="https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=512&auto=format&fit=crop"/>
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
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                <Image width="160" height="160" alt="Portrait of Nuwan, Safari Specialist" className="w-full h-full object-cover" data-alt="man smiling portrait casual look" src="https://images.unsplash.com/photo-1627958117769-b59367a8a19b?q=80&w=512&auto=format&fit=crop"/>
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
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                <Image width="160" height="160" alt="Portrait of Anjali, Travel Coordinator" className="w-full h-full object-cover" data-alt="woman smiling bright natural light portrait" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop"/>
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
          <span className="material-symbols-outlined text-primary text-6xl mb-6">format_quote</span>
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-foreground dark:text-gray-200 mb-8">
              "We had the most amazing honeymoon thanks to LankaHorizon. The itinerary was perfect, balancing adventure with relaxation. Our driver, Kumara, felt like family by the end of the trip!"
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image width="48" height="48" alt="Reviewer Avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary" data-alt="smiling woman avatar portrait" src="https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=512&auto=format&fit=crop"/>
            <div className="text-left">
              <p className="font-bold text-foreground dark:text-white">Sarah Jenkins</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400">United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="relative max-w-5xl mx-auto rounded-xl bg-[#111812] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-cover bg-center" data-alt="train crossing nine arch bridge ella sri lanka" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1523975862609-33543b49e9c8?q=80&w=2670&auto=format&fit=crop")'}}>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-20 space-y-8">
            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl">
                Ready for your tropical escape?<br/> Let's plan your trip today.
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
                Whether you want a relaxing beach holiday or an adventurous mountain trek, we are here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link href="/custom-itinerary" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-[#111812] text-base font-bold hover:bg-[#0fd620] transition-colors shadow-lg shadow-primary/20">
                  Book Now
              </Link>
              <Link href="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white hover:text-[#111812] transition-colors">
                  Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

    
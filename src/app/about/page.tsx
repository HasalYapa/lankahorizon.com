
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'About Us - LankaHorizon Travel Company',
  description: 'Learn about LankaHorizon Travel Company, our passion for Sri Lanka, and our commitment to creating authentic, customer-focused travel experiences.',
};

export default function AboutPage() {
    const heroImage = getImage('about-hero-bg');
    const stiltFishermenImage = getImage('about-stilt-fishermen');
    const sigiriyaImage = getImage('about-sigiriya-rock');
    const kumaraImage = getImage('kumara-perera-portrait');
    const dilaniImage = getImage('dilani-silva-portrait');
    const nuwanImage = getImage('nuwan-fernando-portrait');
    const anjaliImage = getImage('anjali-de-silva-portrait');
    const reviewerImage = getImage('about-reviewer-avatar');
    const ctaImage = getImage('about-cta-bg');

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111812] dark:text-white font-display antialiased overflow-x-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col gap-6 items-center">
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                        Discover the Real Sri Lanka with <span className="text-primary">LankaHorizon</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                        We are more than just a travel agency; we are your local friends in paradise, ready to show you the hidden wonders of our island home.
                    </p>
                    <Link href="/contact" className="mt-4 flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-[#111812] text-base font-bold transition transform hover:scale-105">
                        Explore Our Impact
                    </Link>
                </div>
            </header>

            <section className="relative -mt-16 z-20 px-4 mb-20">
                <div className="max-w-6xl mx-auto bg-white dark:bg-[#1a2e1d] rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border border-[#f0f4f0] dark:border-[#2a4e2d]">
                    <div className="flex flex-col items-center text-center p-4">
                        <p className="text-primary tracking-tight text-5xl font-black leading-tight">5000+</p>
                        <p className="text-[#111812] dark:text-gray-300 text-sm font-medium uppercase tracking-wide mt-2">Happy Travelers</p>
                        <p className="text-gray-500 text-xs mt-1">Confirmed satisfaction rate</p>
                    </div>
                    <div className="relative flex flex-col items-center text-center p-4 md:border-x md:border-gray-200 md:dark:border-gray-700">
                        <p className="text-primary tracking-tight text-5xl font-black leading-tight">10</p>
                        <p className="text-[#111812] dark:text-gray-300 text-sm font-medium uppercase tracking-wide mt-2">Years Experience</p>
                        <p className="text-gray-500 text-xs mt-1">Proven expertise in Sri Lanka tourism</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <p className="text-primary tracking-tight text-5xl font-black leading-tight">150+</p>
                        <p className="text-[#111812] dark:text-gray-300 text-sm font-medium uppercase tracking-wide mt-2">Destinations Covered</p>
                        <p className="text-gray-500 text-xs mt-1">Diverse locations across the island</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Story &amp; Mission</span>
                        </div>
                        <h2 className="text-[#111812] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                            Authentic Journeys, <br/>Rooted in Culture &amp; Values
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            Born and raised amidst the misty hills and golden shores of Sri Lanka, we know the hidden gems that guidebooks often miss. LankaHorizon was founded with a simple mission: to share the authentic beauty of our island with the world, while upholding our core values of sustainability and community empowerment.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            We believe in travel that respects nature and uplifts local communities. Whether you're seeking the thrill of a leopard safari or the serenity of a hilltop temple, we craft experiences that leave footprints in your heart, not on the environment. Our transparent practices ensure you understand the impact of your journey.
                        </p>
                        <Link href="/about" className="mt-4 flex items-center gap-2 text-[#111812] dark:text-white font-bold text-lg hover:text-primary transition-colors group">
                            <span>Explore Our Values &amp; Ethics</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4 w-full h-full relative">
                        <div className="col-span-2 md:col-span-1 md:translate-y-12">
                            <div className="w-full h-64 md:h-80 rounded-xl shadow-lg transform hover:rotate-1 transition duration-500 overflow-hidden">
                                <Image alt={stiltFishermenImage.description} src={stiltFishermenImage.imageUrl} fill className="object-cover" data-ai-hint={stiltFishermenImage.imageHint} />
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <div className="w-full h-64 md:h-80 rounded-xl shadow-lg transform hover:-rotate-1 transition duration-500 overflow-hidden">
                                <Image alt={sigiriyaImage.description} src={sigiriyaImage.imageUrl} fill className="object-cover" data-ai-hint={sigiriyaImage.imageHint} />
                            </div>
                        </div>
                        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-[#162918] transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-[#111812] dark:text-white text-3xl md:text-4xl font-black leading-tight">Why Choose LankaHorizon: A Clear Advantage</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">Compare our key benefits to make your decision with confidence.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Cards */}
                        <div className="bg-[#f6f8f6] dark:bg-[#1e3a21] rounded-xl p-8 shadow-md">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary text-3xl">map</span>
                                </div>
                                <div>
                                    <h3 className="text-[#111812] dark:text-white text-xl font-bold mb-1">Expert Local Knowledge</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        Our guides are locals who know every twist in the road and every story behind the ruins, ensuring authentic experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Local Insights</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Hidden Gems Access</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Cultural Immersion</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Language Fluency</div>
                            </div>
                        </div>
                        <div className="bg-[#f6f8f6] dark:bg-[#1e3a21] rounded-xl p-8 shadow-md">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary text-3xl">edit_note</span>
                                </div>
                                <div>
                                    <h3 className="text-[#111812] dark:text-white text-xl font-bold mb-1">Tailor-Made Itineraries</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        Your holiday, your way. We customize every detail to suit your pace, budget, and interests with clear options.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                               <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Flexible Scheduling</div>
                               <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Budget Optimization</div>
                               <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Interest-Based Tours</div>
                               <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Transparent Pricing</div>
                            </div>
                        </div>
                        <div className="bg-[#f6f8f6] dark:bg-[#1e3a21] rounded-xl p-8 shadow-md">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                                </div>
                                <div>
                                    <h3 className="text-[#111812] dark:text-white text-xl font-bold mb-1">Sustainable &amp; Ethical Travel</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        We prioritize eco-friendly accommodations and practices to protect our beautiful island and empower local communities.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Eco-friendly Partners</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Community Support</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Responsible Tourism</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Carbon Offset Options</div>
                            </div>
                        </div>
                        <div className="bg-[#f6f8f6] dark:bg-[#1e3a21] rounded-xl p-8 shadow-md">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                                </div>
                                <div>
                                    <h3 className="text-[#111812] dark:text-white text-xl font-bold mb-1">24/7 Dedicated Support</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        From arrival to departure, our dedicated team is just a phone call away, ensuring peace of mind throughout your trip.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Emergency Hotline</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Personalized Assistance</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Multilingual Staff</div>
                                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span> Real-time Updates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-[#111812] dark:text-white text-3xl md:text-4xl font-black mb-4">Meet Our Expert Local Guides</h2>
                        <p className="text-gray-600 dark:text-gray-400">Detailed profiles of our passionate guides, highlighting their expertise to help you choose.</p>
                    </div>
                    <a className="text-primary font-bold hover:underline flex items-center gap-1" href="#">View All Guides &amp; Their Specializations <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Team Cards */}
                    <div className="bg-white dark:bg-[#1a2e1d] rounded-xl shadow-md p-6 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={kumaraImage.description} className="w-full h-full object-cover" data-ai-hint={kumaraImage.imageHint} src={kumaraImage.imageUrl} width={128} height={128} />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-primary text-[#111812] p-2 rounded-full shadow-lg">
                                <span className="material-symbols-outlined text-sm font-bold">star</span>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#111812] dark:text-white">Kumara Perera</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Senior Cultural &amp; History Guide</p>
                        <div className="mt-4 w-full text-left">
                            <h4 className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400 mb-2">Specializations:</h4>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">history</span> Ancient Cities &amp; Heritage</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">account_tree</span> Local Traditions &amp; Cuisine</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">hiking</span> Nature Treks &amp; Scenic Routes</li>
                            </ul>
                        </div>
                        <button className="mt-4 text-primary text-sm font-medium hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-base">info</span> Full Profile
                        </button>
                    </div>
                     <div className="bg-white dark:bg-[#1a2e1d] rounded-xl shadow-md p-6 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={dilaniImage.description} className="w-full h-full object-cover" data-ai-hint={dilaniImage.imageHint} src={dilaniImage.imageUrl} width={128} height={128} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#111812] dark:text-white">Dilani Silva</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Family &amp; Wellness Travel Expert</p>
                        <div className="mt-4 w-full text-left">
                            <h4 className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400 mb-2">Specializations:</h4>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">family_restroom</span> Family-Friendly Itineraries</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">spa</span> Yoga &amp; Ayurvedic Retreats</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">nature</span> Coastal &amp; Beach Experiences</li>
                            </ul>
                        </div>
                        <button className="mt-4 text-primary text-sm font-medium hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-base">info</span> Full Profile
                        </button>
                    </div>
                     <div className="bg-white dark:bg-[#1a2e1d] rounded-xl shadow-md p-6 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={nuwanImage.description} className="w-full h-full object-cover" data-ai-hint={nuwanImage.imageHint} src={nuwanImage.imageUrl} width={128} height={128} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#111812] dark:text-white">Nuwan Fernando</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Wildlife &amp; Adventure Specialist</p>
                        <div className="mt-4 w-full text-left">
                            <h4 className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400 mb-2">Specializations:</h4>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">auto_awesome</span> Safari &amp; Wildlife Photography</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">explore</span> Off-the-Beaten-Path Expeditions</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">surfing</span> Watersports &amp; Diving</li>
                            </ul>
                        </div>
                        <button className="mt-4 text-primary text-sm font-medium hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-base">info</span> Full Profile
                        </button>
                    </div>
                     <div className="bg-white dark:bg-[#1a2e1d] rounded-xl shadow-md p-6 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={anjaliImage.description} className="w-full h-full object-cover" data-ai-hint={anjaliImage.imageHint} src={anjaliImage.imageUrl} width={128} height={128} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#111812] dark:text-white">Anjali De Silva</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Logistics &amp; Customer Relations</p>
                        <div className="mt-4 w-full text-left">
                            <h4 className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400 mb-2">Specializations:</h4>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">local_shipping</span> Transport &amp; Accommodation</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">support</span> 24/7 Traveler Support</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">language</span> Multilingual Communication</li>
                            </ul>
                        </div>
                        <button className="mt-4 text-primary text-sm font-medium hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-base">info</span> Full Profile
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-primary/5 dark:bg-[#142616] mt-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="material-symbols-outlined text-primary text-6xl mb-6">format_quote</span>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-[#111812] dark:text-gray-200 mb-8">
                        "We had the most amazing honeymoon thanks to LankaHorizon. The itinerary was perfect, balancing adventure with relaxation. Our driver, Kumara, felt like family by the end of the trip! The transparent planning process made everything so easy."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Image alt={reviewerImage.description} className="w-12 h-12 rounded-full object-cover border-2 border-primary" data-ai-hint={reviewerImage.imageHint} src={reviewerImage.imageUrl} width={48} height={48} />
                        <div className="text-left">
                            <p className="font-bold text-[#111812] dark:text-white">Sarah Jenkins</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">United Kingdom | Decisive Planner</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="relative max-w-5xl mx-auto rounded-xl bg-[#111812] overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                         <Image alt={ctaImage.description} src={ctaImage.imageUrl} fill className="object-cover" data-ai-hint={ctaImage.imageHint} />
                    </div>
                   
                    <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-20 space-y-8">
                        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl">
                            Ready for your tropical escape?<br/> Let's plan your trip today.
                        </h2>
                        <p className="text-gray-300 text-lg max-w-xl">
                            Whether you want a relaxing beach holiday or an adventurous mountain trek, we are here to make it happen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link href="/tours" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-[#111812] text-base font-bold hover:bg-[#0fd620] transition-colors shadow-lg shadow-primary/20">
                                View Packages &amp; Pricing
                            </Link>
                            <Link href="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white hover:text-[#111812] transition-colors">
                                Consult an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

    
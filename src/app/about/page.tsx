
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '@/lib/placeholder-images';
import { Star, Map, Edit, Leaf, Shield, ArrowRight } from 'lucide-react';

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
    const nineArchCtaImage = getImage('about-cta-bg-train');
    const waterfallCtaImage = getImage('about-cta-bg-waterfall');


    return (
        <main className="w-full">
            <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover object-center"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col gap-6 items-center">
                    <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Our Journey Begins</p>
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                        Welcome to the Digital Storybook of <span className="text-primary">LankaHorizon</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                        We invite you to immerse yourself in the vibrant tapestry of Sri Lanka and discover the passion behind every journey we craft.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-10 lg:px-20 max-w-4xl mx-auto text-center">
                <div className="space-y-6">
                    <h2 className="text-foreground text-3xl md:text-5xl font-black leading-tight tracking-tight mb-4">
                        Born From the Island's Embrace
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Our story is etched into the very landscapes of Sri Lanka. Born and raised amidst the misty hills and golden shores, we are islanders at heart. LankaHorizon sprouted from a simple, profound desire: to share the authentic, untold beauty of our homeland with the world, not just as a destination, but as an experience to be felt deeply.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        For over a decade, we've guided culturally curious travelers beyond the postcards, into the bustling markets, ancient ruins, and tranquil village life. Every sunrise over a tea plantation, every whisper of history in an ancient city, every joyful smile shared with a local — these are the moments we live to create.
                    </p>
                </div>
            </section>

            <section className="w-full h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-background-dark relative">
                <Image
                    src={stiltFishermenImage.imageUrl}
                    alt={stiltFishermenImage.description}
                    fill
                    className="object-cover object-center"
                    data-ai-hint={stiltFishermenImage.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <h3 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4">
                        Where Tradition Meets Tranquility
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                        Witness the timeless tradition of stilt fishermen at sunset, a serene dance between man and sea. It’s in these authentic encounters that the true spirit of Sri Lanka comes alive.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-10 lg:px-20 max-w-4xl mx-auto text-center bg-card dark:bg-[#162918] transition-colors duration-300">
                <div className="space-y-6">
                    <h2 className="text-foreground text-3xl md:text-5xl font-black leading-tight tracking-tight mb-4">
                        More Than Just Travel: A Promise
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        At LankaHorizon, we don't just plan trips; we craft enriching narratives. Our philosophy is simple yet profound: travel should be an act of discovery, respect, and connection. We're committed to sustainable tourism, ensuring that the breathtaking natural beauty and vibrant cultural heritage of Sri Lanka endure for generations to come.
                    </p>
                    <p className="text-primary text-xl md:text-2xl font-bold leading-relaxed italic">
                        "We believe in travel that leaves footprints in your heart, not on the environment."
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Every itinerary is thoughtfully designed to uplift local communities, minimize environmental impact, and provide you with genuine interactions that transcend the typical tourist experience.
                    </p>
                </div>
            </section>

            <section className="w-full h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-background-dark relative">
                 <Image
                    src={sigiriyaImage.imageUrl}
                    alt={sigiriyaImage.description}
                    fill
                    className="object-cover object-center"
                    data-ai-hint={sigiriyaImage.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <h3 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4">
                        Echoes of an Ancient Kingdom
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                        Ascend to the heavens atop Sigiriya, where ancient kings carved their legacy into the skies. This is a journey through time, a testament to resilience, and a window into Sri Lanka's soul.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-10 lg:px-20 max-w-4xl mx-auto text-center">
                <div className="space-y-6 mb-12">
                    <h2 className="text-foreground text-3xl md:text-5xl font-black leading-tight tracking-tight mb-4">
                        The Heartbeat of LankaHorizon: Our People
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Behind every meticulously planned itinerary and every seamless transition is a team of passionate Sri Lankans, our local guides, and travel experts. They are the storytellers, the navigators, and the friends who transform your trip into a personal narrative.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-10">
                    <div className="flex flex-col items-center gap-4 text-center group">
                        <div className="relative">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={kumaraImage.description} className="w-full h-full object-cover" data-ai-hint={kumaraImage.imageHint} src={kumaraImage.imageUrl} width={160} height={160} />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-primary text-card p-2 rounded-full shadow-lg">
                                <Star className="text-sm font-bold" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Kumara Perera</h3>
                            <p className="text-sm text-muted-foreground">Senior Guide</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center group">
                        <div className="relative">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={dilaniImage.description} className="w-full h-full object-cover" data-ai-hint={dilaniImage.imageHint} src={dilaniImage.imageUrl} width={160} height={160} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Dilani Silva</h3>
                            <p className="text-sm text-muted-foreground">Cultural Expert</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center group">
                        <div className="relative">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={nuwanImage.description} className="w-full h-full object-cover" data-ai-hint={nuwanImage.imageHint} src={nuwanImage.imageUrl} width={160} height={160} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Nuwan Fernando</h3>
                            <p className="text-sm text-muted-foreground">Safari Specialist</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center group">
                        <div className="relative">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={anjaliImage.description} className="w-full h-full object-cover" data-ai-hint={anjaliImage.imageHint} src={anjaliImage.imageUrl} width={160} height={160} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Anjali De Silva</h3>
                            <p className="text-sm text-muted-foreground">Travel Coordinator</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <Link className="text-primary font-bold hover:underline flex items-center gap-1 justify-center" href="#">See All Our Storytellers <ArrowRight className="text-sm" /></Link>
                </div>
            </section>

            <section className="w-full h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-background-dark relative">
                 <Image
                    src={nineArchCtaImage.imageUrl}
                    alt={nineArchCtaImage.description}
                    fill
                    className="object-cover object-center"
                    data-ai-hint={nineArchCtaImage.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <h3 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4">
                        Journey Through Emerald Hills
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                        Imagine the wind in your hair, the rhythm of the rails, and endless emerald tea plantations stretching to the horizon. This is the heart of Sri Lanka, waiting to be explored.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-card dark:bg-[#162918] transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 md:px-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight">Your Adventure, Our Promise</h2>
                        <p className="text-muted-foreground text-lg">Every chapter of your journey with LankaHorizon is crafted with care and expertise.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group bg-background dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
                            <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <Map className="text-primary group-hover:text-card text-3xl transition-colors" />
                            </div>
                            <h3 className="text-foreground text-xl font-bold mb-3">Expert Local Knowledge</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Our guides are locals who know every twist in the road and every story behind the ruins.
                            </p>
                        </div>
                        <div className="group bg-background dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
                            <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <Edit className="text-primary group-hover:text-card text-3xl transition-colors" />
                            </div>
                            <h3 className="text-foreground text-xl font-bold mb-3">Tailor-Made Itineraries</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Your holiday, your way. We customize every detail to suit your pace, budget, and interests.
                            </p>
                        </div>
                        <div className="group bg-background dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
                            <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <Leaf className="text-primary group-hover:text-card text-3xl transition-colors" />
                            </div>
                            <h3 className="text-foreground text-xl font-bold mb-3">Sustainable Travel</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                We prioritize eco-friendly accommodations and practices to protect our beautiful island.
                            </p>
                        </div>
                        <div className="group bg-background dark:bg-[#1e3a21] rounded-xl p-8 transition hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/30">
                            <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <Shield className="text-primary group-hover:text-card text-3xl transition-colors" />
                            </div>
                            <h3 className="text-foreground text-xl font-bold mb-3">24/7 Support</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                From arrival to departure, our dedicated team is just a phone call away, anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-24 px-4">
                <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden">
                    <Image
                        src={waterfallCtaImage.imageUrl}
                        alt={waterfallCtaImage.description}
                        fill
                        className="object-cover object-center"
                        data-ai-hint={waterfallCtaImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-20 space-y-8">
                        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl">
                            Ready to write your own Sri Lankan story?
                        </h2>
                        <p className="text-gray-300 text-lg max-w-xl">
                            Let us help you craft a journey filled with discovery, wonder, and unforgettable moments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                             <Link href="/custom-itinerary" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-primary-foreground text-base font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                Start Your Journey
                            </Link>
                            <Link href="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white hover:text-foreground transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

    
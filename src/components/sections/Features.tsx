import { Map, Users, Heart } from 'lucide-react';

const features = [
    {
        icon: Map,
        title: "Customized Tours",
        description: "Tailor-made itineraries that fit your style, schedule, and budget perfectly.",
    },
    {
        icon: Users,
        title: "Trusted Local Guides",
        description: "Explore with friendly locals who know the hidden gems and stories of the land.",
    },
    {
        icon: Heart, // Using Heart as a substitute for savings
        title: "Best Prices",
        description: "Experience luxury and adventure at unbeatable rates with no hidden costs.",
    }
]

export function Features() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-foreground dark:text-white mb-4 tracking-tight">Why Choose LankaHorizon?</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">We don't just plan tours; we craft unforgettable experiences tailored just for you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="group bg-white dark:bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 bg-ocean-light dark:bg-white/5 rounded-full flex items-center justify-center text-foreground dark:text-primary mb-6 group-hover:bg-primary group-hover:text-foreground transition-colors duration-300">
                            <feature.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

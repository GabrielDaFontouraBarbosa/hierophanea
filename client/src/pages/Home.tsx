import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SpellCard } from "@/components/SpellCard";
import { InfoSection } from "@/components/InfoSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Flame, Eye, Shield, Gem } from "lucide-react";

const spells = [
  {
    title: "Chama Interior",
    description: "Aumente a sua intuição e clareza exterior.",
    icon: Flame,
  },
  {
    title: "Proteção Rúnica",
    description: "Crie um escudo contra energias negativas.",
    icon: Shield,
  },
  {
    title: "AstroVisão",
    description: "Conecte-se ao poder dos astros e a clarividência.",
    icon: Eye,
  },
  {
    title: "Amuleto da Sorte",
    description: "Atraia boas energias e proteção.",
    icon: Gem,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <Navigation />
      
      <main>
        <Hero />

        {/* Spells Section */}
        <section id="spells" className="py-24 md:py-32 bg-background relative">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 md:mb-20"
            >
              <div className="section-divider">
                <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-[0.2em] text-[#8B5E3C]">Feitiços</h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {spells.map((spell, idx) => (
                <SpellCard key={idx} {...spell} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border/30">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 md:mb-20"
            >
              <div className="section-divider">
                <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-[0.2em] text-[#8B5E3C]">Quem Sou</h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative flex items-center justify-center"
              >
                {/* Sparkle background effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-3xl" />
                
                <div className="relative z-10 p-4">
                  <img 
                    src="/assets/logo-aged.png" 
                    alt="Owl illustration" 
                    className="w-full max-w-[400px] h-auto drop-shadow-xl"
                  />
                  {/* Floating sparkles could be added here as small absolute divs if needed */}
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h3 className="text-2xl md:text-3xl font-serif mb-6 text-foreground/90">
                  Ola, meu nome é <span className="border-b-2 border-primary/20">Morgana</span>
                </h3>
                <div className="space-y-6 text-lg text-foreground/70 font-body leading-relaxed max-w-xl">
                  <p>
                    Sou um eterno estudante dos misterios ocultos e da magia, dedicado a compartilhar conhecimentos, feitiços e sabedoria ancestral com todos que buscam amplificar sua consciência espiritual.
                  </p>
                  <p className="italic">
                    "A magia não é sobrenatural, é a natureza profunda ainda não compreendida."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <InfoSection />
      </main>

      <Footer />
    </div>
  );
}

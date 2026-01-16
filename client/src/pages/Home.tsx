import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SpellCard } from "@/components/SpellCard";
import { InfoSection } from "@/components/InfoSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Flame, Eye, Shield, Gem } from "lucide-react";
import heroImg from "@assets/hero.jpg"; // Just importing to follow patterns, usually unused in CSS bg
// Note: We use CSS backgrounds and gradients instead of images as requested, 
// but if we had a portrait for "About", it would go here.

const spells = [
  {
    title: "Chama Interior",
    description: "Um ritual poderoso para despertar sua confiança, criatividade e paixão pela vida. Ideal para novos começos.",
    icon: Flame,
  },
  {
    title: "AstroVisão",
    description: "Clareza mental e abertura do terceiro olho para tomadas de decisão importantes e intuição aguçada.",
    icon: Eye,
  },
  {
    title: "Proteção Rúnica",
    description: "Escudo energético ancestral utilizando o poder das runas para afastar negatividade e inveja.",
    icon: Shield,
  },
  {
    title: "Amuleto da Sorte",
    description: "Consagração de objetos pessoais para atrair prosperidade, abrir caminhos e trazer boas notícias.",
    icon: Gem,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      
      <main>
        <Hero />

        {/* Spells Section */}
        <section id="spells" className="py-24 md:py-32 bg-gradient-to-b from-[#2e1065] to-[#1a0b36] relative">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 md:mb-24"
            >
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-4 block">Grimório</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">Feitiços & Rituais</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {spells.map((spell, idx) => (
                <SpellCard key={idx} {...spell} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-[#1a0b36] relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Placeholder */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square max-w-md mx-auto lg:mx-0"
              >
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-sm overflow-hidden flex items-center justify-center">
                  <span className="text-primary/20 font-serif italic text-2xl">Foto</span>
                  {/* <img src={portraitUrl} alt="Portrait" className="w-full h-full object-cover" /> */}
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-4 block">A Bruxa</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Quem Sou</h2>
                <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                  <p>
                    Olá, meu nome é <span className="text-primary font-bold">Morgana</span>. Sou uma eterna estudante dos mistérios ocultos e da magia, dedicada a compartilhar conhecimentos, feitiços e sabedoria ancestral com todos que buscam ampliar sua consciência espiritual.
                  </p>
                  <p>
                    Caminho entre os mundos há mais de uma década, aprendendo com a natureza, os astros e os antigos grimórios. Meu propósito é ajudar você a despertar sua própria magia interior.
                  </p>
                  <p>
                    Acredito que a magia não é sobrenatural, mas sim o profundo entendimento das leis naturais que regem nosso universo e nossa alma.
                  </p>
                </div>
                
                <div className="mt-10 pt-10 border-t border-white/10 flex gap-12">
                  <div>
                    <span className="block text-3xl font-serif font-bold text-white mb-1">10+</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Anos de Estudo</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif font-bold text-white mb-1">5k+</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Alunos</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif font-bold text-white mb-1">∞</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Conexões</span>
                  </div>
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

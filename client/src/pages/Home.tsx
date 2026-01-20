import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SpellCard } from "@/components/SpellCard";
import { InfoSection } from "@/components/InfoSection";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Flame, Eye, Shield, Gem, Book, Hourglass, Triangle, Heart, TrendingUp, Scissors, Wind, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const spells = [
  {
    title: "Adoçamento Amoroso",
    description: "Atraia amor, afeto e conexões significativas em sua vida.",
    detailedDescription: "Nesse feitiço são trabalhadas energias que aproximam a energia do casal, seja um casal já existente ou em potencial. Também é recomendado para a dissolução de conflitos amorosos. São invocadas as forças de Afrodite ou de Hékate, e isso é indicado numa leitura de tarot inclusa. Não é amarração amorosa.",
    price: 350,
    icon: Heart,
  },
  {
    title: "Abertura de Caminhos Financeiros",
    description: "Desbloqueie a prosperidade e abra portas para abundância.",
    detailedDescription: "Desbloqueie o fluxo de prosperidade e abundância em sua vida. Este feitiço trabalha para remover obstáculos financeiros, atrair oportunidades de ganho e abrir portas para novas fontes de renda. Combina técnicas ancestrais de manifestação com práticas modernas de energia. Potencializa sua capacidade de atrair riqueza.",
    price: 400,
    icon: TrendingUp,
  },
  {
    title: "Corte de Laços",
    description: "Liberte-se de relacionamentos tóxicos e energias presas.",
    detailedDescription: "Liberte-se de relacionamentos prejudiciais e energias que não servem mais a seu crescimento. Um ritual de transformação que encerra ciclos tóxicos com respeito e compaixão. Permite que você siga em frente sem traumas ou conexões que drenam sua energia. Essencial para cura emocional.",
    price: 320,
    icon: Scissors,
  },
  {
    title: "Limpeza e Proteção",
    description: "Purifique seu ambiente e fortaleça sua defesa espiritual.",
    detailedDescription: "Purifique seu espaço e sua aura de energias negativas, bloqueios e influências indesejadas. Um escudo espiritual que protege você e seu ambiente contra interferências externas. Cria um campo de luz que afasta negatividade enquanto permite a passagem de energias benéficas. Prática essencial para manutenção contínua.",
    price: 280,
    icon: Wind,
  },
];

const extraInfo = [
  {
    title: "Atendimentos",
    description: "Oráculos, consultas e rituais personalizados.",
    icon: Book,
  },
  {
    title: "Aulas / Leituras",
    description: "Cursos de magia, leitura de tarot e astrologia.",
    icon: Hourglass,
  },
  {
    title: "Perguntas Frequentes",
    description: "Encontre as respostas para suas dúvidas mágicas.",
    icon: Triangle,
  },
];

export default function Home() {
  const [selectedSpellIndex, setSelectedSpellIndex] = useState<number | null>(null);
  const selectedSpell = selectedSpellIndex !== null ? spells[selectedSpellIndex] : null;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/10">
      <Navigation />
      
      <main>
        <Hero />

        {/* Spells Section */}
        <section id="spells" className="py-16 md:py-32 bg-gradient-to-b from-background via-background to-[#F5EFE5] relative">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="section-divider">
                <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em] text-accent">Feitiços</h2>
              </div>
            </motion.div>

            {selectedSpellIndex !== null ? (
              // Expanded view
              <motion.div
                layoutId="spell-container"
                className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 mb-8"
              >
                <button
                  onClick={() => setSelectedSpellIndex(null)}
                  className="ml-auto block p-2 hover:bg-accent/10 rounded-full transition-colors mb-4"
                >
                  <X className="w-6 h-6 text-foreground/60" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">
                  {/* Left - Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center md:items-start"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl flex items-center justify-center mb-6">
                      {selectedSpell && <selectedSpell.icon className="w-16 h-16 text-accent" />}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center md:text-left">
                      {selectedSpell?.title}
                    </h2>
                    {selectedSpell && (
                      <div className="mt-6 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] px-6 py-3 rounded-full text-center w-full">
                        <p className="text-black font-serif font-bold text-2xl">
                          R$ {selectedSpell.price}
                        </p>
                      </div>
                    )}
                  </motion.div>

                  {/* Right - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="space-y-6"
                  >
                    <div>
                      <p className="text-lg text-accent italic font-medium mb-4">
                        {selectedSpell?.description}
                      </p>
                      <p className="text-foreground/75 leading-relaxed text-base whitespace-pre-wrap">
                        {selectedSpell?.detailedDescription}
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-border/20">
                      <h3 className="text-sm uppercase tracking-widest text-accent/70 font-semibold">
                        Benefícios
                      </h3>
                      <ul className="space-y-2 text-foreground/70 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-accent mt-1 flex-shrink-0">✦</span>
                          <span>Transformação energética profunda</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent mt-1 flex-shrink-0">✦</span>
                          <span>Resultados personalizados ao seu caso</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent mt-1 flex-shrink-0">✦</span>
                          <span>Acompanhamento durante o processo</span>
                        </li>
                      </ul>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-4"
                    >
                      <Button
                        className="w-full md:w-auto bg-accent hover:bg-[#B8962E] text-black rounded-full h-12 px-8 font-serif font-bold uppercase tracking-widest"
                        onClick={() => alert(`Contato para: ${selectedSpell?.title}`)}
                      >
                        Solicitar Feitiço
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              // Grid view
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                {spells.map((spell, idx) => (
                  <SpellCard 
                    key={idx}
                    {...spell} 
                    delay={idx * 0.1}
                    onClick={() => setSelectedSpellIndex(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-32 bg-gradient-to-b from-[#F5EFE5] via-[#F2EAE0] to-[#ECDCC8] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-24"
            >
              <div className="section-divider">
                <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em] text-accent">Quem Sou</h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative flex items-center justify-center order-2 lg:order-1"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent blur-[60px] md:blur-[100px]" />
                <div className="relative z-10 p-4 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[450px]">
                  <img 
                    src="/assets/coruja_logo.png" 
                    alt="Owl illustration" 
                    className="w-full h-auto drop-shadow-2xl animate-[float_6s_easeInOut_infinite]"
                  />
                  {/* Decorative Sparkles */}
                  <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-accent/20 rounded-full blur-sm animate-pulse" />
                  <div className="absolute bottom-10 left-0 w-2 h-2 md:w-3 md:h-3 bg-accent/30 rounded-full blur-sm animate-pulse delay-700" />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center lg:text-left order-1 lg:order-2"
              >
                <h3 className="text-lg md:text-2xl font-serif mb-6 md:mb-8 text-foreground/90 tracking-[0.15em] uppercase">
                  Ola, meu nome é <span className="text-accent underline underline-offset-8 decoration-accent/20">Aletheia</span>
                </h3>
                <div className="space-y-6 md:space-y-8 text-[15px] md:text-lg text-foreground/70 font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
                  <p>
                    Sou um eterno estudante dos misterios ocultos e da magia, dedicado a compartilhar conhecimentos, feitiços e sabedoria ancestral com todos que buscam amplificar sua consciência espiritual.
                  </p>
                  <p className="italic text-accent/80 font-medium">
                    "A magia não é sobrenatural, é a natureza profunda ainda não compreendida."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section id="info" className="py-16 md:py-32 bg-gradient-to-b from-[#ECDCC8] via-background to-background relative border-t border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="section-divider">
                <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em] text-accent">Informações</h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {extraInfo.map((item, idx) => (
                <SpellCard key={idx} {...item} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Lojinha placeholder */}
        <section id="shop" className="py-16 md:py-32 bg-gradient-to-b from-background via-[#F5EFE5] to-[#F2EAE0] border-t border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="section-divider">
                <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em] text-accent">Lojinha</h2>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ perspective: 1200 }}
              whileInView={{ perspective: 1200 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12"
            >
              {/* Door */}
              <motion.div
                initial={{ scaleX: 0, rotateY: -90, opacity: 0 }}
                whileInView={{ scaleX: 1, rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
                className="col-span-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent pointer-events-none rounded-xl" />
              </motion.div>

              {/* Items with stagger */}
              {[0, 1, 2].map((idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.9 + idx * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className={idx === 2 ? "hidden sm:block" : ""}
                >
                  <div className="bg-white/50 border border-border/30 rounded-xl p-6 md:p-8 h-32 md:h-40 flex items-center justify-center italic text-accent/40 text-sm md:text-base hover:bg-white/70 hover:border-accent/30 transition-all cursor-pointer">
                    Em breve
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}

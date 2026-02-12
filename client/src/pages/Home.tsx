import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SpellCard } from "@/components/SpellCard";
import { Footer } from "@/components/Footer";
import { ReadingsSection, ShopSection, FeedbackSection } from "@/components/HomeSections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Flame, Eye, Shield, Gem, Book, Hourglass, Triangle, Heart, TrendingUp, Scissors, Wind, X, GraduationCap, BookOpen, HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const spells = [
  {
    title: "Adoçamento Amoroso",
    description: "Atraia amor, afeto e conexões significativas em sua vida.",
    detailedDescription: "Nesse feitiço são trabalhadas energias que aproximam a energia do casal, seja um casal já existente ou em potencial. Também é recomendado para a dissolução de conflitos amorosos. São invocadas as forças de Afrodite ou de Hékate, e isso é indicado numa leitura de tarot inclusa. Não é amarração amorosa.",
    price: 350,
    icon: Heart,
    image: "/assets/adocamento.jpg"
  },
  {
    title: "Sucesso Acadêmico",
    description: "Foco, clareza mental e êxito em seus estudos e exames.",
    detailedDescription: "Potencialize sua capacidade de aprendizado, memória e concentração. Este feitiço é ideal para estudantes que buscam clareza mental durante provas, concursos ou desenvolvimento de pesquisas acadêmicas. Trabalha a energia de Hermes/Mercúrio para fluidez intelectual.",
    price: 300,
    icon: GraduationCap,
    image: "/assets/academico.jpg"
  },
  {
    title: "Corte de Laços",
    description: "Liberte-se de relacionamentos tóxicos e energias presas.",
    detailedDescription: "Liberte-se de relacionamentos prejudiciais e energias que não servem mais a seu crescimento. Um ritual de transformação que encerra ciclos tóxicos com respeito e compaixão. Permite que você siga em frente sem traumas ou conexões que drenam sua energia. Essencial para cura emocional.",
    price: 320,
    icon: Scissors,
    image: "/assets/corte.jpg"
  },
  {
    title: "Limpeza e Proteção",
    description: "Purifique seu ambiente e fortaleça sua defesa espiritual.",
    detailedDescription: "Purifique seu espaço e sua aura de energias negativas, bloqueios e influências indesejadas. Um escudo espiritual que protege você e seu ambiente contra interferências externas. Cria um campo de luz que afasta negatividade enquanto permite a passagem de energias benéficas. Prática essencial para manutenção contínua.",
    price: 280,
    icon: Shield,
    image: "/assets/protecao.jpg"
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
              // Expanded view - 3 Column Layout
              <motion.div
                layoutId="spell-container"
                className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 mb-8 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedSpellIndex(null)}
                  className="ml-auto block p-2 hover:bg-accent/10 rounded-full transition-colors mb-4"
                >
                  <X className="w-6 h-6 text-foreground/60" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  {/* Column 1: Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-full aspect-square bg-accent/5 rounded-2xl overflow-hidden flex items-center justify-center">
                      {selectedSpell?.image ? (
                        <img src={selectedSpell.image} alt={selectedSpell.title} className="w-full h-full object-cover" />
                      ) : (
                        <selectedSpell.icon className="w-24 h-24 text-accent/20" />
                      )}
                    </div>
                  </motion.div>

                  {/* Column 2: Title, Subtitle, Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                      {selectedSpell?.title}
                    </h2>
                    <p className="text-lg text-accent italic font-medium">
                      {selectedSpell?.description}
                    </p>
                    <p className="text-foreground/75 leading-relaxed text-sm">
                      {selectedSpell?.detailedDescription}
                    </p>
                  </motion.div>

                  {/* Column 3: Benefits, Investment, CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 bg-accent/5 p-6 rounded-2xl"
                  >
                    <div className="space-y-3">
                      <h3 className="text-sm uppercase tracking-widest text-accent font-semibold">
                        Benefícios
                      </h3>
                      <ul className="space-y-2 text-foreground/70 text-xs">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✦</span>
                          <span>Transformação energética profunda</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✦</span>
                          <span>Resultados personalizados ao seu caso</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✦</span>
                          <span>Acompanhamento durante o processo</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-accent/10">
                      <p className="text-xs uppercase tracking-widest text-accent/70 mb-1">Investimento</p>
                      <p className="text-2xl font-serif font-bold text-foreground">
                        R$ {selectedSpell?.price}
                      </p>
                    </div>

                    <Button
                      className="w-full bg-accent hover:bg-[#B8962E] text-black rounded-full h-12 px-8 font-serif font-bold uppercase tracking-widest"
                      onClick={() => alert(`Contato para: ${selectedSpell?.title}`)}
                    >
                      Solicitar Feitiço
                    </Button>
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

        {/* Info Section - Area 3 Restructured */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Classes WIP */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white/50 border border-border/30 rounded-2xl p-8 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold">Aulas</h3>
                <div className="p-4 border border-dashed border-accent/30 rounded-xl bg-accent/5 italic text-sm text-accent/60">
                  Conteúdo em desenvolvimento. Em breve teremos cursos de magia natural e astrologia.
                </div>
              </motion.div>

              {/* Readings Link */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white/50 border border-border/30 rounded-2xl p-8 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold">Leituras</h3>
                <p className="text-sm text-foreground/60">Explore os diferentes oráculos e métodos de leitura para guiar sua jornada.</p>
                <Button variant="outline" className="rounded-full border-accent text-accent hover:bg-accent hover:text-white" onClick={() => document.getElementById('readings')?.scrollIntoView({ behavior: 'smooth' })}>
                  Ver Leituras
                </Button>
              </motion.div>

              {/* Service + FAQ Link */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/50 border border-border/30 rounded-2xl p-8 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold">Atendimento & FAQ</h3>
                <p className="text-sm text-foreground/60">Tire suas dúvidas e entenda como funcionam as consultas personalizadas.</p>
                <Button variant="outline" className="rounded-full border-accent text-accent hover:bg-accent hover:text-white" onClick={() => window.location.href = '/faq'}>
                  Ir para Atendimento
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Area 3.2: Readings Interactive Section */}
        <section id="readings" className="py-16 md:py-32 bg-[#FDFCF9]">
          <div className="container mx-auto px-4 md:px-6">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em] text-accent">Leituras</h2>
            </motion.div>

            <ReadingsSection />
          </div>
        </section>

        {/* Area 4: Shop Carousel */}
        <section id="shop" className="py-16 md:py-32 bg-background">
          <div className="container mx-auto px-4">
             <div className="section-divider mb-12">
                <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em] text-accent">Lojinha</h2>
              </div>
              <ShopSection />
          </div>
        </section>

        {/* Area 5: Feedbacks */}
        <section id="feedbacks" className="py-16 md:py-32 bg-[#F5EFE5]">
          <div className="container mx-auto px-4">
             <div className="section-divider mb-12">
                <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em] text-accent">Feedbacks</h2>
              </div>
              <FeedbackSection />
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

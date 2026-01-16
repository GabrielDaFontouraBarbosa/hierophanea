import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSpells = () => {
    document.getElementById("spells")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4c1d95]/30 via-[#2e1065] to-[#0f0518] z-0" />
      
      {/* Stars/Particles (CSS generated for simplicity, could be canvas) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 z-0 animate-pulse" />

      {/* Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="container relative z-10 px-6 text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <div className="p-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-8 gold-gradient-text leading-tight md:leading-snug drop-shadow-lg"
        >
          Sabedoria ancestral para quem caminha entre mundos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Leituras de tarot, feitiços personalizados e estudos espirituais profundos para iluminar e guiar sua jornada interior.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={scrollToSpells}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(252,211,77,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Explorar Feitiços
          </button>
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 rounded-full border border-primary/30 text-primary font-sans font-bold uppercase tracking-widest text-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 w-full sm:w-auto"
          >
            Sobre Mim
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

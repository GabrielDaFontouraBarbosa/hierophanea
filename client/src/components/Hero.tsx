import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSpells = () => {
    document.getElementById("spells")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 hero-gradient text-white overflow-hidden">
      {/* moon glow / light effect */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-yellow-100/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* moon shape hint */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img 
            src="/assets/logo-old-gold.png" 
            alt="Hierophanea Logo" 
            className="w-32 md:w-40 h-auto mx-auto mb-12 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          />
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight text-white/90 font-serif drop-shadow-md">
          Sabedoria ancestral para quem caminha entre mundos.
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl mx-auto font-body italic tracking-wide">
          Leituras, feitiços ed estudos espirituais para aprofundar sua jornada.
        </p>
        
        <div className="flex flex-row gap-6 justify-center">
          <Button 
            onClick={scrollToSpells}
            size="lg" 
            className="bg-[#D4AF37] hover:bg-[#B8962E] text-black border-none rounded-full px-10 h-12 text-base font-sans uppercase tracking-widest"
          >
            Feitiços
          </Button>
          <Button 
            onClick={scrollToAbout}
            size="lg" 
            variant="outline" 
            className="border-white/30 bg-white/5 text-white hover:bg-white/10 rounded-full px-10 h-12 text-base font-sans uppercase tracking-widest backdrop-blur-sm"
          >
            Sobre mim
          </Button>
        </div>
      </motion.div>
      
      {/* stardust overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-screen" />
    </section>
  );
}

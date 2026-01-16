import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface SpellCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function SpellCard({ title, description, icon: Icon, delay = 0 }: SpellCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl glass-card p-8 hover:bg-white/10 transition-colors duration-500"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
        <Icon className="w-24 h-24 text-primary" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 p-3 w-fit rounded-xl bg-primary/10 border border-primary/20 text-primary">
          <Icon className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-serif font-bold text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground font-sans leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-primary font-bold group-hover:gap-4 transition-all duration-300">
          Ver Mais <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      {/* Decorative gradient glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

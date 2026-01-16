import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpellCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function SpellCard({ title, description, icon: Icon, delay = 0 }: SpellCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative bg-[#FDFCF9] rounded-xl border border-[#E5E1D5] p-8 text-center flex flex-col items-center hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-12 h-12 stroke-[1.5]" />
      </div>

      <h3 className="text-xl font-serif font-bold text-foreground mb-3 tracking-wide">
        {title}
      </h3>
      
      <p className="text-foreground/60 font-body leading-relaxed mb-8 flex-grow text-sm">
        {description}
      </p>

      <Button 
        variant="default"
        className="bg-[#2E1065] hover:bg-[#1a0b36] text-white rounded-full px-8 h-10 font-sans uppercase tracking-[0.2em] text-[10px] no-default-hover-elevate"
      >
        Ver Mais
      </Button>
      
      {/* Soft shadow hint like in the photo */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none rounded-b-xl" />
    </motion.div>
  );
}

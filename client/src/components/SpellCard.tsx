import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpellCardProps {
  title: string;
  description: string;
  detailedDescription?: string;
  price?: number;
  icon: LucideIcon;
  delay?: number;
  onClick?: () => void;
}

export function SpellCard({ title, description, detailedDescription, price, icon: Icon, delay = 0, onClick }: SpellCardProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#FDFCF9] rounded-xl border border-[#E5E1D5] p-6 md:p-8 text-center flex flex-col items-center hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 w-full cursor-pointer"
    >
      <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-700 ease-out">
        <Icon className="w-12 h-12 stroke-[1.2]" />
      </div>

      <h3 className="text-lg md:text-xl font-serif font-bold text-foreground mb-4 tracking-wider">
        {title}
      </h3>
      
      <p className="text-foreground/60 font-body leading-relaxed mb-6 flex-grow text-sm md:text-base">
        {description}
      </p>


      <Button 
        variant="default"
        className="bg-[#24143D] hover:bg-[#1A0B2E] text-white rounded-full px-10 h-11 font-sans uppercase tracking-[0.25em] text-[10px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 no-default-hover-elevate"
      >
        Ver Mais
      </Button>
      
      {/* Photo-accurate soft bottom shadow */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none rounded-b-xl" />
    </motion.button>
  );
}

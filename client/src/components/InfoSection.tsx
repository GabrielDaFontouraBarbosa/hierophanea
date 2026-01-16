import { motion } from "framer-motion";
import { Calendar, BookOpen, HelpCircle } from "lucide-react";

const infoCards = [
  {
    title: "Atendimentos",
    description: "Agende uma sessão individual de tarot ou consultoria espiritual online.",
    icon: Calendar,
    action: "Agendar"
  },
  {
    title: "Aulas / Leituras",
    description: "Cursos de magia natural, workshops de astrologia e estudos herméticos.",
    icon: BookOpen,
    action: "Conhecer"
  },
  {
    title: "Perguntas Frequentes",
    description: "Dúvidas sobre rituais, prazos e ética mágica em nosso FAQ.",
    icon: HelpCircle,
    action: "Ler FAQ"
  }
];

export function InfoSection() {
  return (
    <section id="info" className="py-24 md:py-32 relative overflow-hidden bg-[#F9F7F2]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="section-divider">
            <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-[0.2em] text-[#8B5E3C]">Informações</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#FDFCF9] border border-[#E5E1D5] rounded-xl p-10 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-[#D4AF37] mb-8">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{card.title}</h3>
                <p className="text-foreground/60 font-body leading-relaxed mb-8">{card.description}</p>
                <button className="mt-auto text-[11px] uppercase tracking-[0.3em] font-sans font-bold border-b border-[#D4AF37] text-[#D4AF37] pb-1 hover:text-[#B8962E] hover:border-[#B8962E] transition-colors">
                  {card.action}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Calendar, BookOpen, HelpCircle } from "lucide-react";

const infoCards = [
  {
    title: "Atendimentos",
    description: "Agende uma sessão individual de tarot ou consultoria espiritual. Atendimentos online via videochamada.",
    icon: Calendar,
    action: "Agendar Agora"
  },
  {
    title: "Aulas / Leituras",
    description: "Cursos de magia natural, workshops de astrologia e grupo de estudos herméticos.",
    icon: BookOpen,
    action: "Ver Cursos"
  },
  {
    title: "Perguntas Frequentes",
    description: "Dúvidas sobre como funcionam os rituais, prazos de entrega e ética mágica.",
    icon: HelpCircle,
    action: "Ler FAQ"
  }
];

export function InfoSection() {
  return (
    <section id="info" className="py-24 md:py-32 relative overflow-hidden bg-[#0f0518]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-4 block">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Informações</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed mb-8">{card.description}</p>
                <button className="mt-auto px-6 py-2 rounded-full border border-white/10 text-sm uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
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

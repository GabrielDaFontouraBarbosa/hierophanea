import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpellDetailsProps {
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  isOpen: boolean;
  onClose: () => void;
}

const detailedDescriptions: Record<string, string> = {
  "Adoçamento Amoroso": "Um feitiço poderoso para atrair e fortalecer conexões amorosas. Trabalha com as energias do coração, despertando a capacidade de amar e ser amado. Ideal para quem busca romance, afeto genuíno e relacionamentos mais profundos. As práticas envolvem rituais de intenção, cristais de energia amorosa e trabalho com o chakra do coração.",
  "Abertura de Caminhos Financeiros": "Desbloqueie o fluxo de prosperidade e abundância em sua vida. Este feitiço trabalha para remover obstáculos financeiros, atrair oportunidades de ganho e abrir portas para novas fontes de renda. Combina técnicas ancestrais de manifestação com práticas modernas de energia. Potencializa sua capacidade de atrair riqueza e reconhecer oportunidades.",
  "Corte de Laços": "Liberte-se de relacionamentos prejudiciais e energias que não servem mais a seu crescimento. Um ritual de transformação que encerra ciclos tóxicos com respeito e compaixão. Permite que você siga em frente sem traumas ou conexões que drenam sua energia. Essencial para cura emocional e reconstrução pessoal.",
  "Limpeza e Proteção": "Purifique seu espaço e sua aura de energias negativas, bloqueios e influências indesejadas. Um escudo espiritual que protege você e seu ambiente contra interferências externas. Cria um campo de luz que afasta negatividade enquanto permite a passagem de energias benéficas. Prática essencial para manutenção energética contínua.",
};

export function SpellDetail({
  title,
  shortDescription,
  detailedDescription,
  icon: Icon,
  isOpen,
  onClose,
}: SpellDetailsProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 hover:bg-accent/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-foreground/60" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left side - Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center justify-center md:sticky md:top-8"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground">
                    {title}
                  </h2>
                </motion.div>

                {/* Right side - Description */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="space-y-6"
                >
                  {/* Short description */}
                  <p className="text-lg text-accent italic font-medium">
                    {shortDescription}
                  </p>

                  {/* Detailed description */}
                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-widest text-accent/70 font-semibold">
                      Sobre este feitiço
                    </h3>
                    <p className="text-foreground/75 leading-relaxed text-base">
                      {detailedDescription || detailedDescriptions[title]}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 pt-6 border-t border-border/20">
                    <h3 className="text-sm uppercase tracking-widest text-accent/70 font-semibold">
                      Benefícios
                    </h3>
                    <ul className="space-y-2 text-foreground/70 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">✦</span>
                        <span>Transformação energética profunda</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">✦</span>
                        <span>Resultados personalizados ao seu caso</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">✦</span>
                        <span>Acompanhamento durante o processo</span>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6"
                  >
                    <Button
                      className="w-full bg-accent hover:bg-[#B8962E] text-black rounded-full h-12 font-serif font-bold uppercase tracking-widest"
                      onClick={() => {
                        // TODO: Abrir formulário de contato ou redirecionar
                        alert(`Contato para: ${title}`);
                      }}
                    >
                      Solicitar Feitiço
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

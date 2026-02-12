import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const readings = [
  {
    id: "tarot",
    title: "Tarot Terapêutico",
    description: "Uma análise profunda dos arquétipos para orientação pessoal.",
    content: "O Tarot Terapêutico foca no autoconhecimento e na compreensão dos processos internos, ajudando a identificar bloqueios e caminhos para evolução espiritual e emocional."
  },
  {
    id: "astrologia",
    title: "Mapa Astral",
    description: "A leitura do céu no momento do seu nascimento.",
    content: "Entenda suas inclinações, desafios e propósito de alma através da análise da posição dos astros. Um guia completo sobre sua personalidade e destino."
  },
  {
    id: "runas",
    title: "Runas Nórdicas",
    description: "Sabedoria ancestral através de símbolos rúnicos.",
    content: "As runas oferecem respostas diretas e conselhos práticos para situações do cotidiano, conectando você com a força e proteção da tradição nórdica."
  }
];

export function ReadingsSection() {
  const [activeId, setActiveId] = useState(readings[0].id);
  const activeReading = readings.find(r => r.id === activeId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch min-h-[400px]">
      {/* Column 1: Info */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-accent" />
          <h3 className="text-2xl font-serif font-bold">Como funcionam</h3>
        </div>
        <p className="text-foreground/70 leading-relaxed">
          Nossas leituras são baseadas em estudos profundos de simbolismo e intuição, oferecendo um guia claro para suas questões.
        </p>
      </div>

      {/* Column 2: Interactive List */}
      <div className="space-y-2">
        {readings.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveId(r.id)}
            className={`w-full text-left p-6 rounded-xl transition-all flex items-center justify-between group ${
              activeId === r.id 
              ? "bg-accent text-black shadow-lg" 
              : "bg-white border border-border/20 hover:border-accent/50"
            }`}
          >
            <span className="font-serif font-bold text-lg">{r.title}</span>
            <ChevronRight className={`w-5 h-5 transition-transform ${activeId === r.id ? "rotate-90" : "group-hover:translate-x-1"}`} />
          </button>
        ))}
      </div>

      {/* Column 3: Detail Display */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-accent/5 p-8 rounded-2xl h-full border border-accent/10"
          >
            <h4 className="text-xl font-serif font-bold text-accent mb-4">{activeReading?.title}</h4>
            <p className="text-foreground/80 leading-relaxed mb-6 italic">{activeReading?.description}</p>
            <p className="text-foreground/70">{activeReading?.content}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function ShopSection() {
  const products = [
    { name: "Vela Ritualística", price: 45, image: "/assets/vela.jpg" },
    { name: "Incenso Natural", price: 25, image: "/assets/incenso.jpg" },
    { name: "Cristal Purificado", price: 60, image: "/assets/cristal.jpg" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/20 group"
        >
          <div className="aspect-square bg-accent/5 relative">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
               <Button className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-black rounded-full uppercase tracking-widest text-xs">
                Saber Mais
               </Button>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="font-serif font-bold text-lg mb-2">{p.name}</h3>
            <p className="text-accent font-bold">R$ {p.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function FeedbackSection() {
  const feedbacks = [
    { initials: "L.M.", order: "Adoçamento Amoroso", text: "Incrível como as coisas fluíram depois do ritual. Senti uma leveza imediata." },
    { initials: "J.P.", order: "Corte de Laços", text: "Me ajudou a fechar um ciclo que parecia eterno. Recomendo muito!" },
    { initials: "A.C.", order: "Limpeza Energética", text: "Minha casa está com outra energia agora. Aletheia foi super atenciosa." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {feedbacks.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-2xl border border-border/20 shadow-sm relative italic"
        >
          <div className="flex text-accent mb-4">
            {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
          </div>
          <p className="text-foreground/75 mb-6">"{f.text}"</p>
          <div className="pt-4 border-t border-border/10">
            <p className="font-serif font-bold text-sm text-foreground">{f.initials}</p>
            <p className="text-xs text-accent uppercase tracking-widest">{f.order}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

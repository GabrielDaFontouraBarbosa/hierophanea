import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

const faqs = [
  {
    q: "Como funcionam os feitiços?",
    a: "Os feitiços são rituais energéticos personalizados baseados em intenção e sabedoria ancestral. Cada caso é analisado previamente através de uma leitura inclusa no valor."
  },
  {
    q: "Quanto tempo demora para ver resultados?",
    a: "A magia trabalha de forma sutil e progressiva. Os resultados podem variar, mas geralmente os primeiros sinais energéticos aparecem em 21 a 40 dias."
  },
  {
    q: "As consultas são online ou presenciais?",
    a: "Atualmente todos os atendimentos e rituais são realizados de forma remota, mantendo a mesma eficácia e permitindo o registro em fotos/vídeos para o consulente."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#FDFCF9] text-foreground font-body">
      <div className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-12 group hover:text-accent">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para o Início
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-border/10"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-accent uppercase tracking-widest mb-4">
              Atendimento & FAQ
            </h1>
            <p className="text-foreground/60 leading-relaxed">
              Bem-vindo ao espaço de suporte da Hierophanea. Aqui você encontra detalhes sobre como funcionam nossas consultas e as respostas para as dúvidas mais comuns.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-serif font-bold mb-4 border-b border-accent/20 pb-2">Sobre o Atendimento</h2>
              <p className="text-foreground/75 text-sm leading-relaxed">
                Nossos atendimentos são pautados pela ética mágica e respeito absoluto ao livre arbítrio. Cada consulta é um espaço seguro de acolhimento e orientação espiritual. Utilizamos ferramentas como tarot, astrologia e rituais de manifestação para auxiliar sua jornada.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold mb-6 border-b border-accent/20 pb-2">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                    <AccordionTrigger className="text-left font-serif hover:text-accent transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

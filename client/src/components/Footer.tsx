import { Moon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-[#24143D] to-[#1A0B2E] border-t border-accent/20">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="mb-8 p-3 rounded-full bg-white/10">
          <Moon className="w-6 h-6 text-accent" />
        </div>
        
        <div className="flex gap-8 mb-8 text-sm uppercase tracking-widest">
          <a href="#" className="text-accent/80 hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="text-accent/80 hover:text-accent transition-colors">Email</a>
        </div>

        <p className="text-accent/60 font-sans text-sm text-center">
          &copy; {new Date().getFullYear()} Hierophanea. Todos os direitos reservados.
          <br />
          Que a magia ilumine seu caminho.
        </p>
      </div>
    </footer>
  );
}

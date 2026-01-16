import { Moon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#0a0410] border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="mb-8 p-3 rounded-full bg-white/5">
          <Moon className="w-6 h-6 text-primary" />
        </div>
        
        <div className="flex gap-8 mb-8 text-sm uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Email</a>
        </div>

        <p className="text-muted-foreground/50 font-sans text-sm text-center">
          &copy; {new Date().getFullYear()} Mystic Arts. Todos os direitos reservados.
          <br />
          Que a magia ilumine seu caminho.
        </p>
      </div>
    </footer>
  );
}

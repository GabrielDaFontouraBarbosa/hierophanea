import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Home", url: "/" },
  { title: "Feitiços", url: "/#spells" },
  { title: "Sobre mim", url: "/#about" },
  { title: "Informações", url: "/#info" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (url: string) => {
    setIsOpen(false);
    if (url.startsWith("/#")) {
      const id = url.substring(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo-old-gold.png" 
            alt="Logo" 
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-500"
          />
          <span className={`text-xl font-serif tracking-widest uppercase transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-white"
          }`}>
            Hierophanea
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavClick(item.url)}
              className={`text-xs uppercase tracking-[0.3em] font-sans transition-colors duration-500 hover:text-accent ${
                scrolled ? "text-foreground/70" : "text-white/70"
              }`}
            >
              {item.title}
            </button>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/80 text-accent-foreground rounded-full px-6 text-xs uppercase tracking-widest no-default-hover-elevate"
          >
            Contato
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden shadow-xl"
        >
          <div className="flex flex-col gap-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.url)}
                className="text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-accent"
              >
                {item.title}
              </button>
            ))}
            <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground rounded-full no-default-hover-elevate">
              Contato
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

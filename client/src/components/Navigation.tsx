import { motion, AnimatePresence } from "framer-motion";
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
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md py-3 shadow-sm border-b border-border/10" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <img 
            src="/assets/logo-old-gold.png" 
            alt="Logo" 
            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500"
          />
          <span className={`text-lg md:text-xl font-serif tracking-[0.2em] uppercase transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-white"
          }`}>
            Hierophanea
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavClick(item.url)}
              className={`text-[10px] uppercase tracking-[0.3em] font-sans transition-colors duration-500 hover:text-accent ${
                scrolled ? "text-foreground/70" : "text-white/70"
              }`}
            >
              {item.title}
            </button>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/80 text-accent-foreground rounded-full px-6 text-[10px] uppercase tracking-widest no-default-hover-elevate transition-all duration-300 active:scale-95"
          >
            Contato
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-500 z-50 ${
            scrolled || isOpen ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col gap-8 items-center w-full max-w-xs">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleNavClick(item.url)}
                  className="text-xs uppercase tracking-[0.4em] text-foreground/80 hover:text-accent transition-colors font-sans py-2"
                >
                  {item.title}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full pt-4"
              >
                <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground rounded-full h-12 text-[10px] uppercase tracking-[0.2em] no-default-hover-elevate shadow-lg">
                  Contato
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

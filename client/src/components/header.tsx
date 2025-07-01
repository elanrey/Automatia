import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
      <button
        onClick={() => {
          scrollToSection("servicios");
          onLinkClick?.();
        }}
        className="text-white hover:text-secondary-custom transition-colors duration-300 font-medium"
      >
        Servicios
      </button>
      <button
        onClick={() => {
          scrollToSection("casos-exito");
          onLinkClick?.();
        }}
        className="text-white hover:text-secondary-custom transition-colors duration-300 font-medium"
      >
        Casos de Éxito
      </button>
      <button
        onClick={() => {
          scrollToSection("contacto");
          onLinkClick?.();
        }}
        className="text-white hover:text-secondary-custom transition-colors duration-300 font-medium"
      >
        Contacto
      </button>
    </>
  );

  return (
    <header
      className={`bg-gradient-to-r from-primary-custom to-primary-dark-custom text-white fixed w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary-custom rounded-lg flex items-center justify-center">
              <i className="fas fa-robot text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold">
              Automat<span className="italic">IA</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary-dark-custom text-white border-none">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks onLinkClick={() => {}} />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

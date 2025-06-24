import { useState } from "react";
import Icon from "@/components/ui/icon";

const WeddingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "program", label: "Программа дня", icon: "Calendar" },
    { id: "location", label: "Локация", icon: "MapPin" },
    { id: "directions", label: "Как добраться", icon: "Navigation" },
    { id: "dresscode", label: "Дресс-код", icon: "Shirt" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-wedding-beige">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-cormorant text-2xl font-semibold wedding-text-gradient">
            А & М
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 text-wedding-brown hover:text-wedding-gold transition-colors duration-300"
              >
                <Icon name={item.icon as any} size={16} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-wedding-brown"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-wedding-beige">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-3 w-full px-4 py-3 text-left text-wedding-brown hover:bg-wedding-cream transition-colors duration-300"
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default WeddingNavigation;

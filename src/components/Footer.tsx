import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 wedding-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-wedding-gold w-16"></div>
            <Icon name="Heart" size={24} className="text-wedding-gold" />
            <div className="h-px bg-wedding-gold w-16"></div>
          </div>

          <h3 className="font-cormorant text-3xl font-medium wedding-text-gradient mb-4">
            Анна & Максим
          </h3>

          <p className="text-wedding-brown/80 mb-6 max-w-md mx-auto">
            Мы с нетерпением ждем этого особенного дня в кругу самых близких
            людей
          </p>

          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={18} className="text-wedding-gold" />
              <span className="text-wedding-brown text-sm">
                15 сентября 2024
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={18} className="text-wedding-gold" />
              <span className="text-wedding-brown text-sm">14:00</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-wedding-beige inline-block">
            <p className="text-wedding-brown text-sm">
              По всем вопросам:
              <span className="font-medium ml-1">+7 (999) 123-45-67</span>
            </p>
          </div>

          <div className="mt-8 text-wedding-brown/60 text-xs">
            С любовью создано для нашей свадьбы ♥
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

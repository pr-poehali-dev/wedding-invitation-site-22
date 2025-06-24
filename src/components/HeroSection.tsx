import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen wedding-gradient flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Icon name="Heart" size={60} className="text-wedding-gold" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Icon name="Heart" size={40} className="text-wedding-gold" />
      </div>
      <div className="absolute top-1/2 left-5 opacity-10">
        <Icon name="Sparkles" size={30} className="text-wedding-gold" />
      </div>

      <div className="text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="font-cormorant text-6xl md:text-8xl font-light wedding-text-gradient mb-6">
            Анна & Максим
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px bg-wedding-gold w-16"></div>
            <Icon name="Heart" size={24} className="text-wedding-gold" />
            <div className="h-px bg-wedding-gold w-16"></div>
          </div>

          <p className="text-xl md:text-2xl text-wedding-brown mb-8 font-light">
            Приглашаем вас разделить с нами
            <br />
            самый важный день в нашей жизни
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-wedding-beige shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="Calendar" size={24} className="text-wedding-gold" />
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium text-wedding-brown">
                15 сентября 2024
              </h2>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Icon name="MapPin" size={20} className="text-wedding-gold" />
              <p className="text-lg text-wedding-brown">
                Усадьба "Золотое время", Московская область
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

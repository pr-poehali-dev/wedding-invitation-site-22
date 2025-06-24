import Icon from "@/components/ui/icon";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-wedding-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in">
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium wedding-text-gradient mb-4">
            Локация
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-wedding-gold w-16"></div>
            <Icon name="MapPin" size={20} className="text-wedding-gold" />
            <div className="h-px bg-wedding-gold w-16"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h3 className="font-cormorant text-3xl font-medium text-wedding-brown mb-6">
                Усадьба "Золотое время"
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-wedding-gold mt-1"
                  />
                  <div>
                    <p className="font-medium text-wedding-brown">Адрес:</p>
                    <p className="text-wedding-brown/80">
                      Московская область, Истринский район,
                      <br />
                      деревня Лешково, ул. Садовая, 15
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon
                    name="Phone"
                    size={20}
                    className="text-wedding-gold mt-1"
                  />
                  <div>
                    <p className="font-medium text-wedding-brown">Телефон:</p>
                    <p className="text-wedding-brown/80">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon
                    name="Car"
                    size={20}
                    className="text-wedding-gold mt-1"
                  />
                  <div>
                    <p className="font-medium text-wedding-brown">Парковка:</p>
                    <p className="text-wedding-brown/80">
                      Бесплатная парковка на территории
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-wedding-beige">
                <h4 className="font-cormorant text-xl font-medium text-wedding-brown mb-3">
                  О месте
                </h4>
                <p className="text-wedding-brown/80 leading-relaxed">
                  Живописная усадьба XVIII века в окружении старинного парка.
                  Идеальное место для романтичной свадебной церемонии с
                  великолепными видами на пруд и вековые дубы.
                </p>
              </div>
            </div>

            <div className="fade-in">
              <div className="bg-white rounded-lg p-4 border border-wedding-beige shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
                  alt="Усадьба Золотое время"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <p className="text-wedding-brown/80 text-sm">
                    Усадьба "Золотое время" - место нашей свадьбы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

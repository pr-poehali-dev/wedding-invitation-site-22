import Icon from "@/components/ui/icon";

const DressCodeSection = () => {
  return (
    <section id="dresscode" className="py-20 bg-wedding-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in">
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium wedding-text-gradient mb-4">
            Дресс-код
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-wedding-gold w-16"></div>
            <Icon name="Shirt" size={20} className="text-wedding-gold" />
            <div className="h-px bg-wedding-gold w-16"></div>
          </div>
          <p className="text-lg text-wedding-brown max-w-2xl mx-auto">
            Мы будем рады видеть вас в нарядах, которые подчеркнут
            торжественность момента
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border border-wedding-cream shadow-lg fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Gem" size={24} className="text-wedding-gold" />
                <h3 className="font-cormorant text-2xl font-medium text-wedding-brown">
                  Для дам
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-wedding-gold mt-1"
                  />
                  <p className="text-wedding-brown/80 text-sm">
                    Коктейльные платья длиной до колена или ниже
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-wedding-gold mt-1"
                  />
                  <p className="text-wedding-brown/80 text-sm">
                    Пастельные тона: бежевый, персиковый, пудровый, лавандовый
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-wedding-gold mt-1"
                  />
                  <p className="text-wedding-brown/80 text-sm">
                    Комфортная обувь для прогулок по саду
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-wedding-cream shadow-lg fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Crown" size={24} className="text-wedding-gold" />
                <h3 className="font-cormorant text-2xl font-medium text-wedding-brown">
                  Для мужчин
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-wedding-gold mt-1"
                  />
                  <p className="text-wedding-brown/80 text-sm">
                    Классические костюмы или брюки с рубашкой
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-wedding-gold mt-1"
                  />
                  <p className="text-wedding-brown/80 text-sm">
                    Нейтральные цвета: серый, синий, бежевый
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-wedding-gold mt-1"
                  />
                  <p className="text-wedding-brown/80 text-sm">
                    Галстук или бабочка приветствуются
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-wedding-cream shadow-lg fade-in">
            <div className="flex items-start space-x-3">
              <Icon
                name="AlertTriangle"
                size={20}
                className="text-wedding-gold mt-1"
              />
              <div>
                <h4 className="font-medium text-wedding-brown mb-3">
                  Просьба избегать:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-wedding-brown/80 text-sm space-y-1">
                    <li>• Белых и кремовых нарядов</li>
                    <li>• Слишком ярких неоновых цветов</li>
                    <li>• Спортивной одежды</li>
                  </ul>
                  <ul className="text-wedding-brown/80 text-sm space-y-1">
                    <li>• Шорт и мини-юбок</li>
                    <li>• Глубоких декольте</li>
                    <li>• Шлепанцев и кроссовок</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 fade-in">
            <p className="text-wedding-brown/80 italic">
              Помните: главное — ваше присутствие и искренние улыбки! 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;

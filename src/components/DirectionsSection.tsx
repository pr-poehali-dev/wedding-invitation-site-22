import Icon from "@/components/ui/icon";

const DirectionsSection = () => {
  return (
    <section id="directions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in">
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium wedding-text-gradient mb-4">
            Как добраться
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-wedding-gold w-16"></div>
            <Icon name="Navigation" size={20} className="text-wedding-gold" />
            <div className="h-px bg-wedding-gold w-16"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-wedding-cream rounded-lg p-6 border border-wedding-beige fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Car" size={24} className="text-wedding-gold" />
                <h3 className="font-cormorant text-2xl font-medium text-wedding-brown">
                  На автомобиле
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-wedding-brown mb-2">
                    Из Москвы:
                  </p>
                  <p className="text-wedding-brown/80 text-sm leading-relaxed">
                    По Новорижскому шоссе до поворота на Истру, далее по
                    указателям на деревню Лешково. Время в пути: ~1 час.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-wedding-brown mb-2">
                    Координаты:
                  </p>
                  <p className="text-wedding-brown/80 text-sm font-mono">
                    55.123456, 36.789012
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-wedding-cream rounded-lg p-6 border border-wedding-beige fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Train" size={24} className="text-wedding-gold" />
                <h3 className="font-cormorant text-2xl font-medium text-wedding-brown">
                  На общественном транспорте
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-wedding-brown mb-2">
                    Электричка:
                  </p>
                  <p className="text-wedding-brown/80 text-sm leading-relaxed">
                    С Рижского вокзала до станции "Истра", далее на автобусе №23
                    до остановки "Лешково". Время в пути: ~1.5 часа.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-wedding-brown mb-2">
                    Трансфер:
                  </p>
                  <p className="text-wedding-brown/80 text-sm leading-relaxed">
                    Организуем трансфер от станции "Истра" в 13:30. Просьба
                    заранее сообщить о необходимости.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-wedding-rose/30 rounded-lg p-6 border border-wedding-peach fade-in">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-wedding-gold mt-1" />
              <div>
                <h4 className="font-medium text-wedding-brown mb-2">
                  Важная информация:
                </h4>
                <ul className="text-wedding-brown/80 text-sm space-y-1">
                  <li>• Бесплатная парковка на территории усадьбы</li>
                  <li>• Мы организуем трансфер обратно в Москву после 23:00</li>
                  <li>• При необходимости поможем с вызовом такси</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;

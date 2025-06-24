import Icon from "@/components/ui/icon";

const ProgramSection = () => {
  const programItems = [
    {
      time: "14:00",
      title: "Сбор гостей",
      description: "Встреча и регистрация гостей",
      icon: "Users",
    },
    {
      time: "15:00",
      title: "Выездная церемония",
      description: "Официальная часть в саду усадьбы",
      icon: "Heart",
    },
    {
      time: "16:00",
      title: "Фотосессия",
      description: "Фотографирование молодоженов и гостей",
      icon: "Camera",
    },
    {
      time: "17:30",
      title: "Банкет",
      description: "Праздничный ужин и поздравления",
      icon: "Utensils",
    },
    {
      time: "19:00",
      title: "Первый танец",
      description: "Танец молодоженов",
      icon: "Music",
    },
    {
      time: "20:00",
      title: "Танцы до утра",
      description: "Веселье и развлечения для всех",
      icon: "PartyPopper",
    },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in">
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium wedding-text-gradient mb-4">
            Программа дня
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-wedding-gold w-16"></div>
            <Icon name="Clock" size={20} className="text-wedding-gold" />
            <div className="h-px bg-wedding-gold w-16"></div>
          </div>
          <p className="text-lg text-wedding-brown max-w-2xl mx-auto">
            Мы подготовили для вас насыщенный день, полный радости и
            незабываемых моментов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {programItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-1/2 px-4">
                <div className={`text-${index % 2 === 0 ? "right" : "left"}`}>
                  <div className="inline-block bg-wedding-cream rounded-lg p-6 border border-wedding-beige shadow-md">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon
                        name={item.icon as any}
                        size={20}
                        className="text-wedding-gold"
                      />
                      <h3 className="font-cormorant text-xl font-medium text-wedding-brown">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-wedding-brown/80 mb-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-20 flex justify-center">
                <div className="bg-wedding-gold text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                  {item.time}
                </div>
              </div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

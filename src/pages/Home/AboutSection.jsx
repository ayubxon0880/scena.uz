export default function AboutSection() {
    const sections = [
        {
            title: "Обучение",
            text: "В среднем ежедневно к нам приходят около 40 человек на индивидуальные занятия и 75 человек на групповые.",
            image: "/images/who1.png",
            icon: "/images/abt1.png",
            reverse: false,
        },
        {
            title: "Ивенты",
            text: "Мы успешно организовали более 224 мастер-классов, 20 концертов и 3 масштабных фестиваля.",
            image: "/images/who2.png",
            icon: "/images/abt2.png",
            reverse: true,
        },
        {
            title: "Благотворительность",
            text: "Каждый месяц мы оказываем помощь приютам и бездомным животным, организуя благотворительные вечера и акции, которые объединяют добрые сердца и креативных людей.",
            image: "/images/who3.png",
            icon: "/images/abt3.png",
            reverse: false,
        },
    ];

    return (
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-center md:text-left">
                Кто мы?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-2xl leading-relaxed mb-12 text-center md:text-left">
                сцена – это пространство, где каждый может раскрыть свой творческий
                потенциал. мы даем возможность всем, кто хочет заниматься творчеством,
                независимо от уровня подготовки, возраста или финансовых возможностей.
            </p>

            {sections.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
                        item.reverse ? "md:flex-row-reverse" : ""
                    }`}
                >
                    {/* Image */}
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
                        />
                        <img
                            src={item.icon}
                            alt=""
                            className="absolute bottom-[-15px] right-[-15px] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                        />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                            {item.title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg md:text-2xl leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

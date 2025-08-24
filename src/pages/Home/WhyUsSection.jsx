export default function WhyUsSection() {
    const features = [
        {
            icon: "/images/whyus1.png", // 🎧 naushnik rasmi
            title: "ОБУЧЕНИЕ ОТ ПРОФЕССИОНАЛОВ",
            text: "Наши педагоги – опытные музыканты и преподаватели, готовые помочь вам раскрыть свой потенциал.",
        },
        {
            icon: "/images/whyus2.png", // ☁️ nota rasmi
            title: "ИНДИВИДУАЛЬНЫЙ ПОДХОД",
            text: "Мы адаптируем программу обучения под каждого ученика, учитывая его уровень и цели.",
        },
        {
            icon: "/images/whyus3.png", // 📊 soundwave rasmi
            title: "КОМФОРТНЫЕ УСЛОВИЯ",
            text: "Мы адаптируем программу обучения под каждого ученика, учитывая его уровень и цели.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-16">
                Почему <br /> Именно мы?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-blue-500 text-white p-8 rounded-3xl shadow-lg flex flex-col items-center"
                    >
                        <img
                            src={item.icon}
                            alt={item.title}
                            className="w-16 h-16 mb-6"
                        />
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-base leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

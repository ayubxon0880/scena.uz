import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Sitora Muhamedova",
        text: "Прекрасное пространство (школа музыки) очень довольна первым уроком. Благодарю что первый опыт меня приятно впечатлил. Обязательно вернусь по прилету. Сама концепция школы по мимо музыки там еще много благотворительности для животных. Они проводят разные благотворительные мероприятия. Это все очень близко мне, это приятно когда тебя окружают не только профессионалы но и добрые люди 😊",
    },
    {
        id: 2,
        name: "Азиза И.",
        text: "Очень довольна обучением в этой школе музыки. Профессиональные преподаватели, интересные и эффективные уроки. Мои музыкальные навыки значительно улучшились. Рекомендую всем!",
    },
    {
        id: 3,
        name: "Ольга",
        text: "Сын ходит на барабаны к отличному преподавателю Даврану. Уроки сыну очень нравятся, ходит с большим удовольствием, а я вижу хорошие результаты от занятий, сын уже участвует в семейном ансамбле - фортепиано+гитара+ барабаны!! 🤘 Спасибо!",
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="py-20 bg-white text-center relative overflow-hidden">
            <h2 className="text-5xl font-extrabold mb-12">Отзывы</h2>

            {/* Wrapper */}
            <div className="relative max-w-3xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="flex flex-col items-center justify-center space-y-6 min-h-[420px]"
                    >
                        <div className="w-32 h-32 flex items-center justify-center rounded-full bg-lime-400 text-black text-5xl font-bold shadow-lg">
                            {testimonials[current].name.charAt(0)}
                        </div>
                        <h3 className="text-xl font-bold">{testimonials[current].name}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                            {testimonials[current].text}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-600"
                >
                    &#10094;
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-600"
                >
                    &#10095;
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === current ? "bg-gray-800 scale-125" : "bg-gray-300"
                        }`}
                    ></span>
                ))}
            </div>
        </section>
    );
}

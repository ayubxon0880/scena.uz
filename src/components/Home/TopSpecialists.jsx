import { useState } from "react";

const specialists = [
    {
        name: "Али Курбанов",
        direction: "Психотерапевт",
        city: "Ташкент",
        experience: "10 лет",
        specialization: "тревожность, депрессия, семейные конфликты",
        img: "/images/doctor.png",
    },
    {
        name: "Анна Иванова",
        direction: "Психолог",
        city: "Москва",
        experience: "7 лет",
        specialization: "стресс, мотивация, личностный рост",
        img: "/images/doctor.png",
    },
    {
        name: "Иван Петров",
        direction: "Клинический психолог",
        city: "Санкт-Петербург",
        experience: "12 лет",
        specialization: "кризисные состояния, психосоматика",
        img: "/images/doctor.png",
    },
];

export default function TopSpecialists() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % specialists.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? specialists.length - 1 : prev - 1
        );
    };

    const current = specialists[currentIndex];

    return (
        <div className="flex flex-col items-center space-y-6">
            <h1 className="text-lg font-bold">
                Топ 3 <span className="font-normal">специалиста недели</span>
            </h1>

            <div className="bg-[#F6F3F0] rounded-[100px] p-6 flex items-center space-x-6 relative w-[1200px] h-[700px] shadow-sm">
                <button
                    onClick={handlePrev}
                    className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center bg-white hover:bg-gray-200"
                >
                    ‹
                </button>

                <img
                    src={current.img}
                    alt={current.name}
                    className="w-96 h-[600px] object-cover rounded-[30px]"
                />

                <div className="flex-1 relative">
                    <h2 className="text-xl font-bold mb-3">{current.name}</h2>

                    <div className="space-y-1 text-sm">
                        <p className="text-gray-400">Направление</p>
                        <p className="text-gray-900 font-medium">{current.direction}</p>

                        <p className="text-gray-400 mt-2">Город</p>
                        <p className="text-gray-900 font-medium">{current.city}</p>

                        <p className="text-gray-400 mt-2">Опыт</p>
                        <p className="text-gray-900 font-medium">{current.experience}</p>

                        <p className="mt-3 text-gray-900 leading-snug">
                            Специализация: {current.specialization}
                        </p>
                    </div>

                    {/* O'ng tugma */}
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center bg-white hover:bg-gray-200"
                    >
                        ›
                    </button>

                    {/* Записаться tugmasi */}
                    <button className="mt-5 bg-[#4B3A34] text-white px-8 py-2 rounded-lg hover:bg-[#3c2d28] transition">
                        Записаться
                    </button>
                </div>
            </div>
        </div>
    );
}

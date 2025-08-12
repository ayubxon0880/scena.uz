import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const specialists = [
    {
        img: "/images/doctor.png",
        name: "Али Курбанов",
        direction: "Психотерапевт",
        city: "Ташкент",
        experience: "10 лет",
        specialization: "тревожность, депрессия, семейные конфликты"
    },
    {
        img: "/images/doctor.png",
        name: "Алия Курбанова",
        direction: "Психотерапевт",
        city: "Ташкент",
        experience: "8 лет",
        specialization: "тревожность, депрессия"
    }
];

export default function SpecialistSlider() {
    const settings = {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true,
        speed: 500
    };

    return (
        <div className="max-w-5xl mx-auto">
            {/*<h2 className="text-lg font-bold mb-6">Топ 3 специалиста недели</h2>*/}
            <Slider {...settings}>
                {specialists.map((spec, i) => (
                    <div key={i} className="flex justify-center">
                        <div className="max-w-3xl bg-[#F6F3F0] rounded-[30px] p-6 flex items-center space-x-6">
                            <img
                                src={spec.img}
                                alt={spec.name}
                                className="w-60 h-72 object-cover rounded-[20px]"
                            />
                            <div className="flex-1 relative">
                                <h2 className="text-xl font-bold mb-2">{spec.name}</h2>
                                <div className="space-y-1 text-sm">
                                    <p className="text-gray-400">Направление</p>
                                    <p className="text-gray-900 font-medium">{spec.direction}</p>

                                    <p className="text-gray-400 mt-2">Город</p>
                                    <p className="text-gray-900 font-medium">{spec.city}</p>

                                    <p className="text-gray-400 mt-2">Опыт</p>
                                    <p className="text-gray-900 font-medium">{spec.experience}</p>

                                    <p className="mt-3 text-gray-900">
                                        Специализация: {spec.specialization}
                                    </p>
                                </div>
                                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200 cursor-pointer">
                                    <span className="text-lg">›</span>
                                </div>
                                <button className="mt-5 bg-[#4B3A34] text-white px-8 py-2 rounded-lg hover:bg-[#3c2d28]">
                                    Записаться
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

import { useState } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Clinics() {
    const [search, setSearch] = useState("");

    const clinics = [
        {
            id: 1,
            name: 'Клиника «Баланс»',
            direction: 'Психотерапия, психология',
            description: [
                'Современный центр',
                'Предоставление и приказ речи.',
                'Обездвижение, остановка и учет.',
                'Медицинский опыт с экономики',
                'Учебной работы с применением',
                'распределенных диагностиков,',
                'ГИТЭО зависимостью',
                'Прибор, онлайн и фасада.',
                'Контролированию тел. Поддержка у',
                'детей в изданиях.'
            ],
            image: '/images/doctor.png',
        },
        {
            id: 2,
            name: 'Клиника «Здоровье»',
            direction: 'Психотерапия, психология',
            description: [
                'Современный подход',
                'Инновационные методики',
                'Комплексное лечение',
                'Индивидуальный подход'
            ],
            image: '/images/clinic.png',
        },
        {
            id: 3,
            name: 'Клиника «Надежда»',
            direction: 'Психотерапия, психология',
            description: [
                'Квалифицированные специалисты',
                'Современное оборудование',
                'Комфортные условия',
                'Эффективные методики'
            ],
            image: '/images/clinic.png',
        },
    ];

    const specialists = [
        { id: 1, name: 'Алия Курбанова', image: '/images/doctor.png' },
        { id: 2, name: 'Алия Курбанова', image: '/images/doctor.png' },
        { id: 3, name: 'Алия Курбанова', image: '/images/doctor.png' },
        { id: 4, name: 'Алия Курбанова', image: '/images/doctor.png' },
        { id: 5, name: 'Алия Курбанова', image: '/images/doctor.png' },
        { id: 6, name: 'Алия Курбанова', image: '/images/doctor.png' },
    ];

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Баланс..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            <h2 className="text-lg font-semibold mb-4">Топ 3 клиники</h2>
            <div className="relative px-10 rounded-3xl">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".clinic-next",
                        prevEl: ".clinic-prev",
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="mb-8"
                >
                    {clinics.map((clinic) => (
                        <SwiperSlide key={clinic.id}>
                            <div className="bg-white rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-200">
                                <img
                                    src={clinic.image}
                                    alt={clinic.name}
                                    className="w-full max-w-96 object-cover rounded-2xl"
                                />
                                <div className="flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="text-xl font-semibold">{clinic.name}</h3>
                                        <p className="text-sm text-gray-600 mt-1 mb-4">
                                            <span className="font-semibold">Преподаватель</span><br />
                                            {clinic.direction}
                                        </p>
                                        <div className="border-t border-gray-200 pt-4">
                                            <h4 className="font-semibold mb-2">Главное:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                {clinic.description.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="clinic-prev absolute top-1/2 left-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
                    <ChevronLeft size={18} />
                </div>
                <div className="clinic-next absolute top-1/2 right-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
                    <ChevronRight size={18} />
                </div>
            </div>

            <h2 className="text-lg font-semibold mt-12 mb-6 text-center">Ведущие специалисты клиники</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {specialists.map((sp) => (
                    <div
                        key={sp.id}
                        className="relative rounded-2xl overflow-hidden aspect-square"
                    >
                        <img
                            src={sp.image}
                            alt={sp.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                        {/* Text */}
                        <p className="absolute bottom-3 left-3 text-white text-sm font-light">{sp.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
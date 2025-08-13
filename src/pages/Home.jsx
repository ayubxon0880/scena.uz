import {Search} from "lucide-react";

export default function Home() {
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

    return (
        <div className="w-full">
            <section
                className="relative h-screen bg-cover bg-center flex items-center"
                style={{backgroundImage: "url('/images/bg-hero.png')"}}
            >
                <div className="max-w-6xl mx-40 px-4">
                    <div className="w-2/3 text-white">
                        <h1 className="text-6xl font-bold mb-4">
                            Найдите специалиста в области психического здоровья
                        </h1>
                        <p className="mb-6 text-lg">
                            На нашем сайте вы можете найти психиатра, психотерапевта, психолога или сексолога.
                            Используйте фильтры для уточнения поиска и ознакомьтесь с отзывами о специалистах.
                            Читайте статьи в нашем блоге и узнавайте больше о психическом здоровье.
                        </p>
                        <button className="px-6 py-3 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg font-medium">
                            Найти специалиста
                        </button>
                    </div>
                </div>

            </section>

            <section className="py-16" id="test">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold mb-4">Быстрый поиск</h2>
                    <br></br>
                    <div className="flex flex-wrap gap-3 justify-center mb-6">
                        {["язык", "город", "офлайн", "спец."].map((item, i) => (
                            <button
                                key={i}
                                className="px-14 py-3 rounded-2xl bg-[#d5beb0] text-white hover:bg-[#7A5240] transition"
                            >
                                {item}
                            </button>
                        ))}
                        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200">
                            <Search size={20}/>
                        </button>
                    </div>

                    <div className="flex items-center border rounded-lg overflow-hidden mb-8 mx-auto">
                        <input
                            type="text"
                            placeholder="сексолог Евгений"
                            className="flex-1 p-3 outline-none"
                        />
                        <div className="p-3 text-gray-500">
                            <Search size={20}/>
                        </div>
                    </div>

                    <h3 className="text-center text-3xl font-bold mb-4">Опишите ваше состояние</h3>
                    <div className="flex border rounded-lg overflow-hidden max-w-xl">
                        <input
                            type="text"
                            placeholder="Проблемы в отношениях"
                            className="flex-1 p-3 outline-none"
                        />
                        <div className="p-3 text-gray-500">
                            <Search size={20}/>
                        </div>
                    </div>

                    <br></br>

                    <h4 className="text-lg font-bold mb-4">частые запросы</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2 mb-12">
                        {[
                            "Тревога",
                            "Депрессия",
                            "Панические атаки",
                            "Страхи и фобии",
                            "Проблемы в отношениях",
                            "Выгорание",
                            "Самооценка",
                            "Проблемы с сексуальной жизнью",
                            "Детские травмы",
                            "Агрессия и раздражительность",
                        ].map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <h4 className="text-lg font-semibold mb-6 text-center">Лучшие специалисты недели</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialists.map((spec, i) => (
                            <div
                                key={i}
                                className="relative rounded-[20px] shadow hover:shadow-lg overflow-hidden"
                            >
                                <img
                                    src={spec.img}
                                    alt={spec.name}
                                    className="w-full h-96 object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <div className="text-white">
                                        <p className="text-lg font-bold">{spec.name}</p>
                                        <p className="text-sm">{spec.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6 text-center">контактная информация</h2>
                    <div className="flex flex-col gap-4 max-w-sm">
                        <h2 className="text-2xl font-bold text-center">номер телефона</h2>
                        <button className="px-6 py-4 bg-[#d5beb0] text-white rounded-lg font-medium w-full">
                            Позвонить
                        </button>
                        <h2 className="text-2xl font-bold text-center">эл. почта</h2>
                        <button className="px-6 py-4 bg-[#d5beb0] text-white rounded-lg font-medium w-full">
                            admin@psychotherapy.uz
                        </button>
                    </div>
                </div>
            </section>


            <section className="h-96 flex justify-center my-14">
                <div className="w-2/3 h-full rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://yandex.uz/map-widget/v1/-/CHtEeX9Z"
                        width="100%"
                        height="100%"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </section>




        </div>
    );
}

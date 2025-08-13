export default function AboutUs() {
    return (
        <section className="max-w-6xl mx-auto p-4 my-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm text-center md:text-left">
                {/* Title */}
                <h2 className="text-2xl font-semibold mb-6">О нас</h2>

                {/* Text content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Наш проект — это платформа для поиска специалистов в области психического здоровья.
                    Мы стремимся помочь людям найти квалифицированных специалистов, обеспечивая удобный
                    и надёжный поиск.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                    Наша миссия — поддержка психического здоровья и благополучия людей через доступ
                    к качественной помощи специалистов.
                </p>

                {/* Image */}
                <div className="flex mb-6">
                    <img
                        src="/images/about-us.png"
                        alt="О нас"
                        className="w-full max-w-md rounded-2xl object-cover"
                    />
                </div>

                {/* Button */}
                <div className="flex justify-start">
                    <button className="bg-[#d5beb0] hover:bg-[#a5beb0] text-white px-6 py-3 rounded-lg">
                        записаться на прием
                    </button>
                </div>
            </div>
        </section>
    );
}

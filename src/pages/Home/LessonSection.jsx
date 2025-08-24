export default function LessonsSection() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 md:mb-10">
                        Занятия
                    </h2>

                    <div className="space-y-8 md:space-y-10">
                        <div>
                            <h3 className="text-2xl sm:text-3xl mb-3">Индивидуальные занятия</h3>
                            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed">
                                Хотите научиться играть на гитаре, барабанах, петь или играть на
                                пианино? Индивидуальные занятия – это ваш путь к музыкальному
                                мастерству! Опытный преподаватель, персональная программа, гибкий
                                график и быстрый прогресс.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl sm:text-3xl mb-3">Групповые занятия</h3>
                            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed">
                                Каждый месяц мы устраиваем благотворительные концерты совместно
                                с фондами и организациями.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                        {/* Yellow Circle */}
                        <div className="absolute inset-0 rounded-full bg-yellow-400"></div>

                        {/* Image */}
                        <img
                            src="/images/lessons.png"
                            alt="Занятия"
                            className="relative z-10 max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

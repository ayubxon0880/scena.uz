export default function Contact() {
    return (
        <div id="contact">
            <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

                    {/* Chap blok */}
                    <div className="flex-1 flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Адрес</h2>
                            <p>
                                <a
                                    href="https://yandex.uz/maps/-/CLAUzULG"
                                    className="text-base sm:text-lg text-black hover:text-blue-500 transition-colors"
                                >
                                    Ташкент, ул. Махатмы Ганди, 44
                                </a>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                                Свяжитесь с нами
                            </h2>
                            <p>
                                <a
                                    href="tel:+998938778181"
                                    className="text-base sm:text-lg text-black hover:text-blue-500 transition-colors"
                                >
                                    +998 93 877 81 81
                                </a>
                            </p>
                        </div>

                        <img
                            src="/images/contact-hero.png"
                            alt="Contact"
                            className="max-w-xs sm:max-w-sm lg:max-w-md"
                        />
                    </div>

                    {/* O‘ng blok */}
                    <div className="flex-1">
                        <a href="https://yandex.uz/maps/-/CLAANGJW">
                            <img
                                src="/images/address.png"
                                alt="Map"
                                className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-xl"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

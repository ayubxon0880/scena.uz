export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 px-6">
                <div className="flex-1 flex flex-col justify-center space-y-8">
                    {/* Address */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Адрес</h2>
                        <p className="text-lg text-gray-300">
                            <a
                                href="https://yandex.uz/maps/-/CLAUzULG"
                                className="text-lg text-gray-300 hover:text-white transition-colors"
                            >
                                Ташкент, ул. Махатмы Ганди, 44
                            </a>
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">Свяжитесь с нами</h2>
                        <p>
                            <a
                                href="tel:+998938778181"
                                className="text-lg text-gray-300 hover:text-white transition-colors"
                            >
                                +998 93 877 81 81
                            </a>
                        </p>
                        <p>
                            <a
                                href="mailto:info@scena.uz"
                                className="text-lg text-gray-300 hover:text-white transition-colors"
                            >
                                info@scena.uz
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Scena. Все права защищены.
            </div>
        </footer>
    );
}

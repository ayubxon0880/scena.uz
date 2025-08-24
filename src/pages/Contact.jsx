export default function Contact() {

    return (
        <div id="contact">
            <section className="w-full bg-white py-12">
                <div className="max-w-6xl mx-auto flex items-stretch gap-12">
                    <div className="flex-1 flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-5xl font-bold mb-2">Адрес</h2>
                            <p>
                                <a href={"https://yandex.uz/maps/-/CLAUzULG"}
                                   className={"text-lg text-black hover:text-blue-500 transition-colors"}>
                                    Ташкент, ул. Махатмы Ганди, 44
                                </a>
                            </p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold mb-2">
                                Свяжитесь с нами
                            </h2>
                            <p>
                                <a href={"tel:+998938778181"} className={"text-lg text-black hover:text-blue-500 transition-colors"}>
                                    +998 93 877 81 81
                                </a>
                            </p>
                        </div>
                        <img
                            src="/images/contact-hero.png"
                            alt="Map"

                        />
                    </div>

                    <div className="flex-1">
                        <a href={"https://yandex.uz/maps/-/CLAANGJW"}>
                            <img
                                src="/images/address.png"
                                alt="Map"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

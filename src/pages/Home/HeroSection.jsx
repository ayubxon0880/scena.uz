export default function HeroSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left max-w-xl">
                <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
                    Сцена - <br /> найди свой звук
                </h1>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full"></div>

                <img
                    src="/images/hero2.png"
                    alt="Сцена персонаж"
                    className="relative z-10 w-full h-full object-contain"
                />
            </div>
        </section>
    );
}

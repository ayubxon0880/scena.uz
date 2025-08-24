export default function MainSection() {
    return (
        <section
            className="min-h-[60vh] flex items-center bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/images/hero.png')",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Музыка начинается здесь
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg">
                        Помогаем детям и взрослым раскрыть талант и полюбить музыку на всю жизнь
                    </p>
                    <a href={"https://n1221770.alteg.io/company/1167547/record-type?o="} className="bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-yellow-500 transition">
                        ЗАПИСАТЬСЯ
                    </a>
                </div>
            </div>
        </section>
    )
}

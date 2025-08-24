export default function ConcertsSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-12">
                Концерты
            </h2>

            <div className="mb-8">
                <img
                    src="/images/concert.png"
                    alt="Концерт"
                />
            </div>

            <p className="text-gray-700 text-2xl leading-relaxed mb-8 text-left">
                каждый месяц мы устраиваем благотворительные концерты совместно
                с фондами и организациями
            </p>

        </section>
    );
}

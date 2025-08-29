export default function CommunitySection() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-6">

                {/* Chap qism */}
                <div className="flex flex-col gap-6 text-center md:text-left max-w-md">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                        Присоединяйся <br />
                        к нашему <span className="text-yellow-400">сообществу</span>
                    </h2>
                    <a
                        href="https://t.me/+tPEECv6hU_VhNWIy"
                        className="mx-auto md:mx-0 w-48 sm:w-56 md:w-64 px-6 sm:px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        Перейти
                    </a>
                </div>

                {/* O‘ng qism */}
                <div className="relative bg-amber-300 rounded-full flex justify-center items-center w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-visible">
                    <img
                        src="/images/hero3.png"
                        alt="Mascot"
                        className="absolute w-[120%] sm:w-[130%] md:w-[140%] z-10"
                    />
                </div>
            </div>
        </section>
    );
}

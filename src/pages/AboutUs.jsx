
export default function CommunitySection() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex flex-col gap-4 text-center md:text-left max-w-md">
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                        Присоединяйся <br />
                        к нашему <span className="text-yellow-400">сообществу</span>
                    </h2>
                    <a href={"https://t.me/+tPEECv6hU_VhNWIy"} className="w-64 px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-600 transition">
                        перейти
                    </a>
                </div>

                <div className="relative bg-amber-300 rounded-full flex justify-center items-center w-72 h-72 md:w-96 md:h-96 overflow-visible">
                    <img
                        src="/images/hero3.png"
                        alt="Mascot"
                        className="absolute w-[110%] md:w-[120%] z-10"
                    />
                </div>
            </div>
        </section>
    );
}

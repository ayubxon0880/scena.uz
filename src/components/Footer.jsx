import { Instagram, Send } from "lucide-react"; // Send → Telegram ikonka

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#4C3837" }} className="text-white">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

                {/* 1. Logo va qisqa tavsif */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Mental Health</h2>
                    <p className="text-sm text-gray-300">
                        Мы помогаем людям заботиться о своём психическом здоровье и находить квалифицированных специалистов.
                    </p>
                </div>

                {/* 2. Tezkor linklar */}
                <div>
                    <h3 className="font-semibold mb-3">Навигация</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Главная</a></li>
                        <li><a href="/clinics" className="hover:underline">Клиники</a></li>
                        <li><a href="/specialists" className="hover:underline">Специалисты</a></li>
                        <li><a href="/community" className="hover:underline">Сообщество</a></li>
                        <li><a href="/about-us" className="hover:underline">О нас</a></li>
                    </ul>
                </div>

                {/* 3. Kontaktlar */}
                <div>
                    <h3 className="font-semibold mb-3">Контакты</h3>
                    <p className="text-sm text-gray-300">📍 Ташкент, Узбекистан</p>
                    <p className="text-sm text-gray-300">📞 +998 90 123 45 67</p>
                    <p className="text-sm text-gray-300">✉ info@mentalhealth.uz</p>

                    {/* Social media icons */}
                    <div className="flex space-x-4 mt-3">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://t.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                        >
                            <Send size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Pastki qismi */}
            <div className="border-t border-gray-500 text-center py-4 text-xs text-gray-300">
                © {new Date().getFullYear()} Mental Health. Все права защищены.
            </div>
        </footer>
    );
}

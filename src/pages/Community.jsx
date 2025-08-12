// src/pages/Community.jsx
import { useState } from "react";
import { Search } from "lucide-react";

export default function Community() {
    const [search, setSearch] = useState("");

    const communities = [
        {
            id: 1,
            name: "Точка опоры",
            direction: "Психотерапия, психология",
            city: "Ташкент",
            description:
                'Психотерапевтическое сообщество "Точка опоры" — объединение сертифицированных специалистов: психологов, психотерапевтов и коучей. Работаем в разных подходах — КПТ, гештальт, психоанализ. Регулярные супервизии и обучение внутри сообщества.',
            image: "/images/doctor.png",
        },
        {
            id: 2,
            name: "Точка опоры",
            direction: "Психотерапия, психология",
            city: "Ташкент",
            description:
                'Психотерапевтическое сообщество "Точка опоры" — объединение сертифицированных специалистов: психологов, психотерапевтов и коучей. Работаем в разных подходах — КПТ, гештальт, психоанализ. Регулярные супервизии и обучение внутри сообщества.',
            image: "/images/doctor.png",
        },
    ];

    const filtered = communities.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto p-4">
            {/* Search */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Поиск сообщества..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            <h2 className="text-xl font-semibold mb-4">Наши сообщества</h2>

            {/* Community Cards */}
            <div className="space-y-6">
                {filtered.map((c) => (
                    <div
                        key={c.id}
                        className="bg-gray-100 rounded-3xl p-4 flex flex-col md:flex-row items-start gap-6"
                    >
                        {/* Left Image */}
                        <img
                            src={c.image}
                            alt={c.name}
                            className="w-full md:w-64 h-48 object-cover rounded-lg"
                        />

                        {/* Right Content */}
                        <div className="flex flex-col justify-between h-full flex-1">
                            <div>
                                <h3 className="text-lg font-semibold">{c.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    <span className="font-semibold">Направление:</span>{" "}
                                    {c.direction}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Город:</span> {c.city}
                                </p>
                                <p className="text-sm text-gray-700 mt-3">{c.description}</p>
                            </div>

                            {/* Bottom Left Button */}
                            <button className="mt-4 bg-[#6B4226] text-white px-5 py-2 rounded-lg hover:bg-[#5A3620] transition self-start">
                                вступить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

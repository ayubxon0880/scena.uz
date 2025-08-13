import { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger va close iconlar

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Главная", href: "/" },
        { name: "Клиника", href: "/clinics" },
        { name: "Специалист", href: "/specialists" },
        { name: "Сообщество", href: "/community" },
        { name: "О нас", href: "/about" },
    ];

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-8 h-8"
                    />
                    <span className="text-sm font-medium leading-tight">
                        psycho <br />
                        therapy.uz
                    </span>
                </div>

                {/* Menu (Desktop) */}
                <div className="hidden md:flex space-x-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-800 text-sm hover:text-gray-500 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block text-gray-800 text-sm hover:text-gray-500 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

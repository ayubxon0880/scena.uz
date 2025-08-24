import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // hozirgi URL olish

    function isActive(path) {
        return location.pathname === path;
    }

    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
                    <img
                        src="/images/logo.png"
                        alt="Scene School of Music Logo"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex flex-1 justify-center space-x-10 text-gray-700 font-semibold text-lg">
                    <Link
                        to="/"
                        className={`${isActive("/") ? "text-blue-500" : "text-gray-700"} hover:text-blue-600`}
                    >
                        Главная
                    </Link>
                    <Link
                        to="/contact"
                        className={`${isActive("/contact") ? "text-blue-500" : "text-gray-700"} hover:text-blue-600`}
                    >
                        Контакты
                    </Link>
                    <Link
                        to="/about"
                        className={`${isActive("/about") ? "text-blue-500" : "text-gray-700"} hover:text-blue-600`}
                    >
                        Scene Community
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-700 text-3xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg flex flex-col items-center space-y-4 py-6 text-lg font-semibold">
                    <Link
                        to="/"
                        className={`${isActive("/") ? "text-blue-500" : "text-gray-700"} hover:text-blue-600`}
                        onClick={() => setIsOpen(false)}
                    >
                        Главная
                    </Link>
                    <Link
                        to="/contact"
                        className={`${isActive("/contact") ? "text-blue-500" : "text-gray-700"} hover:text-blue-600`}
                        onClick={() => setIsOpen(false)}
                    >
                        Контакты
                    </Link>
                    <Link
                        to="/about"
                        className={`${isActive("/about") ? "text-blue-500" : "text-gray-700"} hover:text-blue-600`}
                        onClick={() => setIsOpen(false)}
                    >
                        Scene Community
                    </Link>
                </div>
            )}
        </nav>
    );
}

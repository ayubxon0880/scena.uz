import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UsePageTracking() {
    const location = useLocation();

    useEffect(() => {
        if (!window.gtag) return;
        window.gtag("config", "G-QQY8REE433", {
            page_path: location.pathname + location.search,
        });
    }, [location]);
}
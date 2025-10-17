import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useScroll = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname.includes('/cv')) {
                setScrolled(window.scrollY > 60);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return {
        isNavbarLimitReached: scrolled
    };
}
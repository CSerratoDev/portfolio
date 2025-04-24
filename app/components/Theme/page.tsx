"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle () {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-sheme: dark').matches;

        const current = savedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', current === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
        setIsDark(!isDark);
    };

    return (
        <button onClick={toggleTheme} className="p-2 rounded border">
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}
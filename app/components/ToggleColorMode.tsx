"use client"
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";


const ToggleColorMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setIsDarkMode(true)
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [isDarkMode])

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )

}


export default ToggleColorMode

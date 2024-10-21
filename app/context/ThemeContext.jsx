"use client";

import { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext('light');

const getThemeFromLocalStorage = () => {
    if(typeof window !== "undefined"){
        const value= localStorage.getItem("theme");
        let system;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
            system = 'dark'
        } else {
            system = 'light'
        }
        return value || system;
    }
    return 'light';
}

export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState(null);

    const toggle = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme); // Update localStorage with the new theme
            return newTheme;
        });
    }

    useEffect(() => {
        const storedTheme = getThemeFromLocalStorage();
        setTheme(storedTheme);
    },[]);

    if (!theme) return null

    return (
        <ThemeContext.Provider value={{theme,toggle}}>
            <div className={theme !== 'light' ? 'dark' : ''}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
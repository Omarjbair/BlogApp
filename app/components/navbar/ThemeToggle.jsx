"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
    const {toggle} = useContext(ThemeContext);

    return (
        <div onClick={toggle} className="relative p-1 flex justify-between w-10 h-5 rounded-full bg-black dark:bg-darkTextColor dark:border cursor-pointer">
            <Image className="w-3 h-3" src='/moon.png' alt="moon icon" width={14} height={14}/>
            <Image className="w-3 h-3" src='/sun.png' alt="sun icon" width={14} height={14}/>
            <div className="absolute w-3 h-3 right-1 dark:left-1  top-1/2 translate-y-[-50%] rounded-full bg-white dark:bg-black"></div>
        </div>
    );
};

export default ThemeToggle;

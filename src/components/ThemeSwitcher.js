import { useEffect, useState } from "react";
import { useTheme } from "@nextui-org/use-theme";

import { SunFilledIcon, MoonFilledIcon } from "./icons";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();


    return (
        <button
            className=" w-auto h-auto bg-transparent rounded-lg flex items-center justify-center group-data-[selected=true]:bg-transparent !text-default-500 pt-px px-0 mx-0 hover:opacity-80"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <SunFilledIcon /> : <MoonFilledIcon />}
        </button>
    );
}

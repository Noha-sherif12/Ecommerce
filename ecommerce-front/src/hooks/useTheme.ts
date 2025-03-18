import { useAppDispatch, useAppSelector } from "@store/hooks";
import { toggleTheme } from "@store/theme/themeSlice"; 
import { useEffect } from "react";

const useTheme = () => {
    const mode = useAppSelector((state) => state.theme.mode); 
    const dispatch = useAppDispatch();

   
    const toggleThemeHandler = () => {
        dispatch(toggleTheme()); 
        localStorage.setItem("theme", mode === "light" ? "dark" : "light");
    };

   
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", mode);
    }, [mode]);

    return { mode,  toggleThemeHandler };
};

export default useTheme;
import { useAppDispatch } from "@store/hooks";
import { useTranslation } from "react-i18next";
import { setLanguage } from "@store/language/languageSlice"; 
import useLanguage from "@hooks/useLanguage";
import useTheme from "@hooks/useTheme";
import LightIcon from "@assets/svg/light.svg?react";
import DarkIcon from "@assets/svg/dark.svg?react";




const LanguageChange = () => {
    const dispatch = useAppDispatch();
    const { i18n } = useTranslation();
    const { language } = useLanguage();
    const { mode, toggleThemeHandler } = useTheme();

    const handleLanguageChange = (newLanguage: string) => {
        i18n.changeLanguage(newLanguage); 
        document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
        dispatch(setLanguage(newLanguage)); 
      };
    
  return (<>
   <div>
       {language === "ar" && (
          <button style={{marginInline: "5px"}} onClick={() => handleLanguageChange("en")} className="btn btn-dark">
            English
          </button>
        )}
        {language === "en" && (
          <button style={{marginInline: "5px"}} onClick={() => handleLanguageChange("ar")} className="btn btn-dark">
            العربية
          </button>
        )}
         <button
                style={{border: "none", marginInline: "5px", background: mode === "dark" ? "black" : "white", color: mode === "dark" ? "white" : "black" }}
                onClick={() => toggleThemeHandler()}
                className="btn"
            >
                {mode === "dark" ? <LightIcon/> : <DarkIcon/>}
            </button>
    </div>
  </>
   
  )
}

export default LanguageChange

import { useEffect } from "react";
import { useAppSelector } from "@store/hooks";
import { RootState } from "@store/index";
import i18n from "i18next";

const useLanguage = () => {
  const language = useAppSelector((state: RootState) => state.language.language);
 

  
  useEffect(() => {
   
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

   
  }, [language]);

  return { language};
};

export default useLanguage;
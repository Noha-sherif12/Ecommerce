import { useTranslation } from 'react-i18next';
import styles from "./styles.module.css"




const { footerBottom } = styles
const Footer = () => {
    const [t] = useTranslation();
    return (<>
        <div className={footerBottom}>{t("footer.footerEnd")} </div>
    </>

    );
}

export default Footer;
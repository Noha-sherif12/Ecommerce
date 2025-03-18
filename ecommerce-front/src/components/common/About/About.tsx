import { Link } from 'react-router-dom';
import FacebookIcon from "@assets/svg/facebook.svg?react";
import InstagramIcon from "@assets/svg/instagram.svg?react";
import TwitterIcon from "@assets/svg/twitter.svg?react";
import LinkedIcon from "@assets/svg/linkedin.svg?react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css"



const { aboutContainer, aboutColumn, socialIcons } = styles
const About = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className={aboutContainer} style={{backgroundColor: "#c3c314"}}>
            <div className={aboutColumn}>
                <h4>{t("about.links")}</h4>
                <ul>
                    <li><Link to="/">{t("about.home")}</Link></li>
                    <li><Link to="#">{t("about.shop")}</Link></li>
                    <li><Link to="/about-us">{t("about.about")}</Link></li>
                    <li><Link to="#">{t("about.contact")}</Link></li>
                    <li><Link to="#">{t("about.FAQ")}</Link></li>
                </ul>
            </div>


            <div className={aboutColumn}>
                <h4>{t("about.contact")}</h4>
                <p>{t("about.email")}: support@yourapp.com</p>
                <p>{t("about.phone")}: +1 234 567 890</p>
                <p>{t("about.address")}</p>
            </div>


            <div className={aboutColumn}>
                <h4>{t("about.popularCategories")}</h4>
                <ul>
                    <li><Link to="/categories/products/men">{t("about.men")}</Link></li>
                    <li><Link to="/categories/products/women">{t("about.women")}</Link></li>
                    <li><Link to="/categories/products/kids">{t("about.kids")}</Link ></li>
                    <li><Link to="/categories/products/baby">{t("about.baby")}</Link ></li>
                    <li><Link to="/categories/products/sport">{t("about.sport")}</Link></li>
                </ul>
            </div>

            <div className={aboutColumn}>
                <h4>{t("about.followUs")}</h4>
                <div className={socialIcons}>
                    <p><FacebookIcon /> {t("about.facebook")}</p> 
                    <p><InstagramIcon /> {t("about.instagram")}</p>
                    <p><TwitterIcon /> {t("about.twitter")}</p>
                    <p><LinkedIcon /> {t("about.linkedIn")}</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default About;

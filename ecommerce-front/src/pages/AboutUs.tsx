import About from "@components/common/About/About";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const style = {  backgroundColor: "#483e3e", padding: "20px", width: "60%", margin: "auto", marginBottom: "20px", color:"white"}
  const { t } = useTranslation();
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px"}}>{t("about.title")}</h1>
      <p style={style}>
      {t("about.description")}
      </p>
      <About />
    </>
  );
};

export default AboutUs;

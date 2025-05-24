import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

type ProductInfoProps = {
  title: string;
  title_ar: string;
  img: string;
  price: number;
  quantity?: number;
  direction?: "row" | "column";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const ProductInfo = ({
  title,
  title_ar,
  img,
  price,
  quantity,
  direction = "row",
  children,
  style,
}: ProductInfoProps) => {
  const [t, i18n] = useTranslation();

  return (
    <div className={`${styles[`product-${direction}`]}`} style={style}>
      <div className={`${styles[`productImg-${direction}`]}`}>
        <img className=" mx-2" src={img} alt={title} />
      </div>
      <div className={`${styles[`productInfo-${direction}`]}`}>
        <h2 title={title}>
          {i18n.language == "ar" && title_ar}
          {i18n.language == "en" && title}
        </h2>
        <h3>
          {price.toFixed(2)} {t("products.currency")}
        </h3>
        {quantity && <h3>Total Quantity: {quantity}</h3>}
        {quantity && <h3>Total Price: {(quantity * price).toFixed(2)}</h3>}

        {children}
      </div>
    </div>
  );
};

export default ProductInfo;

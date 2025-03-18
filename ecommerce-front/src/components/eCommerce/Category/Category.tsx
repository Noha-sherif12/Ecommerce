import { Link } from "react-router-dom";
import { TCategory } from '@types';
import styles from "./styles.module.css";
import { useTranslation } from 'react-i18next';

const { category, categoryImg, categoryTitle } = styles;



const Category = ({title_en, title_ar, img, prefix} : TCategory) => {

  const { i18n } =  useTranslation();
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
      <div className={categoryImg}>
        <img
          src={img}
          alt={title_en}
        />
      </div>
      <h4 className={categoryTitle}>
        {i18n.language == 'ar' && title_ar}
        {i18n.language == 'en' && title_en}
      </h4>
      </Link>
      
    </div>
  );
};

export default Category;
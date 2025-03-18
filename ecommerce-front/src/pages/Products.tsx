import useProducts from "@hooks/useProducts"
import { Loading } from "@components/feedback"
import { Product } from "@components/eCommerce"
import { GridList, Heading } from "@components/common"
import { TProduct } from "@types"
import { useTranslation } from "react-i18next";


const Products = () => {
  const { t , i18n } = useTranslation();
  const { loading, error, productsFullInfo, records } = useProducts();
  const categoryName =
  i18n.language === "ar"
    ? `${t("products.products")} ${records?.[0]?.cat_prefix_ar}`
    : `${records?.[0]?.cat_prefix?.toUpperCase()} ${t("products.products")}`;

  return (
    <>
      <Heading title={categoryName}/>
        <Loading status= {loading} error={error} type="product">
          <GridList<TProduct> 
          emptyMessage = 'There are no products'
          records={productsFullInfo} renderItem={(record) => <Product {...record} />}/>
         
        </Loading>
   
    </>
  )
}

export default Products

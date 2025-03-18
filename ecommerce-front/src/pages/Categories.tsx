import { GridList, Heading } from "@components/common"
import useCategories from "@hooks/useCategories"
import { Category } from "@components/eCommerce"
import { Loading } from "@components/feedback"
import { Container } from "react-bootstrap"
import { TCategory } from "@types"
import { useTranslation } from 'react-i18next';



const Categories = () => {
  const { loading, error, records } = useCategories();
  const {t } = useTranslation();
  return (
    <>
    <Heading title={t("categories.title")}/>
    <Container>
        <Loading status= {loading} error={error} type="category">
          <GridList<TCategory>
            emptyMessage='There are no categories'
            records={records} renderItem={(record) => <Category {...record}/>}/>
        </Loading>
    </Container>
    
    </>
  )
}

export default Categories

import { Loading } from "@components/feedback"
import useWishlist from "@hooks/useWishlist"
import { Product } from "@components/eCommerce"
import { GridList, Heading } from "@components/common"
import { TProduct } from "@types"



const Wishlist = () => {
  const {records, loading, error} = useWishlist();


  return (
    <>
      <Heading title="Your Wishlist"/>
      <Loading status= {loading} error={error} type="product">
          <GridList<TProduct> 
          emptyMessage = 'Your wishlist is empty'
          records={records} renderItem={(record) => <Product {...record} />}/>
         
        </Loading>
   
      
    </>
  )
}

export default Wishlist

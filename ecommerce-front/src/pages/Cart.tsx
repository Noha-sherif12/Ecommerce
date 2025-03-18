import { Heading } from "@components/common"
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce"
import { Loading, LottieHandler } from "@components/feedback"
import useCart from "@hooks/useCart"



const Cart = () => {
  const {  loading, error, products, changeQuantityHandler, userAccessToken, removeItemHandler, placeOrderStatus } = useCart()
   
  return (
    <>
       <Heading title="Cart" />
       <Loading status={loading} error={error} type="cart">
        {products.length ? (
            <>
            <CartItemList products={products}
       changeQuantityHandler={changeQuantityHandler}
       removeItemHandler={removeItemHandler}/>
       <CartSubtotalPrice products={products} userAccessToken={userAccessToken}/>
            </>
        ): (
          placeOrderStatus === "succeeded" ? (
            <LottieHandler message="Your order has been placed successfully" type="success"/>
          ) : (
            <LottieHandler message="Your cart is empty" type="empty"/>
          )
        )}
        
        
    
       </Loading>
      
    </>
  )
}

export default Cart

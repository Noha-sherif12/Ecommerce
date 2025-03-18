import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { TProduct } from "@types";
import { addToCart } from "@store/cart/cartSlice";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { Button, Spinner, Modal } from "react-bootstrap";
import ProductInfo from "../ProductInfo/ProductInfo";
import { useTranslation } from 'react-i18next';

import styles from "./styles.module.css";
import toast from "react-hot-toast";
const { maximumNotice, wishlistBtn } = styles;

const Product = memo(
  ({
    id,
    title,
    title_ar,
    price,
    img,
    max,
    quantity,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [t, i18n ] = useTranslation();
    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      if (!isBtnDisabled) {
        return;
      }

      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);

      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      toast.success(t("messages.addedSuccess"));

      dispatch(addToCart(id));

      setIsBtnDisabled(true);
    };

    const likeToggleHandler = () => {
      if (isAuthenticated) {
        if (!isLoading) {
          setIsLoading(true);
          dispatch(actLikeToggle(id))
            .unwrap()
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
        }
      } else {
        setShowModal(true);
      }
    };

    return (
      <>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You need to login first to add this item to your wishlist.
          </Modal.Body>
        </Modal>
        <ProductInfo  title={i18n.language === 'ar' ? title_ar : title}  price={price} img={img}>
          <div className={wishlistBtn} onClick={likeToggleHandler}>
            {isLoading ? (
              <Spinner animation="border" size="sm" variant="primary" />
            ) : isLiked ? (
              <LikeFill />
            ) : (
              <Like />
            )}
          </div>
          <p className={maximumNotice}>
            {quantityReachedToMax
              ? "you reached to the limit "
              : t("products.noOfItems", { number: currentRemainingQuantity })}
          </p>
          <Button
            variant="info"
            style={{ color: "white", width: "100%" }}
            onClick={addToCartHandler}
            disabled={isBtnDisabled || quantityReachedToMax}
          >
            {isBtnDisabled ? (
              <>
                <Spinner animation="border" size="sm" />
                Loading...
              </>
            ) : (
              t("products.addToCart")
            )}
          </Button>
        </ProductInfo>
      </>
    );
  }
);

export default Product;

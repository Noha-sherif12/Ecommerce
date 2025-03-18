import { memo } from "react";
import { TProduct } from "@types";
import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import ProductInfo from "../ProductInfo/ProductInfo";
import { useTranslation } from 'react-i18next';

const { cartItem, cartItemSelection } = styles;

type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    title_ar,
    img,
    price,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
  }: CartItemProps) => {
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option key={quantity} value={quantity}>
            {quantity}
          </option>
        );
      });

      const [ t, i18n ]= useTranslation();
    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
    };

    return (
      <div className={cartItem}>
        <ProductInfo title={i18n.language === 'ar' ? title_ar : title} price={price} img={img} direction="column" >
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
            onClick={() => removeItemHandler(id)}
          >
            {t("cart.delete")}
          </Button>
        </ProductInfo>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">{t("cart.quantity")}</span>
          <Form.Select value={quantity} onChange={changeQuantity}>
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;

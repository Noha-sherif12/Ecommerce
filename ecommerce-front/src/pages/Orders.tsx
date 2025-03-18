import { Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { Table, Modal } from "react-bootstrap";
import { ProductInfo } from "@components/eCommerce";
import { useTranslation } from "react-i18next";
import useOrders from "@hooks/useOrders";

const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  } = useOrders();

  const { t } = useTranslation();

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{t("orders.modalHeading")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
              title={el.title}
              title_ar={el.title_ar}
              price={el.price}
              img={el.img}
              key={el.id}
              quantity={el.quantity}
              direction="column"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>
      <Heading title={t("orders.myOrder")}/>
      <Loading status={loading} error={error} type="category">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{t("orders.orderNumber")}</th>
              <th>{t("orders.items")}</th>
              <th>{t("orders.total")}</th>
            </tr>
          </thead>

          <tbody>
            {orderList.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>
                  {el.items.length} {t("orders.item")}
                  {"/"}
                  <span
                    onClick={() => viewDetailsHandler(el.id)}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {t("orders.productDetails")}
                  </span>
                </td>
                <td>{el.subtotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Loading>
    </>
  );
};

export default Orders;

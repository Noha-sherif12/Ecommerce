import { Row, Col, ListGroup } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next";

const ProfileLayout = () => {
  const {t } = useTranslation();
  return (
    <>
      <Row>
        <Col md={3}>
            <ListGroup>
                <ListGroup.Item as={NavLink} to="" end>{t("account.title")}</ListGroup.Item>
                <ListGroup.Item as={NavLink} to="orders">{t("orders.title")}</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col>
            <Outlet/>
        </Col>
      </Row>
    </>
  )
}

export default ProfileLayout

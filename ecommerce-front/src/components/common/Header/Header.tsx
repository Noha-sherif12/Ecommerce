import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogout } from "@store/auth/authSlice";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import LanguageChange from "../LanguageChange/LanguageChange";

const { headerContainer, headerLogo, headerLanguage} = styles;

const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
 


  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  
  

  return (
    <header>
      <div className={headerContainer} style={{backgroundColor: "#c3c314"}}>
        <h1 className={headerLogo}>{t("header.title")}</h1>
        <div className={headerLanguage}>
        <HeaderLeftBar />
        <LanguageChange/>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                {t("navbar.categories")}
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                {t("navbar.about")}
              </Nav.Link>
            </Nav>
            <Nav>
              {!accessToken ? (
                <>
                  <Nav.Link as={NavLink} to="login">
                    {t("navbar.login")}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="register">
                    {t("navbar.register")}
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={`${t("navbar.welcome")}: ${user?.firstName} ${user?.lastName}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="profile" end>
                    {t("navbar.profile")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="profile/orders">
                    {t("navbar.order")}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/" onClick={() => dispatch(authLogout())}>
                    {t("navbar.logout")}
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
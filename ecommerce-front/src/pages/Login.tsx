import { Heading } from "@components/common";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Input } from "@components/Form";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLogin from "@hooks/useLogin";

const Login = () => {
  const { t } = useTranslation();
  const {
    error,
    loading,
    accessToken,
    register,
    handleSubmit,
    formErrors,
    submitForm,
    searchParams,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title={t("login.title")} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="success">
              {t("login.loginMessage")}
            </Alert>
          )}
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, please login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label={t("login.email")}
              name="email"
              register={register}
              error={formErrors.email?.message}
            />
            <Input
              type="password"
              label={t("login.password")}
              name="password"
              register={register}
              error={formErrors.password?.message}
            />
            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner>Loading ...
                </>
              ) : (
                t("login.submit")
              )}
            </Button>
            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;

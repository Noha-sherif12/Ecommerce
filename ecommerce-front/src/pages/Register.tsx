import useRegister from "@hooks/useRegister";
import { Heading } from "@components/common";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { Input } from "@components/Form";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const { loading, error, accessToken,  register, formErrors, emailOnBlurHandler, emailAvailabilityStatus,
    handleSubmit, submitForm } = useRegister();
  

    if (accessToken){
      return <Navigate to="/" />
    } 

  return (
    <>
      <Heading title={t("register.title")} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label={t("register.firstName")}
              name="firstName"
              register={register}
              error={formErrors.firstName?.message}
            />
            <Input
              label={t("register.lastName")}
              name="lastName"
              register={register}
              error={formErrors.lastName?.message}
            />
            <Input
              label={t("register.email")}
              name="email"
              register={register}
              error={
                formErrors.email?.message
                ? formErrors.email?.message
                : emailAvailabilityStatus === "notAvailable"
                ? "This email is already in use."
                : emailAvailabilityStatus === "failed"
                ? "Error from the server."
                : ""
              }
              onBlur={emailOnBlurHandler}
              formText={
                emailAvailabilityStatus === "checking"
                  ? "we're currently checking the availability of this email addres. Please wait a moment "
                  : " "
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use"
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            />
            <Input
              label={t("register.password")}
              name="password"
              register={register}
              type="password"
              error={formErrors.password?.message}
            />
            <Input
              label={t("register.confirmPassword")}
              name="confirmPassword"
              register={register}
              type="password"
              error={formErrors.confirmPassword?.message}
            />
            <Button
              className=" mb-5"
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={(emailAvailabilityStatus === "checking" ? true : false )|| loading === "pending"}
            >
              {loading === "pending" ? (
                <>
                <Spinner animation="border" size="sm"></Spinner>
                Loading ... 
                </>
              ) : t("register.submit")}
            </Button>
            {error && ( <p style={{ color: "#DC3545", marginTop: "10px"}}>{error}</p>)}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;

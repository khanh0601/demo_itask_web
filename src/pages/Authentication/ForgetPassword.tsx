import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userForgetPassword,userForgetPasswordFlagNew } from "../../slices/thunks";
import { createSelector } from "reselect";

const ForgetPasswordPage = (props : any) => {
  const dispatch : any = useDispatch();

  const validation : any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your  Email"),
    }),
    onSubmit:async (values) => {
    const data= await dispatch(userForgetPassword(values.email, props.history));
   if(data=="Success"){
   window.location.href='/verify-email?email='+values.email;
   }
    }
  });


  const selectLayoutState = (state : any) => state.ForgetPassword;
  const selectLayoutProperties = createSelector(
    selectLayoutState,
    (state) => ({
      forgetError: state.forgetError,
      forgetSuccessMsg: state.forgetSuccessMsg,
    })
  );

  // Inside your component
  const {
    forgetError, forgetSuccessMsg
  } = useSelector(selectLayoutProperties);
  useEffect(() => {
    if (forgetError) {
      setTimeout(() => {
          dispatch(userForgetPasswordFlagNew());
      }, 2000);
  }
  },[forgetSuccessMsg,forgetError])
  document.title = "Reset Password ";
  return (
      <div className="auth-page-content mt-lg-5">

        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="mt-4">

                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Forgot Password?</h5>

                    <i className="ri-mail-send-line display-5 text-success mb-3"></i>

                  </div>

                  <Alert className="border-0 alert-warning text-center mb-2 mx-2" role="alert">
                    Enter your email and instructions will be sent to you!
                  </Alert>
                  <div className="p-2">
                    {forgetError && forgetError ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {forgetError}
                      </Alert>
                    ) : null}
                    {forgetSuccessMsg ? (
                      <Alert color="success" style={{ marginTop: "13px" }}>
                        {forgetSuccessMsg}
                      </Alert>
                    ) : null}
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="mb-4">
                        <Label className="form-label">Email </Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email "
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                        ) : null}
                      </div>

                      <div className="text-center mt-4">
                        <button className="btn btn-success w-100" type="submit">Send Reset Link</button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>

              

            </Col>
          </Row>
        </Container>
      </div>
  );
};

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);

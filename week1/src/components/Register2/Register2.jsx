import React from "react";
import "./Register2.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidate } from "../../utils/loginValidate";
function Register2() {
  return (
    <div className="container-register2">
      <div className="register2">
        <h2>Register</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidate}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className="input-group">
              <Field name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="input-group">
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit">Register</button>
          </Form>
        </Formik>
        <p>
          Don't have an account? <span>Login</span>
        </p>
        <div className="wrapper">
          <div className="close">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register2;

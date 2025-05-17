import React from "react";
import "./Login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidate } from "../../utils/loginValidate";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container-login">
      <div className="login">
        <h2>Login</h2>
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
            <div className="input-field" >
              <Field name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div 
              className="input-field">
            <Field
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
        {/* <form action="">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form> */}
        {/* <button>Login</button> */}
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/register2">Register</Link>
          </span>
        </p>
        <div className="wrapper">
          <Link to="/">
            <div className="close">
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

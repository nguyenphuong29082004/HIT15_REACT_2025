import React from "react";
import "./Login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidate } from "../../utils/loginValidate";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {


  const navigate = useNavigate();


  return (
    <div className="container-login">
      <div className="login">
        <h2>Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={loginValidate}
          onSubmit={async(values) => {
            try {
              const res = await axios.post('https://reqres.in/api/login', values, {
                headers:{
                  'x-api-key':'reqres-free-v1'
                }
              })
              console.log(res)
              if(res.status == 200){
                navigate('/home')
              }
              
            } catch (error) {
              console.log(error)
            }
            
            
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            
          }}
        >
          <Form>
            <div className="input-field" >
              <Field name="email" id="email" placeholder="Email" />
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
            <button type="submit">Dang nhap</button>
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
          <Link to="/home">
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


// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }
import React from "react";
import "./Register2.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidate } from "../../utils/loginValidate";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

function Register2() {
   const navigate = useNavigate();
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
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await axios.post('https://reqres.in/api/register', values, {
                headers: {
                  'x-api-key': 'reqres-free-v1'
                }
              });
          
              console.log(res);
          
              if (res.status === 200) {
                // Lưu token nếu cần
                localStorage.setItem('token', res.data.token);
          
                // Điều hướng về trang chủ
                navigate('/login');
              }
            } catch (error) {
              console.error('Lỗi đăng nhập:', error);
              alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản hoặc mật khẩu.');
            } finally {
              setSubmitting(false);
            }
          }}
          
        >
          <Form>
            <div className="input-group">
              <Field name="email" placeholder="Email" className="input-group" />
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
          You have an account?{" "}
          <span>
            <Link to="/login">Login</Link>
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

export default Register2;

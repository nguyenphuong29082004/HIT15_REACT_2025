import React from 'react';
import { ErrorMessage, Field, Form, useFormik, Formik } from 'formik';
import { loginValidate } from '../../../utils/loginValidate';
import { boolean } from 'yup';

// const validate = values => {
//    const errors = {};

//    if (!values.email) {
//      errors.email = 'Required';
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email = 'Invalid email address';
//    }

//    if(values.password.length < 6){
//         errors.password = "Nhap tu 6 ky tu tro len"
//    }
   
//    return errors;
//  };

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: "",
      name: "",
      confirmPassword: "",
    },
    validationSchema: loginValidate,
    onSubmit: values => {
      console.log(values);
    },
  });

  //console.log(formik);

  return (
    // <form onSubmit={formik.handleSubmit}>

    // <div>
    //   <label htmlFor="email">Email Address</label>
    //   <input
    //     id="email"
    //     name="email"
    //     type="text"
    //     onChange={formik.handleChange}
    //     value={formik.values.email}
    //     //có thể viết gọn bỏ trường name, onChange, value, onBlur, ... bằng
    //     // {...formik.getFieldProps('email')}
    //   />
    // </div>
    // {
    //   formik.touched.email && formik.errors.email
    //   ?
    //   <div>{formik.errors.email}</div>
    //   :
    //   null
    // }
      

    // <div>
    //     <label htmlFor="password">Password</label>
    //     <input type="password"
    //     id='password'
    //     name='password'
    //     onChange={formik.handleChange}
    //     value={formik.values.password} />
    //     {
    //         formik.touched.password && formik.errors.password
    //         ?
    //         <div>{formik.errors.password}</div>
    //         : 
    //         null
    //     }
    // </div>
    // <button type="submit">Submit</button>
    // </form>
    <Formik
        initialValues={{name: "", email: '', password:"", confirmPassword: "", checkbox: false}}
        validationSchema={loginValidate}
        onSubmit={(values,{setSubmitting}) => {
            setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        }}
    >
        <Form>
            <div>
                <label htmlFor="name">Ho va ten: </label>
                <Field name="name" type="text"/>
                <ErrorMessage name='name'/>
                <br />
                <label htmlFor="email">Email: </label>
                <Field name="email" type="email"/>
                <ErrorMessage name="email"/>
                <br />
                <label htmlFor="password">Password: </label>
                <Field name="password" type="password"/>
                <ErrorMessage name="password"/>   
                <br />
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <Field name="confirmPassword" type="password"/>
                <ErrorMessage name="confirmPassword"/>   
                <br />
                <Field name="checkbox" type="checkbox"/>
                <span> Chap nhan dieu khoan</span>
                <br/>
                <ErrorMessage name="checkbox" component="span" style={{ color: 'red' }}/>
            </div>
            <button type="submit">Submit</button>
            

        </Form>

    </Formik>
  );
};
export default SignupForm
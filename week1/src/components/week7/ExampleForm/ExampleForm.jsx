import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../../utils/validationSchema";



function ExampleForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        startDate: "",
        endDate: "",
        minPeople: "",
        maxPeople: "",
        receiveGift: false,
        giftNote: "",
        role: "",
        adminCode: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <h3>1. Xác nhận mật khẩu</h3>
        <label>Tên:</label>
        <Field name="name" />
        <ErrorMessage name="name" component="div" style={{ color: 'red' }} /><br />

        <label>Email:</label>
        <Field name="email" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} /><br />

        <label>Mật khẩu:</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} /><br />

        <label>Nhập lại mật khẩu:</label>
        <Field name="confirmPassword" type="password" />
        <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} /><br />

        <h3>2. So sánh ngày bắt đầu / kết thúc</h3>
        <label>Ngày bắt đầu:</label>
        <Field name="startDate" type="date" />
        <ErrorMessage name="startDate" component="div" style={{ color: 'red' }} /><br />

        <label>Ngày kết thúc:</label>
        <Field name="endDate" type="date" />
        <ErrorMessage name="endDate" component="div" style={{ color: 'red' }} /><br />

        <h3>3. So sánh số lượng tối thiểu / tối đa</h3>
        <label>Số người tối thiểu:</label>
        <Field name="minPeople" type="number" />
        <ErrorMessage name="minPeople" component="div" style={{ color: 'red' }} /><br />

        <label>Số người tối đa:</label>
        <Field name="maxPeople" type="number" />
        <ErrorMessage name="maxPeople" component="div" style={{ color: 'red' }} /><br />

        <h3>4. Checkbox ảnh hưởng đến ghi chú</h3>
        <label>
          <Field type="checkbox" name="receiveGift" /> Nhận quà
        </label><br />
        <label>Ghi chú quà tặng:</label>
        <Field name="giftNote" />
        <ErrorMessage name="giftNote" component="div" style={{ color: 'red' }} /><br />

        <h3>5. Vai trò ảnh hưởng đến mã truy cập</h3>
        <label>Vai trò:</label>
        <Field as="select" name="role">
          <option value="">-- Chọn --</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Field>
        <ErrorMessage name="role" component="div" style={{ color: 'red' }} /><br />

        <label>Mã truy cập (chỉ dành cho Admin):</label>
        <Field name="adminCode" />
        <ErrorMessage name="adminCode" component="div" style={{ color: 'red' }} /><br />

        <button type="submit">Gửi</button>
      </Form>
    </Formik>
  );
}

export default ExampleForm;

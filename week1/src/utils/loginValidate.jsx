import * as Yup from 'yup'
export const loginValidate = () => Yup.object({
    name: Yup.string()
    .trim()
    .required("Name la bat buoc"),
    

    email: Yup.string()
    .email('email ko hop le')
    .required("Email la bat buoc"),

    password: Yup.string()
    .min(6, 'It nhat 6 ky tu')
    .max(12, "Nhieu nhat 12 ky tu")
    .required("Mat khau la bat buoc"),

    confirmPassword:Yup.string()
    .oneOf([Yup.ref("password"),null], "Mat khau khong khop")
    .required("Xac nhan mat khau la bat buoc"),

    checkbox: Yup.boolean()
    .oneOf([true], "Phai dong y dieu khoan"),
}) 
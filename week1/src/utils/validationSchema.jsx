import * as Yup from 'yup'
export const validationSchema = Yup.object({
  name: Yup.string().required("Tên là bắt buộc"),

  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),

  password: Yup.string().min(6, "Mật khẩu phải ít nhất 6 ký tự").required("Mật khẩu là bắt buộc"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
    .required("Xác nhận mật khẩu là bắt buộc"),

  startDate: Yup.date()
    .required("Ngày bắt đầu là bắt buộc"),

  endDate: Yup.date()
    .min(Yup.ref("startDate"), "Ngày kết thúc phải sau ngày bắt đầu")
    .required("Ngày kết thúc là bắt buộc"),

  minPeople: Yup.number()
    .required("Số người tối thiểu là bắt buộc"),

  maxPeople: Yup.number()
    .min(Yup.ref("minPeople"), "Số người tối đa phải lớn hơn hoặc bằng tối thiểu")
    .required("Số người tối đa là bắt buộc"),

//   receiveGift: Yup.boolean(),

//   giftNote: Yup.string().when("receiveGift", {
//     is: true,
//     then: Yup.string().required("Vui lòng ghi chú quà tặng"),
//     otherwise: Yup.string().notRequired(),
//   }),

//   role: Yup.string().required("Vai trò là bắt buộc"),

//   adminCode: Yup.string().when("role", {
//     is: "admin",
//     then: Yup.string().required("Admin cần nhập mã truy cập"),
//     otherwise: Yup.string().notRequired(),
//   }),
giftNote: Yup.string().when("receiveGift", {
    is: (val) => val === true,
    then: (schema) => schema.required("Vui lòng ghi chú quà tặng"),
    otherwise: (schema) => schema.notRequired(),
  }),
  
  adminCode: Yup.string().when("role", {
    is: (val) => val === "admin",
    then: (schema) => schema.required("Admin cần nhập mã truy cập"),
    otherwise: (schema) => schema.notRequired(),
  }),
  
});
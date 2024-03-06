import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("Required!"),
  password: Yup.string()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars!")
    .required("Required!"),
  userName: Yup.string().required("Required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required!"),
});

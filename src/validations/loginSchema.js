import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  Email: Yup.string().email("Wrong format!").required("Required!"),
  Password: Yup.string()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars!")
    .required("Required!"),
});

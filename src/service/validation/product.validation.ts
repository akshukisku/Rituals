import * as yup from "yup"


export const productSchema = yup.object({
  name: yup.string().required("Product name is required"),

  description: yup
    .string()
    .required("Product description is required"),

  price: yup
    .string()
    .required("Price is required"),

  mrp: yup
    .string()
    .required("MRP is required"),
});
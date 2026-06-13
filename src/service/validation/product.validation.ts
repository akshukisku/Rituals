import * as yup from "yup";

export const productSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
  mrp: yup.string().required(),
  image: yup.mixed<File | string>().nullable().defined(),
  category: yup.string().optional().default(""),
  isFeatured: yup.boolean().optional().default(false),
});
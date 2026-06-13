import type { ProductForm } from "../../typescript/type/product.type";
import type { DynamicInputProps } from "../../typescript/type/component.type";

export const ProductInputField: Array<Omit<DynamicInputProps<ProductForm>, "register" | "errors">> = [
    {
        name: "name",
        label: "Enter Product Name",
        type: "text",
        required: true,
    },
    {
        name: "description",
        label: "Enter Product Description",
        type: "text",
        required: true,
    },
    {
        name: "price",
        label: "Enter Price",
        type: "text",
        required: true,
    },
    {
        name: "mrp",
        label: "Enter MRP",
        type: "text",
        required: true,
    },
];

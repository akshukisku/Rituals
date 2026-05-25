// import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";

import { Box } from "@mui/material";
import { gifts } from "../../service/json/rituals.data";
import { DeleteIcon, Edit } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/useredux";
import {
  setDialogClose,
  setDialogOpen,
} from "../../store/slices/product.slice";
import { ProductInputField } from "../../service/json/product.inputfield";
import DynamicInput from "../../components/DynamicInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../service/validation/product.validation";
import type { ProductPayLoad } from "../../typescript/interface/product.interface";

const Products = () => {
  const { dialog } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductPayLoad>({
    resolver: yupResolver(productSchema),
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography variant="h5">Products</Typography>
        <Button
          variant="contained"
          sx={{ color: "black" }}
          onClick={() => dispatch(setDialogOpen())}
        >
          Add
        </Button>
        <Dialog open={dialog.open} onClose={() => dispatch(setDialogClose())}>
          <DialogTitle>{dialog.isSelectedproducts ? "Edit Product" : "Add Product"}</DialogTitle>
          <DialogContent sx={{width:"400px"}}>
            <Box sx={{display:"flex",flexDirection:"column",gap:3}}>{ProductInputField.map((int, index) => (
              <DynamicInput
                key={index}
                name={int.name}
                required={int.required}
                type={int.type}
                label={int.label}
                register={register}
                errors={errors}
              />
            ))}</Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(setDialogClose());
                // reset();
              }}
            >
              close
            </Button>
            <Button variant="contained" type="submit">
              {dialog.isSelectedproducts ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table>
          {/* Table Head */}
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Original Price</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {gifts.map((item) => (
              <TableRow key={item.id}>
                {/* Image */}
                <TableCell>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={60}
                    style={{ borderRadius: "8px" }}
                  />
                </TableCell>

                {/* Name */}
                <TableCell>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                </TableCell>

                {/* Price */}
                <TableCell>₹{item.price}</TableCell>

                {/* Original Price */}
                <TableCell>₹{item.oldPrice}</TableCell>

                {/* Discount */}
                <TableCell sx={{ color: "green" }}>
                  {item.discount}% Off
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <IconButton>
                    <Edit />
                  </IconButton>

                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;

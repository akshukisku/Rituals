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
} from "@mui/material";

import { Box } from "@mui/material"
import { gifts } from "../../service/json/rituals.data"
import {  DeleteIcon, Edit } from "lucide-react";

const Products = () => {
  return (
      <Box>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mt:2}}>
        <Typography variant="h5">Products</Typography>
        <Button variant="contained" sx={{color:"black"}}>Add</Button>
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
                <Typography sx={{fontWeight:"bold"}}>
                  {item.name}
                </Typography>
              </TableCell>

              {/* Price */}
              <TableCell>₹{item.price}</TableCell>

              {/* Original Price */}
              <TableCell >
                ₹{item.oldPrice}
              </TableCell>

              {/* Discount */}
              <TableCell sx={{ color: "green" }}>
                {item.discount}% Off
              </TableCell>

              {/* Actions */}
              <TableCell>
                <IconButton
                >
                  <Edit />
                </IconButton>

                <IconButton
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default Products
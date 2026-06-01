// import React from 'react'
import { Box } from "@mui/material";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminWrapper = () => {
  return (
    <>
      <AdminNavbar />
      <Box sx={{display:"flex",width:"100%"}}>
        <Sidebar />
        <Box sx={{ width: "75%",padding:"5px 20px", }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminWrapper;

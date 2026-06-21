import { Box } from "@mui/material";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const NAVBAR_HEIGHT = 64;

const AdminWrapper = () => {
  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      {/* Fixed Navbar */}
      <AdminNavbar />

      {/* Main Layout */}
      <Box
        sx={{
          display: "flex",
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        }}
      >
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminWrapper;
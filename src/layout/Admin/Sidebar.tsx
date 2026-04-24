import { Box, Button, Stack, Typography } from "@mui/material";
import {
  LayoutDashboard,
  Package,
  Settings,
  ListTree,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />,path:"/admin/dashboard" },
    { label: "Products", icon: <Package size={18} />,path:"/admin/products" },
    { label: "Categories", icon: <ListTree size={18} />,path:"/admin/categories" },
    { label: "Settings", icon: <Settings size={18} />,path:"/admin/settings" },
  ];

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: { xs: "70%", sm: "40%", md: "18%" },
        bgcolor: "#e9e1d6",
        height: "100vh",
        p: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
        Admin Panel
      </Typography>

      {/* Menu Items */}
      <Stack spacing={2}>
        {menuItems.map((item) => (
          <Button
            key={item.label}
            startIcon={item.icon}
            fullWidth
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#333",
              borderRadius: "10px",
              padding: "10px 12px",
              "&:hover": {
                bgcolor: "#d6cbbf",
              },
            }}
            onClick={()=>navigate(item.path)}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
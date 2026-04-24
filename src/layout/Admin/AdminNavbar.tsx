import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../service/helper/global.helper";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AdminNavbar() {
  const navigate = useNavigate();

  // ✅ STATE
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  // ✅ HANDLERS
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* LOGO */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#5a0a2a",
            }}
          >
            <img src="/Rituals.png" alt="logo" height="40" />
          </Typography>

          {/* RIGHT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            {/* ✅ FIXED MENU */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{ mt: "45px" }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleClose}>
                  <Typography sx={{textAlign:"center"}} >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

            {/* LOGOUT ICON */}
            <LogOutIcon
              style={{ cursor: "pointer" }}
              color="red"
              onClick={() => logout(navigate)}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AdminNavbar;
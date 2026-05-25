import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e9e1d6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2F2FE4",
    },
    warning: {
      main: "#F0BB78",
    },
    text: {
      primary: "#5a0a2a",
      secondary: "#6B7280",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "0.95rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: "#5a0a2a",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 16px",
          color: "#5a0a2a",
          fontWeight: 500,
        },
        contained: {
          backgroundColor: "#e9e1d6",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#4a0923",
          },
        },
        outlined: {
          borderColor: "#5a0a2a",
          color: "#5a0a2a",
          "&:hover": {
            borderColor: "#4a0923",
            backgroundColor: "rgba(90, 10, 42, 0.04)",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#5a0a2a",
          "&.Mui-focused": {
            color: "#5a0a2a",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#5a0a2a",
          "&::placeholder": {
            color: "#6B7280",
            opacity: 1,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#fff",
          "& fieldset": {
            borderColor: "rgba(90, 10, 42, 0.15)",
          },
          "&:hover fieldset": {
            borderColor: "#5a0a2a",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#5a0a2a",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
  },
});

export default theme;
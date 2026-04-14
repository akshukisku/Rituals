import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: "light",

    background: {
      // default: "#F5ECD5", // main bg
      // paper: "#ffffff",
    },

    primary: {
      main: "#626F47", // olive green
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#2F2FE4", // soft green
    },

    warning: {
      main: "#F0BB78", // accent orange
    },

    text: {
      primary: "#2F2F2F",
      secondary: "#6B7280",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif", // from your tailwind setup

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
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: "#ffffff",
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#ffffff",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 16px",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,

          "& fieldset": {
            borderColor: "rgba(0,0,0,0.1)",
          },

          "&:hover fieldset": {
            borderColor: "#626F47",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#626F47",
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
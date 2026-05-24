// import React from 'react'

import { RouterProvider } from "react-router-dom";
import Router from "./routes/Routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./Theme/theme";

import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { Store } from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={Router} />
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;

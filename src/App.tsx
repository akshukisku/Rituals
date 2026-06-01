// import React from 'react'

import { RouterProvider } from "react-router-dom";
import Router from "./routes/Routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./Theme/theme";

import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loaders from "./components/Loaders";
import { persistor, Store } from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={<Loaders/>}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={Router} />
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

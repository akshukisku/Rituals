// import React from 'react'

import { RouterProvider } from "react-router-dom"
import Router from "./routes/Routes"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./Theme/theme"

import { Toaster } from "sonner"

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={Router}/>
      <Toaster position="top-right" richColors closeButton/>
    </ThemeProvider>
    </>
  )
}

export default App
// import React from 'react'

import { RouterProvider } from "react-router-dom"
import Router from "./routes/Routes"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./Theme/theme"

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={Router}/>
    </ThemeProvider>
    </>
  )
}

export default App
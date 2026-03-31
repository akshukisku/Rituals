// import React from 'react'

import { useRouteError } from "react-router-dom"

const ErrorBoundary = () => {
    const error:any  = useRouteError();
  return (
    <div className="text-red-300">{error.message}</div>
  )
}

export default ErrorBoundary
import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import HomeWrapper from "../layout/HomeWrapper";
import Homepage from "../layout/Homepage/Homepage";
import AboutPage from "../layout/AboutUs/AboutPage";
import ErrorBoundary from "../layout/ErrorBoundary";
import Shop from "../layout/Shop/Shop";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <Homepage />,
        errorElement:<ErrorBoundary/>
      },
      {
        path: "aboutus",
        element: <AboutPage />,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        path:"/blog",
        errorElement:<ErrorBoundary/>
      },
      {
        path:"/contact",
        errorElement:<ErrorBoundary/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

export default Router;

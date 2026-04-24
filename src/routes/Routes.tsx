import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import HomeWrapper from "../layout/HomeWrapper";
import Homepage from "../pages/Homepage";
import AboutPage from "../layout/AboutUs/AboutPage";
import ErrorBoundary from "../layout/ErrorBoundary";
import Shop from "../layout/Shop/Shop";
import SignupLayout from "../layout/SignupLayout";
import LoginLayout from "../layout/LoginLayout";
import AdminWrapper from "../layout/Admin/AdminWrapper";
import Dashboard from "../layout/Admin/Dashboard";
import Categories from "../layout/Admin/Categories";
import Settings from "../layout/Admin/Settings";
import Products from "../layout/Admin/Products";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <Homepage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "aboutus",
        element: <AboutPage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        errorElement: <ErrorBoundary />,
      },
      {
        path: "contact",
        errorElement: <ErrorBoundary />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "signup",
        errorElement: <ErrorBoundary />,
        element: <SignupLayout />,
      },
      {
        path: "login",
        errorElement: <ErrorBoundary />,
        element: <LoginLayout />,
      },
    ],
  },
  {
    path:"/admin",
    element:<AdminWrapper/>,
    children:[
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"categories",
        element:<Categories/>
      },
      {
        path:"settings",
        element:<Settings/>
      },
      {
        path:"products",
        element:<Products/>
      }
    ]
  }
]);

export default Router;

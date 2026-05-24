import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loaders from "../components/Loaders";
import UserProtected from "../components/UserProtected";
import AdminProtected from "../components/AdminProtected";

const Cart = lazy(() => import("../pages/Cart"));
const HomeWrapper = lazy(() => import("../layout/HomeWrapper"));
const Homepage = lazy(() => import("../pages/Homepage"));
const AboutPage = lazy(() => import("../layout/AboutUs/AboutPage"));
const Shop = lazy(() => import("../layout/Shop/Shop"));
const SignupLayout = lazy(() => import("../layout/SignupLayout"));
const LoginLayout = lazy(() => import("../layout/LoginLayout"));
const AdminWrapper = lazy(() => import("../layout/Admin/AdminWrapper"));
const Dashboard = lazy(() => import("../layout/Admin/Dashboard"));
const Categories = lazy(() => import("../layout/Admin/Categories"));
const Settings = lazy(() => import("../layout/Admin/Settings"));
const Products = lazy(() => import("../layout/Admin/Products"));
const NotFoundPage = lazy(() => import("../components/NotFoundPage"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loaders />}>
        <HomeWrapper />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loaders />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "aboutus",
        element: (
          <Suspense fallback={<Loaders />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "shop",
        element: (
          <Suspense fallback={<Loaders />}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loaders />}>
            <SignupLayout />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loaders />}>
            <LoginLayout />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loaders />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },

  {
    element: <UserProtected />,
    children: [
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loaders />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },

  {
    element: <AdminProtected />,
    children: [
      {
        path: "/admin",
        element: (
          <Suspense fallback={<Loaders />}>
            <AdminWrapper />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loaders />}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: "dashboard",
            element: (
              <Suspense fallback={<Loaders />}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: "categories",
            element: (
              <Suspense fallback={<Loaders />}>
                <Categories />
              </Suspense>
            ),
          },
          {
            path: "settings",
            element: (
              <Suspense fallback={<Loaders />}>
                <Settings />
              </Suspense>
            ),
          },
          {
            path: "products",
            element: (
              <Suspense fallback={<Loaders />}>
                <Products />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<Loaders />}>
                <NotFoundPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default Router;
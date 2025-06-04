import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import PrivateRouter from "./PrivateRouter";
import About from "./../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/app",
    element: <PrivateRouter />, //! Yetki kontrolü- Giriş kontrolü
    children: [
      {
        element: <Layout />, //! Layout altında görülecek sayfaları tanımlıyoruz
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "details",
            element: <Details />,
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

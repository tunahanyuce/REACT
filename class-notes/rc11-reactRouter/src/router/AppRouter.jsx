import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { RouterProvider } from "react-router";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Layout from "../pages/Layout";
import Games from "../pages/Games";
import Developers from "../pages/Developers";
import Home from "./../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
        index:true,
        element: <Home />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/developers",
        element: <Developers/>,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

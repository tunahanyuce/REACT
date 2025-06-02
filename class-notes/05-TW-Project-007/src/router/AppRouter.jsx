import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About"
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import NotFound from "../components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "projects",
        element: <Projects/>
      },

      {
        path: "contact",
        element: <Contacts/>
      },

         {
        path: "*",
        element: <NotFound/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
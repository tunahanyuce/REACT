import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { RouterProvider } from "react-router";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Layout from "../pages/Layout";



const router=createBrowserRouter(
[
    {
        path:"/",
        element: <Layout/>
    },
    {
        path:"/about",
        element: <AboutUs/>
    },
    {
        path:"/contact",
        element: <Contact/>
    }

  
]
)

export default function AppRouter(){
    return <RouterProvider  router={router} />
}




import {createBrowserRouter, Route, RouterProvider} from "react-router-dom"
import Home from "../pages/Home"
import AboutUs form "../pages/AboutUs"

const router=createBrowserRouter(
[
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/about",
        element: <AboutUs/>
    }
    
]
)
export default function AppRouter(){
    return <RouterProvider router={router}/>
}



import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Componenets/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: HomeLayouts,
        children:[
            {
                index:true,
                path:"/",
                Component:Home
            },
        ]
    }
])
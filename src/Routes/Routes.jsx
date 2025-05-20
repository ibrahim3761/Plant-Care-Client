import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";

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
            {
                path:"allPlants",
                Component:AllPlants,
            },
            {
                path: "add-plant",
                Component:AddPlant,
            },
            {
                path: "my-plants",
                Component: MyPlants,
            }
        ]
    }
])
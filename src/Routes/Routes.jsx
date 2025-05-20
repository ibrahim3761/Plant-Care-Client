import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";

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
            },
            {
                path: "logIn",
                Component:LogIn 
            },
            {
                path:"register",
                Component: Register,
            },
            {
                path : "my-profile",
                Component: MyProfile
            }
        ]
    }
])
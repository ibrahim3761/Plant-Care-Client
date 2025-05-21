import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import PlantDetails from "../Pages/PlantDetails";
import UpdatePlant from "../Pages/UpdatePlant";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "allPlants",
        Component: AllPlants,
        loader: () => fetch("http://localhost:3000/plants?sortBy=nextWatering"),
      },
      {
        path: "add-plant",
        Component: AddPlant,
      },
      {
        path: "my-plants",
        Component: MyPlants,
      },
      {
        path: "update-plant/:id",
        Component: UpdatePlant,
        loader:({params})=> fetch(`http://localhost:3000/plants/${params.id}`)
      },
      {
        path: "logIn",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "my-profile",
        Component: MyProfile,
      },
      {
        path: "plantDetails/:id",
        Component: PlantDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
      },
    ],
  },
]);

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
import Loader from "../Pages/Loader";
import PrivateRoute from "../Provider/PrivateRoute";

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
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "add-plant",
        element: (<PrivateRoute>
          <AddPlant></AddPlant>
        </PrivateRoute>),
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "my-plants",
        element: (<PrivateRoute>
          <MyPlants></MyPlants>
        </PrivateRoute>),
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "update-plant/:id",
        Component: UpdatePlant,
        loader:({params})=> fetch(`http://localhost:3000/plants/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>
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
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        )
      },
      {
        path: "plantDetails/:id",
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/plants/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>
      },
    ],
  },
]);

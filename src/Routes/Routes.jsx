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
import Loader from "../Componenets/Loader";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import CopyrightPage from "../Pages/CopyrightPage";
import TermsPage from "../Pages/TermsPage";
import PrivacyPage from "../Pages/PrivacyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "allPlants",
        Component: AllPlants,
        loader: () => fetch("https://plant-care-tracker-server-ten.vercel.app/plants?sortBy=nextWatering"),
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
        loader:({params})=> fetch(`https://plant-care-tracker-server-ten.vercel.app/plants/${params.id}`),
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
        loader: ({ params }) => fetch(`https://plant-care-tracker-server-ten.vercel.app/plants/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path:"copyright",
        Component: CopyrightPage
      },
      {
        path:"terms",
        Component: TermsPage
      },
      {
        path:"privacy",
        Component: PrivacyPage 
      }
    ],
  },
]);

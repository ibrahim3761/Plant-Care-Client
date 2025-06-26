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
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Dashboard from "../Pages/Dashboard";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import DashMyPlants from "../Pages/DashMyPlants";
import DashUpdatePlant from "../Pages/DashUpdatePlant";
import DashPlantDetails from "../Pages/DashPlantDaetails";
import DashAllPlants from "../Pages/DashAllPlants";
import DashAboutUs from "../Pages/DashAboutUs";
import DashContactUs from "../Pages/DashContactUs";
import DashAddPlant from "../Pages/DashAddPlant";

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
        path:'about-us',
        Component: AboutUs
      },
      {
        path:'contact-us',
        Component: ContactUs
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
      },
      
    ],
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>,
    children:[
      {
        index: true,
        Component:Dashboard
      },
      {
        path:'myplants',
        Component:DashMyPlants
      },
      {
        path:'about-us',
        Component:DashAboutUs
      },
      {
        path:'contact-us',
        Component:DashContactUs
      },
      {
        path: "add-plant",
        element: (<PrivateRoute>
          <DashAddPlant></DashAddPlant>
        </PrivateRoute>),
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "update-plant/:id",
        Component: DashUpdatePlant,
        loader:({params})=> fetch(`https://plant-care-tracker-server-ten.vercel.app/plants/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "plantDetails/:id",
        element: (
          <PrivateRoute>
            <DashPlantDetails></DashPlantDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://plant-care-tracker-server-ten.vercel.app/plants/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "allPlants",
        Component: DashAllPlants,
        loader: () => fetch("https://plant-care-tracker-server-ten.vercel.app/plants?sortBy=nextWatering"),
        hydrateFallbackElement: <Loader></Loader>
      },
    ]
  }
]);

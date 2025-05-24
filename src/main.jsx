
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HelmetProvider } from "react-helmet-async";


createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </HelmetProvider>
);

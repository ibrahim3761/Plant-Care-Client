import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../Componenets/Header";
import Footer from "../Componenets/Footer";

const HomeLayouts = () => {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && (
        <header>
          <Header></Header>
        </header>
      )}
      <main className="flex-grow">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayouts;

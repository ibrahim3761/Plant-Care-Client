import React from "react";
import { Outlet } from "react-router";
import Header from "../Componenets/Header";
import Footer from "../Componenets/Footer";

const HomeLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header></Header>
      </header>

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

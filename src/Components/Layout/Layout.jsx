import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import ScrollTop from "../ScrollTop/ScrollTop";

const Layout = () => {
  return (
    <>
      <ScrollTop />
      <div>
        <header className="">
          <Header />
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Layout = () => {
  return (
    <section>
      <article>
        <Navbar />
      </article>
      <article>
        <Outlet />
      </article>
    </section>
  );
};

export default Layout;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const AdminLayout = () => {
  let location = useLocation()
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

export default AdminLayout;

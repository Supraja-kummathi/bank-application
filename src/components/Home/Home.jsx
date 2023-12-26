import React from "react";

import LeftSideSection from "./LeftSideSection";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-[100%]">
      <article className="h-[100%] flex">
        <aside className="w-[17%] bg-black text-white h-[100%] ">
          <LeftSideSection />
        </aside>
        <aside className="w-[83%] h-[100%]">
          <div className="h-[100%] w-[100%]">
            <Outlet/>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Home;

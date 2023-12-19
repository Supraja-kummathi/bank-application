import React from "react";

import LeftSideSection from "./LeftSideSection";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <article className="flex">
        <aside className="basis-[17%] h-[91vh] bg-black text-white">
          <LeftSideSection />
        </aside>
        <aside className="basis-[83%]">
          <div>
            <Outlet />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Home;

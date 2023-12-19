import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

import Home from "../components/Home/Home";
import Dashboard from "../components/pages/dashboard/Dashboard";
import CreateBank from "../components/pages/bank/CreateBank";
import AllBank from "../components/pages/bank/AllBank";
import CreateMD from "../components/pages/managingDirector/CreateMD";
import AllMD from "../components/pages/managingDirector/AllMD";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path:"create-bank",
            element: <CreateBank />,
          },
          {
            path:"all-bank",
            element: <AllBank />,
          },
          {
            path:"create-md",
            element: <CreateMD />,
          },
          {
            path:"all-md",
            element: <AllMD />,
          },
        ],
      },
      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
]);

export default router;

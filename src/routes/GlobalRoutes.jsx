import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../components/landingpage/LandingPage";
import LeftSideSection from "../components/landingpage/LeftSideSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        children:[{
          index:true,
          element: <LeftSideSection />,
        }]
      },
      { path: "*", element: <h1>Page not found</h1>},
    ],
  },
]);

export default router;
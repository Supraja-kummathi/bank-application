import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../components/Home/Home";
import ForgotPassword from "../Authentication/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },

      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
]);

export default router;

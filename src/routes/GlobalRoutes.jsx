import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../AdminLayout";

import Home from "../components/Home/Home";
import CreateBank from "../components/pages/bank/CreateBank";
import AllBank from "../components/pages/bank/AllBank";
import CreateMD from "../components/pages/managingDirector/CreateMD";
import AllMD from "../components/pages/managingDirector/AllMD";
import Register from "./../components/auth/Register";
import Login from "../components/auth/Login";
import AdminDashboard from "../components/pages/AdminDashboard/AdminDashboard";
import ForgotPassword from "../components/auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/adminlayout",
    element: <AdminLayout />,
    children: [
      {
        path: "/adminlayout",
        element: <Home />,
        children: [
          {
            index: true,
            element: <AdminDashboard />,
          },
          {
            path: "create-bank",
            element: <CreateBank />,
          },
          {
            path: "all-bank",
            element: <AllBank />,
          },
          {
            path: "create-md",
            element: <CreateMD />,
          },
          {
            path: "all-md",
            element: <AllMD />,
          },
        ],
      },

      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
  { path: "/register", element: <Register /> },
  { index: true, element: <ForgotPassword /> },
  ,
  { path:"/forgotpassword", element: <ForgotPassword /> },
]);

export default router;

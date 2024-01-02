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
import PublicRoute from "../helpers/PublicRoutes";
import PrivateRoute from "../helpers/PrivateRoutes";
import UpdateBank from "../components/pages/bank/UpdateBank";
import UpdateMd from "../components/pages/managingDirector/UpdateMd";

import Landingpage from "../components/Landingpage/Landingpage";

const router = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
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
            path: "/adminlayout/create-bank",
            element: <CreateBank />,
          },
          {
            path: "/adminlayout/update-bank/:bankId",
            element: <UpdateBank />,
          },
          {
            path: "/adminlayout/managingDirectors/update/:employeeId",
            element: <UpdateMd />,
          },
          {
            path: "/adminlayout/all-bank",
            element: <AllBank />,
          },
          {
            path: "/adminlayout/create-md",
            element: <CreateMD />,
          },
          {
            path: "/adminlayout/all-md",
            element: <AllMD />,
          },
        ],
      },

      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  { path: "/customer/login", element: <Login name="Customer" /> },
  { path: "/employee/login", element: <Login name="Employee" /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;

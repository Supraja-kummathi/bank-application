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

const router = createBrowserRouter([
  {
    path: "/adminlayout",
    element: <PrivateRoute><AdminLayout /></PrivateRoute>,
    path: "/",

    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <AdminDashboard />,
          },
          {
            path: "/create-bank",
            element: <CreateBank />,
          },
          {
            path: "/update-bank/:bankId",
            element: <UpdateBank />,
          },
          {
            path: "/managingDirectors/update/:employeeId",
            element: <UpdateMd />,
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
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  //{ index: true, element: <PublicRoute><Login/></PublicRoute> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;

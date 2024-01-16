import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import Home from "../components/Home/Admin/AdminHome";
import CreateBank from "../components/pages/admin/bank/CreateBank";
import AllBank from "../components/pages/admin/bank/AllBank";
import CreateMD from "../components/pages/admin/managingDirector/CreateMD";

import AllMD from "./../components/pages/admin/managingDirector/AllMD";

import Register from "./../components/auth/Register";
import Login from "../components/auth/Login";
import AdminDashboard from "../components/pages/admin/AdminDashboard/AdminDashboard";
import ForgotPassword from "../components/auth/ForgotPassword";
import PublicRoute from "../helpers/PublicRoutes";
import PrivateRoute from "../helpers/PrivateRoutes";
import UpdateBank from "../components/pages/admin/bank/UpdateBank";
import UpdateMd from "../components/pages/admin/managingDirector/UpdateMd";

import Landingpage from "../components/Landingpage/Landingpage";

import ManagingDirectorHome from "../components/Home/Md/ManagingDirectorHome";
import CreateBranch from "../components/pages/md/Branch/CreateBranch";
import AllBranches from "../components/pages/md/Branch/AllBranches";
import CreateBranchManager from "../components/pages/md/BranchManager/CreateBranchManager";
import AllBranchManager from "../components/pages/md/BranchManager/AllBranchManager";
import ManagingDirectorDashboard from "../components/pages/md/MdDashboard/ManagingDirectorDashboard";
import Bhome from "../components/BankManager/Bhome";
import CreateAccount from "../components/BankManager/CreateAccount";
import PersonalDetails from "../components/BankManager/PersonalDetails";
import ServiceSection from "../components/BankManager/ServiceSection";
import DocumentSection from "../components/BankManager/DocumentSection";
import AllAccounts from "../components/BankManager/AllAccounts";
import SavingsAccount from "../components/BankManager/SavingsAccount";
import CurrentAccount from "../components/BankManager/CurrentAccount";
import LoanAccount from "../components/BankManager/LoanAccount";
import UpdateBranch from "../components/pages/md/Branch/UpdateBranch";
import UpdateBranchManager from './../components/pages/md/BranchManager/UpdateBranchManager';
import LoanApprovals from './../components/pages/md/Approvals/LoanApprovals';
import CardApprovals from './../components/pages/md/Approvals/CardApprovals';


const router = createBrowserRouter([
  { path: "/", element: <Landingpage />},
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
            element: <AdminDashboard  name="admin" />,
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
            path: "/adminlayout/all-bank",
            element: <AllBank />,
          },
          {
            path: "/adminlayout/create-md",
            element: <CreateMD />,
          },
          {
            path:"/adminlayout/update-md/:employeeId",
            element: <UpdateMd />,
          },
          {
            path: "/adminlayout/all-md",
            element: <AllMD/> ,
          },
        ],
      },

      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
  {
    path: "/mdlayout",
    element: <AdminLayout />,
    children: [
      {
        path: "/mdlayout",
        element: <ManagingDirectorHome />,
        children: [
          {
            index: true,
            element: <ManagingDirectorDashboard name="managing director" />,
          },
          {
            path: "/mdlayout/create-branch",
            element: <CreateBranch />,
          },
          {
            path: "/mdlayout/update-branch/:branchId",
            element: <UpdateBranch />,
          },
          {
            path: "/mdlayout/all-branches",
            element: <AllBranches />,
          },
          {
            path: "/mdlayout/create-branchManager",
            element: <CreateBranchManager />,
          },
          {
            path: "/mdlayout/branchManager/update/:employeeId",
            element: <UpdateBranchManager />,
          },
          {
            path: "/mdlayout/all-branchManager",
            element: <AllBranchManager />,
          },
          {
            path: "/mdlayout/loan-approvals",
            element: <LoanApprovals />,
          },
          {
            path: "/mdlayout/card-approvals",
            element: <CardApprovals />,
          },
          {
            path: "/mdlayout/all-branchManager",
            element: <AllBranchManager />,
          },
    ]}]
  },
  {
    path: "/bankmanager",
    element: <AdminLayout />,

    children: [
      {
        path: "/bankmanager",
        element: <Bhome />,

        children: [
          {
            index: true,
            element: <AdminDashboard name="Bank Manager DashBoard" />,
          },
          {
            path: "/bankmanager/create-account",
            element: <CreateAccount />,
            children: [
              {
                index: true,
                element: <PersonalDetails />,
              },
              {
                path: "/bankmanager/create-account/PersonalDetails",
                element: <PersonalDetails />,
              },

              {
                path: "/bankmanager/create-account/ServiceDetails",
                element: <ServiceSection />,
              },
              {
                path: "/bankmanager/create-account/DocumentSection",
                element: <DocumentSection />,
              },
            ],
          },
          {
            path: "/bankmanager/All Accounts",
            element: <AllAccounts />,
          },
          {
            path: "/bankmanager/Savings Accounts",
            element: <SavingsAccount />,
          },
          {
            path: "/bankmanager/Current Accounts",
            element: <CurrentAccount />,
          },
          {
            path: "/bankmanager/Loan Accounts",
            element: <LoanAccount />,
          },
          {
            path: "/bankmanager/managingDirectors/update/:employeeId",
            element: <UpdateMd />,
          },
          {
            path: "/bankmanager/create-account",
            element: <AllBank />,
          },
          {
            path: "/bankmanager/create-md",
            element: <CreateMD />,
          },
          {
            path: "/bankmanager/all-md",
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

  { path: "/customer/login", element: <Login name="customer" /> },
  { path: "/employee/login", element: <Login name="employee" /> },

  { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;

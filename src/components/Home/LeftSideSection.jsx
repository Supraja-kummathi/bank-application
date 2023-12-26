import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboard3Line } from "react-icons/ri";
import { CiBank } from "react-icons/ci";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import useGetProfile from "../../utils/useGetProfile";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/auth/authSlice";

const LeftSideSection = () => {
  // const user = useGetProfile();
  const dispatch = useDispatch();
  // console.log(user)
  return (
    <>
      <section className="text-sm h-[92%] w-[100%] bg-black">
        <div className="flex flex-col items-center ">
          <img
            src={
              // user?.avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAK2Ud4gQr9pQFT6rc3xbeq74MhZe7bOdvQ&usqp=CAU"
            }
            alt=""
            className="h-[4rem] w-[4rem] rounded-full mt-5"
          />
          <p className="mt-3">abcd</p>
          <p className="mt-1 text-[rgb(112,112,112)]">Admin</p>
        </div>
        {/* <li className="list-none">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
        <div className="flex mt-8"><RiDashboard3Line className="ms-6 text-xl mt-[0.1rem]" /> <p className="ms-4">Dashboard</p></div>
        </NavLink>
      </li> */}
        <div className="flex mt-6">
          <CiBank className="ms-6 text-xl" /> <p className="ms-4">Bank</p>{" "}
          <span className="ms-32">
            <RiArrowDropRightLine className="text-2xl" />
          </span>{" "}
        </div>
        <div className="ms-16 mt-2">
          <li className="list-none text-[rgb(112,112,112)]">
            <NavLink
              to="/create-bank"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Create Bank
            </NavLink>
          </li>
          <li className="list-none mt-2 text-[rgb(112,112,112)]">
            <NavLink
              to="/all-bank"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All bank
            </NavLink>
          </li>
        </div>
        <div className="flex mt-3 items-center">
          <div>
            <IoMail className="text-xl ms-6" />{" "}
          </div>
          <p className="ms-4">Managing Director</p>
          <span>
            <RiArrowDropRightLine className="text-2xl ms-8" />
          </span>{" "}
        </div>
        <div className="ms-16 mt-2">
          <li className="list-none text-[rgb(112,112,112)]">
            <NavLink
              to="/create-md"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Create MD
            </NavLink>
          </li>
          <li className="list-none mt-2 text-[rgb(112,112,112)]">
            <NavLink
              to="/all-md"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All MD
            </NavLink>
          </li>
        </div>
        <div className=" text-center mt-72">
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      </section>
    </>
  );
};

export default LeftSideSection;

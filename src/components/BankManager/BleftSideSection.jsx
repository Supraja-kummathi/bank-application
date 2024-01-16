import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import useGetProfile from "../../utils/useGetProfile";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { logout } from "../../redux/reducers/auth/authSlice";
import Spinner from "../pages/spinner/Spinner";
import { LiaIdCardSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";

const BleftSideSection = () => {
  const user = useGetProfile();
  let [account, setAccount] = useState(false);
  let [loan, setLoan] = useState(false);
  let [card, setCard] = useState(false);
  console.log(user);

  return (
    <>
      <section className="text-sm h-[100%] w-[100%] bg-black">
        {user.status === true ? (
          <Spinner />
        ) : (
          <div className="flex flex-col items-center">
            <img
              src={
                // user?.avatar ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAK2Ud4gQr9pQFT6rc3xbeq74MhZe7bOdvQ&usqp=CAU"
              }
              alt=""
              className="h-[4rem] w-[4rem] rounded-full mt-5"
            />
            <p className="mt-3">{user?.userInfo?.data?.name}</p>
            <p className="mt-1 text-[rgb(112,112,112)]">Admin</p>
          </div>
        )}
        <div className="ms-8 mt-6 h-[59%]">
          <div className="p-1 flex items-center ">
            <RiDashboard3Fill className="mr-2" />
            <NavLink
              to="/adminlayout/create-bank"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              DashBoard
            </NavLink>
          </div>
          <div
            className="flex mt-2 p-1 items-center  cursor-pointer "
            onClick={() => {
              setAccount(e => {
                setCard(false);
                setLoan(false);
                return !e;
              });
            }}
          >
            <FaRegUserCircle className="mr-2" />
            <p>Accounts</p>
            <span>
              <RiArrowDropRightLine className="text-2xl ms-[4rem]" />
            </span>
          </div>
          {account &&
            [
              "All Accounts",
              "Savings Accounts",
              "Current Accounts",
              "Loan Accounts",
            ].map(d => {
              return (
                <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                  <NavLink
                    to={`/bankmanager/${d}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {d}
                  </NavLink>
                </div>
              );
            })}
          <div
            className="flex mt-2 p-1 items-center  cursor-pointer"
            onClick={() => {
              setLoan(e => {
                setCard(false);
                setAccount(false);
                return !e;
              });
            }}
          >
            <FaHandHoldingDollar className="mr-2" />
            <p>Loans</p>
            <span>
              <RiArrowDropRightLine className="text-2xl ms-[5.5rem]" />
            </span>
          </div>
          {loan &&
            [
              "All Loans",
              "Personal Loans",
              "Home Loans",
              "Educational Loans",
              "Vehicle Loans",
            ].map(d => {
              return (
                <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                  <NavLink
                    to={`/bankmanager/${d}`}
                    className={({ isActive }) =>
                      isActive ? "bg-gray-600" : ""
                    }
                  >
                    {d}
                  </NavLink>
                </div>
              );
            })}
          <div
            className="flex mt-2 p-1 items-center cursor-pointer"
            onClick={() => {
              setCard(e => {
                setAccount(false);
                setLoan(false);
                return !e;
              });
            }}
          >
            <LiaIdCardSolid className="mr-2" />
            <p>Cards</p>
            <span>
              <RiArrowDropRightLine className="text-2xl ms-[5.4rem]" />
            </span>
          </div>
          {card &&
            ["All Cards", "Credit Cards", "Debit Cards"].map(d => {
              return (
                <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                  <NavLink
                    to={`/bankmanager/${d}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {d}
                  </NavLink>
                </div>
              );
            })}
        </div>

        <div className="ms-16 ">
          <button
            className="fixed text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      </section>
    </>
  );
};

export default BleftSideSection;

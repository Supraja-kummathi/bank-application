import React from "react";
import { FaBars } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <section className="bg-white h-[4rem] w-[100%] flex">
      <div className="w-[17%] bg-orange-400 h-[inherit] flex items-center justify-center">
        Syntra
      </div>
      <div className="flex justify-between w-[82%] h-[inherit]">
        <section className="w-[33%] flex justify-evenly items-center">
          <FaBars className="ms-2" />
          <div className="flex">
            <span className="ms-7 ">English</span>
            <span>
              <RiArrowDropDownLine className="text-2xl me-4" />
            </span>
          </div>
          <div className="flex">
            <span>
              <input
                type="text"
                placeholder="Search..."
                className="border-2 p-2 rounded-full ps-4 w-[15rem]"
              />
            </span>
            <span className="relative top-3 text-xl right-[2rem] text-slate-500">
              <IoIosSearch />
            </span>
          </div>
        </section>
        <section className="w-[14%] flex text-2xl justify-between items-center">
          <BsBell className="text-xl" />
          <CiMail />
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAK2Ud4gQr9pQFT6rc3xbeq74MhZe7bOdvQ&usqp=CAU"
            }
            alt=""
            className="h-[1.8rem] w-[1.8rem] rounded-full"
          />
          <PiDotsNineBold />
        </section>
      </div>
    </section>
  );
};

export default Navbar;

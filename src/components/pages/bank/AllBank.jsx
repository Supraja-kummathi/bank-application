
import React from "react";
import { FaEdit } from "react-icons/fa";

import { MdOutlineArrowDropDown } from "react-icons/md";
const AllBank = () => {
  return (
    <div className="w-full p-5 ">
      <div className="pb-3 font-semibold">All Banks</div>
      <div className="flex w-full bg-white px-3 pt-3">
        <div className="w-1/3 flex flex-col">
          <div className="p-3 pl-4 font-bold">Bank Name:</div>
          <div className="p-3 pl-4 font-bold">Bank Location:</div>
          <div className="p-3 pl-4 font-bold">MD Name:</div>
        </div>
        <div className="w-2/3 my-0.5 border-s-[1px]">
          <div className="flex justify-between pl-4">
            <section>
              <div className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                Total Debit Card Holders :
              </div>
              <div className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                Total Credit Card Holders :{" "}
              </div>
            </section>
            <section>
              <div className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                Total Loan Card Holders :{" "}
              </div>
              <div className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                Total Accounts :
              </div>
            </section>
            <div className="p-2 font-semibold text-[rgba(136,136,136)]">
              <FaEdit className="text-2xl" />
            </div>
          </div>
          <div className="pl-4">
            <div className="pt-2 px-2 font-semibold text-[rgba(136,136,136)]">
              Main Branch Address
            </div>
            <div className="pb-2 ms-2 font-semibold text-[rgba(136,136,136) bg-[rgb(245,245,245)] w-[98%] h-[10vh]"></div>
            <div className=" ms-2 w-[98%] flex justify-end pt-1">
              <button className=" text-white bg-[rgb(0,188,210)] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 flex ms-10">
                <div> More info </div>
                <MdOutlineArrowDropDown className="ms-2 text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBank;


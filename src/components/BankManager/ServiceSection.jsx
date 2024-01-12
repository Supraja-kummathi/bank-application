import React from 'react'
import { TfiUser } from "react-icons/tfi";
import { FaBuildingColumns } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import { ImCreditCard } from "react-icons/im";
import { BsPostcardFill } from "react-icons/bs";
import user from "../../images/profile.png";
import bank from "../../images/bank.png";
import ccard from "../../images/card.png";
import dcard from "../../images/credit-card.png";
import banking from "../../images/banking.png";
const ServiceSection = () => {
  return (
    <div>
      <section className="flex flex-col text-[14px] pb-4  ">
        <p className="pb-4 text-gray-500">Account Type</p>
        <section className="flex gap-x-6">
          <div className="flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded">
            {/* <TfiUser className="text-4xl  text-gray-500" /> */}
            <img src={user} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Savings Account</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded">
            {/* <FaBuildingColumns className="text-4xl  text-gray-500" /> */}
            <img src={bank} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Current Account</p>
          </div>
        </section>
      </section>
      <section className="flex flex-col pt-4">
        <p className="pb-4 text-gray-500">Choose Our Services</p>
        <section className="flex gap-x-6">
          <div className="flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded">
            {/* <ImCreditCard className="text-4xl  text-gray-500" /> */}
            <img src={ccard} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Credit Card</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded">
            {/* <BsPostcardFill className="text-4xl  text-gray-500" /> */}
            <img src={dcard} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Debit Card</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded">
            {/* <GiSteeringWheel className="text-4xl  text-gray-500" /> */}
            <img src={banking} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Online Banking</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ServiceSection
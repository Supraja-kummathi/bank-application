import React from 'react'

import { FaMobileScreenButton } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdPayments } from "react-icons/md";
const LandingPayments = () => {
  return (
    <section className="w-[80%] h-[550px] mt-12 ms-48 flex items-center">
      <div className="w-[45%] h-[100%]">
        <section>
          <h1 className="text-3xl font-semibold">Customize Your Payments</h1>
          <p className="mt-6 leading-2 text-[0.95rem]">
            Personalize the newly-improved Payments Options From to include all
            your payment methods such as,easy monthly payments,credit cards
          </p>
        </section>
        <section className="h-[75%] w-[100%] mt-10 flex flex-col justify-between">
          <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
            <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
              <FaMobileScreenButton className="text-5xl" />
            </div>
            <div className="w-[80%]">
              <h1 className="font-semibold text-base">
                Set daily maximum transaction limitation
              </h1>
              <p className=" mt-1 text-[0.9rem]">
                The daily,weekly,monthly and yearly limits for amount of
                transactions and total number of transactions.
              </p>
            </div>
          </div>
          <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
            <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
              <SlCalender className="text-4xl" />
            </div>
            <div className="w-[80%]">
              <h1 className="font-semibold text-base">
                Customize ypur next payment schedule.
              </h1>
              <p className=" mt-1 text-[0.9rem]">
                The daily,weekly,monthly and yearly limits for amount of
                transactions and total number of transactions.
              </p>
            </div>
          </div>
          <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
            <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
              <MdPayments className="text-5xl" />
            </div>
            <div className="w-[80%]">
              <h1 className="font-semibold text-base">
                Get latest update about your payments.
              </h1>
              <p className=" mt-1 text-[0.9rem]">
                The daily,weekly,monthly and yearly limits for amount of
                transactions and total number of transactions.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="w-[45%] h-[100%]">
        <img
          src="https://pngimg.com/d/credit_card_PNG87.png"
          alt=""
          className="h-[80%] w-[80%] mt-32 ms-16"
        />
      </div>
    </section>
  );
}

export default LandingPayments

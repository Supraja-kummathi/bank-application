import React from "react";

const LandingApplyOnline = () => {
  return (
    <section className="mb-12 mt-14 flex  flex-col justify-center items-center w-[100%] h-[60%] ">
      <h1 className="text-center text-[2rem] font-bold pb-3">
        <span>Apply </span>
        <span className=" text-orange-500"> Online</span>
      </h1>
      <section className=" my-3  flex  w-[87%] h-[85%] justify-around ">
        <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
          <img
            src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
            alt=""
          />
          <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
            QSP-CASH LOAN
          </p>
          <p className="text-[10px] text-center mb-2">
            Paperless digital process with instant disbursal
          </p>
          <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
            APPLY ONLINE
          </button>
        </div>
        <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
          <img
            src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
            alt=""
          />
          <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
            QSP INSTANT SB ACCOUNT ONLINE
          </p>
          <p className="text-[10px] text-center mb-2">
            Open Account Online with Video KYC
          </p>
          <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
            APPLY ONLINE
          </button>
        </div>
        <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
          <img
            src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
            alt=""
          />
          <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
            DEMAT ONLINE TRADING
          </p>
          <p className="text-[10px] text-center mb-2">Depository Services</p>
          <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
            APPLY ONLINE
          </button>
        </div>
        <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
          <img
            src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
            alt=""
          />
          <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-xs">
            FASTAG
          </p>
          <p className="text-xs text-center mb-2">
            National Electronic Toll Collection
          </p>
          <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
            APPLY ONLINE
          </button>
        </div>
      </section>
    </section>
  );
};

export default LandingApplyOnline;

import React from "react";

const PersonalDetails = () => {
  return (
    <section className=" flex w-[100%] flex-wrap gap-y-3 gap-x-4 h-[21rem] overflow-auto no-scrollbar">
      <div className=" flex flex-col basis-[19rem] ">
        <label htmlFor="firstname" className="text-[15px] pb-2 text-gray-400">
          First Name
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="middlename" className="text-[15px] pb-2 text-gray-400">
          Middle Name
        </label>
        <input
          type="text"
          name="middlename"
          id="middlename"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="lastname" className="text-[15px] pb-2 text-gray-400">
          Last Name
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="nameprefix" className="text-[15px] pb-2 text-gray-400">
          Name Prefix
        </label>
        <input
          type="text"
          name="nameprefix"
          id="nameprefix"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="fathername" className="text-[15px] pb-2 text-gray-400">
          Father Name
        </label>
        <input
          type="text"
          name="fathername"
          id="fathername"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="mothername" className="text-[15px] pb-2 text-gray-400">
          Mother Name
        </label>
        <input
          type="text"
          name="mothername"
          id="mothername"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="gender" className="text-[15px] pb-2 text-gray-400">
          Gender
        </label>
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            value="Male"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
          />
          <label htmlFor="male" className="text-[15px] pb-2 text-gray-400 px-2">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="Female"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
          />
          <label
            htmlFor="female"
            className="text-[15px] pb-2 px-2 text-gray-400"
          >
            Female
          </label>
          <input
            type="radio"
            name="gender"
            id="others"
            value="Other"
            className="border-2 rounded-md focus:outline-none pl-3 p-1"
          />
          <label
            htmlFor="others"
            className="text-[15px] pb-2 text-gray-400 px-2"
          >
            Others
          </label>
        </div>
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="dob" className="text-[15px] pb-2 text-gray-400">
          DOB
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          className="border-2 rounded-md focus:outline-none pl-2 p-1 text-slate-500 "
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label
          htmlFor="maritalstatus"
          className="text-[15px] pb-2 text-gray-400"
        >
          Marital Status
        </label>
        <input
          type="text"
          name="maritalstatus"
          id="maritalstatus"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="email" className="text-[15px] pb-2 text-gray-400">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="pannumber" className="text-[15px] pb-2 text-gray-400">
          PAN Number
        </label>
        <input
          type="text"
          name="pannumber"
          id="pannumber"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="phone" className="text-[15px] pb-2 text-gray-400">
          TelePhone
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label
          htmlFor="qualification"
          className="text-[15px] pb-2 text-gray-400"
        >
          Educational Qualification
        </label>
        <input
          type="text"
          name="qualification"
          id="qualification"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="occupation" className="text-[15px] pb-2 text-gray-400">
          Occupation Type
        </label>
        <input
          type="text"
          name="occupation"
          id="occupation"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="income" className="text-[15px] pb-2 text-gray-400">
          Annual Income
        </label>
        <input
          type="text"
          name="income"
          id="income"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[40rem]">
        <label htmlFor="address" className="text-[15px] pb-2 text-gray-400">
          Address
        </label>
        <textarea
          name="address"
          id="address"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="city" className="text-[15px] pb-2 text-gray-400">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="country" className="text-[15px] pb-2 text-gray-400">
          Country
        </label>
        <input
          type="text"
          name="counrty"
          id="counrty"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
      <div className=" flex flex-col basis-[19rem]">
        <label htmlFor="pincode" className="text-[15px] pb-2 text-gray-400">
          Pincode
        </label>
        <input
          type="text"
          name="pincode"
          id="pincode"
          className="border-2 rounded-md focus:outline-none pl-2 p-1"
        />
      </div>
    </section>
  );
};

export default PersonalDetails;

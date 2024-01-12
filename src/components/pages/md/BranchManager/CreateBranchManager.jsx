<<<<<<< HEAD
import React, { Fragment, useEffect } from "react";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "../../../../utilities/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMd } from "../../../../redux/reducers/md/mdSlice";
import useGetBank from "../../../../utils/useGetAllBanks";
=======
import React, { Fragment, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Button from "../../../../utilities/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createBranchManager,
  getAllUnassigned,
} from "./../../../../redux/reducers/branchmanager/branchManagerSlice";
import { getBranch } from "./../../../../redux/reducers/branch/branchSlice";
import useBranchState from "./../../../../utils/useBranchState";
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276

const CreateBranchManager = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
<<<<<<< HEAD
  let { data } = useGetBank();
  console.log(data);

  // const [searchParams, setSearchParams] = useSearchParams();
  // let [query, setQuery] = React.useState(searchParams.get("bankId"));
  // console.log(query);

  // useEffect(() => {
  //   setSearchParams({ bankId: query });
  // }, [query]);

=======
  let data = useBranchState();
  console.log(data)
  let [bankId, setBankId] = useState(null);
  let [branch, setBranch] = useState(null);
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
  const [state, setState] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    addressLine: "",
    pincode: "",
<<<<<<< HEAD
    country: "",
    city: "",
  });

=======
    branchId:"",
    country: "",
    city: "",
  });
  useEffect(() => {
    setBankId(data && data?.data?.data?.bankId);
  }, [data, bankId]);

  useEffect(() => {
    if (bankId) {
      let test = dispatch(getAllUnassigned(bankId));
     test.unwrap().then((x) => setBranch(x.data));
    }
  }, [bankId]);
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
  let payload = {
    name: state.name,
    phoneNumber: state.phoneNumber,
    email: state.email,
    gender: state.gender,
    dateOfBirth: state.dateOfBirth,
<<<<<<< HEAD
    bankId: state.bankId,
    address: {
      addressId: Math.random() * 1000,
      addressLine: state.addressLine,
      pincode: "qsp5160003",
      country: "India",
      city: "Banglore",
    },
  };

  // let handleQueryChange = e => {
  //   setQuery(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createMd(payload));
    console.log(state);
    navigate("/mdlayout/all-branchManager");
=======
    branchId:state.branchId,
    address: {
      addressLine: state.addressLine,
      pincode: state.pincode,
      country: state.country,
      city: state.city,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBranchManager(payload));
   navigate("/mdlayout/all-branchManager");
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
  };

  return (
    <section className="h-[100%] w-[100%] relative">
      <section className=" rounded-md border-2 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold ">
          Create Branch Manager
        </div>
        <form className="p-2 ps-4" onSubmit={handleSubmit}>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Name
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter Name"
              id="name"
              name="name"
              value={state.name}
<<<<<<< HEAD
              onChange={e => {
=======
              onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                setState({ ...state, name: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="email" className="text-[rgb(145,142,143)]">
              Email
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
              value={state.email}
<<<<<<< HEAD
              onChange={e => {
=======
              onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                setState({ ...state, email: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
<<<<<<< HEAD
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
=======
            <label htmlFor="phonenumber" className="text-[rgb(145,142,143)]">
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
              Phone number
            </label>
            <input
              className=" w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Phonenumber"
              id="phonenumber"
              name="phonenumber"
              value={state.phoneNumber}
<<<<<<< HEAD
              onChange={e => {
=======
              onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                setState({ ...state, phoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Address
            </label>
            <textarea
              className="w-[80%] rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              id="branchaddress"
              type="text"
              value={state.addressLine}
<<<<<<< HEAD
              onChange={e => {
=======
              onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                setState({ ...state, addressLine: e.target.value });
              }}
              cols={30}
              rows={3}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
<<<<<<< HEAD
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
=======
            <label htmlFor="city" className="text-[rgb(145,142,143)]">
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
              City
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter City"
              id="city"
              name="city"
              value={state.city}
<<<<<<< HEAD
              onChange={e => {
=======
              onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                setState({ ...state, city: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
<<<<<<< HEAD
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
=======
            <label htmlFor="country" className="text-[rgb(145,142,143)]">
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
              Country
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter Country"
              id="country"
              name="country"
              value={state.country}
<<<<<<< HEAD
              onChange={e => {
=======
              onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                setState({ ...state, country: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
<<<<<<< HEAD
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
=======
            <label htmlFor="pincode" className="text-[rgb(145,142,143)]">
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
              Pincode
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{6}"
              placeholder="Enter Pincode"
              id="pincode"
              name="pincode"
              value={state.pincode}
<<<<<<< HEAD
              onChange={e => {
=======
              onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                setState({ ...state, pincode: e.target.value });
              }}
            />
          </div>
          <section className="w-[80%] flex ms-64">
            <div className="text-[rgb(145,142,143)] w-[60%]">
              <div className="mb-4">
                <label htmlFor="gender">Gender</label>
              </div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className=" w-4 h-4"
<<<<<<< HEAD
                onChange={e => {
=======
                onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                  setState({ ...state, gender: e.target.value });
                }}
              />
              <label htmlFor="male" className="ms-2">
                MALE
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="ms-4 w-4 h-4"
<<<<<<< HEAD
                onChange={e => {
=======
                onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                  setState({ ...state, gender: e.target.value });
                }}
              />
              <label htmlFor="female" className="ms-2">
                FEMALE
              </label>
              <input
                type="radio"
                id="others"
                name="gender"
                value="others"
                className="ms-4 w-4 h-4"
<<<<<<< HEAD
                onChange={e => {
=======
                onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                  setState({ ...state, gender: e.target.value });
                }}
              />
              <label htmlFor="others" className="ms-2">
                OTHERS
              </label>
            </div>
            <div className="text-[rgb(145,142,143)] w-[100%]">
              <div className="mb-3">
                <label htmlFor="dob">DOB</label>
              </div>
              <input
                type="date"
                id="dob"
                name="dob"
                value={state.dateOfBirth}
<<<<<<< HEAD
                onChange={e => {
=======
                onChange={(e) => {
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                  setState({ ...state, dateOfBirth: e.target.value });
                }}
                className="text-base border-2 px-2 py-1 rounded-md w-[50%] "
              />
            </div>
          </section>
          <div className="flex justify-between w-[99%] mb-4 mt-2">
            <div>
<<<<<<< HEAD
              <label htmlFor="name" className="text-[rgb(145,142,143)]">
                banks
=======
              <label htmlFor="banks" className="text-[rgb(145,142,143)]">
                branch
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
              </label>
            </div>
            <select
              className="block  w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-[rgb(145,142,143)] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              // value={query}
              // onChange={handleQueryChange}
<<<<<<< HEAD
              value={state.bankId}
              onChange={e => {
                setState({ ...state, bankId: e.target.value });
              }}
            >

              <option>select bank</option>
              {data?.data?.length >= 0 &&
                data?.data?.map(bank => (


                  <Fragment key={bank.bankId}>
                    <option value={bank.bankId}>{bank.bankName}</option>
=======
             
              onChange={(e) => {
                setState({ ...state, branchId: e.target.value });
              }}
            >
              <option>select branch</option>
              {branch?.length >= 0 &&
                branch?.map((branch) => (
                  <Fragment key={branch.branchId}>
                    <option value={branch.branchId}>{branch.branchName}</option>
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
                  </Fragment>
                ))}
            </select>
          </div>

          <div className="flex justify-end pt-2">
<<<<<<< HEAD

=======
>>>>>>> 2827ee8e27a404ecb8f83de50ba85571bdffd276
            <Button type="submit" name="Create Manager"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateBranchManager;

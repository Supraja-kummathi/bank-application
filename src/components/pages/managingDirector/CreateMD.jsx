import React from "react";
import { useState } from "react";
import Button from "../../../utilities/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMd } from "../../../redux/reducers/md/mdSlice";
const CreateMD = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    addressLine: "",
    pincode: "",
    country: "",
    city: "",
  });

  // let randomId = Math.round(Math.random() * 10000);

  let payload = {
    name: state.name,
    phoneNumber: state.phoneNumber,
    email: state.email,
    gender: state.gender,
    dateOfBirth: state.dateOfBirth,
    address: {
      addressLine: state.addressLine,
      pincode: "qsp5160003",
      country: "India",
      city: "Banglore",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMd(payload));
    console.log(state);
    navigate("/all-md");
  };
  return (
    <section className="h-[100%] w-[100%] relative">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">
          Create Managing director
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
              onChange={(e) => {
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
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
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
              onChange={(e) => {
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
              onChange={(e) => {
                setState({ ...state, addressLine: e.target.value });
              }}
              cols={30}
              rows={3}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              City
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter City"
              id="city"
              name="city"
              value={state.city}
              onChange={(e) => {
                setState({ ...state, city: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              Country
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter Country"
              id="country"
              name="country"
              value={state.country}
              onChange={(e) => {
                setState({ ...state, country: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
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
              onChange={(e) => {
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
                onChange={(e) => {
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
                onChange={(e) => {
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
                onChange={(e) => {
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
                onChange={(e) => {
                  setState({ ...state, dateOfBirth: e.target.value });
                }}
                className="text-base border-2 px-2 py-1 rounded-md w-[50%] "
              />
            </div>
          </section>
          <div className="flex justify-end pt-4">
            <Button type="submit" name="Create Bank"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateMD;

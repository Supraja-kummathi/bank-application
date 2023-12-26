import React from "react";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Button from "../../../utilities/Button";
import { useDispatch } from "react-redux";
import { createBank } from "../../../redux/reducers/bank/bankSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { createMd } from "../../../redux/reducers/md/mdSlice";
const CreateMD = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    phoneNumber: "" ,
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
    gender:state.gender,
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
      <section className="block rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 pt-3 uppercase font-semibold">
          Create Managing director
        </div>
        <form className="p-2 ps-4" onSubmit={handleSubmit}>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-1/5">
                  <label htmlFor="name" className="text-[rgb(145,142,143)]">
                    Name
                  </label>
                </td>
                <td className="w-4/5 p-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="Enter Name"
                    id="name"
                    value={state.name}
                    onChange={(e)=>{setState(
                      {...state,name:e.target.value}
                    )}
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/5">
                  <label htmlFor="email" className="text-[rgb(145,142,143)]">
                    Email
                  </label>
                </td>
                <td className="w-4/5 p-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                    type="email"
                    placeholder="Enter Email"
                    id="email"
                    value={state.email}
                    onChange={(e)=>{setState(
                      {...state,email:e.target.value}
                    )}
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/5">
                  <label htmlFor="name" className="text-[rgb(145,142,143)]">
                    Phone number
                  </label>
                </td>
                <td className="w-4/5 p-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="Enter Name"
                    id="name"
                    value={state.phoneNumber}
                    onChange={(e)=>{setState(
                      {...state,phoneNumber:e.target.value}
                    )}
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/5 pb-18">
                  <label
                    htmlFor="branchaddress"
                    className="text-[rgb(145,142,143)]"
                  >
                    Address
                  </label>
                </td>
                <td className="w-4/5 p-2">
                  <textarea
                    className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                    id="branchaddress"
                    type="text"
                    value={state.addressLine}
                    onChange={(e)=>{setState(
                      {...state,addressLine:e.target.value}
                    )}
                    }
                    cols={30}
                    rows={3}
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/5 pb-18"></td>
                <td className=" flex justify-start ms-3">
                  <section className="w-[30%] mt-4 ms-23">
                    <div className="text-[rgb(145,142,143)] w-[100%]">
                      <div className="mb-4">
                        <label htmlFor="gender" value={state.gender}>Gender</label>
                      </div>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        className=" w-4 h-4"
                 
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
                      />
                      <label htmlFor="others" className="ms-2">
                        OTHERS
                      </label>
                    </div>
                  </section>
                  <section className="w-[30%] mt-4 ms-16">
                    <div className="text-[rgb(145,142,143)] w-[100%]">
                      <div className="mb-4">
                        <label htmlFor="dob">DOB</label>
                      </div>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        // value={state.dateOfBirth}
                        className="text-base border-2 ps-2 pe-32 py-1 rounded-md"
                      />
                    </div>
                  </section>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end pt-4">
            <Button type="submit" name="Create Bank">
              hhhh
            </Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateMD;

import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Button from "../../../../utilities/Button";
import { useDispatch } from "react-redux";
import { createBank } from "../../../../redux/reducers/bank/bankSlice";
import { useNavigate } from "react-router-dom";
import { createBranch } from "../../../../redux/reducers/branch/branchSlice";
import useGetMd from "../../../../utils/useGetMd";

const CreateBranch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetMd();

  const [state, setState] = useState({
    branchName: "",
    branchEmail: "",
    branchPhoneNumber: "",
    branchType: "",
    addressLine: "",
    pincode: "",
    country: "",
    city: "",
  });

  let payload = {
    branchName: state.branchName,
    branchPhoneNumber: state.branchPhoneNumber,
    branchEmail: state.branchEmail,
    branchType: state.branchType,
    bankId: "",
    address: {
      addressLine: state.addressLine,
      pincode: state.pincode,
      country: state.country,
      city: state.city,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    payload.bankId = data.data.bankId;
    dispatch(createBranch(payload));
    navigate("/mdlayout/all-branches");
  };

  return (
    <section className="h-[100%] w-[100%] relative">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">Create Branch</div>
        <form onSubmit={handleSubmit} className="p-2 ps-4">
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchname" className="text-[rgb(145,142,143)]">
              Branch Name
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter here..."
              id="branchname"
              name="branchname"
              value={state.branchName}
              onChange={(e) => {
                setState({ ...state, branchName: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchEmail" className="text-[rgb(145,142,143)]">
              Email
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="email"
              placeholder="Enter Email"
              id="branchEmail"
              name="branchEmail"
              value={state.branchEmail}
              onChange={(e) => {
                setState({ ...state, branchEmail: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchPhoneNumber" className="text-[rgb(145,142,143)]">
              Phone number
            </label>
            <input
              className=" w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Phonenumber"
              id="branchPhoneNumber"
              name="branchPhoneNumber"
              value={state.branchPhoneNumber}
              onChange={(e) => {
                setState({ ...state,branchPhoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="addressLine" className="text-[rgb(145,142,143)]">
              Main Branch Address
            </label>
            <textarea
              className="p-2 w-[80%] rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              id=" addressLine"
              name="addressLine"
              value={state.address}
              onChange={(e) => {
                setState({ ...state, addressLine: e.target.value });
              }}
              cols={30}
              rows={3}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="city" className="text-[rgb(145,142,143)]">
              City
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter city"
              id="city"
              name="city"
              value={state.city}
              onChange={(e) => {
                setState({ ...state, city: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="country" className="text-[rgb(145,142,143)]">
              Country
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter country"
              id="country"
              name="country"
              value={state.country}
              onChange={(e) => {
                setState({ ...state, country: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="pincode" className="text-[rgb(145,142,143)]">
              Pincode
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{6}"
              placeholder="Enter pincode"
              id="pincode"
              name="pincode"
              value={state.pincode}
              onChange={(e) => {
                setState({ ...state, pincode: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branch_type" className="text-[rgb(145,142,143)]">
              Branch type
            </label>
            <select
              name="branchType"
              id="branchType"
              value={state.branchType}
              onChange={(e) => {
                setState({ ...state, branchType: e.target.value });
              }}
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-[rgb(145,142,143)] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
            >
              <option value="">--select here--</option>
              <option value="METRO">Metro branches</option>
              <option value="SEMIURBAN">Semi-Urban branches</option>
              <option value="RURAL">Rural branches</option>
            </select>
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit" name="Create Branch"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateBranch;

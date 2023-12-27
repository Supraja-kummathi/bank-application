import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Button from "../../../utilities/Button";
import { useDispatch } from "react-redux";
import { createBank } from "../../../redux/reducers/bank/bankSlice";
import { useNavigate } from "react-router-dom";
const CreateBank = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    bankName: "",
    address: "",
    addressId: "",
    addressLine: "",
    pincode: "",
    country: "",
    city: "",
  });

  // let randomId = Math.round(Math.random() * 10000);

  let payload = {
    bankId: "",
    bankName: state.bankName,
    address: {
      addressId: "",
      addressLine: state.address,
      pincode: "qsp5160003",
      country: "India",
      city: "Banglore",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBank(payload));
    console.log(state);
    navigate("/all-bank");
  };

  return (
    <section className="h-[100%] w-[100%] relative">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">Create Bank</div>
        <form onSubmit={handleSubmit} className="p-2 ps-4">
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              Bank Name
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter here..."
              id="bankname"
              value={state.bankName}
              onChange={(e) => {
                setState({ ...state, bankName: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%]">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Main Branch Address
            </label>
            <textarea
              className="p-2 w-[80%] rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              id="branchaddress"
              type="text"
              value={state.address}
              onChange={(e) => {
                setState({ ...state, address: e.target.value });
              }}
              cols={30}
              rows={5}
            />
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit" name="Create Bank"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateBank;

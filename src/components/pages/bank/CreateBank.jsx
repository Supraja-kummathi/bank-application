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
    bankId: Math.round(Math.random() * 100),
    bankName: state.bankName,
    address: {
      addressId: Math.random() * 1000,
      addressLine: state.address,
      pincode: "qsp5160003",
      country: "India",
      city: "Banglore",
    },
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createBank(payload));
    console.log(state);
    navigate("/all-bank");
  };

  return (
    <section className="h-[100%] w-[100%] relative">
      <section className="block rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 pt-3 uppercase font-semibold">Create Bank</div>
        <form onSubmit={handleSubmit} className="p-2 ps-4">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-1/5">
                  <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
                    Bank Name
                  </label>
                </td>
                <td className="w-4/5 p-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="Enter here..."
                    id="bankname"
                    value={state.bankName}
                    onChange={e => {
                      setState({ ...state, bankName: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/5 pb-24">
                  <label
                    htmlFor="branchaddress"
                    className="text-[rgb(145,142,143)]"
                  >
                    Main Branch Address
                  </label>
                </td>
                <td className="w-4/5 p-2">
                  <textarea
                    className="p-2 block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                    id="branchaddress"
                    type="text"
                    value={state.address}
                    onChange={e => {
                      setState({ ...state, address: e.target.value });
                    }}
                    cols={30}
                    rows={5}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end pt-4">
            <Button type="submit" name="Create Bank"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateBank;

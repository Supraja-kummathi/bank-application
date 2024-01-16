import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getBankById, updateBank } from "../../../../redux/reducers/bank/bankSlice";

const UpdateBank = () => {
  let { bankId } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
 let [updatedState, setUpdatedState] = useState();

useEffect(() => {
 dispatch(getBankById(bankId)).then((x) => setUpdatedState(x.payload.data));
  }, [bankId]);


  const handleChange = (e) => {
   if (Object.keys(updatedState.address).includes(e.target.name)) {
      setUpdatedState({
        ...updatedState,
        address: { ...updatedState.address, [e.target.name]: e.target.value },
      });
    } else {
      setUpdatedState({
        ...updatedState,
        [e.target.name]: e.target.value,
      });
    }
  };
 

  let handleSubmit = (e) => {
    e.preventDefault();
    let r = dispatch(updateBank(updatedState));
    console.log(r);
    navigate("/adminlayout/all-bank");
  };

  return (
    <>
      <section className="h-[100%] w-[100%] relative">
        <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
          <div className="ps-4 pt-3 uppercase font-semibold">update Bank</div>

          <form className="p-2 ps-4" onSubmit={handleSubmit}>
            <div className="flex justify-between w-[99%] mb-4">
              <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
                Bank Name
              </label>

              <input
                className="w-[80%] pointer-events-none opacity-40 cursor-not-allowed rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="text"
                placeholder="Enter here..."
                id="bankname"
                name="bankName"
                value={updatedState && updatedState.bankName}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Main Branch Address
            </label>

            <textarea
              className="w-[80%] pt-1 ps-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              id="adress"
              cols={30}
              rows={3}
              name="addressLine"
              value={updatedState && updatedState.address.addressLine}
              onChange={handleChange}
            />
            </div>
            <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="city" className="text-[rgb(145,142,143)]">
              City
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter here..."
              id="city"
              name="city"
              value={updatedState && updatedState.address.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="country" className="text-[rgb(145,142,143)]">
              Country
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter here..."
              id="country"
              name="country"
              value={updatedState && updatedState.address.country}
              onChange={handleChange}
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
              placeholder="Enter here..."
              id="pincode"
              name="pincode" 
              value={updatedState && updatedState.address.pincode}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end pt-4">
              <button className="text-white border-2 border-orange-400 bg-orange-400 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
                update Bank
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default UpdateBank;

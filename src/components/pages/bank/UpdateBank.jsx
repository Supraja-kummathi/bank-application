import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import useGetBank from "../../../utils/useGetAllBanks";
import { updateBank } from "../../../redux/reducers/bank/bankSlice";

const UpdateBank = () => {
  let { bankId } = useParams();
  let navigate = useNavigate();
  let { data } = useGetBank();
  let dispatch = useDispatch();
  let [updatedState, setUpdatedState] = useState();
  useEffect(() => {
    if (bankId) {
      let filteredData = data?.filter((bank) => bank.bankId == bankId);
      setUpdatedState(filteredData && filteredData[0]);
    }
  }, [bankId, data]);

  let handleChange = (e) => {
    setUpdatedState({ ...updatedState, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBank(updatedState));
    navigate("/all-bank");
  };
  return (
    <>
      <section className="h-[100%] w-[100%] relative">
        <section className="block rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
          <div className="ps-4 pt-3 uppercase font-semibold">update Bank</div>

          <form className="p-2 ps-4" onSubmit={handleSubmit}>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="w-1/5">
                    <label
                      htmlFor="bankname"
                      className="text-[rgb(145,142,143)]"
                    >
                      Bank Name
                    </label>
                  </td>
                  <td className="w-4/5 p-2">
                    <input
                      className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                      type="text"
                      placeholder="Enter here..."
                      id="bankname"
                      name="bankName"
                      value={updatedState && updatedState.bankName}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  {/* <td className="w-1/5 pb-24">
                  <label
                    htmlFor="branchaddress"
                    className="text-[rgb(145,142,143)]"
                  >
                    Main Branch Address
                  </label>
                </td> */}
                  {/* <td className="w-4/5 p-2">
                  <textarea
                    className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                    id="branchaddress"
                    cols={30}
                    rows={5}
                    name="city"
                    value={updatedState && updatedState?.address?.city}
                    onChange={handlChange}
                  />
                </td> */}
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end pt-4">
              <button className="text-white border-2 border-orange-400 bg-orange-400 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
                updateBank
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default UpdateBank;

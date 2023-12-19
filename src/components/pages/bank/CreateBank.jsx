
import React from "react";
import Button from "../../../utils/Button";

const CreateBank = () => {
  return (
    <section className="block rounded-md border-2 py-1.5 w-[97%] bg-white m-4 ">
      <div className="ps-4 pt-3 uppercase font-semibold">Create Bank</div>
      <form className="p-2 ps-4">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="w-1/5">
                <label htmlFor="bankname" className="text-[rgb(145,142,143)]">Bank Name</label>
              </td>
              <td className="w-4/5 p-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="Enter here..."
                  id="bankname"
                />
              </td>
            </tr>
            <tr>
              <td className="w-1/5 pb-24">
                <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">Main Branch Address</label>
              </td>
              <td className="w-4/5 p-2">
                <textarea
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                  id="branchaddress"
                  type="text"
                  cols={30}
                  rows={5}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end pt-4">
            <Button name="Create Bank"></Button>
          
        </div>
      </form>
    </section>
  );
};

export default CreateBank;


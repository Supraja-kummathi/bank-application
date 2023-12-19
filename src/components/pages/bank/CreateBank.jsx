
import React from "react";
import Button from "../../../utilities/Button";
const CreateBank = () => {
  return (
    <div className="block rounded-md border-0 py-1.5 w-4/5">
      <div className="p-2">Create Bank</div>
      <form className="p-2">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="w-1/5">
                <label htmlFor="bankname">Bank Name</label>
              </td>
              <td className="w-4/5 p-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="Enter here..."
                  id="bankname"
                />
              </td>
            </tr>
            <tr>
              <td className="w-1/5 pb-10 ">
                <label htmlFor="branchaddress">Main Branch Address</label>
              </td>
              <td className="w-4/5 p-2">
                <textarea
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                  id="branchaddress"
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end pt-4">
          <Button name="Create Bank"></Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBank;


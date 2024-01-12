import React from 'react'
import { PiFilesLight } from "react-icons/pi";
import file from "../../images/submit.png";
const DocumentSection = () => {
  return (
    <div className="flex flex-col  ">
      <label htmlFor="file" className=" text-gray-500 text-[0.9rem] pb-3">
        ID Type{" "}
      </label>
      <select
        name="idtype"
        id="idtype"
        className=" w-[30rem] border-2 rounded  "
      >
        <option value=" "></option>
        <option value="passport">Adhar Card</option>
        <option value="passport">PanCard</option>
        <option value="passport">Passport</option>
      </select>

      <div className="flex items-center mt-4">
        <label className=" w-[35rem] border-2 bg-blue-100 border-blue-700 h-[15rem] border-dashed rounded-[5px] text-[10px] ">
          <div className="flex flex-col items-center justify-center mt-4">
            {/* <PiFilesLight className="text-9xl  text-gray-500" /> */}
            <img src={file} alt="" className="w-[120px] h-[120px] mt-2" />
            <p className="font-semibold text-xl">Drag and drop an Image</p>
            <p className="text-xs ml-3 text-slate-500">
              or to <span className="text-blue-900 ">Browse</span> choose a file
            </p>
            <p className="text-xs ml-3 text-slate-500">PNG, JPG, PDF</p>
          </div>
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
}

export default DocumentSection
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteBank, getBank } from "../../../../redux/reducers/bank/bankSlice";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Spinner from "../../spinner/Spinner";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useGetBank from "../../../../utils/useGetAllBanks";

const AllBank = () => {
  let dispatch = useDispatch();
  let navigate=useNavigate();
  let state = useGetBank();
<<<<<<< HEAD
  let data=state.data.data;
=======
  let data = state.data.data;
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696

  return (
    <div className="w-[100%] p-5 h-[100%]">
      <div className="pb-3 font-semibold">All Banks</div>
      {state?.status === true ? (
<<<<<<< HEAD
        <Spinner/>
      ) :  (

=======
        <Spinner />
      ) : (
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696
        <section className="w-full overflow-auto h-[95%] no-scrollbar">
          {data?.map((user, index) => {
            console.log(user);
            return (
              <div
                className="flex w-[100%] bg-white px-3 pt-3 mb-6"
                key={index + 1}
              >
                <div className="w-1/3 flex flex-col">
                  <div className="p-3 pl-4 font-bold">
                    Bank Name: {user.bankName}
                  </div>
<<<<<<< HEAD
                  <div className="p-3 pl-4 font-bold">Bank Location: {user.address.city}</div>
                  <div className="p-3 pl-4 font-bold">MD Name:</div>
=======
                  <div className="p-3 pl-4 font-bold">
                    Bank Location: {user?.address.city}
                  </div>
                  <div className="p-3 pl-4 font-bold">
                    MD Name: {user.managingDirectorName}
                  </div>
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696
                </div>
                <div className="w-2/3 border-s-[1px]">
                  <div className="flex justify-between pl-4">
                    <section>
                      <div className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                        Total Debit Card Holders :
                      </div>
                      <div className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                        Total Credit Card Holders :{" "}
                      </div>
                    </section>
                    <section>
                      <div className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                        Total Loan Card Holders :{" "}
                      </div>
                      <div className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                        Total Accounts :
                      </div>
                    </section>
                    <div className="p-2 font-semibold text-[rgba(136,136,136)]">
                      <NavLink to={`/adminlayout/update-bank/${user.bankId}`}>
                        <FaEdit className="text-2xl" />
                      </NavLink>

                      <RxCross2
                        className="text-2xl mt-2 text-red-500"
                        onClick={() => {
                          let deleteConfirm = window.confirm("Are you sure");
                          if (deleteConfirm === true) {
                            dispatch(deleteBank(user.bankId));
                            navigate("/adminlayout/all-bank");
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="pl-4">
                    <div className="pt-2 px-2 font-semibold text-[rgba(136,136,136)]">
                      Main Branch Address :
                    </div>
                    <div className="ms-2  font-semibold text-[rgba(136,136,136) w-[98%] h-[7vh] pt-2 ps-1">
<<<<<<< HEAD
                    {user.address.addressLine} , {user.address.city} , {user.address.country} , {user.address.pincode}
=======
                      {user.address.addressLine} , {user.address.city} ,{" "}
                      {user.address.country} , {user.address.pincode}
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default AllBank;

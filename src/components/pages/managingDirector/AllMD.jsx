import { TbArrowsDownUp } from "react-icons/tb";
import GetMds from "../../../utils/GetMds";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMd } from "../../../redux/reducers/md/mdSlice";
import { NavLink } from "react-router-dom";

const AllMD = () => {
  let state = GetMds();
  const [search, setSearch] = useState();
  let dispatch = useDispatch();
  console.log(state);

  return (
    <div className="w-[100%] p-5 h-[100%]">
      <div className="pb-3 font-semibold">All MD</div>
      {state.status === true ? (
        <h1>loading...</h1>
      ) : (
        <section className=" bg-white w-full overflow-auto h-[95%] no-scrollbar">
          <header className="mx-10 my-2 w-[93%] flex justify-between items-center ">
            <div>
              Show
              <select className="px-2 rounded-[0.25rem] border-2">
                <option value="10">10</option>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              entries
            </div>
            <div>
              Search:
              <input
                className=" mx-1 px-2 border-2 rounded-[0.25rem]"
                type="text"
                onChange={e => {
                  setSearch(e.target.value);
                  setState(
                    state?.data?.filter(ele =>
                      ele.email.toLowerCase().includes(search.toLowerCase())
                    )
                  );
                }}
              />
            </div>
          </header>
          <div className="mx-12 w-[91%]">
            <table style={{ tableLayout: "fixed", width: "100%" }}>
              <thead>
                <tr className="border-b-2">
                  <th className="py-2">
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Manager Name</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Email-Id</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Password</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Branch Name</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span> Actions</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {state?.data?.data?.map(data => {
                  console.log(data.employeeId);
                  return (
                    <tr className="text-xs border-b-2">
                      <td className="px-2 py-3 ">{data.name}</td>
                      <td className="px-2">{data.email}</td>
                      <td className="px-2">{data.password}</td>
                      <td className="px-2">{data.branch_name}</td>
                      <td className="px-2">
                        <div className="flex">
                          <span className="px-2  text-red-500">
                            <NavLink
                              to={`/managingDirectors/update/${data.employeeId}`}
                            >
                              <BiSolidPencil />
                            </NavLink>
                          </span>
                          <span className="px-2 ">
                            <MdDelete
                              onClick={() => {
                                let deleteConfirm =
                                  window.confirm("Are you sure");
                                if (deleteConfirm === true) {
                                  dispatch(deleteMd(data.employeeId));
                                }
                              }}
                            />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <footer></footer>
        </section>
      )}
    </div>
  );
};

export default AllMD;

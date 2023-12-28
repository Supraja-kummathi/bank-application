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

  let dispatch = useDispatch();
  console.log(state);

  const [itemsPerPage, setItemsPerPage] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  let [loading, setLoading] = useState(false);

  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state?.data?.data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(state?.data?.data?.length / itemsPerPage);

  const handlePageChange = pageNumber => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setLoading(false);
    });
  };
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== indexOfLastItem) {
      setCurrentPage(currentPage + 1);
    }
  }

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
              <select
                className="px-2 rounded-[0.25rem] border-2"
                onChange={e => {
                  setItemsPerPage(e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              entries
            </div>
            <div>
              Search:
              <input
                className=" mx-1 px-2 border-2 rounded-[0.25rem]"
                type="text"
                onChange={e => {
                  console.log(
                    currentItems?.filter(ele =>
                      ele.email
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
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
                {currentItems?.map(data => {
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
          <footer>
            <div className="mt-4 flex justify-center">
              <ul className="flex space-x-2">
                <li>
                  <a href="#" onClick={prePage}>
                    Prev
                  </a>
                </li>

                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer ${
                      index + 1 === currentPage
                        ? "bg-orange-500 text-white"
                        : "bg-orange-300 hover:bg-orange-200"
                    } px-3 py-1 rounded`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </li>
                ))}
                <li>
                  <a href="#" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </div>
            <p>
              Showing {indexOfFirstItem} to {indexOfLastItem} of{" "}
              {state?.data?.data?.length} entries
            </p>
          </footer>
        </section>
      )}
    </div>
  );
};

export default AllMD;

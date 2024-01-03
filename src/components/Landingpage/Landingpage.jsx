import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { RiLoader5Fill } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";

const Landingpage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <header className=" h-[21%] w-[100%] m-0">
        <section className="flex items-center bg-[rgb(240,245,249)]  h-[30%] w-[100%] m-0">
          <div className="w-[10%] text-center border-r-2">careers</div>
          <section className="flex justify-between w-[50%]">
            <div className="pl-4">Agents</div>
            <div className="pr-4 border-r-2">Avilable in : English </div>
          </section>

          <div className="pl-3 flex items-center justify-between w-[28%]">
            <div className="flex items-center W-[40%] pr-3 rounded-full bg-orange-200">
              <BiPhoneCall className="rounded-full bg-[rgb(227,55,60)] text-[1.4rem] " />
              <span className="pl-2"> 1800 1080</span>
            </div>
            <div className="W-[40%] pr-5">connecting Socially</div>
          </div>
          <div className=" flex justify-around w-[10%]">
            <span className="px-3 border-r-2">
              <FaFacebookF />
            </span>
            <span className="px-3 border-r-2">
              <FaTwitter />
            </span>
            <span className="px-3 border-r-2">
              <FaLinkedinIn />
            </span>
            <span className="px-3 ">
              <FaInstagram />
            </span>
          </div>
        </section>
        <section className="flex border-2 items-center  h-[70%] w-[100%] bg-white">
          <div className="w-[20%] text-center ">LoGo</div>
          <section className="flex items-center w-[80%] ">
            <div className="flex items-center border-r-2 pe-3">
              Contact Us <IoIosArrowDown className="pl-2 text-2xl" />
            </div>
            <div className="flex items-center px-3 border-r-2">
              About Us <IoIosArrowDown className=" ml-2 pl-2 text-2xl" />
            </div>
            <div className="flex items-center px-3">
              Locate Us <IoIosArrowDown className=" ml-2 pl-2 text-2xl" />
            </div>
            <div className="flex items-center w-[60%] h-[60%]">
              <input
                type="search"
                className="w-full ml-2 border-2 rounded-full h-[6vh] border-blue-700 px-3 placeholder-black "
                placeholder="Search for Products, Services .."
              />
              <span className="relative right-[4.9rem] text-white bg-orange-400 rounded-full flex items-center justify-center">
                <MdOutlineSearch className="text-2xl" />
              </span>
              <span className=" relative right-[4.5rem] text-2xl border-l-2 border-orange-400 pl-2 text-orange-400 ">
                <FaMicrophone />
              </span>
            </div>
            <div className="text-4xl text-orange-400 ">
              <IoMdNotificationsOutline />
            </div>
          </section>
        </section>
      </header>
      <section className="w-[100%] h-[100%] flex justify-center">
        <div className="w-[98%] h-[4.5rem] bg-blue-800 absolute z-10 flex items-center">
          <ul className="h-[40%] flex items-center justify-between w-[72%] text-white font-semibold border-e-[0.05rem] ps-4 pe-6 border-cyan-600">
            <li>
              <Link>Accounts</Link>
            </li>
            <li>
              <Link>Loans</Link>
            </li>
            <li>
              <Link>Cards</Link>
            </li>
            <li>
              <Link>Insurance</Link>
            </li>
            <li>
              <Link>Investment</Link>
            </li>
            <li>
              <Link>Offers</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Digital Banking</Link>
            </li>
          </ul>
          <div className="flex h-[100%] w-[18%] ">
            <span className="relative flex items-center text-2xl left-[2rem]  text-white">
              <IoIosSearch />
            </span>
            <span>
              <input
                type="text"
                className=" p-2 ps-10 w-[16rem] h-[100%] bg-blue-800 focus:outline-none"
              />
            </span>
          </div>
          <div
            className={`bg-orange-400 w-[10%] cursor-pointer h-[100%] flex items-center justify-center text-white font-semibold hover:bg-orange-300  hover: ${
              isHovered ? "group-hover:block" : "group-hover:hidden"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Login
            <div
              className={`absolute bg-white shadow-md w-[10rem] h-[17vh] rounded-md p-2  mt-[10rem] mr-8 ${
                isHovered ? "block" : "hidden"
              }`}
              onMouseEnter={() => setIsHovered(true)}
            >
              <h4 className="text-black pl-4 ">Login As</h4>
              <div className="text-black font-normal text-xs border-b-2 w-[90%] p2 m-2">
                <Link to={"/customer/login"}>Customer</Link>
              </div>
              <div className="text-black font-normal text-xs border-b-2 w-[90%] p2 m-2">
                <Link to={"/employee/login"} className="text-black">
                  {" "}
                  Employee
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
          alt=""
          className="h-[50%] w-[100%] relative"
        />
        <section className="w-[100%] h-[4.5rem] bg-blue-800 absolute z-10 mt-80 flex justify-center">
          <div className="w-[92%] h-[19rem] mt-4 flex justify-between">
            <div className="w-[24%] h-[100%] bg-white">
              <h1 className="uppercase text-xl ps-2 pt-1">DIGITAL BANKING</h1>
              <p className="font-semibold text-md text-gray-400 -mt-1 ps-2">
                Advance.Innovative.Instant
              </p>
              <section className="w-[60%] h-[9rem] mt-2 ms-4 flex flex-col justify-between text-sm">
                <div className="border-2 rounded-full py-2 flex items-center">
                  <span className="h-[1.2rem] w-[1.2rem] rounded-full border-2 mx-4">
                    <RiLoader5Fill className="relative bottom-1 right-1 text-orange-400 text-2xl" />
                  </span>
                  Net Banking
                </div>
                <div className="border-2 border-orange-400 rounded-full py-2 flex items-center">
                  <GoDotFill className="text-orange-500 mx-4 text-lg" /> Mobile
                  Banking
                </div>
                <div className="border-2 border-orange-400 rounded-full py-2 flex items-center">
                  <GoDotFill className="text-orange-500 mx-4 text-lg" />{" "}
                  WhatsApp Banking
                </div>
              </section>
              <button className="uppercase bg-orange-500 py-2 px-5 text-white rounded-full mt-6 text-sm mx-3">
                explore digital banking
              </button>
            </div>
            <div className="w-[48%] h-[100%] bg-white flex flex-wrap justify-evenly items-center">
              <div className="h-[6rem] w-[45%] ">
                {/* <FaUserShield className="text-5xl" /> */}

                <h1 className="font-semibold">Accounts</h1>
                <p className="leading-9 text-gray-400">
                  Three easy methods to swiftly open accounts
                </p>
              </div>
              <div className="h-[6rem] w-[45%]">
                <h1 className="font-semibold">Loans</h1>
                <p className="leading-9 text-gray-400">
                  ensures that you recieve a better interest rate on all loans
                </p>
              </div>
              <div className="h-[6rem] w-[45%] ">
                <h1 className="font-semibold">Cards</h1>
                <p className="leading-9 text-gray-400">
                  Get the right card for you
                </p>
              </div>
              <div className="h-[6rem] w-[45%] ">
                <h1 className="font-semibold">Investment</h1>
                <p className="leading-9 text-gray-400">
                  Invest your hard earned money with us
                </p>
              </div>
            </div>
            <div className="w-[22%] h-[100%] bg-white">
              <div className="mt-10 ms-14">
                <h1 className="text-xl font-semibold">
                  Save Money , Save Life !
                </h1>
                <p>Any questions?</p>
                <span>Call</span>
                <span className="text-blue-800 text-lg font-semibold ms-2">
                  0100 5200 369
                </span>
                <button className="uppercase bg-orange-500 py-2 px-5 text-white rounded-full mt-16 text-sm ">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="my-32 flex  flex-col justify-center items-center w-[100%] h-[60%] ">
        <h1 className="text-center text-[2rem] font-bold py-3 ">
          <span>Apply </span>
          <span className=" text-orange-500"> Online</span>
        </h1>
        <section className=" my-3  flex  w-[80%] h-[85%] justify-around ">
          <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
            <img
              src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
              alt=""
            />
            <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
              QSP-CASH LOAN
            </p>
            <p className="text-[10px] text-center mb-2">
              Paperless digital process with instant disbursal
            </p>
            <button className="mt-1 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm">
              APPLY ONLINE
            </button>
          </div>
          <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
            <img
              src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
              alt=""
            />
            <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
              QSP INSTANT SB ACCOUNT ONLINE
            </p>
            <p className="text-[10px] text-center mb-2">
              Open Account Online with Video KYC
            </p>
            <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm">
              APPLY ONLINE
            </button>
          </div>
          <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
            <img
              src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
              alt=""
            />
            <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
              DEMAT ONLINE TRADING
            </p>
            <p className="text-[10px] text-center mb-2">Depository Services</p>
            <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm">
              APPLY ONLINE
            </button>
          </div>
          <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
            <img
              src="https://cdn.pixabay.com/photo/2023/11/29/11/55/pine-hills-8419433_1280.jpg"
              alt=""
            />
            <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-xs">
              FASTAG
            </p>
            <p className="text-xs text-center mb-2">
              National Electronic Toll Collection
            </p>
            <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm">
              APPLY ONLINE
            </button>
          </div>
        </section>
      </section>
      <footer className="pl-5 flex items-center  w-[100%] h-[30%]  bg-black">
        <div className="text-white flex flex-col justify-between h-[90%] w-[22%]  ">
          <p>Home </p>
          <p>Accounts</p>
          <p>Transfers</p>
          <p>Payments</p>
        </div>
        <div className=" text-white flex flex-col justify-between h-[90%] w-[22%] ml-10 ">
          <p>Statemets </p>
          <p>Customer Support</p>
          <p>FAQs</p>
          <p>Security and Privacy</p>
        </div>
        <div className="text-white flex flex-col justify-between h-[90%] w-[22%] ml-10">
          <p>Terms and Conditions</p>
          <p>About Us</p>
          <p>Branch Locator</p>
          <p>ATM Locator</p>
        </div>
        <div className="text-white flex flex-col justify-between h-[90%] w-[22%] ml-10">
          <p>Mobile Apps </p>
          <p>News and Updates</p>
          <p>Social Media</p>
          <p>Feedback</p>
        </div>
      </footer>
    </>
  );
};

export default Landingpage;

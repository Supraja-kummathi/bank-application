import React from "react";
import basicimg from "./images/basicimg.jpg";
import { Link, NavLink } from "react-router-dom";
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
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdPayments } from "react-icons/md";

const Landingpage = () => {
  return (
    <>
      <header className=" h-[15%] w-[100%] m-0 ">
        <section className="flex items-center bg-[rgb(240,245,249)]  h-[35%] w-[100%] m-0 ">
          <div className="w-[10%] text-center border-r-2">careers</div>
          <section className="flex justify-between w-[50%]">
            <div className="pl-4">Agents</div>
            <div className="pr-4 border-r-2">Avilable in : English </div>
          </section>

          <div className="pl-3 flex items-center justify-between w-[28%] ">
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
        <section className="flex border-2 items-center h-[65%] w-[100%] bg-white ">
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
                className="w-[100%] ml-2 border-2 rounded-full py-2 border-blue-700 px-3 placeholder-black focus:outline-none"
                placeholder="Search for Products, Services .."
              />
              <span className="relative right-[4.9rem] rounded-full ">
                <MdOutlineSearch className="w-[1.5rem] h-[1.5rem] p-1 rounded-full bg-orange-400 text-white flex items-center justify-center" />
              </span>
              <span className=" relative right-[4.5rem] text-xl border-l-2 border-orange-400 pl-2 text-orange-400 ">
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
        <div className="w-[100%] h-[4.5rem] bg-[rgb(6,60,131)] absolute z-10 flex items-center ">
          <ul className="h-[40%] flex items-center justify-between w-[72%] text-white font-semibold border-e-[0.05rem] ps-4 pe-6 border-cyan-600 ">
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
                className=" p-2 ps-10 w-[16rem] h-[100%] bg-[rgb(6,60,131)]  focus:outline-none"
              />
            </span>
          </div>
          <div className="bg-orange-400 flex items-center justify-center text-white font-semibold ms-3 ">
            <button className="group relative py-6 px-12">
              Login
              <div className="invisible bg-white border-orange-500 group-hover:visible h-[8rem] w-[15rem] border-[0.02rem] absolute right-0 mt-6 ">
                <div className="py-2 w-[100%] text-black">Login As</div>
                <div className="text-black py-2 hover:text-orange-400 border-b-[0.04rem] mx-3 flex items-center justify-between">
                  <NavLink to="/login">Customer</NavLink>
                  <IoIosArrowRoundForward className="text-2xl text-orange-400" />
                </div>
                <div className="text-black py-2 hover:text-orange-400 flex items-center justify-between mx-3">
                  <NavLink to="/login">Employee</NavLink>
                  <IoIosArrowRoundForward className="text-2xl text-orange-400" />
                </div>
              </div>
            </button>
          </div>
        </div>

        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="h-[50%] w-[100%] relative object-cover"
        />
        <section className=" w-[100%] h-[4.5rem] bg-[rgb(6,60,131)]  absolute z-10 mt-80 flex justify-center ">
          <div className="w-[92%] h-[18rem] mt-4 flex justify-between">
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
                  <GoDotFill className="text-orange-500 mx-4 text-lg" />
                  WhatsApp Banking
                </div>
              </section>
              <button className="uppercase bg-orange-500 py-2 px-5 text-white rounded-full mt-6 text-sm mx-3 hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
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
                  Save Money , Save Life !{" "}
                </h1>
                <p>Any questions?</p>
                <span>Call</span>
                <span className="text-blue-800 text-lg font-semibold ms-2">
                  0100 5200 369
                </span>
                <button className="uppercase bg-orange-500 py-2 px-5 text-white rounded-full mt-16 text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500 ">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="-mt-16 mb-12 flex  flex-col justify-center items-center w-[100%] h-[60%] ">
        <h1 className="text-center text-[2rem] font-bold py-3 ">
          <span>Apply </span>
          <span className=" text-orange-500"> Online</span>
        </h1>
        <section className=" my-3  flex  w-[87%] h-[85%] justify-around ">
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
            <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
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
            <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
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
            <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
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
            <button className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
              APPLY ONLINE
            </button>
          </div>
        </section>
      </section>
      <section className="w-[80%] h-[12rem] ms-24 flex">
        <div className="w-[30%] h-[15rem]">
          <p className="uppercase text-gray-400 text-sm font-semibold">
            OUR PROCESS
          </p>
          <h1 className="text-4xl font-[600] mt-3">
            Get loan from 4 simple
            <span className="underline decoration-orange-500 decoration-8">
              process
            </span>
          </h1>
        </div>
        <div className="w-[40%] h-[15rem] mt-2 ms-60">
          <p className="text-gray-800">
            Streamline your financial journey with our simplified loan
            process.Apply online,receive quick approval ,and enjoy transparent
            terms tailored to your needs . Experience hassle-free borrowing with
            our customer-friendly approach
          </p>
          <div className="text-blue-600 flex items-center mt-4 font-semibold">
            <span className="hover:text-blue-900">
              <Link>Learn more about it</Link>
            </span>
            <IoIosArrowRoundForward className="text-xl ms-1" />
          </div>
        </div>
      </section>
      <section className="w-[90%] h-[15rem] flex mt-16 ms-24 justify-between">
        <div className="w-[23%] h-[100%] bg-white rounded-xl hover:shadow-lg hover:shadow-slate-400 group">
          <h1 className="text-3xl font-semibold text-blue-800 pt-8 ps-8 mb-6 group-hover:text-4xl group-hover:transition-all">
            01
          </h1>
          <p className="text-black font-semibold ms-8">Check Eligibility</p>
          <p className="text-gray-500 ms-8 leading-7 w-[80%] text-[0.95rem]">
            Check your loan eligibility with our user-friendly online tool.
            Discover personalized financing options tailored to your needs.
          </p>
        </div>
        <div className="w-[23%] h-[100%] bg-white rounded-xl hover:shadow-lg hover:shadow-slate-400 group">
          <h1 className="text-3xl font-semibold text-blue-800 pt-8 ps-8 mb-6 group-hover:text-4xl group-hover:transition-all">
            02
          </h1>
          <p className="text-black font-semibold ms-8">Apply for loan</p>
          <p className="text-gray-500 ms-8 leading-7 w-[80%] text-[0.95rem]">
            Apply for a loan online in just a few clicks.Experience a seamless
            application process with quick approvals.
          </p>
        </div>
        <div className="w-[23%] h-[100%] bg-white rounded-xl hover:shadow-lg hover:shadow-slate-400 group">
          <h1 className="text-3xl font-semibold text-blue-800 pt-8 ps-8 mb-6 group-hover:text-4xl group-hover:transition-all">
            03
          </h1>
          <p className="text-black font-semibold ms-8">Get Approved</p>
          <p className="text-gray-500 ms-8 leading-7 w-[80%] text-[0.95rem]">
            Get approved for a loan swiftly. Enjoy a hassle-free process and
            access the funds you need promptly.
          </p>
        </div>
        <div className="w-[23%] h-[100%] bg-white rounded-xl hover:shadow-lg hover:shadow-slate-400 group">
          <h1 className="text-3xl font-semibold text-blue-800 pt-8 ps-8 mb-6 group-hover:text-4xl group-hover:transition-all">
            04
          </h1>
          <p className="text-black font-semibold ms-8">Get your money</p>
          <p className="text-gray-500 ms-8 leading-7 w-[80%] text-[0.95rem]">
            recieve your loan funds promptly Experience quick disbursement for
            immediate access to the money you need.
          </p>
        </div>
      </section>
      <section className="w-[80%] h-[80%] mt-12 ms-48 flex items-center">
        <div className="w-[45%] h-[100%]">
          <section>
            <h1 className="text-3xl font-semibold">Customize Your Payments</h1>
            <p className="mt-6 leading-2 text-[0.95rem]">
              Personalize the newly-improved Payments Options From to include
              all your payment methods such as,easy monthly payments,credit
              cards{" "}
            </p>
          </section>
          <section className="h-[75%] w-[100%] mt-10 flex flex-col justify-between">
            <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
              <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
                <FaMobileScreenButton className="text-5xl" />
              </div>
              <div className="w-[80%]">
                <h1 className="font-semibold text-lg">
                  Set daily maximum transaction limitation
                </h1>
                <p className=" mt-1">
                  The daily,weekly,monthly and yearly limits for amount of
                  transactions and total number of transactions.
                </p>
              </div>
            </div>
            <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
              <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
                <SlCalender className="text-4xl" />
              </div>
              <div className="w-[80%]">
                <h1 className="font-semibold text-lg">
                  Customize ypur next payment schedule.
                </h1>
                <p className=" mt-1">
                  The daily,weekly,monthly and yearly limits for amount of
                  transactions and total number of transactions.
                </p>
              </div>
            </div>
            <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
              <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
                <MdPayments className="text-5xl" />
              </div>
              <div className="w-[80%]">
                <h1 className="font-semibold text-lg">
                  Get latest update about your payments.
                </h1>
                <p className=" mt-1">
                  The daily,weekly,monthly and yearly limits for amount of
                  transactions and total number of transactions.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="w-[45%] h-[100%]">
          <img
            src="https://pngimg.com/d/credit_card_PNG87.png"
            alt=""
            className="h-[80%] w-[80%] mt-32 ms-16"
          />
        </div>
      </section>
      <footer className="flex items-center justify-evenly w-[100%] h-[30%] mt-14 bg-black">
        <div className="text-white flex flex-col justify-evenly h-[90%] w-[22%] ms-36">
          <p>Home </p>
          <p>Accounts</p>
          <p>Transfers</p>
          <p>Payments</p>
        </div>
      <div className=" text-white flex flex-col justify-evenly h-[90%] w-[22%]">
          <p>Statemets </p>
          <p>Customer Support</p>
          <p>FAQs</p>
          <p>Security and Privacy</p>
        </div>
        <div className="text-white flex flex-col justify-evenly h-[90%] w-[22%]">
          <p>Terms and Conditions</p>
          <p>About Us</p>
          <p>Branch Locator</p>
          <p>ATM Locator</p>
        </div>
        <div className="text-white flex flex-col justify-evenly h-[90%] w-[22%]">
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

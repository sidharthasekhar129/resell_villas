import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.jpeg";
import UserDropDown from "./ProfileDropdown";

import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "In Details", path: "/indetails" },
    { title: "Luxury Collection", path: "/properties" },
    { title: "About us", path: "/about-us" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white pb-0 md:text-sm md:sticky top-0 z-50 w-full ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div
        className={`mx-0 md:mx-14 items-center  justify-between mx-auto px-4 md:flex md:px-8`}
      >
        <div className="flex items-center justify-between py-5 md:block">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a className="" href="/">
              <img src={Logo} width={100} height={30} alt="logo" />
            </a>
            {/* <div
              style={{
                display: "flex",
                 justifyContent:"center",
              alignItems:"center",
              marginLeft:20
              }}
            >
              <FaLocationDot size={24} color="#9379B7"/>
              <label style={{
                fontSize:18,
                fontWeight:"bold"
              }}>Bengaluru</label>
            </div> */}
          </div>

          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={` items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-gray-900">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 mb-4 sm:mb-0 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <a
              href="/contact"
              className="ml-0 sm:ml-10 flex items-center justify-center gap-x-1 py-2 px-4 text-black font-medium text-black rounded-md border-black border-2 md:inline-flex"
            >
              Contact
            </a>
            {localStorage.getItem("token") ? (
              <UserDropDown/>
             // <a
              //   href="/logout"
              //   className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 border-2 border-black  rounded-md md:inline-flex"
              // >
              //   Log out
              //   <svg
              //     xmlns="http://www.w3.org/2000/svg"
              //     viewBox="0 0 20 20"
              //     fill="currentColor"
              //     className="w-5 h-5"
              //   >
              //     <path
              //       fillRule="evenodd"
              //       d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              //       clipRule="evenodd"
              //     />
              //   </svg>
              // </a>
            ) : (
              <a
                href="/login"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 border-2 border-black  rounded-md md:inline-flex"
              >
                Log in
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

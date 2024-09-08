import React, { useContext, useState } from "react";
import Logo from "../../../src/assets/images/logo.jpeg"; // Path to your image file

import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../provider/AuthProvider";
import adminContext from "../../context/AdminContext/AdminContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Signup = () => {
  const [emailError, setEmailError] = useState("");

  // const { setToken } = useAuth();
  const navigate = useNavigate();
  const context = useContext(adminContext);
  const { CreateUser } = context;
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleData = (key, value) => {
    if (key === "phone") {
      if (value.length === 10) {
        setUser((prevItem) => ({
          ...prevItem,
          [key]: value,
        }));
      } else {
      }
    }
    if (key === "email") {
      if (validateEmail(value)) {
        setUser((prevItem) => ({
          ...prevItem,
          [key]: value,
        }));
      } else {
        setEmailError("Invalid email address");
      }
    } else {
      setUser((prevItem) => ({
        ...prevItem,
        [key]: value,
      }));
    }
  };
  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const handleLogin = () => {
  //   setToken(
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEwMDAwLCJuYW1lIjoiU0lESEFSVEhBIiwiZW1haWwiOiJzaWRoYXJ0aGE3NTgwMTNAZ21haWwuY29tIiwicGhvbmUiOiIxMjM0NTY3ODkwIiwiaW1hZ2UiOiJwcm9maWxlL3Byb2ZpbGVfMTcwNTA1Nzk2ODgwMC5qcGciLCJpc19tYW5hZ2VyIjoxLCJnZW5kZXIiOiIiLCJhZGRyZXNzIjoiQWdyaWdvbGQgRm9ydHVuZSBmbGF0IHBlbnRob3VzZSA0MDEsIEFyZWtlcmVnYXRlIDU2ODc1NSIsImFnZSI6MCwic3RhdHVzIjoxLCJzdWJzY3JpcHRpb24iOjEsImt5Y192ZXJpZmllZCI6MSwiY3JlYXRlZF9hdCI6IjIwMjQtMDMtMDZUMDk6NTU6MDEuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDI0LTAzLTEzVDA2OjA4OjU1LjAwMFoifSwiaWF0IjoxNzExNDMxNjUxLCJleHAiOjE3MTI3Mjc2NTF9.76q7e0r0dkcKtdoNDaT0u9av1fClUcSBdPBJcpq_onM"
  //   );
  //   navigate("/", { replace: true });
  // };

  const handleSubmit = async (event) => {
   
    try {
      if (user.phone.length === 10) {
        const result = await CreateUser(user);
        // Promise resolved
        console.log("Promise resolved:", result);

        // Set a timeout to delay the action by 1 second (1000 ms)
        navigate("/", { replace: true });
        
        toast.success("Account created successfully");

      } else {
        toast.error("Enter a valid phone");

      }

      // Cleanup the timer when the component unmounts

      // Perform operations based on resolved result
    } catch (error) {
      // Promise rejected
      console.error("Promise rejected:", error);
      // Perform operations based on rejected error
    }

    // onSearch(query);
  };

  return (
    <main className="w-full flex">
      <ToastContainer position="top-center" />

      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md bg-transparent">
          <div className=" mt-16 space-y-3 bg-transparent">
            <h3 className="text-white text-3xl   my-8   font-bold sm:text-4xl bg-transparent">
              Welcome to Resell.Villas
            </h3>
            <h3 className="text-white text-1xl bg-transparent">
              "Embark on your real estate journey with us - Register today for
              personalized property recommendations!"
            </h3>
            <p className="text-gray-300 italic bg-transparent">
              Create an account and get access to all features for lifetime, No
              credit card required.
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden bg-transparent">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                alt=""
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                alt=""
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                alt=""
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                alt=""
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5 bg-transparent">
                Booked 5000+ properties
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4   text-gray-600 sm:px-0">
          <div className="bg-transparent">
            <div className="mt-5 space-y-2">
              <img
                src={Logo}
                alt=""
                style={{
                  color: "white",
                  display: "block",

                  backgroundColor: "transparent",
                  transformOrigin: "center center",
                }}
                // className="bg-transparent"
                width={150}
              />

              <h3 className="text-gray-800  ">
                "Unlock your real estate journey with a seamless sign-up
                experience!"
              </h3>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
            <div>
              <label className="font-medium">Enter Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                onChange={(e) => handleData("name", e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Enter Phone</label>
              <input
                type="tel"
                required
                maxLength={10} // Restricting input length to 10

                placeholder="10 digits phone"
                onChange={(e) => handleData("phone", e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Enter Email</label>
              <input
                type="email"
                required
                placeholder="Your email"
                onChange={(e) => handleData("email", e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Enter Password</label>
              <input
                type="password"
                required
                placeholder="Your password"
                onChange={(e) => handleData("password", e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button
              style={{
                backgroundColor: "#9379B8",
              }}
              onClick={()=>handleSubmit()}

              className="w-full px-4 py-4 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Create account
            </button>
          </form>
          <p className="">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-[#9379B8]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;

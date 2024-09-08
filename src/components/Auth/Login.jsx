import Logo from "../../assets/images/logo.jpeg"; // Path to your image file
import React, { useContext, useState } from "react";

 import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../provider/AuthProvider";
import adminContext from "../../context/AdminContext/AdminContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login1 = () => {
  // const { setToken } = useAuth();
  const navigate = useNavigate();
  const context = useContext(adminContext);
  const { LoginUsers } = context;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleData = (key, value) => {
    setUser((prevItem) => ({
      ...prevItem,
      [key]: value,
    }));
  };
  // const handleLogin = () => {
  //   setToken(
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEwMDAwLCJuYW1lIjoiU0lESEFSVEhBIiwiZW1haWwiOiJzaWRoYXJ0aGE3NTgwMTNAZ21haWwuY29tIiwicGhvbmUiOiIxMjM0NTY3ODkwIiwiaW1hZ2UiOiJwcm9maWxlL3Byb2ZpbGVfMTcwNTA1Nzk2ODgwMC5qcGciLCJpc19tYW5hZ2VyIjoxLCJnZW5kZXIiOiIiLCJhZGRyZXNzIjoiQWdyaWdvbGQgRm9ydHVuZSBmbGF0IHBlbnRob3VzZSA0MDEsIEFyZWtlcmVnYXRlIDU2ODc1NSIsImFnZSI6MCwic3RhdHVzIjoxLCJzdWJzY3JpcHRpb24iOjEsImt5Y192ZXJpZmllZCI6MSwiY3JlYXRlZF9hdCI6IjIwMjQtMDMtMDZUMDk6NTU6MDEuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDI0LTAzLTEzVDA2OjA4OjU1LjAwMFoifSwiaWF0IjoxNzExNDMxNjUxLCJleHAiOjE3MTI3Mjc2NTF9.76q7e0r0dkcKtdoNDaT0u9av1fClUcSBdPBJcpq_onM"
  //   );
  //   navigate("/", { replace: true });
  // };

  const handleSubmit = async (event) => {
     try {
      const result = await LoginUsers(user);
      // Promise resolved
      console.log("Promise resolved:", result);
     
        // Set a timeout to delay the action by 1 second (1000 ms)
           navigate("/", { replace: true });
        
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
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <ToastContainer position="top-center" />

      <div className="max-w-sm w-full text-gray-600 ">
        <div className="text-center flex flex-col justify-start items-start">
          <img
            src={Logo}
            alt=""
            width={150}
            // style={{backgroundColor:"black"}}
          />
          <div className="mt-5 space-y-2 flex flex-col justify-start items-start">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p className="">
              Don't have an account?{" "}
              <a href="/signup" className="font-medium text-[#9379B8]">
                Sign up
              </a>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => handleData("email", e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              placeholder="Enter password"
              value={user.password}
              onChange={(e) => handleData("password", e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            style={{
              backgroundColor: "#9379B8",
            }}
            onClick={()=>handleSubmit()}
            className="w-full px-4 py-4 text-white font-medium rounded-lg duration-150"
          >
            Sign in
          </button>
          <div className="text-center flex flex-col justify-start items-start">
            <a href="1" className="hover:text-indigo-600">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Login1;

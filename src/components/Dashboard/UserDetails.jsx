import React, { useState, useContext, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import userContext from "../../context/UserContext/UserContext";
import { BASE_URL, IMAGE_PATH } from "../../constant";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";

import { IconButton } from "@mui/material";

import { FiEdit } from "react-icons/fi";

import { MdCancel } from "react-icons/md";
import BgBanner from "../../assets/images/banner.png";
import Banner from "../../assets/images/banner_.png";
import adminContext from "../../context/AdminContext/AdminContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDetails = ({ userx }) => {
   const context = useContext(adminContext);
  const { UpdateUser } = context;

  const [user, setUser] = useState({
    id: JSON.parse(localStorage.getItem("me")).id,
    name: JSON.parse(localStorage.getItem("me")).name,
    phone: JSON.parse(localStorage.getItem("me")).phone,
    email: JSON.parse(localStorage.getItem("me")).email,
    address: JSON.parse(localStorage.getItem("me")).address,
    image: JSON.parse(localStorage.getItem("me")).image,
  });
  const handleData = (key, value) => {
    setUser((prevItem) => ({
      ...prevItem,
      [key]: value,
    }));
  };
  const handleImageChange = async (key, value) => {
    if (key === "imageadd" || key === "imageremove") {
      if (key === "imageadd") {
        try {
          if (value.target.files.length > 0) {
            const formData = new FormData();
            formData.append("profilex", value.target.files[0]);

            const queryParams = {
              folderName: "UserImage",
            };

            const response = await fetch(
              `${BASE_URL}/uploadx?${new URLSearchParams(queryParams)}`,
              {
                method: "POST",
                headers: {
                  // "Content-Type": "application/json",
                  // Accept: "application/json",
                },
                body: formData,
              }
            );
            if (response.status === 200) {
              const json = await response.json();

              const selectedFile = value.target.files[0];
              const reader = new FileReader();

              reader.onload = (value) => {
                //setImage(json.data[0]);
                handleData("image",json.data[0].fieldname+ "/"+json.data[0].filename)
               
              };

              if (selectedFile) {
                reader.readAsDataURL(selectedFile);
              }
              // toast.success("Media uploded successfully");
            } else {
              // toast.error("Couldn't upload media(s), Try again later");
              console.log(response.status);
            }
          }
        } catch (e) {
          console.log(e);
          // toast.error("Couldn't upload media(s), Try again later");
        }
      } else {
        try {
          handleData("image","")

        } catch (e) {
          console.log(e);
          // toast.error("Couldn't upload media(s), Try again later");
        }
      }
    } else {
      handleData("image","")

     // setImage(null);
    }

    // console.log(floorPlan);
  };




  const handleUpdate = async (event) => {
    try {
      const result = await UpdateUser(user);
      // Promise resolved
      console.log("Promise resolved:", result);
      toast.success("User updated successfully");

      // Perform operations based on resolved result
    } catch (error) {
      toast.success("Couldn't update user, Try again later");

      // Promise rejected
      console.error("Promise rejected:", error);
      // Perform operations based on rejected error
    }

    // onSearch(query);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        borderRadius: 10,
        fontFamily: "Poppins, sans-serif",
        padding: 20,

        // backgroundColor:"green"
      }}
    >
      <ToastContainer position="top-center" />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            backgroundColor: "white",
            padding: 10,
            height: 150,
            width: 150,
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          {user.image==="" && (
            <div>
              <div>
                <label
                  htmlFor="fileInput"
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: 5,
                  }}
                >
                  <FiEdit />
                </label>

                <input
                  id="fileInput"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => handleImageChange("imageadd", e)}
                  style={{
                    display: "none",
                    borderRadius: 10,
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            </div>
          )}

          {user.image!=="" && (
            <div style={{ alignItems: "center" }}>
              <div
                style={{
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                  padding: "5px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => handleImageChange("imageremove", e)}
                >
                  <MdCancel size={25} />
                </span>
                <img
                  src={IMAGE_PATH + user.image}
                  alt="Selected"
                  style={{
                    width: "120px",
                    height: "130px",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div
          onClick={() => handleUpdate()}
          className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-[#9379B8]  border-2 border-white  rounded-md md:inline-flex"
        >
          Update
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
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          // flex:1,
          // backgroundColor:"black",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "100%",
            border: "1px solid #ccc",
            padding: 10,

            flex: 1,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label style={{ marginBottom: "10px", flex: 1 }}>NAME</label>

            <IconButton
              type="submit"
              edge="start"
              // disabled={checked.length === 0 ? true : false}
              // onClick={() => handleDeleteUsers()}
              // onClick={handleFilters}
            >
              <FiEdit color="#9379B8" size={20} />
            </IconButton>
          </div>
          <input
            type="text"
            required
            placeholder="Your Name"
            value={user.name}
            onChange={(e) => handleData("name", e.target.value)}
            className="w-full pr-3 py-2 text-gray-500 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
            style={{
              border: "none", // Remove any default border
              outline: "none", // Remove any default outline
              boxShadow: "none",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            border: "1px solid #ccc",
            padding: 10,
            marginLeft: 10,
            marginRight: 10,

            flex: 1,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label style={{ marginBottom: "10px", flex: 1 }}>EMAIL</label>

            <IconButton
              type="submit"
              edge="start"
              // disabled={checked.length === 0 ? true : false}
              // onClick={() => handleDeleteUsers()}
              // onClick={handleFilters}
            >
              <FiEdit color="#9379B8" size={20} />
            </IconButton>
          </div>
          <input
            type="email"
            required
            placeholder="Your Email"
            value={user.email}
            onChange={(e) => handleData("email", e.target.value)}
            className="w-full pr-3 py-2 text-gray-500 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
            style={{
              border: "none", // Remove any default border
              outline: "none", // Remove any default outline
              boxShadow: "none",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            border: "1px solid #ccc",
            padding: 10,

            flex: 1,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label style={{ marginBottom: "10px", flex: 1 }}>PHONE</label>

            <IconButton
              type="submit"
              edge="start"
              // disabled={checked.length === 0 ? true : false}
              // onClick={() => handleDeleteUsers()}
              // onClick={handleFilters}
            >
              <FiEdit color="#9379B8" size={20} />
            </IconButton>
          </div>
          <input
            type="tel"
            required
            readOnly
            placeholder="Your Phone"
            value={user.phone}
            onChange={(e) => handleData("phone", e.target.value)}
            className="w-full pr-3 py-2 text-gray-500 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
            style={{
              border: "none", // Remove any default border
              outline: "none", // Remove any default outline
              boxShadow: "none",
            }}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          border: "1px solid #ccc",
          padding: 10,
          marginTop: 20,

          marginRight: 30,
          // flex: 1,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ marginBottom: "10px", flex: 1 }}>Address</label>

          <IconButton
            type="submit"
            edge="start"
            // disabled={checked.length === 0 ? true : false}
            // onClick={() => handleDeleteUsers()}
            // onClick={handleFilters}
          >
            <FiEdit color="#9379B8" size={20} />
          </IconButton>
        </div>
        <input
          type="tel"
          required
          placeholder="Your Address"
          value={user.address}
          onChange={(e) => handleData("address", e.target.value)}
          className="w-full pr-3 py-2 text-gray-500 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
          style={{
            border: "none", // Remove any default border
            outline: "none", // Remove any default outline
            boxShadow: "none",
          }}
        />
      </div>

      <div className="bg-white w-full max-w-7xl mt-10 mx-auto p-4">
        <div
          style={{
            height: "19vh",
            backgroundImage: `url(${BgBanner})`,
            display: "flex",
            objectFit: "cover",
            borderRadius: 10,

            justifyContent: "space-between",
            alignItems: "center",

            // backgroundColor:"black",
          }}
        >
          <img
            src={Banner}
            alt="Bannerd"
            style={{
              objectFit: "cover",
              paddingLeft: 15,
            }}
            className="hidden md:flex  h-[25vh] "
          />
          <div
            className="px-4   w-[100%] flex-col justify-center items-center"
            // className="w-[100%] flex justify-center items-center"
          >
            <div className="flex px-0  justify-center items-center lg:justify-end lg:items-end flex-row ">
              <h1 className="text-sm   lg:text-xl font-bold  text-white">
                DO YOU WANT TO
              </h1>
              <h1 className="text-sm   lg:text-xl mx-2 font-bold  text-white">
                BUY OR SELL
              </h1>
              <h1 className="text-sm lg:text-xl font-bold  text-white">
                ANY PROPERTY?
              </h1>
            </div>

            <div className="flex flex-col  justify-center items-center lg:justify-end lg:items-end">
              <h1 style={{ color: "white" }} className="text-md mt-2 text-end">
                +91 8884769695
              </h1>

              <h1
                href="/contact"
                style={{ color: "white", textDecorationColor: "white" }}
                className="text-sm underline text-end"
              >
                https://resell.villas/contact
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          width: "100%",
          //border: "1px solid #ccc",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          marginTop: 20,
          backgroundColor: "#9379b8",

          marginRight: 30,
          // flex: 1,
          borderRadius: 10,
        }}
      >
        <label
          style={{
            marginBottom: "10px",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            flex: 1,
          }}
        >
          Are you looking to sell your property?
        </label>

        <label
          style={{
            marginBottom: "10px",
            color: "black",
             fontSize: 16,
            flex: 1,
          }}
        >
          From listing to closing, we have got you covered. Sell your property
          with ease and achive your next chapter
        </label>
        <div style={{
          display:"flex",
          justifyContent:"end"
        }}>
          <a
            href="/"
            className="mt-6 flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 border-2 border-black  rounded-md md:inline-flex"
          >
            Contact us
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
        </div>
      </div> */}
    </div>
  );
};

export default UserDetails;

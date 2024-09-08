import React, { useContext, useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Navbar from "./Navbar";
import Footer from "./footer";
import { MdContentCopy } from "react-icons/md";
import { RiShareFill } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import BasicDetails from "./BasicDetails";
import BasicDetails2 from "./BasicDetails2";

import PropertyVideo from "./PropertyVideo";
import { IMAGE_PATH } from "../constant";

import { MdFavoriteBorder } from "react-icons/md";
import LeadRegister from "./LeadRegister";
import SlickList3 from "./SlickList3";
import Overview from "./Overview";
import Verified from "../assets/images/verified.png";

import "react-toastify/dist/ReactToastify.css";

import FloorPlan from "./FloorPlan";
import PriceList from "./PriceList";
import LocationMap from "./LocationMap";
import { useParams } from "react-router-dom";
import assetContext from "../context/AssetsContext/AssetContext";

import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const PropertyDetails = () => {
  const [spinnerStatus, SetSpinnerStatus] = useState(false);

  const { slug } = useParams();

  const context = useContext(assetContext);
  const { asset, getAAsset, registerLead } = context;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectData = localStorage.getItem("projectData");
    if (projectData) {
      setProjects(JSON.parse(projectData));
      // localStorage.removeItem('projectData'); // Optionally remove it after retrieving
    }
  }, []);

  // const [project, setProject] = useState(null);
  const HandleClick = (images) => {
    const newWindow = window.open(`/gallery`, "_blank");
    newWindow.onload = function () {
      newWindow.postMessage(images, window.location.origin);
    };

    // const newWindow = window.open(`/gallery`, "_blank");

    // newWindow.onload = function () {
    //   newWindow.postMessage(images, window.location.origin);
    // };
  };

  const tabItems = [
    "Overview",
    "Basic Details",
    "floor-plan",
    "History",
    "Video",
    "Location Map",
  ];

  useEffect(() => {
    getAAsset({ slug: slug });
  }, []);

  const handleTabClick = (id) => {
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - 280;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  /// Leads form(schedule your visit code starts here)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleData = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Clear error when the user starts typing
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.toString().trim()) newErrors.name = "Name is required.";
    if (!formData.email.toString().trim())
      newErrors.email = "Email is required.";
    if (!formData.phone.toString().trim())
      newErrors.phone = "Phone is required.";

    return newErrors;
  };

  const onSignup = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onCaptchVerify();

      const appVerifier = window.recaptchaVerifier;

      const formatPh = "+91" + formData.phone.toString();
      console.log(formatPh);

      signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setShowOTP(true);
          toast.success("OTP has been sent the given phone!");
        })
        .catch((error) => {
          console.log(error);
        });
      // Proceed with form submission or next steps
    }
  };

  const handleClick = async (data) => {
    try {
      await registerLead({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onOTPVerify(otp) {
    console.log(otp);

    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        handleClick(formData);
        toast.success("Your callback request has been sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
        setOtp("");
      })
      .catch((err) => {
        console.log(err);
        toast.error("OTP invalid!");
      });
  }

  return (
    <div
      className="flex flex-col justify-center items-center max-w-full bg-[#F7F7F7] mt-16  "
      style={{
        fontFamily: "Poppins, sans-serif",
        // overflowX: "hidden",
        // width: "100%",
      }}
    >
      <div className="fixed top-0 w-full z-50 bg-white border border-gray-300 rounded-md shadow-md">
        <Navbar />
      </div>
      <Toaster toastOptions={{ duration: 4000 }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          alignItems: "center",
          paddingRight: 20,
        }}
        className="sticky top-28 z-30 sm:w-[70vw]"
      >
        <Tabs.Root
          defaultValue="Overview"
          className=" px-4 md:px-8 bg-white  py-4"
        >
          <Tabs.List className="w-full flex flex-wrap items-start gap-x-3 overflow-x-auto text-sm sticky top-16   z-30   justify-start ">
            {tabItems.map((item, idx) => (
              <Tabs.Trigger
                key={idx}
                className="group outline-none py-1.5 border-b-2 border-transparent text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
                value={item}
                onClick={() =>
                  handleTabClick(item.replace(/\s+/g, "-").toLowerCase())
                }
              >
                <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
                  {item}
                </div>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
        <LeadRegister title="Book a site visit"  brochure={null} />

        {/* <a
          href="/contact"
          className="hidden sm:flex my-4 items-center justify-center gap-x-1 mx-0 sm:mx-8  py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 border-2 border-black  rounded-md md:inline-flex"
        >
          Book a site visit
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
        </a> */}
      </div>

      {asset !== null ? (
        <div className="max-w-screen-7xl mt-20">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-4">
            <div
              style={{
                // width: "45vw",
                position: "relative",
                height: 500,
              }}
              className="w-96vw sm:w-[45vw] m-2 sm:m-0"
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  padding: 5,
                  borderRadius: 10,
                }}
                onClick={() => HandleClick(asset.property_images.images)}
                src={
                  IMAGE_PATH +
                  asset.property_images.images[0].fieldname +
                  "/" +
                  asset.property_images.images[0].filename
                }
                alt="Error"
              />
              <a
                href="#"
                style={{
                  position: "absolute",
                  bottom: 10, // Adjust this value to position it correctly
                  right: 10, // Adjust this value to position it correctly
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: 5,
                  fontSize: 12,
                  padding: 5,
                  textDecoration: "none",
                }}
              >
                {asset.property_images.images.length} images
              </a>
              <div
                style={{
                  position: "relative",
                  top: "-5vh",
                  left: 10,
                  //  backgroundColor: "white",
                }}
              >
                <img src={Verified} alt="Verified" className="h-[4vh]" />
              </div>
            </div>

            <div
              style={{
                width: "25vw",
                display: "flex",
                flexDirection: "column",
                // height: 500,
              }}
              className="hidden h-0 sm:h-[500px] sm:block"
            >
              <img
                style={{
                  height: 250,
                  borderRadius: 10,

                  objectFit: "cover",
                  padding: 5,
                }}
                className="hidden sm:block"
                src={
                  IMAGE_PATH +
                  asset.property_images.images[1].fieldname +
                  "/" +
                  asset.property_images.images[1].filename
                }
                alt="Error"
              />

              <img
                style={{
                  height: 250,
                  borderRadius: 10,

                  objectFit: "cover",
                  padding: 5,
                }}
                className="hidden sm:block"
                src={
                  IMAGE_PATH +
                  asset.property_images.images[2].fieldname +
                  "/" +
                  asset.property_images.images[2].filename
                }
                alt="Error"
              />
            </div>
          </div>
        </div>
      ) : null}
      {asset !== null ? (
        <div className="w-[100vw] sm:w-[70vw]  mt-4 flex justify-center  ">
          <div className="flex flex-col">
            <div
              style={{
                backgroundColor: "white",
                display: "flex",

                // width: "45vw",
                borderRadius: 10,

                // fontFamily:"sans-serif",
                // maxWidth:"40vw",
                // justifyContent: "space-between",
                flexDirection: "column",
              }}
              className="w-[95vw] sm:w-auto p-4 sm:p-8 border border-gray-300 rounded-md shadow-md"
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    // onClick={() => HandleClick( project.slug)}
                    style={{
                      fontSize: 16,
                      fontWeight: "450",
                    }}
                  >
                    {asset.property_name}
                  </label>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <IconButton>
                      <MdFavoriteBorder
                        style={{
                          margin: "0px 10px",
                        }}
                        size="24px"
                      />
                    </IconButton>

                    <IconButton>
                      <RiShareFill
                        style={{
                          margin: "0px 10px",
                        }}
                        size="22px"
                      />
                    </IconButton>
                  </div>
                </div>
                <label
                  style={{
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  {asset.location}, {asset.city}
                </label>
              </div>
              <label
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  marginTop: 5,
                }}
              >
                {asset.bedroom}, {asset.property_type}
              </label>
              <label
                style={{
                  fontSize: 20,
                  marginTop: 5,
                  fontWeight: 500,
                }}
              >
                ₹{asset.property_price} Cr
              </label>
            </div>

            <div
              id="overview"
              className="  w-full flex justify-start items-start  "
            >
              <Overview
                name={asset !== null ? asset.property_name : ""}
                text={asset !== null ? asset.about : ""}
              />
            </div>

            <div
              id="basic-details"
              className="w-full flex justify-start items-start  "
            >
              <BasicDetails2
                project={asset !== null ? asset : null}
                idsx={
                  asset !== null &&
                  asset.aminities !== null &&
                  asset.aminities.aminities.length > 0
                    ? asset.aminities.aminities
                    : []
                }
              />
            </div>
            <div
              id="floor-plan"
              className="w-full flex justify-start items-start  "
            >
              <FloorPlan
                 type={asset !== null ? asset.property_type : ""}
                floorPlans={
                  asset !== null &&
                  asset.floor_plan !== null &&
                  asset.floor_plan.plans.length > 0
                    ? asset.floor_plan.plans
                    : []
                }
              />
            </div>

            <div
              id = "history"
              className="w-full flex justify-start items-start  "
            >
              <BasicDetails project={asset !== null ? asset : null} />
            </div>

            <div id="video" className="w-full flex justify-start items-start  ">
              <PropertyVideo src={asset !== null ? asset.video : null} />
            </div>

            <div
              id="location-map"
              className="w-full flex justify-center items-center  "
            >
              <LocationMap
                landmarks={
                  asset !== null &&
                  asset.landmarks !== null &&
                  asset.landmarks.landmarks.length > 0
                    ? asset.landmarks.landmarks
                    : []
                }
              />
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              width: "25vw",
              height: 500,
              padding: 10,
              marginLeft: 10,
              borderRadius: 10,
              position: "sticky", // Make the div sticky
              top: "24vh", // Set the top offset when it should start sticking
              right: "14.5vw",
              //  zIndex: 30,
            }}
            className="shadow-md hidden lg:block "
          >
            <div
              id="recaptcha-container"
              //  className="bg-white h-[650px] sticky py-12 lg:flex lg:justify-center"
            ></div>
            <div
              style={{
                color: "black",
                fontWeight: 600,
                margin: 10,
                flex: 1,
                fontSize: 20,
              }}
            >
              Schedule your visit
            </div>

            <div
              style={{
                width: "100%",
                // border: "1px solid #ccc",
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
                <label
                  style={{
                    marginBottom: "10px",
                    flex: 1,
                    fontSize: 14,
                  }}
                >
                  NAME
                </label>
              </div>
              <input
                type="text"
                required
                onChange={(e) => handleData("name", e.target.value)}
                placeholder="Enter your name"
                className="w-full pr-3 py-2 text-gray-500 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                style={{
                  border: "none", // Remove any default border
                  outline: "none", // Remove any default outline
                  boxShadow: "none",
                  backgroundColor: "#F7F7F7",
                }}
              />
              {errors.name && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {errors.name}
                </div>
              )}
            </div>
            <div
              style={{
                width: "100%",
                // border: "1px solid #ccc",
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
                <label
                  style={{
                    marginBottom: "10px",
                    flex: 1,
                    fontSize: 14,
                  }}
                >
                  EMAIL
                </label>
              </div>
              <input
                type="email"
                required
                onChange={(e) => handleData("email", e.target.value)}
                placeholder="Enter your email"
                className="w-full pr-3 py-2 text-gray-500 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                style={{
                  border: "none", // Remove any default border
                  outline: "none", // Remove any default outline
                  boxShadow: "none",
                  backgroundColor: "#F7F7F7",
                }}
              />
              {errors.email && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {errors.email}
                </div>
              )}
            </div>
            <div
              style={{
                width: "100%",
                // border: "1px solid #ccc",
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
                <label
                  style={{
                    marginBottom: "10px",
                    flex: 1,
                    fontSize: 14,
                  }}
                >
                  PHONE
                </label>
              </div>
              <input
                type="tel"
                required
                onChange={(e) => handleData("phone", e.target.value)}
                placeholder="Enter your phone(10 digits)"
                className="w-full pr-3 py-2 text-gray-500 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                style={{
                  border: "none", // Remove any default border
                  outline: "none", // Remove any default outline
                  boxShadow: "none",
                  backgroundColor: "#F7F7F7",
                }}
              />
              {errors.phone && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {errors.phone}
                </div>
              )}
            </div>
            {showOTP ? (
              <div
                style={{
                  width: "100%",
                  // border: "1px solid #ccc",
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
                  <label
                    style={{
                      marginBottom: "10px",
                      flex: 1,
                      fontSize: 14,
                    }}
                  >
                    OTP
                  </label>
                </div>
                <input
                  type="number"
                  required
                  value={otp}
                  // onChange={(e) => handleData("message", e)}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="6 digts OTP"
                  className="w-full pr-3 py-2 text-gray-500 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                  style={{
                    border: "none", // Remove any default border
                    outline: "none", // Remove any default outline
                    boxShadow: "none",
                    backgroundColor: "#F7F7F7",
                  }}
                />
                {errors.otp && (
                  <div style={{ color: "red", marginTop: "5px" }}>
                    {errors.otp}
                  </div>
                )}
              </div>
            ) : null}

            {showOTP ? (
              <div
                style={{
                  backgroundColor: "#9379B8",
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 10,
                  marginRight: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => onOTPVerify(otp)}
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium  border-2 border-white  rounded-md md:inline-flex"
              >
                Verify and submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  s
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
            ) : (
              <div
                style={{
                  backgroundColor: "#9379B8",
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 10,
                  marginRight: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => onSignup()}
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium  border-2 border-white  rounded-md md:inline-flex"
              >
                Verify phone
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  s
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
            )}
          </div>
        </div>
      ) : null}

      <SlickList3 id="similar-projects" similarProjects={projects} />
    </div>
  );
};

export default PropertyDetails;

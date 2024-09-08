import React, { useState, useContext } from "react";

import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import assetContext from "../context/AssetsContext/AssetContext";

import Navbar from "./Navbar";

const ContactUs = () => {

  const [selectedOption, setSelectedOption] = useState("buyer");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    message: "",
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
    // if (!formData.otp.toString().trim()) newErrors.otp = "OTP is required.";
    if (!formData.message.toString().trim())
      newErrors.message = "Message is required.";
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

  const context = useContext(assetContext);
  const { registerLead } = context;

  const handleClick = async (data) => {
    try {
      await registerLead({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: selectedOption + data.message,
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
          phone: ""
       
        });
        setOtp("");
      })
      .catch((err) => {
        console.log(err);
        toast.error("OTP invalid!");
      });
  }

  return (
    <div>
      <Navbar />
      <div className="gap-x-10 flex flex-col md:flex-row justify-center items-center md:items-start">
        <Toaster toastOptions={{ duration: 4000 }} />

        <div
          style={{
            marginBottom: 50,
            marginTop: 20,

            //height: "50vh",
            padding: 35,
            borderRadius: 6,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f6f7f9",
          }}
          className="w-[90vw] md:w-[40vw]"
        >
          <label
            style={{
              fontSize: 60,
            }}
          >
            Own the joy
          </label>
          <label
            style={{
              fontSize: 26,
              //fontWeight: "",
              marginTop: 25,
            }}
          >
            Your Dream Home is Waiting
          </label>
          <label
            style={{
              fontSize: 20,
              color: "gray",
              marginTop: 25,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Take the next step in buying a second home. We're excited to help
            you turn this dream into a reality, and we're here to support you
            with all the information you need to make it happen.
          </label>
          <label
            style={{
              fontSize: 26,
              //fontWeight: "",
              marginTop: 25,
              color: "black",
            }}
          >
            Want to chat?
          </label>
          <div>
            <label
              style={{
                fontSize: 20,
                color: "gray",
                marginTop: 25,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Call us at:
            </label>
            <label
              style={{
                fontSize: 20,
                color: "#9379b7",
                marginTop: 25,
                marginLeft: 10,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              +91 8884769695
            </label>
          </div>
          <div>
            <label
              style={{
                fontSize: 20,
                color: "gray",
                marginTop: 25,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Email us at:
            </label>
            <label
              style={{
                fontSize: 20,
                color: "#9379b7",
                marginTop: 25,
                marginLeft: 10,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              info@homznoffiz.com
            </label>
          </div>
        </div>
        <div
          style={{
            marginBottom: 50,
            marginTop: 20,
            //height: "50vh",
            //   padding: 35,
            display: "flex",
            paddingBottom: 25,
            flexDirection: "column",
            backgroundColor: "#293f66",

            //backgroundColor: "#3d537a",

            borderRadius: 6,
            border: "solid 1px #7c90b2",
          }}
          className="w-[90vw] md:w-[40vw]"
        >
          <div
            style={{
              //  backgroundColor: "white",
              // width: "25vw",

              padding: 10,
              borderRadius: 10,

              //  zIndex: 30,
            }}
            className="shadow-md "
          >
            <div
              id="recaptcha-container"
              //  className="bg-white h-[650px] sticky py-12 lg:flex lg:justify-center"
            ></div>
            <div
              style={{
                color: "white",
                fontWeight: 600,
                margin: 10,
                flex: 1,
                fontSize: 24,
              }}
            >
              Request a callback
            </div>

            <div
              style={{
                backgroundColor: "#3d537a",
                padding: 15,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 6,
                border: "solid 1px #7c90b2",
              }}
              className="flex flex-row space-x-4"
            >
              <label className="flex items-center">
                <input
                  type="radio"
                  value="buyer"
                  checked={selectedOption === "buyer"}
                  onChange={handleOptionChange}
                  className="form-radio text-red-500"
                />
                <span className="ml-2 text-white">Buyer</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  value="seller"
                  checked={selectedOption === "seller"}
                  onChange={handleOptionChange}
                  className="form-radio text-red-500"
                />
                <span className="ml-2 text-white">Seller</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  value="agent"
                  checked={selectedOption === "agent"}
                  onChange={handleOptionChange}
                  className="form-radio text-red-500"
                />
                <span className="ml-2 text-white">Agent</span>
              </label>
            </div>

            <div
              style={{
                backgroundColor: "#3d537a",
                padding: 15,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 6,
                border: "solid 1px #7c90b2",
                marginTop: 20,
              }}
            >
              <div className="flex flex-col md:flex-row justify-start items-start md:justify-center md:items-center ">
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
                        color: "white",
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
                    className="w-full pr-3 py-2 text-white-900 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                    style={{
                      border: "none", // Remove any default border
                      outline: "none", // Remove any default outline
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 6,
                      backgroundColor: "#293f66",
                      border: "solid 1px #7c90b2",
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
                        color: "white",
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
                    className="w-full pr-3 py-2 text-white-900 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                    style={{
                      border: "none", // Remove any default border
                      outline: "none", // Remove any default outline
                      boxShadow: "none",
                      // backgroundColor: "#F7F7F7",
                      color: "white",
                      borderRadius: 6,
                      backgroundColor: "#293f66",
                      border: "solid 1px #7c90b2",
                    }}
                  />
                  {errors.email && (
                    <div style={{ color: "red", marginTop: "5px" }}>
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-start items-start md:justify-center md:items-center ">
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
                        color: "white",
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
                    className="w-full pr-3 py-2 text-white-900 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                    style={{
                      border: "none", // Remove any default border
                      outline: "none", // Remove any default outline
                      boxShadow: "none",
                      //backgroundColor: "#F7F7F7",
                      color: "white",
                      borderRadius: 6,
                      backgroundColor: "#293f66",
                      border: "solid 1px #7c90b2",
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
                          color: "white",
                        }}
                      >
                        OTP
                      </label>
                    </div>
                    <input
                      type="number"
                      required
                      value={otp}
                      //onChange={(e) => handleData("message", e)}
                      onChange={(e) => setOtp(e.target.value)}

                       
                      placeholder="6 digts OTP"
                      className="w-full pr-3 py-2 text-white-900 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                      style={{
                        border: "none", // Remove any default border
                        outline: "none", // Remove any default outline
                        boxShadow: "none",
                        // backgroundColor: "#F7F7F7",
                        color: "white",
                        borderRadius: 6,
                        backgroundColor: "#293f66",
                        border: "solid 1px #7c90b2",
                      }}
                    />
                    {errors.otp && (
                      <div style={{ color: "red", marginTop: "5px" }}>
                        {errors.otp}
                      </div>
                    )}
                  </div>
                ) : null}
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
                      color: "white",
                    }}
                  >
                    SEND US A NOTE
                  </label>
                </div>
                <textarea
                  required
                  placeholder="Write your message"
                  rows={6}
                  onChange={(e) => handleData("message", e.target.value)}
                  style={{
                    border: "none",

                    outline: "none",

                    boxShadow: "none",
                    // backgroundColor: "#F7F7F7",
                    color: "white",
                    borderRadius: 6,
                    maxLines: 6,

                    backgroundColor: "#293f66",
                    border: "solid 1px #7c90b2",
                  }}
                  className="w-full pr-3 py-2 text-white-900 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
                />
                {errors.message && (
                  <div style={{ color: "red", marginTop: "5px" }}>
                    {errors.message}
                  </div>
                )}

                {/* <input
              type="text"
              required
              placeholder="Write your message"
              className="w-full pr-3 py-2 text-white-900 bg-transparent border-none outline-none focus:outline-none focus:border-none shadow-sm"
            /> */}
              </div>
              {showOTP ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#9379B8",
                      marginTop: 20,
                      width: "50%",
                      alignItems: "end",
                      marginBottom: 20,
                      marginLeft: 10,
                      marginRight: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // border: "solid 1px #7c90b2"
                    }}
                    onClick={()=>onOTPVerify(otp)}
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
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#9379B8",
                      marginTop: 20,
                      width: "50%",
                      alignItems: "end",
                      marginBottom: 20,
                      marginLeft: 10,
                      marginRight: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // border: "solid 1px #7c90b2"
                    }}
                    onClick={()=>onSignup()}
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

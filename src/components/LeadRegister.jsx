import * as Dialog from "@radix-ui/react-dialog";
import React, { useState, useEffect, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import assetContext from "../context/AssetsContext/AssetContext";
import { CgSpinner } from "react-icons/cg";
import { IMAGE_PATH } from "../constant";
import OtpInput from "otp-input-react";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const LeadRegister = ({ brochure, title, }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const context = useContext(assetContext);
  const { registerLead } = context;

  const handleClick = async (data) => {
    try {
      await registerLead({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleData = (key, value) => {
    setData((prevItem) => ({
      ...prevItem,
      [key]: value,
    }));
  };

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+91" + data.phone;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP has been sent the given phone!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        // console.log(res);
        setUser(res.user);
        setLoading(false);
        handleClick(data);
        setIsOpen(false); // Close the dialog after OTP verification
        HandleClick();//open the pdf in new tab
      })
      .catch((err) => {
        console.log(err);
        toast.error("OTP invalid!");

        setLoading(false);
      });
  }
  const HandleClick = () => {
    if(brochure){
      window.open(`${IMAGE_PATH}${brochure.fieldname}/${brochure.filename}`, "_blank");
    }
   };
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className="fixed inset-0 z-1000 overflow-y-auto"
    >
      <ToastContainer position="top-right" />

      <Dialog.Trigger
        className={`h-12  hidden sm:flex px-6 shadow-sm bg-[#9379B8] rounded-md text-white flex flex-row items-center justify-center`}
      >
        {title}
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
      </Dialog.Trigger>
      <Dialog.Portal>

      <div id="recaptcha-container"></div>

        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
          <div className="bg-white rounded-md shadow-lg px-4 py-6">
            <div className="flex items-center justify-center flex-col gap-4 rounded-lg">
              <Dialog.Close className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Dialog.Close>

              <div className="max-w-sm mx-auto space-y-3 text-center ">
                <Dialog.Title className="text-lg font-medium text-gray-800 ">
                 {brochure? "Download Brochure": "Enquiry Now"} 
                </Dialog.Title>

                <Dialog.Description className=" text-sm text-gray-600">
                  <p>
                    Get a callback from representative team for home loan
                    assistance or any other important info about any project or
                    offered servicess
                  </p>
                </Dialog.Description>
                <div className="relative">
                  <svg
                    className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                  <input
                    onChange={(e) => handleData("name", e.target.value)}
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    placeholder="Enter your name"
                  />
                </div>

                <fieldset className="Fieldset relative">
                  <svg
                    className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <input
                    onChange={(e) => handleData("email", e.target.value)}
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    placeholder="Enter your email"
                  />
                </fieldset>
                <fieldset className="Fieldset relative">
                  <svg
                    className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5.75A2.75 2.75 0 015.75 3h2.286c.953 0 1.826.54 2.239 1.371l1.178 2.357c.394.787.272 1.748-.316 2.367L8.77 11.23a12.042 12.042 0 005.216 5.216l1.135-1.364c.619-.588 1.58-.71 2.367-.316l2.357 1.178A2.75 2.75 0 0121 15.964v2.286A2.75 2.75 0 0118.25 21h-2.5A15.75 15.75 0 013 5.75z"
                    />
                  </svg>
                  <input
                    onChange={(e) => handleData("phone", e.target.value)}
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    placeholder="Enter your phone(10 digits)"
                  />
                </fieldset>
                <fieldset className="Fieldset relative">
                  <svg
                    className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3h6m3.75 6.75H6.75A2.25 2.25 0 014.5 16.5V6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75V16.5a2.25 2.25 0 01-2.25 2.25z"
                    />
                  </svg>
                  <input
                    onChange={(e) => handleData("message", e.target.value)}
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    placeholder="Enter your message"
                  />
                </fieldset>

                {showOTP ? (
                  <>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                      className="opt-container "
                    ></OtpInput>
                  </>
                ) : null}
                {showOTP ? (
                  <button
                    onClick={() => onOTPVerify()}
                    className="bg-[#9379B8] w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span> {"Verify OTP and submit"}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onSignup()}
                    className="bg-[#9379B8] w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span> {"Verify phone"}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LeadRegister;

import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaCity } from "react-icons/fa";
import { useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";

import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./styles.css";

const routes = [
  {
    path: "/user/my-account",
    name: "My-Account",
    icon: <FaUser />,
  },

  {
    path: "/user/wish-list",
    name: "Wishlist",
    icon: <FaBookmark />,
  },
  {
    path: "/user/chat",
    name: "Chat",
    icon: <IoChatboxEllipses />,
  },
  // {
  //   path: "/user/notification",
  //   name: "Messages",
  //   icon: <IoNotifications />,
  // },
];

const SideBar = ({ children }) => {
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const [isOpen, setIsOpen] = useState(0);
  const toggle = (index) => setIsOpen(index);
  return (
    <>
      <div
        style={{
          width: "99vw",
          height: "90vh",
          //display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor:"grey"
        }}
        className="hidden lg:flex"
      >
        <div
          style={{
            display: "flex",

            width: "90vw",
            //  backgroundColor: "#F6F7F9",
            borderRadius: 10,
            
          }}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              backgroundColor: "#F6F7F9",
              borderRadius: 10,
              color: "white",

              height: "80vh",

              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
              marginRight: "20px",

            }}
          >
            <section
              style={{
                marginTop: "15px",
                display: "flex",
                alignItems: "start",
                flex: 1,
                flexDirection: "column",
                columnGap: "35px",
              }}
            >
              {routes.map((route, index) => {
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    onClick={() => toggle(index)}
                    className="link"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      minWidth: "15vw",
                      justifyContent: "start",
                      alignItems: "center",
                      color: "white",
                      gap: "10px",
                      padding: "15px 10px",
                      borderRight: "4px solid transparent",
                      transition: "0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)",
                    }}
                  >
                    <div
                      style={{
                        color: index === isOpen ? "#9379B8" : "black",
                      }}
                    >
                      {route.icon}
                    </div>

                    <AnimatePresence>
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        style={{
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 500,

                          textDecoration: "none",
                          color: index === isOpen ? "#9379B8" : "black",
                        }}
                      >
                        {route.name}
                      </motion.div>
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>

            <section
              style={{
                marginTop: "15px",
                borderRadius: 15,
                minWidth: "15vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                backgroundColor: "#9379B8",
                flexDirection: "column",

                columnGap: "35px",
              }}
            >
              <NavLink
                to="/dashboard/logout"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  gap: "10px",
                  padding: "15px 10px",
                  borderRight: "4px solid transparent",
                  transition: "0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)",
                }}
              >
                <div
                  style={{
                    color: "white",
                  }}
                >
                  <RiLogoutCircleRLine />
                </div>

                <AnimatePresence>
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={{
                      whiteSpace: "nowrap",

                      fontSize: "14px",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Logout
                  </motion.div>
                </AnimatePresence>
              </NavLink>
            </section>
          </motion.div>

          <main
            style={{
              width: "100%",
              height: "80vh",
              maxHeight: "80vh",
              backgroundColor: "#F6F7F9",
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default SideBar;

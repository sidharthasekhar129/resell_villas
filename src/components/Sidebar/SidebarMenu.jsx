import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./styles.css";
const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div
        style={{
          display: "flex",
          color: "white",

          padding: "5px 10px",
          borderRight: "4px solid transparent",
          transition: "0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)",
          justifyContent: "space-between",
        }}
        onClick={toggleMenu}
      >
        <div style={{
             display: "flex",
             gap: "10px",
        }}>
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                style={{ whiteSpace: "nowrap", fontSize: "15px" }}
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <FaAngleDown />
          </motion.div>
        )}
      </div>{" "}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {route.subRoutes.map((subRoute, i) => (
              <motion.div variants={menuItemAnimation} key={i} custom={i}>
                <NavLink
                  to={subRoute.path}
                  className="link"
                  style={{
                    display: "flex",
                    color: "white",
                    gap: "10px",
                    padding: "5px 10px",
                    borderRight: "4px solid transparent",
                    transition: "0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)",
                    textDecoration: "none",
                  }}
                >
                  <div className="icon">{subRoute.icon}</div>
                  <motion.div
                    style={{
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                    }}
                  >
                    {subRoute.name}
                  </motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;

import React, { useState } from "react";
import DateImage from "../assets/icons/solar_calendar-broken.png";
import SourceImage from "../assets/icons/fluent_slide-record-20-regular.png";
import DetailImage from "../assets/icons/majesticons_checkbox-list-detail-line.png";
import PriceImage from "../assets/icons/formkit_rupee.png";

const BasicDetails = ({ project }) => {
  return (
    <div className=" mt-10 py-14 sm:py-22 p-4 sm:px-8 relative w-[95vw] sm:w-[75vw] lg:w-[45vw] max-w-7xl  bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-xl text-gray-800 font-semibold">
          Property History
        </h1>
        <div
          style={{
            width: "5vw",
            backgroundColor: "purple",
            height: 3,
            marginTop: 10,
          }}
        ></div>
      </div>
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
        className="mt-4"
      >
        <div className="flex flex-wrap gap-y-2  mt-2">
          <div
            style={{
              backgroundColor: "#f6f7f9",
              borderRadius: 10,
              margin: 5,
            }}
            className="flex items-center space-x-4 px-4 py-2"
          >
            <img src={DateImage} alt="DateImage" className="w-20 sm:35" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "gray",
                }}
              >
               Property Age
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                }}
                //className="text-sm"
              >
                {project !== null ? project.property_age : ""} year(s)
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f6f7f9",
              borderRadius: 10,
              margin: 5,
            }}
            className="flex items-center space-x-4 px-4 py-2"
          >
            <img src={SourceImage} alt="DateImage" className="w-20 sm:35" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "gray",
                }}
              >
                Source
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Public Record
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f6f7f9",
              borderRadius: 10,
              margin: 5,
            }}
            className="flex items-center space-x-4 px-4 py-2"
          >
            <img src={DetailImage} alt="DateImage" className="w-20 sm:35" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "gray",
                }}
              >
                Details
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Sold
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f6f7f9",
              borderRadius: 10,
              margin: 5,
            }}
            className="flex items-center space-x-4 px-4 py-2"
          >
            <img src={PriceImage} alt="DateImage" className="w-20 sm:35" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "gray",
                }}
              >
                Price
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                ₹ {project !== null ? project.property_price : ""} Cr.

              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;

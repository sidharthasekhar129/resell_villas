import { FaCalendarCheck } from "react-icons/fa";
import ParkingImage from "../assets/icons/ic_fluent_vehicle_car_24_filled.png";
import SquareFeetImage from "../assets/icons/ic_fluent_border_outside_24_filled.png";
import FurnishingImage from "../assets/icons/ic_fluent_couch_24_filled.png";
import { FaFilePdf } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { RiSofaFill } from "react-icons/ri";
import { IoIosBed } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";

import Security from "../assets/icons/carbon_police.png";
import Gym from "../assets/icons/solar_dumbbell-small-line-duotone.png";
import Swimmingpool from "../assets/icons/ph_swimming-pool-duotone.png";
import IndoorGames from "../assets/icons/ph_game-controller-duotone.png";
import Powerbackup from "../assets/icons/solar_lightbulb-bolt-line-duotone.png";
import KidsPlayArea from "../assets/icons/mdi_playground-seesaw.png";
import FlowerGarden from "../assets/icons/pepicons-pencil_flower.png";
import LeadRegister from "./LeadRegister";

import assetContext from "../context/AssetsContext/AssetContext";
import { IMAGE_PATH } from "../constant";

const BasicDetails2 = ({ project, idsx }) => {
  const context = useContext(assetContext);
  const { amenities, getAssetAmenities } = context;
  const parseIcon = (iconString) => {
    try {
      return JSON.parse(iconString);
    } catch (error) {
      console.error("Error parsing icon JSON:", error);
      return null;
    }
  };
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    getAssetAmenities({ ids: idsx });
  }, [idsx]);

  return (
    <div className=" mt-10 py-14 sm:py-22 px-4 sm:px-8 relative w-[95vw] sm:w-[75vw] lg:w-[45vw] max-w-7xl  bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
      <div className="flex flex-row justify-between items-start">
        <div className=" mb-4 sm:mb-0 max-w-2xl lg:mx-0">
          <h1 className="text-xl text-gray-800 font-semibold">Basic Details</h1>
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
            backgroundColor: "#9379B8",
          }}
          className="flex items-center justify-center gap-x-1  px-4 text-white font-medium border-2 border-grey  rounded-md md:inline-flex"
        >
          <FaFilePdf />

          <LeadRegister  className="hidden sm:block" brochure={project.brochure} title="Download Brochure" />

          {/* <h1 className="hidden sm:block">Download Brochure</h1> */}
        </div>
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
            <FaCalendarCheck
              // size={30}
              style={{
                color: "#a28dc1",
              }}
              className="w-25 sm:30"
            />
            {/* <img
              src={}
              alt="DateImage"
              style={{
                height: 36,
              }}basicdetails
            /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Available from
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                {project !== null ? project.available_from : ""}
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
            {/* <img
              src={ParkingImage}
              alt="DateImage"
              style={{
                height: 36,
              }}
            /> */}
            <FaCar
              // size={30}
              style={{
                color: "#a28dc1",
              }}
              className="w-25 sm:30"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Parking
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                {project !== null ? project.covered_parking : ""}
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
            {/* <img
              src={SquareFeetImage}
              alt="DateImage"
              style={{
                height: 36,
              }}
            /> */}
            <RxDimensions
              //size={30}
              style={{
                color: "#a28dc1",
              }}
              className="w-25 sm:30"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Price/SqFt
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                ₹ {project !== null ? project.monthly_rent : ""}
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
            {/* <img
              src={FurnishingImage}
              alt="DateImage"
              style={{
                height: 36,
              }}
            /> */}
            <RiSofaFill
              //size={30}
              style={{
                color: "#a28dc1",
              }}
              className="w-25 sm:30"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Status
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                {project !== null ? project.furnishing_status : ""}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl lg:mx-0 mt-6">
        <h1
          style={{
            fontSize: 16,
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Amenities
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-2  mt-2">
      {amenities !== null && amenities.length > 0
        ? amenities
            .slice(0, showAll ? amenities.length : 8)
            .map((item, index) => {
              const parsedIcon = parseIcon(item.icon);

              console.log(parseIcon.fieldname);
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-2   rounded-md"
                >
                  {parsedIcon && (
                    <img
                      src={
                        IMAGE_PATH +
                        parsedIcon.fieldname +
                        "/" +
                        parsedIcon.filename
                      }
                      alt={item.name}
                      className="w-6"
                    />
                  )}

                  <p className="text-sm font-medium text-gray-500 ">
                    {item.name}
                  </p>
                </div>
              );
            })
        : null}

      {!showAll && amenities !== null && amenities.length > 8 && (
        <button
          onClick={handleClick}
          style={{
            fontSize: 12,
            color: "#9379B8",
            marginLeft: 15,
            fontWeight: 600,
          }}
        >
          Show All {amenities.length} Amenities
        </button>
      )}
      {showAll && (
        <button
          onClick={handleClick}
          style={{
            fontSize: 12,
            color: "#9379B8",
            marginLeft: 15,
            fontWeight: 600,
          }}
        >
          Show Less
        </button>
      )}
      </div>
     

      {/* {amenities !== null ? (
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
          className="mt-4"
        >
          <div className="flex flex-wrap gap-y-2  mt-2">
            {amenities.map((item, index) => {
              const parsedIcon = parseIcon(item.icon);

              console.log(parseIcon.fieldname);
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-2   rounded-md"
                >
                  {parsedIcon && (
                    <img
                      src={
                        IMAGE_PATH +
                        parsedIcon.fieldname +
                        "/" +
                        parsedIcon.filename
                      }
                      alt={item.name}
                      className="w-6"
                    />
                  )}

                  <p className="text-sm font-medium text-gray-500 ">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null} */}
    </div>
  );
};

export default BasicDetails2;

    

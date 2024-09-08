import React, { useState, useContext } from "react";
import * as Select from "@radix-ui/react-select";
// import Location from "../../assets/icons/location.png";
import { CiSearch } from "react-icons/ci";
// import FilterModal from "./FiltersModal";
import { IoFilter } from "react-icons/io5";
import { IconButton } from "@mui/material";
// import assetContext from "../../context/AssetsContext/AssetContext";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";

import Sobha from "../../src/assets/images/Sobha.png"; // Path to your image file
import LNT from "../../src/assets/images/lnt.png"; // Path to your image file
import Purvankara from "../../src/assets/images/Purvankara.png"; // Path to your image file
import Sattva from "../../src/assets/images/sattva.png"; // Path to your image file
import Godrej from "../../src/assets/images/godrej.png"; // Path to your image file
import Brigade from "../../src/assets/images/Brigade.png"; // Path to your image file
import Prestige from "../../src/assets/images/Prestige.png"; // Path to your image file

import Hiranandani from "../../src/assets/images/hiranandani.jpeg"; // Path to your image file
import Mana from "../../src/assets/images/mana.jpg"; // Path to your image file
import Lodha from "../../src/assets/images/lodha.png"; // Path to your image file
import SNNRaj from "../../src/assets/images/snnraj.png"; // Path to your image file
import Providient from "../../src/assets/images/providient.png"; // Path to your image file
import TataHousing from "../../src/assets/images/tatahousing.jpeg"; // Path to your image file
import FilterModal from "./FiltersModal";

const SearchBarWithDropdown = ({
  locationaOptions,
  configOptions,
  onDataReceived,
}) => {
  const [selectedCity, setSelectedCity] = useState("Bengaluru");
  const [config, setConfig] = useState("3BHK");
  const [selectedPriceRange, setSelectedPriceRange] = useState("2Cr - 4Cr");
  const [selectedPrice, setSelectedPrice] = useState(20);

  const famousBuilder = [
    {
      id: 1,
      logo: Godrej,
      name: "",
    },
    {
      id: 2,
      logo: Brigade,
      name: "",
    },
    {
      id: 3,
      logo: Sattva,
      name: "",
    },
    {
      id: 4,
      logo: Sobha,
      name: "",
    },
    {
      id: 5,
      logo: LNT,
      name: "",
    },
    {
      id: 6,
      logo: Prestige,
      name: "",
    },
    {
      id: 7,
      logo: Purvankara,
      name: "",
    },
    {
      id: 8,
      logo: Hiranandani,
      name: "",
    },
    {
      id: 9,
      logo: Mana,
      name: "",
    },
    {
      id: 10,
      logo: Lodha,
      name: "",
    },
    {
      id: 12,
      logo: SNNRaj,
      name: "",
    },
    {
      id: 13,
      logo: Providient,
      name: "",
    },
    {
      id: 14,
      logo: TataHousing,
      name: "",
    },
    {
      id: 15,
      logo: TataHousing,
      name: "",
    },
  ];

  const [isCityOpen, setCityOpen] = useState(false);
  const [isConfigOpen, setConfigOpen] = useState(false);
  const [isBudgetOpen, setBudgetOpen] = useState(false);
  // const context = useContext(assetContext);
  // const {
  //   getSearchAssets,
  // } = context;

  // const [FilterDialog, ApplyFilters] = FilterModal();
  // const [filters, setFilters] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilters = async () => {
    const filtersx = await ApplyFilters();
    if (filtersx === null) {
    } else {
 
      onDataReceived({ text: searchQuery, filters: filtersx });
 
    }
  };


  // const configOptions = ["Select", "1BHK", "2BHK", "3BHK", "4BHK", "5BHK"];
  const priceRangeOptions = ["50L - 2Cr", "2Cr - 4Cr", "4Cr - 8Cr", "8Cr+"];

  const [currentPage, setCurrentPage] = useState(1);

  // const handleFilters = async () => {
  //   const filtersx = await ApplyFilters();
  //   if (filtersx === null) {
  //   } else {
  //     setCurrentPage(1);
  //     getSearchAssets({
  //       page: currentPage,
  //       property_type: filtersx !== null ? filtersx.property_type : [],
  //       property_status: filtersx !== null ? filtersx.property_status : [],
  //       property_location: filtersx !== null ? filtersx.property_location : [],
  //       property_locality: filtersx !== null ? filtersx.property_locality : [],
  //        property_builder: filtersx !== null ? filtersx.property_builder : [],
  //       property_bhks: filtersx !== null ? filtersx.property_bhks : [],
  //       status: filtersx !== null ? filtersx.status : [],
  //       property_starting_price: 0,
  //       property_maximum_price:
  //         filtersx !== null ? filtersx.property_maximum_price : 20,
  //       property_name: searchQuery,
  //       is_featured: 0,
  //     is_infocused: 0,
  //     });
  //     setFilters({
  //       property_type: filtersx !== null ? filtersx.property_type : [],
  //       property_status: filtersx !== null ? filtersx.property_status : [],
  //       property_location: filtersx !== null ? filtersx.property_location : [],
  //       property_locality: filtersx !== null ? filtersx.property_locality : [],

  //       property_builder: filtersx !== null ? filtersx.property_builder : [],
  //       property_bhks: filtersx !== null ? filtersx.property_bhks : [],
  //       status: filtersx !== null ? filtersx.status : [],
  //       property_starting_price: 0,
  //       property_maximum_price:
  //         filtersx !== null ? filtersx.property_maximum_price : 20,
  //         is_featured: 0,
  //         is_infocused: 0,
  //     });

  //     onDataReceived({ text: searchQuery, filters: filtersx });

  //     // localStorage.setItem('property_type', JSON.stringify( filtersx !== null ? filtersx.property_type : []));
  //     // localStorage.setItem('property_status', JSON.stringify( filtersx !== null ? filtersx.property_status : []));
  //     // localStorage.setItem('property_location', JSON.stringify( filtersx !== null ? filtersx.property_location : []));
  //     // localStorage.setItem('property_builder', JSON.stringify( filtersx !== null ? filtersx.property_builder : []));
  //     // localStorage.setItem('property_bhks', JSON.stringify( filtersx !== null ? filtersx.property_bhks : []));
  //     // localStorage.setItem('cities', JSON.stringify( filtersx !== null ? filtersx.property_location : []));

  //   }
  // };

  const handleSearch = async () => {
    onDataReceived({
      text: searchQuery,
      filters: {
        property_type:[],
        property_status: [],
        city: [selectedCity],
        property_builder: [],
        bedroom: [config],
        property_price: selectedPrice,
  
        bath_rooms: [],
        balconies: [],
        door_facing: [],
        furnishing_status: [],
        parking: [],
 
      },
    });
  };

  const handleChange1 = async (value) => {
    localStorage.setItem("city", value);
    setSelectedCity(value);
  };

  const handleChange2 = async (value) => {
    // localStorage.setItem("city", value);
    setConfig(value);
  };

  const handleChange3 = async (value) => {
    // localStorage.setItem("city", value);
    setSelectedPriceRange(value);
    if (value === "50L - 2Cr") {
      setSelectedPrice(2);
    } else if (value === "2Cr - 4Cr") {
      setSelectedPrice(4);

    } else if (value === "4Cr - 8Cr") {
      setSelectedPrice(8);

    }else{
      setSelectedPrice(20);

    }
  };

  const inputStyle = {
    width: "100%",
    fontSize: "0.875rem",
    color: "black",
  };

  const SelectItem = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
      // If you want to make this component more customizable you can use classnames and tailwind-merge library.
      return (
        <Select.Item
          className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
          {...props}
          ref={forwardedRef}
        >
          <Select.ItemText>
            <div
              style={
                {
                  // paddingLeft: 10,
                  // paddingRight: 10,
                  // paddingTop: 5,
                  // paddingBottom: 5
                }
              }
              className="pr-4 line-clamp-1 flex flex-row justify-center items-center "
            >
              {children}
            </div>
          </Select.ItemText>
          <div className="w-6">
            <Select.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </Select.ItemIndicator>
          </div>
        </Select.Item>
      );
    }
  );

  const SelectItem2 = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
      // setConfigOpen(true);

      // If you want to make this component more customizable you can use classnames and tailwind-merge library.
      return (
        <Select.Item
          className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
          {...props}
          ref={forwardedRef}
        >
          <Select.ItemText>
            <div
              style={
                {
                  // paddingLeft: 10,
                  // paddingRight: 10,
                  // paddingTop: 5,
                  // paddingBottom: 5
                }
              }
              className="pr-4 line-clamp-1 flex flex-row justify-center items-center "
            >
              {children}
            </div>
          </Select.ItemText>
          <div className="w-6">
            <Select.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </Select.ItemIndicator>
          </div>
        </Select.Item>
      );
    }
  );

  const SelectItem3 = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
      // setConfigOpen(true);

      // If you want to make this component more customizable you can use classnames and tailwind-merge library.
      return (
        <Select.Item
          className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
          {...props}
          ref={forwardedRef}
        >
          <Select.ItemText>
            <div
              style={
                {
                  // paddingLeft: 10,
                  // paddingRight: 10,
                  // paddingTop: 5,
                  // paddingBottom: 5
                }
              }
              className="pr-4 line-clamp-1 flex flex-row justify-center items-center "
            >
              {children}
            </div>
          </Select.ItemText>
          <div className="w-6">
            <Select.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </Select.ItemIndicator>
          </div>
        </Select.Item>
      );
    }
  );

  const [FilterDialog, ApplyFilters] = FilterModal();


  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
      className="flex  justify-center items-center flex-col p-4 mt-10 bg-white rounded-md shadow-md"
    >
      <div
        style={{ width: "100%" }}
        className="flex flex-col justify-center items-center mt-4 lg:flex-row bg-white border border-gray-300 rounded-md shadow-md p-2 w-full max-w-5xl space-y-4 md:space-y-0"
      >
        <div className="hidden lg:flex flex-col gap-y-2 md:flex-row   justify-center items-center  w-full md:w-auto">
          <div
            style={{
              backgroundColor: "#9379B8",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: 5,
              paddingLeft: 10,
              marginRight: 10,
            }}
          >
            <FaLocationDot
              style={{
                color: "white",
              }}
              size={20}
              className="mr-2"
            />
            <Select.Root
              value={selectedCity}
              onValueChange={(value) => handleChange1(value)}
              open={isCityOpen} // Control the open state
              onOpenChange={(open) => setCityOpen(open)}
            >
              <div className="w-full  z-1000">
                <Select.Trigger
                  style={{
                    backgroundColor: "#9379B8",
                    color: "white",

                    marginRight: 8,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    border: "none", // Remove any default border
                    outline: "none", // Remove any default outline
                    boxShadow: "none",
                    whiteSpace: "nowrap", // Prevents text from wrapping to a new line
                    overflow: "hidden", // Hides overflow text that doesn't fit in the container
                    textOverflow: "ellipsis", // Displays ellipsis (...) for overflow text
                    // Ensures the element is treated as a block container
                  }}
                  className="w-[150px] inline-flex items-center justify-between pr-2 py-2 text-sm text-gray-600"
                >
                  <Select.Value
                    placeholder="Select City"
                    className="bg-white"
                  />
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    position="popper"
                    avoidCollisions={false}
                    style={
                      {
                        // backgroundColor: "white",
                      }
                    }
                    className="w-[250px] z-10 mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-sm"
                  >
                    <Select.Viewport>
                      {locationaOptions.map((item, idx) => (
                        <SelectItem
                          style={{
                            backgroundColor: "transparent",
                          }}
                          key={idx}
                          value={item.name}
                        >
                          {item.name}
                        </SelectItem>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </div>
            </Select.Root>
            <div
              style={{
                paddingRight: 8,
                color: "white",
              }}
            >
              {isCityOpen ? (
                <IoIosArrowDropup size={20} />
              ) : (
                <IoIosArrowDropdown size={20} />
              )}
            </div>
          </div>

          <div className="hidden xl:flex flex-row md:flex-row gap-y-2 md:gap-y-0">
            <div
              style={{
                backgroundColor: "#9379B8",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: 5,
                paddingLeft: 10,
                marginRight: 10,
              }}
            >
              <GoHomeFill
                style={{
                  color: "white",
                }}
                size={28}
                className="mr-2"
              />
              <Select.Root
                value={config}
                onValueChange={(value) => handleChange2(value)}
                open={isConfigOpen} // Control the open state
                onOpenChange={(open) => setConfigOpen(open)}
              >
                <div className="w-full  z-1000">
                  <Select.Trigger
                    style={{
                      backgroundColor: "#9379B8",
                      color: "white",

                      marginRight: 8,
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      border: "none", // Remove any default border
                      outline: "none", // Remove any default outline
                      boxShadow: "none",
                      whiteSpace: "nowrap", // Prevents text from wrapping to a new line
                      overflow: "hidden", // Hides overflow text that doesn't fit in the container
                      textOverflow: "ellipsis", // Displays ellipsis (...) for overflow text
                      // Ensures the element is treated as a block container
                    }}
                    className="w-[50px] inline-flex items-center justify-between pr-2 py-2 text-sm text-gray-600"
                  >
                    <Select.Value
                      placeholder="Select City"
                      className="bg-white"
                    />
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      position="popper"
                      avoidCollisions={false}
                      style={
                        {
                          // backgroundColor: "white",
                        }
                      }
                      className="w-[100px] z-10 mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-sm"
                    >
                      <Select.Viewport>
                        {configOptions.map((item, idx) => (
                          <SelectItem2
                            style={{
                              backgroundColor: "transparent",
                            }}
                            key={idx}
                            value={item.name}
                          >
                            {item.name}
                          </SelectItem2>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </div>
              </Select.Root>
              <div
                style={{
                  paddingRight: 8,
                  color: "white",
                }}
              >
                {isConfigOpen ? (
                  <IoIosArrowDropup size={20} />
                ) : (
                  <IoIosArrowDropdown size={20} />
                )}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#9379B8",
              
                borderRadius: 5,
                paddingLeft: 10,
                marginRight: 10,
              }}
              className="hidden 2xl:flex justify-center items-center"
             >
              <FaRupeeSign
                style={{
                  color: "white",
                }}
                size={16}
                className="mr-2"
              />
              <Select.Root
                value={selectedPriceRange}
                onValueChange={(value) => handleChange3(value)}
                open={isBudgetOpen}
                onOpenChange={(open) => setBudgetOpen(open)}
              >
                <div className="w-full  z-1000">
                  <Select.Trigger
                    style={{
                      backgroundColor: "#9379B8",
                      color: "white",

                      marginRight: 8,
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      border: "none", // Remove any default border
                      outline: "none", // Remove any default outline
                      boxShadow: "none",
                      whiteSpace: "nowrap", // Prevents text from wrapping to a new line
                      overflow: "hidden", // Hides overflow text that doesn't fit in the container
                      textOverflow: "ellipsis", // Displays ellipsis (...) for overflow text
                      // Ensures the element is treated as a block container
                    }}
                    className="w-[80px] inline-flex items-center justify-between pr-2 py-2 text-sm text-gray-600"
                  >
                    <Select.Value
                      placeholder="Select City"
                      className="bg-white"
                    />
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      position="popper"
                      avoidCollisions={false}
                      style={
                        {
                          // backgroundColor: "white",
                        }
                      }
                      className="w-[150px] z-10 mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-sm"
                    >
                      <Select.Viewport>
                        {priceRangeOptions.map((item, idx) => (
                          <SelectItem3
                            style={{
                              backgroundColor: "transparent",
                            }}
                            key={idx}
                            value={item}
                          >
                            {item}
                          </SelectItem3>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </div>
              </Select.Root>
              <div
                style={{
                  paddingRight: 8,
                  color: "white",
                }}
              >
                {isBudgetOpen ? (
                  <IoIosArrowDropup size={20} />
                ) : (
                  <IoIosArrowDropdown size={20} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            // backgroundColor:"black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%", // Ensure the parent container uses full width
          }}
        >
          <div style={{ paddingRight: 5, color: "black" }}>|</div>
          <CiSearch color="black" />
          <div className="flex-grow mx-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project, builder, location ..."
              style={inputStyle}
              className="w-full py-2 px-4 bg-white border-0 focus:outline-none focus:ring-0"
            />
          </div>
          <div style={{ paddingRight: 5, color: "black" }}>|</div>
        </div>

        <div
          onClick={handleSearch}
          style={{ borderRadius: 7, backgroundColor: "#9379B8" }}
          className="w-full sm:w-1/4  flex flex-row justify-center items-center text-white font-bold py-2 px-6 focus:outline-none focus:shadow-outline"
        >
          <IoMdSearch color="white" size={26} />
          <label style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
            Search
          </label>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 5,
          marginTop: 10,
          alignContent: "space-between",
          marginBottom: 20,
          // backgroundColor:"black"
        }}
      >
        <div className=" ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex mt-6 flex-row justify-center items-center">
              <div
                style={{
                  height: 1,
                  width: "20vw",
                  backgroundColor: "#d1cfcc",
                }}
              ></div>
              <div
                style={{
                  color: "black",
                  width: "auto",
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                Or
              </div>
              <div
                style={{
                  height: 1,
                  width: "20vw",

                  backgroundColor: "#d1cfcc",
                }}
              ></div>
            </div>
            <div
            style={{
              // paddingLeft: 10,

              // backgroundColor: "rgba(192, 192, 192,0.4 )",
              // alignContent: "center",
              // justifyContent: "center",
              // borderRadius: 7,
            }}
          >
               <h2 className="text-center text-lg mt-4 font-semibold leading-8 text-gray-900">
              Customize your property search
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
              {famousBuilder.map((project, index) => (
                <div>
                  {index === famousBuilder.length - 1 ? (
                    <div
                    onClick={handleFilters}

                      //href="/login"
                      className="flex items-center justify-center  p-auto  text-black font-medium rounded-md md:inline-flex"
                    >
                      View All
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
                  ) : (
                    <img
                    onClick={handleFilters}

                      // onClick={() => showALL("SOBHA Ltd.")}
                      // className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                      src={project.logo}
                      alt="Logs"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* <IconButton
              type="submit"
              edge="start"
              //disabled={checked.length === 0 ? true : false}
              //  onClick={() => handleDeleteUsers()}
              onClick={handleFilters}
            >
              <IoFilter color="grey" />
            </IconButton> */}
            <FilterDialog />
          </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarWithDropdown;

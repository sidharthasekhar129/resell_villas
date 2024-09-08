import React, { useContext, useEffect } from "react";
import "./Homepage.css";

import WhyUs from "./WhyUs";
import PropWorth from "../../assets/images/prop-worth.jpg";
import { CiCircleCheck } from "react-icons/ci";

import SlickList2 from "../SlickList2";
import SearchBarWithDropdown from "../SearchBarWIthDropdownStates";
import Navbar from "../Navbar";
import Footer from "../footer";
import assetContext from "../../context/AssetsContext/AssetContext";
// import Banner from "../../assets/images/test_banner.png";
import Banner from "../../assets/images/background_banner.png";
import SittingOnKey1 from "../../assets/images/man_sitting_on_key1.png";
import ManShowingRightHand from "../../assets/images/man_showing_right_hand.png";
import MomAndSon from "../../assets/images/mom_and_son_hand.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleDataReceived = async (data) => {
    const filtersx = data.filters;
    const queryParams = new URLSearchParams({
      page: 1,
      property_type: filtersx !== null ? filtersx.property_type : [],
      property_status: filtersx !== null ? filtersx.property_status : [],
      city: filtersx !== null ? filtersx.city : [],
      property_builder: filtersx !== null ? filtersx.property_builder : [],
      bedroom: filtersx !== null ? filtersx.bedroom : [],
      property_price: filtersx !== null ? filtersx.property_price : 20,

      bath_rooms: filtersx !== null ? filtersx.bath_rooms : [],
      balconies: filtersx !== null ? filtersx.balconies : [],
      door_facing: filtersx !== null ? filtersx.door_facing : [],
      furnishing_status: filtersx !== null ? filtersx.furnishing_status : [],
      parking: filtersx !== null ? filtersx.parking : [],

      property_name: data.text,
    }).toString();

    navigate(`/properties?${queryParams}`);
  };

  const context = useContext(assetContext);
  const { getAvailableFilters, availableFilters } = context;

  useEffect(() => {
    // getAssets({ page: currentPage });
    getAvailableFilters();

    // eslint-disable-next-line
  }, []);

  return (
    // <div className="card-container">
    //   <div className="upper-part"></div>
    //   <div className="logo-wrapper">
    //     <img src={Img} alt="Logo" className="logo" />
    //   </div>
    //   <div className="lower-part"></div>
    // </div>
    <div
    // style={{
    //   overflowX: "hidden",
    //   width: "100%",
    // }}
    >
      <Navbar />
      <ToastContainer position="top-center" />

      {/* <Card2Example /> */}
      {/* <Carousel1/> */}
      {/* <Card4/> */}

      {/* <ImageAccordionExample/> */}
      {/* <Carousel2/> */}
      <div
        style={{
          width: "100%",
          // height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "top-center",
          // backgroundColor: "#9379B8",
          backgroundImage: `url(${Banner})`,
        }}
        className=" h-[120vh] sm:h-[100vh]"
      >
        <div
          style={{
            position: "relative",
            // width: "60vw",
            // height: 700,
            // backgroundColor: "black",
          }}
          className="h-[120vh] sm:h-[700px] w-90vw sm:w-80vw md:w-60vw mx-6"
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              color: "#ffffff",
              // "rgba(100, 89, 101, 0.8)" /* Color #645965 with 50% opacity */,
              // backgroundColor: "red", // Just for visibility
            }}
            className="md:p-[20px] mt-10 h-100vw"
          >
            <div
              className="flex flex-col justify-start items-start xl:justify-center xl:items-center "
              // className="w-[100%] flex justify-center items-center"
            >
              <div className="flex px-0  flex-row  justify-start items-start lg:justify-center lg:items-center">
                <h1 className="text-2xl font-bold text-center text-white">
                  #Sell
                </h1>
                <h1 className="text-2xl font-bold text-center text-white">
                  SMART
                </h1>
              </div>

              <div className="  justify-start items-start lg:justify-center lg:items-center">
                <h1
                  style={{ color: "white" }}
                  className="text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-2xl  font-bold text-start md:text-center"
                >
                  Resell Villas
                </h1>
                <h1
                  style={{ color: "white" }}
                  className="text-md   md:text-lg lg:text-md xl:text-xl  text-center"
                >
                  - Sell your house in 45 days
                </h1>
              </div>
            </div>
            <SearchBarWithDropdown
              onDataReceived={handleDataReceived}
              locationaOptions={
                availableFilters !== null &&
                availableFilters.property_location.length > 0
                  ? availableFilters.property_location
                  : []
              }
              configOptions={
                availableFilters !== null &&
                availableFilters.property_bhk.length > 0
                  ? availableFilters.property_bhk
                  : []
              }
              style={{ width: "100%", backgroundColor: "black" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              height: "20vh",
            }}
            className="block xl:hidden top-12 sm:-top-16 md:-top-12 w-[100px] sm:w-[200px]"
          >
            <img src={SittingOnKey1} />
          </div>
          <div
            className="hidden xl:block absolute mt-6 top-[38px] -right-[23vh]"
            // className="hidden xl:block absolute mt-[-5px] h-[100vw] right-[-300]"
          >
            <img
              style={{
                height: "80vh",
              }}
              src={ManShowingRightHand}
            />
          </div>
          <div className="hidden xl:block absolute mt-6  top-[5px] -left-[27vh]">
            <img
              style={{
                height: "80vh",
              }}
              src={MomAndSon}
            />
          </div>
        </div>
      </div>

      <WhyUs />

      <div
        style={{
          backgroundColor: "#f6f7f9",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          borderRadius: "10px",
          padding: "20px",
          // width: "80%",
          // maxWidth: "40vw",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,

          //backdropFilter: "blur(5px)",
          ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          //color: "#fff",
        }}
        className="flex justify-center items-start flex-col sm:flex-row border border-white border-1"
      >
        <div className="w-90vw sm:w-35vw ">
          <img
            style={{
              borderRadius: 10,
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
            src={PropWorth}
            alt="Virtualtour"
          />
        </div>
        <div className="w-90vw sm:w-40vw flex flex-col   justify-start items-start">
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-2xl md:text-3xl"
          >
            Market Value by Resell.Villas
          </h2>
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",

              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-2xl"
          >
            Evaluate the market value of any property in your area, project, or
            locality.
          </h2>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,

              fontFamily: "Poppins, sans-serif",
              color: "#5f6063",
              textAlign: "start",
              fontSize: 16,
              paddingLeft: 30,
            }}
          >
            Pricing your property correctly is the crucial aspect of the real
            estate transaction . Leveraging market trends and in-depth property
            analysis, we ensure your property is priced just right, maximizing
            returns while ensuring a quick sale thus unlocking a successful
            property sale.
          </p>

          <div className="flex fex-row flex-wrap gap-y-10 m-10 gap-x-4">
            <div className="flex flex-row justify-center items-center">
              <div>
                <CiCircleCheck
                  size={30}
                  style={{
                    color: "green",
                  }}
                />
              </div>

              <label
                style={{
                  color: "grey",
                  textAlign: "start",
                }}
                className="pl-2 font-sans "
              >
                Reliable and Up-to-Date Market Data
              </label>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div>
                <CiCircleCheck
                  size={30}
                  style={{
                    color: "green",
                  }}
                />
              </div>
              <label
                style={{
                  color: "grey",
                  textAlign: "start",
                }}
                className="pl-2 font-sans"
              >
                Easy and Quick Valuation
              </label>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div>
                <CiCircleCheck
                  size={30}
                  style={{
                    color: "green",
                  }}
                />
              </div>
              <label
                style={{
                  color: "grey",
                  textAlign: "start",
                }}
                className="pl-2 font-sans"
              >
                Trusted by Thousands of Homeowners and Investors
              </label>
            </div>
          </div>

          <label
            style={{
              color: "#9379B8",
            }}
            className="  mt-2  pl-8 font-sans underline"
          >
            Check Your Property's Worth Now!
          </label>
        </div>
      </div>

      {/* <div
        style={{
          width: "100vw",
          // height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: 50,
            fontFamily: "Poppins, sans-serif",
            fontSize: 25,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Browse by Category
        </div>
      </div>

      <Carousel /> */}

      {/* <div
        style={{
          position: "relative",
          //  width: "100%",
          height: "450px",
          overflow: "hidden",
          margin: "5vw",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${BackGroundImage})`, // Use template literals
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // background: "rgba(147, 121, 184, 0.1)",
            backgroundColor: "#293F66",
            opacity: "80%",
            borderRadius: "10px",
            padding: "20px",
            // width: "80%",
            // maxWidth: "40vw",
            textAlign: "center",
            zIndex: 2,
            //backdropFilter: "blur(5px)",
            ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            color: "#fff",
          }}
          className="flex justify-center items-center flex-col w-40vw max-w-60vw md:max-w-40vw border border-white border-1"
        >
          <h2
            style={{
              marginTop: "10px",
              // fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl"
          >
            Luxury
          </h2>

          <div
            style={{
              width: "5vw",
              height: 3,

              backgroundColor: "red",
            }}
          ></div>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-sm md:text-xl"
          >
            Boutique & Luxury Properties
          </p>
          <a
            href="/"
            style={{
              fontSize: 14,
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-sm md:text-xl flex items-center mt-6 mb-4 justify-center gap-x-1 py-2 px-4 text-black font-medium text-white rounded-md border-white border-2 md:inline-flex"
          >
            DISCOVER LUXURY
          </a>
        </div>
      </div> */}

      {/* <div
        style={{
          marginLeft: "5vw",
          marginRight: "5vw",
        }}
        className="bg-white ml-10vw"
      >
        <h2
          style={{
            fontSize: 30,
            marginBottom: 10,
            // backgroundColor:"black"
          }}
          className="text-lg font-bold leading-none text-gray-900"
        >
          Featured projects
        </h2>
        {[1].length > 0 ? (
          <div
            style={{
              borderRadius: 10,
              //backgroundColor:"black"
            }}
            className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8  py-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-4"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((post, index) =>
              index === 7 ? (
                <div
                  style={{
                    backgroundImage: `url(${ViewAllGradient})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    borderRadius: 10,
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    width: "99%",
                    height: "100%",
                    display: "flex",
                    fontFamily: "Poppins, sans-serif",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <label
                    className="leading-none"
                    style={{
                      color: "black",
                      backgroundColor: "transparent",
                      fontSize: 20,
                      marginTop: 20,
                    }}
                  >
                    Featured Properties
                  </label>

                  <img
                    style={{
                      //color: "black",
                      marginTop: 20,
                      marginLeft: 20,
                      marginRight: 20,
                      backgroundColor: "transparent",
                    }}
                    src={ViewAllImage}
                    alt="Error"
                  />

                  <label
                    style={{
                      color: "black",
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginTop: "25px",
                      marginBottom: "25px",
                      fontSize: 13,
                      fontFamily: "fantasy",
                      backgroundColor: "transparent",
                    }}
                  >
                    Dive into luxury living with our exclusive projects,
                    offering unparalleled quality and innovation.
                  </label>

                  <label
                    // onClick={showALL}
                    style={{
                      textDecoration: "underline",
                    }}
                  >
                    View All 25 properties
                  </label>
                </div>
              ) : (
                <div
                  // onClick={() => HandleClick(project.slug)}

                  key={index}
                  style={{
                    backgroundColor: "#f9f2f2",
                    padding: 10,
                    borderRadius: 10,
                  }}
                  className=""
                >
                  <div
                    style={{
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={BackGroundImage}
                      style={{
                        objectFit: "cover",

                        borderRadius: 10,
                        height: 250,
                        width: "100%",
                      }}
                      //src={IMAGE_PATH + project.cover_image}
                      alt="ExxxErr"
                      //onError={handleErrorImage}
                    />
                  </div>
                  <div className="card-bottom">
                    <h1
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        fontSize: 18,
                        marginTop: 10,
                        fontWeight: "bold",
                      }}
                    >
                      SLN Nidhi Palms
                    </h1>
                    <h1
                      style={{
                        marginTop: 5,
                        fontSize: 15,
                        color: "grey",

                        backgroundColor: "transparent",
                      }}
                    >
                      Budigere, Bengaluru
                    </h1>

                    <h3
                      style={{
                        marginTop: 10,
                        color: "black",
                        fontSize: 16,
                        backgroundColor: "transparent",
                      }}
                    >
                      ₹ 2.5 -5.5 Cr
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        marginTop: 5,
                        marginBottom: 20,
                        backgroundColor: "transparent",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          fontSize: 15,
                          backgroundColor: "transparent",
                        }}
                      >
                        5BHK
                         {project.property_bhks.bhks.length > 0
                        ? project.property_bhks.bhks.map((itemx, index) => (
                            <div key={itemx.name} style={{ marginRight: 3 }}>
                              {itemx.name + ","}
                            </div>
                          ))
                        : null}  
                      </div>
                      <h1
                        style={{
                          fontSize: 15,
                          backgroundColor: "transparent",
                        }}
                      >
                        11 Acres
                      </h1>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ) : null}
      </div> */}

      {/* <div
        style={{
          position: "relative",
          //  width: "100%",
          height: "450px",
          overflow: "hidden",
          margin: "5vw",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${BackGroundImage2})`, // Use template literals
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // background: "rgba(147, 121, 184, 0.1)",
            backgroundColor: "#293F66",
            opacity: "80%",
            borderRadius: "10px",
            padding: "20px",
            // width: "80%",
            // maxWidth: "40vw",
            textAlign: "center",
            zIndex: 2,
            //backdropFilter: "blur(5px)",
            ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            color: "#fff",
          }}
          className="flex justify-center items-center flex-col w-40vw max-w-60vw md:max-w-40vw border border-white border-1"
        >
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl"
          >
            Commercial
          </h2>

          <div
            style={{
              width: "5vw",
              height: 3,

              backgroundColor: "red",
            }}
          ></div>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-sm md:text-xl"
          >
            Commercial with confidence
          </p>
          <a
            href="/"
            style={{
              fontSize: 14,
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-sm md:text-xl flex items-center mt-6 mb-4 justify-center gap-x-1 py-2 px-4 text-black font-medium text-white rounded-md border-white border-2 md:inline-flex"
          >
            EXPLORE COMMERCIAL REAL ESTATE
          </a>
        </div>
      </div> */}

      <div
        style={{
          backgroundColor: "#efecff",
        }}
        className="px-2 sm:px-14"
      >
        <div
          style={{
            padding: 30,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Top Commuinities
          </div>
          <a
            href="/featured"
            className="hidden md:block flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 border-2 border-black  rounded-md md:inline-flex"
          >
            Show all communities
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

        <SlickList2 />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;

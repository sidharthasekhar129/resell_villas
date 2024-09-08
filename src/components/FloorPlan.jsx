import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Tabs from "@radix-ui/react-tabs";
// import LeadRegister from "./LeadRegister";
import { IMAGE_PATH } from "../constant";
import Floorplan from "../assets/images/floorplan.png";
const FloorPlan = ({ floorPlans }) => {
  // const floorPlans = [
  //   {
  //     id: 96,
  //     size: "948",
  //     type: "2BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301424041_yqut1un935.png",
  //       size: 400941,
  //       encoding: "7bit",
  //       filename: "profilex_1719301424041_yqut1un935.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "2b948.png",
  //     },
  //     price: "1.14",
  //   },
  //   {
  //     id: 38,
  //     size: "949",
  //     type: "2BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301464463_v0ejlztttuj.png",
  //       size: 386568,
  //       encoding: "7bit",
  //       filename: "profilex_1719301464463_v0ejlztttuj.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "2b949.png",
  //     },
  //     price: "1.14",
  //   },
  //   {
  //     id: 23,
  //     size: "1041",
  //     type: "2BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301482245_vbqo16rwwm8.png",
  //       size: 393025,
  //       encoding: "7bit",
  //       filename: "profilex_1719301482245_vbqo16rwwm8.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "2b1041.png",
  //     },
  //     price: "1.23",
  //   },
  //   {
  //     id: 46,
  //     size: "1046",
  //     type: "2BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301567238_ifqtn44tjb.png",
  //       size: 401908,
  //       encoding: "7bit",
  //       filename: "profilex_1719301567238_ifqtn44tjb.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "2b1046.png",
  //     },
  //     price: "Price on request",
  //   },
  //   {
  //     id: 79,
  //     size: "1455",
  //     type: "3BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301593587_ka1edky2dig.png",
  //       size: 362243,
  //       encoding: "7bit",
  //       filename: "profilex_1719301593587_ka1edky2dig.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "3b1455.png",
  //     },
  //     price: "1.64",
  //   },
  //   {
  //     id: 20,
  //     size: "1476",
  //     type: "3BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301631430_s4erhntxybl.png",
  //       size: 366399,
  //       encoding: "7bit",
  //       filename: "profilex_1719301631430_s4erhntxybl.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "3b1476.png",
  //     },
  //     price: "1.67",
  //   },
  //   {
  //     id: 13,
  //     size: "1815",
  //     type: "4BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301744480_x6cywu8562h.png",
  //       size: 383446,
  //       encoding: "7bit",
  //       filename: "profilex_1719301744480_x6cywu8562h.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "4b1855.png",
  //     },
  //     price: "2.19",
  //   },
  //   {
  //     id: 77,
  //     size: "1852",
  //     type: "4BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301756874_35g3y6gp5eb.png",
  //       size: 377582,
  //       encoding: "7bit",
  //       filename: "profilex_1719301756874_35g3y6gp5eb.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "4b1852.png",
  //     },
  //     price: "2.22",
  //   },
  //   {
  //     id: 60,
  //     size: "1790",
  //     type: "4BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301792599_2d2bvd33kpq.png",
  //       size: 379802,
  //       encoding: "7bit",
  //       filename: "profilex_1719301792599_2d2bvd33kpq.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "4b1790.png",
  //     },
  //     price: "Price on request",
  //   },
  //   {
  //     id: 26,
  //     size: "1807",
  //     type: "4BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301821834_er2ixzkvf8t.png",
  //       size: 366586,
  //       encoding: "7bit",
  //       filename: "profilex_1719301821834_er2ixzkvf8t.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "4b1807.png",
  //     },
  //     price: "Price on request",
  //   },
  //   {
  //     id: 15,
  //     size: "2448",
  //     type: "4BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301868669_th23n13fv2.png",
  //       size: 278462,
  //       encoding: "7bit",
  //       filename: "profilex_1719301868669_th23n13fv2.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "4b2488.png",
  //     },
  //     price: "Price on request",
  //   },
  //   {
  //     id: 92,
  //     size: "2485",
  //     type: "4BHK",
  //     image: {
  //       path: "/root/repos/agent/upload/utkal_utopia/profilex_1719301890714_7h6usuh8ym3.png",
  //       size: 301213,
  //       encoding: "7bit",
  //       filename: "profilex_1719301890714_7h6usuh8ym3.png",
  //       mimetype: "image/png",
  //       fieldname: "profilex",
  //       destination: "/root/repos/agent/upload/utkal_utopia",
  //       originalname: "4b2485.png",
  //     },
  //     price: "Price on request",
  //   },
  // ];

  // const [fplans, setFPlans] = useState(null);
  // const [selectedPlan, setSelectedPlan] = useState([]);
  // const [selectedTab, setSelectedTab] = useState("");

  const parseIcon = (iconString) => {
    try {
      return JSON.parse(iconString);
    } catch (error) {
      console.error("Error parsing icon JSON:", error);
      return null;
    }
  };

  // const handleChange = (value) => {
  //   setSelectedTab(value);
  //   setSelectedPlan(fplans[value] || []);
  // };

  // const groupByBHK = (Plans) => {
  //   return Plans.reduce(
  //     (acc, plan) => {
  //       const { type } = plan;
  //       if (!acc[type]) {
  //         acc[type] = [];
  //       }
  //       acc[type].push(plan);
  //       if (!acc.list.includes(type)) {
  //         acc.list.push(type);
  //       }
  //       return acc;
  //     },
  //     { list: [] }
  //   );
  // };

  // useEffect(() => {
  //   const groupedFloorPlans = groupByBHK(floorPlans);
  //   // console.log(groupedFloorPlans);
  //   setFPlans(groupedFloorPlans);
  //   if (groupedFloorPlans.list.length > 0) {
  //     setSelectedTab(groupedFloorPlans.list[0]);
  //     setSelectedPlan(groupedFloorPlans[groupedFloorPlans.list[0]]);
  //   }
  // }, [floorPlans]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "white",
          backgroundColor: "grey",
          borderRadius: 40,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "white",
          backgroundColor: "grey",
          borderRadius: 40,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mt-10 py-14 sm:py-22 p-4 sm:px-8 relative w-[95vw] sm:w-[75vw] lg:w-[45vw] max-w-7xl  bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-xl text-gray-800 font-semibold">Floor Plans</h1>

        <div
          style={{
            width: "5vw",
            backgroundColor: "purple",
            height: 3,
            marginTop: 10,
          }}
        ></div>
      </div>

      <div className="mt-4">
        {floorPlans.length > 0 ? (
          <div className="flex flex-col md:flex-row  ">
            {floorPlans.map((plan, index) => {
              return (
                <div
                   
                  className="border w-[100%] md:w-[50%] m-2 border-gray-300 rounded-md shadow-md bg-white"
                >
                  <div className="p-2 m-4  rounded-md border-gray-300">
                    <img
                      src={
                        IMAGE_PATH +
                        plan.image.fieldname +
                        "/" +
                        plan.image.filename
                      }
                      // src={IMAGE_PATH + h.image}
                      alt={IMAGE_PATH}
                      className=" object-cover rounded-md"
                    />
                  </div>

                  <div className="p-4">
                    <h1
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        fontSize: 18,
                        fontWeight: 450,
                      }}
                    >
                      {plan.bhk}
                    </h1>

                    <h1
                      style={{
                        fontSize: 15,
                        backgroundColor: "transparent",
                      }}
                    >
                      {plan.size} sq.ft
                    </h1>
                  </div>
                  {/* <div className="flex justify-center items-center py-4">
                    <LeadRegister isShow={true} title="Enquiry Now" />
                  </div> */}
                </div>
              );
            })}
            {floorPlans.length === 1 ? (
              <div
                
                className="hidden md:flex w-[100%] md:w-[50%] justify-center items-center  border m-2 border-gray-300 rounded-md shadow-md bg-white"
              >
                <img
               
                  src={Floorplan}
                  // src={IMAGE_PATH + h.image}
                  alt="sdfg"
                  className=" object-cover rounded-md"
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FloorPlan;

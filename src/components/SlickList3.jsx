import React, { useState, useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  
import Luxury from "../assets/images/luxury.jpeg";
import { useLocation } from "react-router-dom";

import { IMAGE_PATH } from "../constant";

import assetContext from "../context/AssetsContext/AssetContext";

 
const SlickList3 = ({similarProjects}) => {
  const context = useContext(assetContext);
  const { assets, getSearchAssets } = context;
 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //color: "white",
          backgroundColor: "grey",

          borderRadius: 15,
          width: 50,
          height: 40,
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
          //display: "block",
          display: "flex",
          justifyContent: "start",
          paddingLeft: 5,
          alignItems: "center",
          color: "white",
          backgroundColor: "grey",

          borderRadius: 15,
          width: 50,
          height: 40,
        }}
        onClick={onClick}
      />
    );
  }
  const searchQuery = useLocation();
  const queryParams = new URLSearchParams(searchQuery.search);
 

  const [filters, setFilters] = useState({
    page:1,
   property_name: queryParams.get("property_name")!==null?  queryParams.get("property_name"):"",
    property_type:
      queryParams.get("property_type") !== null
        ? queryParams.get("property_type")
        : ["Villa"],
    property_status:
      queryParams.get("property_status") !== null
        ? queryParams.get("property_status")
        : [],
    city: queryParams.get("city") !== null ? queryParams.get("city") : [],
    property_builder:
      queryParams.get("property_builder") !== null
        ? queryParams.get("property_builder")
        : [],
    bedroom:
      queryParams.get("bedroom") !== null ? queryParams.get("bedroom") : [],
    property_price:
      queryParams.get("property_price") !== null
        ? queryParams.get("property_price")
        : 20,

    bath_rooms:
      queryParams.get("bath_rooms") !== null
        ? queryParams.get("bath_rooms")
        : [],
    balconies:
      queryParams.get("balconies") !== null ? queryParams.get("balconies") : [],
    door_facing:
      queryParams.get("door_facing") !== null
        ? queryParams.get("door_facing")
        : [],
    furnishing_status:
      queryParams.get("furnishing_status") !== null
        ? queryParams.get("furnishing_status")
        : [],
    parking:
      queryParams.get("parking") !== null ? queryParams.get("parking") : [],

  });

  useEffect(() => {
    if (similarProjects.length === 0) {
      getSearchAssets(filters);
    }
  }, []);

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 900px)"); // Example media query for width <= 768px

    const handleMediaQueryChange = (e) => {
      setShowDiv(e.matches);
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Add listener for media query changes
    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.addListener(handleMediaQueryChange);
    };
  }, []);

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          //  dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };
 
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: Luxury,
    }));
  };

  const HandleClick = (slug) => {
    window.open(`/property/${slug}`, "_blank");
    // navigate(`/${localStorage.getItem("city")}/property/${id}/${name}`);
    localStorage.setItem("projectData", JSON.stringify(assets));
  };

  return (
    <div
      style={{ paddingLeft: 15, paddingRight: 15 }}
      className="py-10 sm:py-10 w-[95vw] sm:w-[75vw]"
    >
     
      <h2 className="text-lg font-semibold leading-8 text-gray-900">
        Similar projects in focus
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {similarProjects.length > 0  ? (
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              marginTop: "20px",
              backgroundColor: "white"
            }}
          >
            <Slider {...settings}>
              {similarProjects.map((project, index) => (
                <div
                  onClick={() => HandleClick(project.slug)}
                  key={index}
                  style={{
                    border: "1px solid #fff",
                    
                    borderRadius: "8px",
                    overflow: "hidden",
                    margin: 5,
                    backgroundColor: "white",

                    height: "400px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: 200,
                      padding: 6,
                    }}
                  >
                    <img
                      src={IMAGE_PATH + project.cover_image.fieldname+"/"+project.cover_image.filename}
                      alt={project.property_name}
                      onError={handleErrorImage}
                      style={{
                        height: 200,
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 10,
                    }}
                  >
                    <h1
                      style={{
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {project.property_name}
                    </h1>
                    <h1
                      style={{
                        marginTop: 5,
                        fontSize: 15,
                        color: "grey",
                      }}
                    >
                      {project.location}, {project.city}
                    </h1>

                    <h3
                      style={{
                        marginTop: 10,
                        color: "black",
                        fontSize: 16,
                      }}
                    >
                      ₹ {project.property_price} Cr
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        marginTop: 5,
                        marginBottom: 20,
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          fontSize: 15,
                        }}
                      >
                        {project.bedroom}
                      </div>
                      <h1
                        style={{
                          fontSize: 15,
                        }}
                      >
                         {project.property_dimension} sq.ft
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) :  (  assets.length > 0 )? (
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              marginTop: "20px",
              backgroundColor: "white"
            }}
          >
            <Slider {...settings}>
              {assets.map((project, index) => (
                <div
                  onClick={() => HandleClick(project.slug)}
                  key={index}
                  style={{
                    border: "1px solid #fff",
                    
                    borderRadius: "8px",
                    overflow: "hidden",
                    margin: 5,
                    backgroundColor: "white",

                    height: "400px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: 200,
                      padding: 6,
                    }}
                  >
                    <img
                      src={IMAGE_PATH + project.cover_image.fieldname+"/"+project.cover_image.filename}
                      alt={project.property_name}
                      onError={handleErrorImage}
                      style={{
                        height: 200,
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 10,
                    }}
                  >
                    <h1
                      style={{
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {project.property_name}
                    </h1>
                    <h1
                      style={{
                        marginTop: 5,
                        fontSize: 15,
                        color: "grey",
                      }}
                    >
                      {project.location}, {project.city}
                    </h1>

                    <h3
                      style={{
                        marginTop: 10,
                        color: "black",
                        fontSize: 16,
                      }}
                    >
                      ₹ {project.property_price} Cr
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        marginTop: 5,
                        marginBottom: 20,
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          fontSize: 15,
                        }}
                      >
                        {project.bedroom}
                      </div>
                      <h1
                        style={{
                          fontSize: 15,
                        }}
                      >
                         {project.property_dimension} sq.ft
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SlickList3;

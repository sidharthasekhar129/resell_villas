import React, { useState, useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Luxury from "../assets/images/luxury.jpeg";

import { IMAGE_PATH } from "../constant";

import assetContext from "../context/AssetsContext/AssetContext";
import Verified from "../assets/images/verified.png";

// import TimeAgo from "../../components/TimeAgo"

const SlickList2 = () => {
  const context = useContext(assetContext);
  const { assetsfeatured, getAssetsFeatured } = context;
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

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

  useEffect(() => {
    getAssetsFeatured({
      page: 1,
    });
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
    slidesToShow: 3,
    slidesToScroll: 3,
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

  // const showALL = async () => {
  //   const queryParams = new URLSearchParams(filters).toString();
  //   navigate(`/${localStorage.getItem("city")}/properties?${queryParams}`);
  // };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: Luxury,
    }));
  };
  const HandleClick = (slug) => {
    window.open(`/property/${slug}`, "_blank");
    //   navigate(`/${localStorage.getItem("city")}/property/${id}/${name}`);
    localStorage.setItem("projectData", JSON.stringify(assetsfeatured));
  };

  return (
    <div
      style={{
        //maxWidth: "80%",
        padding: 15,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {assetsfeatured.length > 0 ? (
          <div
            style={{
              width: "100%",
              // margin: "0 auto",
              marginTop: "20px",
              backgroundColor: "white",
            }}
          >
            <Slider {...settings}>
              {assetsfeatured.map((project, index) => (
                <div
                  onClick={() => HandleClick(project.slug)}
                  key={index}
                  style={{
                    border: "1px solid #fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    margin: 5,

                    alignItems: "center",

                    position: "absolute",

                    backgroundColor: "white",
                    height: "400px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: 300,
                      padding: 6,
                    }}
                  >
                    <img
                      src={
                        IMAGE_PATH +
                        project.cover_image.fieldname +
                        "/" +
                        project.cover_image.filename
                      }
                      alt={project.title}
                      onError={handleErrorImage}
                      style={{
                        height: 300,
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      top: "-1vh",
                      width:"100%",
                      //  backgroundColor: "black",
                        display:"flex",
                        justifyContent:"center",
                    }}
                  >
                    <img
                      onClick={() => HandleClick(project.slug)}
                      src={Verified}
                      alt="Verified"
                      className="h-[4vh]"
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
                      ₹ {project.property_price}Cr
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
                    <div>
                      <p
                        style={{
                          backgroundColor: "white",
                          fontSize: 13,
                          paddingTop: 10,
                          // maxWidth: "50vw"
                        }}
                        className="sm:w-full w-full max-w-7xl"
                      >
                        {isExpanded
                          ? project.about
                          : `${project.about.substring(0, 250)}...`}
                        <span
                          // onClick={toggleReadMore}
                          style={{ color: "blue", cursor: "pointer" }}
                        >
                          {isExpanded ? " Show Less" : " Read More"}
                        </span>
                      </p>
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

export default SlickList2;

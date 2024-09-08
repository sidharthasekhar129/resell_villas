import Healthcare from "../assets/icons/hospital.png";
import Businesshub from "../assets/icons/businesshub.png";
import Restaurant from "../assets/icons/restaurant.png";
import Transport from "../assets/icons/transport.png";
import Education from "../assets/icons/education.png";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGE_PATH } from "../constant";

const LocationMap = ({landmarks }) => {
 
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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

  const [newLandmarks, setNewLandmarks] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Define the function to group landmarks by category
    const groupByCategory = (landmarks) => {
      return landmarks.reduce(
        (acc, landmark) => {
          const { category } = landmark;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(landmark);
          if (!acc.list.includes(category)) {
            acc.list.push(category);
          }
          return acc;
        },
        { list: [] }
      );
    };

    // Group landmarks by category
    const landmarkssss = groupByCategory(landmarks);

    // Set the state for newLandmarks and selectedCategory
    setNewLandmarks(landmarkssss);
    setSelectedCategory(
      landmarkssss.list.length > 0 ? landmarkssss.list[0] : ""
    );
  }, []);

  useEffect(() => {
    // Load the Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.defer = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    // Remove the script when unmounting
    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);

  useEffect(() => {
    if (map && newLandmarks[selectedCategory]) {
      // Set the map center to the first landmark of the selected category
      map.setCenter({
        lat: parseFloat(newLandmarks[selectedCategory][0].lat),
        lng: parseFloat(newLandmarks[selectedCategory][0].lon),
      });

      // Add markers for the selected category
      addMarkers(newLandmarks[selectedCategory], map);
    }
  }, [selectedCategory, map]);

  useEffect(() => {
    if (map && newLandmarks.list.length > 0) {
      // Add markers for the first category when newLandmarks is set
      addMarkers(newLandmarks[newLandmarks.list[0]], map);
    }
  }, [newLandmarks, map]);

  const groupByCategory = (landmarks) => {
    return landmarks.reduce(
      (acc, landmark) => {
        const { category } = landmark;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(landmark);
        if (!acc.list.includes(category)) {
          acc.list.push(category);
        }
        return acc;
      },
      { list: [] }
    );
  };

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

  const initMap = () => {
    const mapOptions = {
      center: { lat: 12.9763173, lng: 77.5745222 },
      zoom: 13,
      mapTypeControl: false, // Disable the Map/Satellite control buttons
    };
    const mapInstance = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    setMap(mapInstance);

    // if (newLandmarks[newLandmarks.list[0]].length > 0) {
    //   addMarkers(newLandmarks[newLandmarks.list[0]], mapInstance);
    // }
  };

  const addMarkers = (places, mapInstance) => {
    const markers = places.map((place) => {
      return new window.google.maps.Marker({
        position: {
          lat: parseFloat(place.lat),
          lng: parseFloat(place.lon),
        },
        map: mapInstance,
        title: place.name,
      });
    });
    return markers;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (map) {
      map.setCenter({
        lat: newLandmarks[category][0].lat,
        lng: newLandmarks[category][0].lon,
      });
      addMarkers(newLandmarks[category], map);
    }
  };

  return (
    <div className="mt-10 px-4 sm:px-8 relative w-full max-w-7xl h-[700px] bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
      <h1 className="text-xl text-gray-800 font-semibold">
        Location Map
      </h1>
      <div
        style={{
          width: "5vw",
          backgroundColor: "purple",
          height: 3,

          marginTop: 10,
          marginBottom: 20,
        }}
      ></div>
      <div className="relative sm:py-22 px-8 relative w-full max-w-7xl h-[600px] bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
        <div id="map" className="absolute inset-0" />

        <div className="absolute  mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 mx-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Top Landmarks
            </h2>
            <hr className="my-4 border-gray-300" />
            {newLandmarks != null ? (
              <ul>
                {newLandmarks.list.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                    className="flex items-center my-6"
                  >
                    {category === "Education" ? (
                      <img src={Education} alt="" className="w-6 mr-2" />
                    ) : category === "Healthcare" ? (
                      <img src={Healthcare} alt="" className="w-6 mr-2" />
                    ) : category === "Transport" ? (
                      <img src={Transport} alt="" className="w-6 mr-2" />
                    ) : category === "Businesshub" ? (
                      <img src={Businesshub} alt="" className="w-6 mr-2" />
                    ) : category === "Restaurant" ? (
                      <img src={Restaurant} alt="" className="w-6 mr-2" />
                    ) : null}

                    <span className="text-gray-700">{category}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        {newLandmarks != null && newLandmarks[selectedCategory] != null ? (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
            <Slider {...settings}>
              {newLandmarks[selectedCategory].map((place, index) => (
                <div
                 
                  key={index}
                  className="relative flex items-center gap-x-2  cursor-pointer bg-transparent  p-2 rounded-lg shadow-lg"
                  onClick={() =>
                    map.setCenter({
                      lat: parseFloat(place.lat),
                      lng: parseFloat(place.lon),
                    })
                  }
                >
                  <div className="relative w-full  border-b border-gray-300">
                    <img
                      src={
                        IMAGE_PATH +
                        place.image.fieldname +
                        "/" +
                        place.image.filename
                      }
                      alt=""
                      style={{ height: 120 }}
                      className="w-full object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end">
                      <div className="p-2 text-white text-md font-semibold whitespace-nowrap overflow-hidden text-ellipsis ">
                        {place.name}
                      </div>
                      <div className="ml-2 flex text-sm space-x-4">
                        <span className="rounded text-white w-1/2 overflow-hidden whitespace-nowrap">
                          {place.locality}
                        </span>
                        <span className="pb-2 rounded text-white w-1/2 overflow-hidden whitespace-nowrap">
                          {place.distance} KM
                        </span>
                      </div>
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

export default LocationMap;

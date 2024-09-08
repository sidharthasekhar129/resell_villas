import React, { useEffect, useState } from "react";
import { IMAGE_PATH } from "../constant";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      console.log("Message received:", event.data);
      if (Array.isArray(event.data)) {
        setImages(event.data);
        if (event.data.length > 0) {
          setBackgroundImage(event.data[0]);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const [backgroundImage, setBackgroundImage] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setBackgroundImage(images[next]),
  };

  return (
    <div className="flex justify-center items-center">
      {images.length > 0 ? (
        <div className=" mt-10 py-14 sm:py-22 px-8 relative w-full max-w-7xl  bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
          <div className="mb-6 flex max-w-7xl flex-row justify-between sm:items-center sm:flex-colum">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-2xl text-gray-800 font-semibold">
                Image Gallery
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
          </div>
          <div
            className="relative w-full max-w-7xl h-[650px] bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4"
            style={{
              backgroundImage: `url(${IMAGE_PATH+backgroundImage.fieldname}/${backgroundImage.filename})`,
            }}
          >
            <div className="absolute bottom-4 left-8 w-full max-w-lg">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`px-2 ${
                      index === 1 ? "transform scale-110" : ""
                    }`}
                  >
                    <img
                      src={IMAGE_PATH + image.fieldname + "/" + image.filename}
                      alt={`Property ${index}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;

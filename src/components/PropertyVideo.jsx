import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const PropertyVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className=" mt-10 py-14 sm:py-22 p-4 sm:px-8 relative w-[95vw] sm:w-[75vw] lg:w-[45vw] max-w-7xl  bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-xl text-gray-800 font-semibold">Property Video</h1>
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
     
        className="mt-4"
      >
        <ReactPlayer
          width="100%"   
        //  height="70"
          url={src}
        />
      </div>
    </div>
  );
};

export default PropertyVideo;

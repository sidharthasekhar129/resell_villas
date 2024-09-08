import React, { useState } from "react";

const Overview = ({ name, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
   
   
  return (
    <div className=" mt-10 py-14 sm:py-22 px-4 sm:px-8 relative w-[95vw] sm:w-[75vw] lg:w-[45vw] max-w-7xl  bg-cover border border-gray-300 rounded-md shadow-md bg-white py-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-xl text-gray-800 font-semibold">
         Overview
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
          {isExpanded ? text : `${text.substring(0, 160)}...`}
          <span
            onClick={toggleReadMore}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {isExpanded ? " Show Less" : " Read More"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Overview;

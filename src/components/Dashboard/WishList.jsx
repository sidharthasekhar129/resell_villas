import React from "react";
import BackGroundImage from "../../assets/images/luxury.jpeg";
import { IconButton } from "@mui/material";
import { MdCancel } from "react-icons/md";

const WishList = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        width: "100%",
        
        justifyContent: "space-between",
        alignItems:"center", // Center the grid
        overflowY: "auto", // Allow scrolling if needed
      }}
    >
      <div
        className="h-full grid grid-cols-1 gap-4 py-2 justify-items-center px-2 md:grid-cols-1 lg:grid-cols-2"
        style={{
           maxWidth: "100%", // Limit max width
          width: "100%", // Width adjustment
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (post, index) => (
            <div
              key={index}
              className="bg-[#f9f2f2] rounded-lg p-4 flex flex-row "
              style={{
                width: "100%", // Make sure each card uses full width
              }}
            >
              <img
                src={BackGroundImage}
                alt="ExxxErr"
                className="object-cover rounded-lg h-40"
                style={{
                  width: "30%", // Define a specific width
                }}
              />

              <div className="mx-4 flex-1">
                <div className="flex flex-row justify-between">
                  <h1 className="text-black font-bold text-lg">
                    SLN Nidhi Palms
                  </h1>
                  <IconButton type="submit" edge="start">
                    <MdCancel color="#9379B8" size={20} />
                  </IconButton>
                </div>

                <div className="flex text-sm mt-2">5BHK</div>
                <h1 className="text-sm mt-2">11 Acres</h1>
                <h3 className="text-black text-md mt-2">₹ 5.5 Cr</h3>
                <h2 className="text-gray-500 text-sm mt-2">
                  Budigere, Bengaluru
                </h2>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WishList;

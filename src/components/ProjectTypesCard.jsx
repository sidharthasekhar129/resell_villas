import React from "react";

// import LuxuryLiving from "../../src/assets/images/luxury_.png"; // Path to your image file
// import Underconstruction from "../../src/assets/images/under_construction.jpg"; // Path to your image file
// import Readytomove from "../../src/assets/images/ready_to_move.jpg"; // Path to your image file
// import Newlaunch from "../../src/assets/images/new_launch.png"; // Path to your image file
// import AffordableHousing from "../../src/assets/images/affordable_housing.jpg"; // Path to your image file

import FirstImage from "../../src/assets/images/new_listing.jpeg";
import SecondImage from "../../src/assets/images/luxury_apartment.png";
import ThirdImage from "../../src/assets/images/luxury_villa.jpg";
import FourthImage from "../../src/assets/images/eco_homes.jpg";

const ProjectTypesCard = () => {
  const showAllNew = async (type) => {
    const queryParams = new URLSearchParams({
      page: 1,
      property_type: [],
      property_status: [],
      city: [],
      property_builder: [],
      bedroom: [],
      property_price: 20,

      bath_rooms: [],
      balconies: [],
      door_facing: [],
      furnishing_status: [],
      parking: [],
      property_name: "",
    }).toString();
    window.open(`/properties?${queryParams}`, "_blank");
  };

  const ShowAllLuxury = async (type) => {
    const queryParams = new URLSearchParams({
      page: 1,
      property_type: [type],
      property_status: [],
      city: [],
      property_builder: [],
      bedroom: [],
      property_price: 20,

      bath_rooms: [],
      balconies: [],
      door_facing: [],
      furnishing_status: [],
      parking: [],
      property_name: "",
    }).toString();
    window.open(`/properties?${queryParams}`, "_blank");
  };

  const ShowAllAffordable = async () => {
    const queryParams = new URLSearchParams({
      page: 1,
      property_type: [],
      property_status: [],
      city: [],
      property_builder: [],
      bedroom: [],
      property_price: 2.5,
      bath_rooms: [],
      balconies: [],
      door_facing: [],
      furnishing_status: [],
      parking: [],
      property_name: "",
    }).toString();
    window.open(`/properties?${queryParams}`, "_blank");
  };

  return (
    <div className=" py-24 sm:py-32">
      <div
      //className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <h2
          style={{
            fontSize: 40,
            marginBottom: 30,
          }}
          className="text-center text-lg font-bold leading-none text-gray-900"
        >
          Exclusive projects in Bengaluru
        </h2>
        <h2 className="text-center text-lg font-semibold leading-none text-gray-900">
          walk in to the future of modern housing society
        </h2>

        <div className="  mt-10 grid max-w-lg   grid-cols-1 items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl  sm:grid-cols-2 sm:gap-x-10   mx-[10vw] lg:max-w-none lg:grid-cols-4">
          <article
            // style={{ width:  300 }}
            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              //onClick={() => handleType("Apartment")}

              alt=""
              src={FirstImage}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              onClick={() => showAllNew()}
              className="relative bg-gradient-to-t bg-transparent from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
            >
              <div className="p-4 sm:p-6 bg-transparent">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-white/90 bg-transparent"
                >
                  10000+ properties
                </time>

                <div>
                  <h3 className="mt-0.5 text-lg text-white bg-transparent">
                    New Listing
                  </h3>
                </div>

                {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p> */}
              </div>
            </div>
          </article>

          <article
            // style={{ width:  300 }}
            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt=""
              src={ThirdImage}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              onClick={() => ShowAllLuxury("Villa")}
              className="relative bg-gradient-to-t bg-transparent from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
            >
              <div className="p-4 sm:p-6 bg-transparent">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-white/90 bg-transparent"
                >
                  {" "}
                  1000+ properties{" "}
                </time>

                <div>
                  <h3 className="mt-0.5 text-lg text-white bg-transparent">
                    Luxury villa
                  </h3>
                </div>

                {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p> */}
              </div>
            </div>
          </article>

          <article
            // style={{ width:  300 }}
            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt=""
              src={SecondImage}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              onClick={() => ShowAllLuxury("Apartment")}
              className="relative bg-gradient-to-t bg-transparent from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
            >
              <div className="p-4 sm:p-6 bg-transparent">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-white/90 bg-transparent"
                >
                  {" "}
                  500+ properties{" "}
                </time>

                <div>
                  <h3 className="mt-0.5 text-lg text-white bg-transparent">
                    Luxury Apartment
                  </h3>
                </div>
                {/* 
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p> */}
              </div>
            </div>
          </article>

          <article
            // style={{ width:  300 }}
            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt=""
              src={FourthImage}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              onClick={() => ShowAllAffordable()}
              className="relative bg-gradient-to-t bg-transparent from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
            >
              <div className="p-4 sm:p-6 bg-transparent">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-white/90 bg-transparent"
                >
                  1000+ properties
                </time>

                <div>
                  <h3 className="mt-0.5 text-lg text-white bg-transparent">
                    Eco Homes
                  </h3>
                </div>

                {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p> */}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypesCard;

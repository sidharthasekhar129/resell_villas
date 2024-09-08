import React from "react";

import FirstImage from "../../src/assets/images/new_listing.jpeg";
import SecondImage from "../../src/assets/images/luxury_apartment.png";
import ThirdImage from "../../src/assets/images/luxury_villa.jpg";
import FourthImage from "../../src/assets/images/eco_homes.jpg";

const Category = () => {
  return (
     
      <div class="p-4 w-full">
        <div class="flex  flex-col items-center space-y-24 md:space-y-0 md:flex-row justify evenly">
          <div class="relative p-4 w-1/5">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src={FirstImage}
                  class="mx-auto object-cover rounded-lg h-[25vh] w-[30vw]  border-2 border-white dark:border-gray-800"
                />
              </a>
            </div>
            <div class="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">
                  Patrick Sebastien
                </p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                  Developpeur
                </p>
                <p class="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                  Patrick Sébastien, born November 14, 1953 in
                  Brive-la-Gaillarde, is an imitator.
                </p>
              </div>
              <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200"></div>
            </div>
          </div>
          <div class="relative p-4 w-1/5">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src={SecondImage}
                  class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                />
              </a>
            </div>
            <div class="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">Charlie</p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                  Lead dev
                </p>
                <p class="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                  Charlie, born December 18, 1993 in Challans, is an imitator
                  and pintor.
                </p>
              </div>
              <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200"></div>
            </div>
          </div>
          <div class="relative p-4 w-1/5">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src={ThirdImage}
                  class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                />
              </a>
            </div>
            <div class="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">
                  Thierry Halliday
                </p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                  CTO
                </p>
                <p class="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                  Thierry Halliday, born November 4, 1993 in Saint hilaire de
                  riez, is css specialist.
                </p>
              </div>
              <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Category;

import React from "react";

import One from "../../assets/images/one.svg"; // Path to your image file
import Two from "../../assets/images/two.svg"; // Path to your image file
import Three from "../../assets/images/three.svg"; // Path to your image file
import Four from "../../assets/images/four.svg"; // Path to your image file
import Five from "../../assets/images/five.svg"; // Path to your image file

const WhyUs = () => {
  const features = [
    {
      icon: One,
      title: "Valuation and Consultation",
      desc: "Finding the best price for your property is the biggest challenge. Not any more",
    },
    {
      icon: Two,
      title: "Free Marketing",
      desc: "We advertise your property. For free! Direct and Cross",
    },
    {
      icon: Three,
      title: "Genuine visits",
      desc: "We ensure that only interested buyers visit your property",
    },
    {
      icon: Four,
      title: "Regular Feedbacks",
      desc: "We provide you with real time feedback from prospective buyers",
    },
    {
      icon: Five,
      title: "Negotiation and Sale",
      desc: "We value our fee, but far far more than that, we value your relationship. We will be there for you, always",
    },
  ];

  return (
    <section className="py-14">
      <div className="mx-auto px-4 text-gray-600 md:px-8">
        <div className=" flex flex-col justify-center items-center space-y-3">
          <p
            style={{
              textAlign: "center",
            }}
            className="text-gray-800 text-3xl font-semibold sm:text-4xl"
          >
            Your property is our responsibility
          </p>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Why Choose Us as Your Exclusive Sales Partner?
          </p>
        </div>
        <div className="mt-12 px-0 sm:px-20">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x md:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${
                  idx + 1
                } space-y-3 py-8  lg:px-4 sm:py-0 flex flex-col items-center justify-start `}
              >
                <img
                  style={{
                    height: 150,
                    width: 150,
                  }}
                  src={item.icon}
                  alt="Logo"
                />
                <h4
                  style={{
                    textAlign: "center",
                  }}
                  className="text-lg text-gray-800 font-semibold"
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    textAlign: "center",
                  }}
                  className="text-sm sm:text-sm"
                >
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;

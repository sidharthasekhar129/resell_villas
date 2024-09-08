import React from "react";
import MERN from "../assets/images/mernstack.png";
import Sales from "../assets/images/sales.png";
import Digital from "../assets/images/digitalmarketing.jpg";
import Figma from "../assets/images/figma.png";

const Career = () => {
  const members = [
    {
      company_icon:  MERN,
      company_name: "MERN stack engineer",
      job_title: "Intermediate",
      job_description: "We are seeking a talented and motivated MERN Stack Engineer to join our dynamic development team. As a MERN Stack Engineer, you will be responsible for designing, developing, and maintaining web applications using MongoDB, Express.js, React.js, and Node.js. The ideal candidate should have a strong passion for coding, a deep understanding of full-stack development, and a desire to work on innovative projects that push the boundaries of technology. Email us at connect@homznoffiz.com",
       job_type: "Full-time",
      location: "Bengaluru, Karnataka",
      path: "javascript:void(0)",
    },
    {
      company_icon:  Sales,
      company_name: "Sales Associate",
      job_title: "Fresher",
      job_description: "We are seeking a motivated and enthusiastic Real Estate Sales Associate to join our dynamic team. In this role, you will assist clients in buying, selling, and renting properties, and play a key role in the growth of our business. The ideal candidate should have a passion for real estate, strong interpersonal skills, and a drive to achieve and exceed sales targets. You will be responsible for guiding clients through the buying or selling process, providing expert advice, and ensuring a smooth and successful transaction. Email us at connect@homznoffiz.com",
       job_type: "Full-time",
      location: "Bengaluru, Karnataka",
      path: "javascript:void(0)",
    },
    {
      company_icon:  Digital,
      company_name: "Digital Marketer",
      job_title: "Fresher",
      job_description: "We are looking for a creative and results-driven Digital Marketer to join our team. As a Digital Marketer, you will be responsible for developing, implementing, and managing online marketing campaigns that promote our brand, products, or services. You will play a major role in enhancing brand awareness within the digital space, driving website traffic, and acquiring leads/customers. The ideal candidate should have a deep understanding of current marketing tools and strategies and be able to lead integrated digital marketing campaigns from concept to execution. Email us at connect@homznoffiz.com",
       job_type: "Full-time",
      location: "Bengaluru, Karnataka",
      path: "javascript:void(0)",
    },
    {
      company_icon: Figma,
      company_name: "Figma",
      job_title: "UI/UX Designer",
      job_description: "We are seeking a talented and creative Figma UI/UX Designer to join our design team. As a Figma UI/UX Designer, you will be responsible for creating engaging and user-friendly interfaces and experiences for our digital products. You will use Figma to design high-fidelity mockups, wireframes, and prototypes, ensuring that our products are not only visually appealing but also intuitive and functional. The ideal candidate should have a strong design portfolio, proficiency in Figma, and a passion for creating exceptional user experiences. Email us at connect@homznoffiz.com",
       job_type: "Full-time",
      location: "Bengaluru, Karnataka",
      path: "javascript:void(0)",
    },
  ];

  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        {/* <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-transparent">
          <div className="mx-auto max-w-2xl lg:mx-0 bg-transparent">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-transparent">
              Work with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 bg-transparent">
              Explore exciting career opportunities with us and become a part of
              a dynamic, innovative, and collaborative environment where your
              talents can thrive and make a difference.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none bg-transparent">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 bg-transparent text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="bg-transparent">
                  {link.name}{" "}
                  <span aria-hidden="true" className="bg-transparent">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 bg-transparent gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="flex bg-transparent flex-col-reverse"
                >
                  <dt className="text-base leading-7 bg-transparent text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold bg-transparent leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <section className="py-28">
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Open Positions
            </h1>
            <p className="text-gray-600 mt-2">
              We're currently looking talent software engineers, and designers
              to help us in our missions and to grow up.
            </p>
          </div>
          <ul className="mt-12 divide-y space-y-3">
            {members.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50"
              >
                <a href={item.path} className="space-y-3">
                  <div className="flex items-center gap-x-3">
                    <img className="bg-white w-14 h-14 border rounded-full flex items-center justify-center"
                    src={item.company_icon}
                    alt="awsefdg"/>
                      
                     
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6">
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z"
                          fill="#9CA3AF"
                        />
                        <path
                          d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z"
                          fill="#9CA3AF"
                        />
                      </svg>
                      {item.job_type}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                          fill="#9CA3AF"
                        />
                      </svg>

                      {item.location}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Career;

import React from "react";
import BackGroundImage from "../assets/images/banner2.png";
import BuyHome from "../assets/icons/buyhome2.png";
import SellHome from "../assets/icons/sellhome1.png";
import Consulting from "../assets/icons/consulting1.png";
import Professionalism from "../assets/images/about1.jpeg";

import Environment from "../assets/images/about6.jpeg";
import Family from "../assets/images/about5.png";
import Virtualtour from "../assets/images/about4.png";
import Evaluation from "../assets/images/about3.png";
import Valuation from "../assets/images/about2.jpeg";
import Navbar from "./Navbar";
const AboutUs = () => {
  return (
    <div style={{}}>
       <Navbar />
      <div
        style={{
          position: "relative",
          //  width: "100%",
          height: "550px",
          overflow: "hidden",
          margin: "5vw",
          borderRadius: "10px",
        }}
      >

        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${BackGroundImage})`, // Use template literals
            backgroundSize: "center",
            objectFit: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // background: "rgba(147, 121, 184, 0.1)",
            backgroundColor: "#293F66",
            opacity: "80%",
            borderRadius: "10px",
            padding: "20px",
            // width: "80%",
            // maxWidth: "40vw",
            textAlign: "center",
            zIndex: 2,
            //backdropFilter: "blur(5px)",
            ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            color: "#fff",
          }}
          className="flex justify-center items-center flex-col w-80vw   md:w-60vw lg:w-50vw border border-white border-1"
        >
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              //fontFamily: "Poppins, sans-serif",
            }}
            className="text-sm md:text-lg lg:text-2xl"
          >
            HOW RESELL.VILLAS WORKS
          </h2>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,
              //backgroundColor: "black",
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-lg md:text-2xl lg:text-4xl"
          >
            Buying & Selling Simplified
          </p>
          <div
            // href="/"
            style={{
              fontSize: 14,
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-sm md:text-xl flex items-center   mb-4 justify-center gap-x-1 py-2 px-4 text-black font-medium text-white rounded-md   md:inline-flex"
          >
            We handle the listings, you simply reach us out. Exclusive for
            properties above 2 crores, only at resale.villas.
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#F8F9FA",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="container mx-auto"
        >
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              //color:"#9379B8",
              marginTop: 50,
              marginBottom: 50,
            }}
            className="text-xl md:text-3xl"
          >
            Buy, own or sell an amazing second home
          </h2>
          <div
            style={{
              marginBottom: 50,
            }}
            className="grid mx-auto gap-y-20 gap-x-20 px-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                // width: "80%",
                // maxWidth: "40vw",
                textAlign: "center",
                zIndex: 2,
                //backdropFilter: "blur(5px)",
                ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                //color: "#fff",
              }}
              className="flex flex-1 justify-center items-center flex-col   border border-white border-1"
            >
              <img src={BuyHome} />
              <h2
                style={{
                  marginTop: "10px",
                  //  fontSize: "30px",
                  fontWeight: 600,
                  //color:"#9379B8",
                  fontFamily: "Poppins, sans-serif",
                }}
                className="text-xl md:text-3xl"
              >
                Buy
              </h2>

              <p
                style={{
                  margin: "10px 0px",
                  // fontSize: "18px",
                  fontWeight: 500,
                  paddingLeft: 25,
                  paddingRight: 25,
                  fontFamily: "Poppins, sans-serif",
                  color: "#5f6063",
                }}
                className="text-sm"
              >
                Find your dream home from our extensive listings, tailored to
                your preferences. Our advanced filters make your search easier
                than ever.
              </p>
              <a
                href="/properties"
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins, sans-serif",
                }}
                className="text-sm md:text-xl flex items-center mt-10 mb-4 justify-center gap-x-1 py-2 px-4 text-black font-medium rounded-md border-black border-2 md:inline-flex"
              >
                BROWSE LISTING
              </a>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                //marginLeft: 10,
                // width: "80%",
                // maxWidth: "40vw",
                textAlign: "center",
                zIndex: 2,
                //backdropFilter: "blur(5px)",
                ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                //color: "#fff",
              }}
              className="flex flex-1 justify-center items-center flex-col   border border-white border-1"
            >
              <img src={SellHome} />
              <h2
                style={{
                  marginTop: "10px",
                  //  fontSize: "30px",
                  fontWeight: 600,
                  //color:"#9379B8",
                  fontFamily: "Poppins, sans-serif",
                }}
                className="text-xl md:text-3xl"
              >
                Sell
              </h2>

              <p
                style={{
                  margin: "10px 0px",
                  // fontSize: "18px",
                  fontWeight: 500,
                  paddingLeft: 25,
                  paddingRight: 25,
                  fontFamily: "Poppins, sans-serif",
                  color: "#5f6063",
                }}
                className="text-sm"
              >
                List your property with ease and let our experts guide you in
                attracting the right buyers at the best price.
              </p>
              <a
                href="/contact"
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins, sans-serif",
                }}
                className="text-sm md:text-xl flex items-center mt-10 mb-4 justify-center gap-x-1 py-2 px-4 text-black font-medium rounded-md border-black border-2 md:inline-flex"
              >
                LIST MY PROPERTY
              </a>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                // width: "80%",
                // maxWidth: "40vw",
                textAlign: "center",
                zIndex: 2,
                //backdropFilter: "blur(5px)",
                ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                //color: "#fff",
              }}
              className="flex flex-1 justify-center items-center flex-col  border border-white border-1"
            >
              <img src={Consulting} />
              <h2
                style={{
                  marginTop: "10px",
                  //  fontSize: "30px",
                  fontWeight: 600,
                  //color:"#9379B8",
                  fontFamily: "Poppins, sans-serif",
                }}
                className="text-xl md:text-3xl"
              >
                Resale consulting
              </h2>

              <p
                style={{
                  margin: "10px 0px",
                  // fontSize: "18px",
                  fontWeight: 500,
                  paddingLeft: 25,
                  paddingRight: 25,
                  fontFamily: "Poppins, sans-serif",
                  color: "#5f6063",
                }}
                className="text-sm"
              >
                Find your dream home from our extensive listings, tailored to
                your preferences. Our advanced filters make your search easier
                than ever.
              </p>
              <a
                href="/contact"
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins, sans-serif",
                }}
                className="text-sm md:text-xl flex items-center mt-10 mb-4 justify-center gap-x-1 py-2 px-4 text-black font-medium rounded-md border-black border-2 md:inline-flex"
              >
                HOW IT WORKS
              </a>
            </div>
          </div>
          <a
          href="/properties"
            style={{
              backgroundColor: "#9379B8",
              marginTop: 20,

              alignItems: "end",
              marginBottom: 100,
              marginLeft: 10,
              marginRight: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "solid 1px #7c90b2"
            }}
            className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium  border-2 border-white  rounded-md md:inline-flex"
          >
            VIEW LISTING
            <svg
              xmlns="http://www.w3.org/2000/svg"
              s
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          borderRadius: "10px",
          padding: "20px",
          // width: "80%",
          // maxWidth: "40vw",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,
          // backdropFilter: "blur(5px)",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          // color: "#fff",
        }}
        className="flex justify-center items-start flex-col sm:flex-row border border-white border-1"
      >
        <div className="w-90vw sm:w-35vw flex mr-4 flex-col justify-start items-start">
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl"
          >
            Professionalism at its best
          </h2>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,

              fontFamily: "Poppins, sans-serif",
              color: "#5f6063",
              textAlign: "start",
              fontSize: 16,
              paddingRight: 30,
            }}
          >
            Our team is trained to provide top-notch service at every step,
            ensuring a hassle-free experience for you. At every step of the
            process, they bring a blend of professional acumen and personal
            touch, ensuring not only top-notch service but also a genuine
            understanding of your needs. With us, you're not just another
            client, you're a valued member of the RESELL.VILLAS family,
            deserving of nothing but the best.
          </p>
        </div>

        <div className="w-90vw sm:w-40vw ">
          <img
            style={{
              borderRadius: 10,
              width: "100%",
              height: "350px",
              objectFit: "cover",
            }}
            src={Professionalism}
            alt="Professionalism"
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f6f7f9",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          borderRadius: "10px",

          // width: "80%",
          // maxWidth: "40vw",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,

          //backdropFilter: "blur(5px)",
          ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          //color: "#fff",
        }}
        className="flex justify-center items-center flex-col sm:flex-row border border-white border-1"
      >
        <div className="w-90vw sm:w-40vw">
          <img
            style={{
              borderRadius: 10,
              width: "100%",
              height: "350px",
              objectFit: "cover",
            }}
            src={Valuation}
            alt="Valuation"
          />
        </div>
        <div className="w-90vw sm:w-35vw flex flex-col   justify-start items-start">
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-lG md:text-2xl  "
          >
            RIGHT VALUATION
          </h2>
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,

              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl "
          >
            Right Evaluation, Right Price
          </h2>

          <p
            style={{
              //  marginRight:0,
              // fontSize: "18px",
              fontWeight: 500,
              paddingLeft: 30,
              marginTop: 10,

              fontFamily: "Poppins, sans-serif",
              color: "#5f6063",
              textAlign: "start",
              fontSize: 16,
            }}
          >
            Pricing your property correctly is the crucial aspect of the real
            estate transaction . Leveraging market trends and in-depth property
            analysis, we ensure your property is priced just right, maximizing
            returns while ensuring a quick sale thus unlocking a successful
            property sale.
          </p>

          <label
            style={{
              color: "#9379B8",
              paddingLeft: 30,
            }}
            className="  mt-2    font-sans underline"
          >
            Get started
          </label>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          borderRadius: "10px",
          padding: "20px",
          // width: "80%",
          // maxWidth: "40vw",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,

          //backdropFilter: "blur(5px)",
          ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          //color: "#fff",
        }}
        className="flex justify-center items-start flex-col sm:flex-row border border-white border-1"
      >
        <div className="w-90vw sm:w-35vw flex flex-col mr-4  justify-start items-start">
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-lG md:text-2xl"
          >
            PERSONAL PERSON VISIT
          </h2>
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl"
          >
            Ensuring correct evaluation
          </h2>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,

              fontFamily: "Poppins, sans-serif",
              color: "#5f6063",
              textAlign: "start",
              fontSize: 16,
              paddingLeft: 30,
            }}
          >
            We begin with an in-person visit to your property , meticulously
            reviewing every aspect of the property .This assessment helps us to
            highlight its standout features and provide the right evaluation and
            tailored strategies ensuring a successful sale.
          </p>

          <label
            style={{
              paddingBottom: 30,

              color: "#9379B8",
            }}
            className="  mt-2  pl-8 font-sans underline"
          >
            Learn more
          </label>
        </div>
        <div className="w-90vw sm:w-40vw ">
          <img
            style={{
              borderRadius: 10,
              width: "100%",
              height: "350px",
              objectFit: "cover",
            }}
            src={Evaluation}
            alt="Evaluation"
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f6f7f9",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          borderRadius: "10px",
          padding: "20px",
          // width: "80%",
          // maxWidth: "40vw",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,

          //backdropFilter: "blur(5px)",
          ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          //color: "#fff",
        }}
        className="flex justify-center items-start flex-col sm:flex-row border border-white border-1"
      >
        <div className="w-90vw sm:w-40vw ">
          <img
            style={{
              borderRadius: 10,
              width: "100%",
              height: "350px",
              objectFit: "cover",
            }}
            src={Virtualtour}
            alt="Virtualtour"
          />
        </div>
        <div className="w-90vw sm:w-35vw flex flex-col   justify-start items-start">
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-lG md:text-2xl"
          >
            REALISTIC EXPLORATION
          </h2>
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl"
          >
            Give life to the Property with virtual tours
          </h2>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,

              fontFamily: "Poppins, sans-serif",
              color: "#5f6063",
              textAlign: "start",
              fontSize: 16,
              paddingLeft: 30,
            }}
          >
            We craft a captivating virtual tour video of your property, enabling
            potential buyers to experience your home from the comfort of theirs.
            This not only widens your audience but also ensures safety in these
            digital times.
          </p>

          <label
            style={{
              color: "#9379B8",
            }}
            className="  mt-2  pl-8 font-sans underline"
          >
            How virtual home tour works
          </label>
        </div>
      </div>

      {/* <div
        style={{
          backgroundColor: "white",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          borderRadius: "10px",
          padding: "20px",
          // width: "80%",
          // maxWidth: "40vw",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,

          //backdropFilter: "blur(5px)",
          ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          //color: "#fff",
        }}
        className="flex justify-center items-start flex-col sm:flex-row border border-white border-1"
      >
        <div className="w-90vw sm:w-35vw flex flex-col   justify-start items-start">
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-lG md:text-2xl"
          >
            PERSONAL PERSON VISIT
          </h2>
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl"
          >
            Ensuring correct evaluation
          </h2>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,

              fontFamily: "Poppins, sans-serif",
              color: "#5f6063",
              textAlign: "start",
              fontSize: 16,
              paddingLeft: 30,
            }}
          >
            We begin with an in-person visit to your property , meticulously
            reviewing every aspect of the property .This assessment helps us to
            highlight its standout features and provide the right evaluation and
            tailored strategies ensuring a successful sale.
          </p>

          <label
            style={{
              color: "#9379B8",
            }}
            className="  mt-2  pl-8 font-sans underline"
          >
            Learn more
          </label>
        </div>
        <div className="w-90vw sm:w-40vw ">
          <img
            style={{
              borderRadius: 10,
              width: "100%",
              height: "350px",
              objectFit: "cover",
            }}
            src={Evaluation}
            alt="Evaluation"
          />
        </div>
      </div> */}

      <div
        style={{
          backgroundColor: "white",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          borderRadius: "10px",
          padding: "20px",
          // width: "80%",
          // maxWidth: "40vw",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,

          //backdropFilter: "blur(5px)",
          ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          //color: "#fff",
        }}
        className="flex justify-center items-start flex-col sm:flex-row border border-white border-1"
      >
        <div className="w-90vw sm:w-35vw flex flex-col mr-4  justify-start items-start">
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-lG md:text-2xl"
          >
            COMMUNITY SUPPORT
          </h2>
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl"
          >
            Become part of the community
          </h2>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,

              fontFamily: "Poppins, sans-serif",
              color: "#5f6063",
              textAlign: "start",
              fontSize: 16,
              paddingLeft: 30,
            }}
          >
            With Resell.Villas, you aren’t just buying a home, you’re
            joining a local community. Learn how Resell.Villas owners help
            the neighborhood and local economy thrive.
          </p>

          <label
            style={{
              color: "#9379B8",
            }}
            className="  mt-2  pl-8 font-sans underline"
          >
            Learn more
          </label>
        </div>
        <div className="w-90vw sm:w-40vw ">
          <img
            style={{
              borderRadius: 10,
              width: "100%",
              height: "350px",
              objectFit: "cover",
            }}
            src={Environment}
            alt="Environment"
          />
        </div>
      </div>
      
      <div
        style={{
          backgroundColor: "#f6f7f9",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          borderRadius: "10px",
          padding: "20px",
          // width: "80%",
          // maxWidth: "40vw",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,

          //backdropFilter: "blur(5px)",
          ///boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          //color: "#fff",
        }}
        className="flex justify-center items-start flex-col sm:flex-row border border-white border-1"
      >
        <div className="w-90vw sm:w-40vw ">
          <img
            style={{
              borderRadius: 10,
              width: "100%",
              height: "350px",
              objectFit: "cover",
              backgroundColor: "transparent",

              objectPosition: "top center", // Focus on top center
            }}
            src={Family}
            alt="Family"
          />
        </div>
        <div className="w-90vw sm:w-35vw flex flex-col   justify-start items-start">
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-lG md:text-2xl"
          >
            OWNER STORIES
          </h2>
          <h2
            style={{
              marginTop: "10px",
              //  fontSize: "30px",
              fontWeight: 600,
              //color:"#9379B8",
              paddingLeft: 30,
              textAlign: "start",

              fontFamily: "Poppins, sans-serif",
            }}
            className="text-xl md:text-3xl"
          >
            Second homes bring families together
          </h2>

          <p
            style={{
              margin: "10px 0px",
              // fontSize: "18px",
              fontWeight: 500,

              fontFamily: "Poppins, sans-serif",
              color: "#5f6063",
              textAlign: "start",
              fontSize: 16,
              paddingLeft: 30,
            }}
          >
            For many families, a second home is a special place to come together
            and create lasting memories. Hear how Resell.Villas is enriching
            the lives of owners.
          </p>

          <label
            style={{
              color: "#9379B8",
            }}
            className="  mt-2  pl-8 font-sans underline"
          >
            Read more reviews
          </label>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

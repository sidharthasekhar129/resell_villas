import BgBanner from "../assets/images/banner.png";
import Banner from "../assets/images/banner_.png";
import Verified from "../assets/images/verified.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import assetContext from "../context/AssetsContext/AssetContext";
import Pagination from "../../src/components/Pagination";
import Footer from "./footer";
import SearchBarWithDropdown from "./SearchBarWIthDropdownStates";
import React, { useState, useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { IMAGE_PATH } from "../constant";

const ListProperty = () => {
  //filter data list starts here

  const [type, setType] = useState(["Villa"]);
  const [status, setStatus] = useState([]);
  const [location, setLocation] = useState([]);
  const [builder, setBuilder] = useState([]);
  const [bhk, setBHK] = useState([]);
  // const [starting_price, setStartingPrice] = useState(0);
  const [propertyPrice, setPropertyPrice] = useState(20);

  const [bathrooms, setBathrooms] = useState([]);
  const [balconies, setBalconies] = useState([]);
  const [doorFacing, setDoorFacing] = useState([]);
  const [furnishingStatus, setFurnishingStatus] = useState([]);
  const [parking, setParking] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const handleShow = () => {
    setShowAll(!showAll);
  };

  const context = useContext(assetContext);
  const {
    getAvailableFilters,
    availableFilters,
    assets,
    totalAssets,
    getSearchAssets,
    getAAsset,
  } = context;

  const bathroomsx = [1, 2, 3, 4, 5, 6, 7, 8];
  const balconiesx = [1, 2, 3, 4, 5, 6, 7, 8];
  const door_facingx = ["East", "West", "North", "South"];
  const furnishing_statusx = ["Furnished", "Unfurnished", "Semi Furnished"];
  const parkingx = ["Two Wheeler", "Four Wheeler", "Both"];

  const handleType = (element) => {
    const arr = toggleElement(type, element);
    setType(arr);
  };

  const handleStatus = (element) => {
    const arr = toggleElement(status, element);
    setStatus(arr);
  };

  const handleLocation = (element) => {
    const arr = toggleElement(location, element);
    setLocation(arr);
  };

  const handleBuilder = (element) => {
    const arr = toggleElement(builder, element);
    setBuilder(arr);
  };

  const handleBHK = (element) => {
    const arr = toggleElement(bhk, element);
    setBHK(arr);
  };

  const handleBathrooms = (element) => {
    const arr = toggleElement(bathrooms, element);
    setBathrooms(arr);
  };

  const handleBalconies = (element) => {
    const arr = toggleElement(balconies, element);
    setBalconies(arr);
  };

  const handleDoorFacing = (element) => {
    const arr = toggleElement(doorFacing, element);
    setDoorFacing(arr);
  };

  const handleFurnishingStatus = (element) => {
    const arr = toggleElement(furnishingStatus, element);
    setFurnishingStatus(arr);
  };

  const handleParking = (element) => {
    const arr = toggleElement(parking, element);
    setParking(arr);
  };

  const handleChange = (event) => {
    setPropertyPrice(parseInt(event.target.value));
  };

  function toggleElement(array, element) {
    const index = array.indexOf(element);

    if (index === -1) {
      // Element is not present, so insert it
      array.push(element);
    } else {
      // Element is present, so remove it
      array.splice(index, 1);
    }

    return [...array]; // Make sure to return a new array to trigger re-render
  }

  useEffect(() => {
    // getAssets({ page: currentPage });
    getAvailableFilters();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // getAssets({ page: currentPage });
    handleFilters({
      property_type: type,
      property_status: status,
      city: location,
      property_builder: builder,
      bedroom: bhk,
      property_price: propertyPrice,
      bath_rooms: bathrooms,
      balconies: balconies,
      door_facing: doorFacing,
      furnishing_status: furnishingStatus,
      parking: parking,
    });

    // eslint-disable-next-line
  }, [
    type,
    status,
    location,
    builder,
    bhk,
    propertyPrice,
    bathrooms,
    balconies,
    doorFacing,
    furnishingStatus,
    parking,
  ]);

  //filter data list ends here

  const navigate = useNavigate();
  const searchQuery = useLocation();
  const queryParams = new URLSearchParams(searchQuery.search);

  const [query, setQuery] = useState(
    queryParams.get("property_name") !== null
      ? queryParams.get("property_name")
      : ""
  );

  const [filters, setFilters] = useState({
    property_type:
      queryParams.get("property_type") !== null
        ? queryParams.get("property_type")
        : ["Villa"],
    property_status:
      queryParams.get("property_status") !== null
        ? queryParams.get("property_status")
        : [],
    city: queryParams.get("city") !== null ? queryParams.get("city") : [],
    property_builder:
      queryParams.get("property_builder") !== null
        ? queryParams.get("property_builder")
        : [],
    bedroom:
      queryParams.get("bedroom") !== null ? queryParams.get("bedroom") : [],
    property_price:
      queryParams.get("property_price") !== null
        ? queryParams.get("property_price")
        : 20,
    bath_rooms:
      queryParams.get("bath_rooms") !== null
        ? queryParams.get("bath_rooms")
        : [],
    balconies:
      queryParams.get("balconies") !== null ? queryParams.get("balconies") : [],
    door_facing:
      queryParams.get("door_facing") !== null
        ? queryParams.get("door_facing")
        : [],
    furnishing_status:
      queryParams.get("furnishing_status") !== null
        ? queryParams.get("furnishing_status")
        : [],
    parking:
      queryParams.get("parking") !== null ? queryParams.get("parking") : [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [similarAssets, setSimilarAssets] = useState([]);

  const handleDataReceived = async (data) => {
    setQuery("" + data.text);

    await handleFilters(data.filters);
  };

  const handleFilters = async (filtersx) => {
    getSearchAssets({
      page: currentPage,
      property_type: filtersx !== null ? filtersx.property_type : ["Villa"],
      property_status: filtersx !== null ? filtersx.property_status : [],
      city: filtersx !== null ? filtersx.city : [],
      property_builder: filtersx !== null ? filtersx.property_builder : [],
      bedroom: filtersx !== null ? filtersx.bedroom : [],
      property_price: filtersx !== null ? filtersx.property_price : 20,

      bath_rooms: filtersx !== null ? filtersx.bath_rooms : [],
      balconies: filtersx !== null ? filtersx.balconies : [],
      door_facing: filtersx !== null ? filtersx.door_facing : [],
      furnishing_status: filtersx !== null ? filtersx.furnishing_status : [],
      parking: filtersx !== null ? filtersx.parking : [],
      property_name: query,
    });

    setFilters({
      property_type: filtersx !== null ? filtersx.property_type : ["Villa"],
      property_status: filtersx !== null ? filtersx.property_status : [],
      city: filtersx !== null ? filtersx.city : [],
      property_builder: filtersx !== null ? filtersx.property_builder : [],
      bedroom: filtersx !== null ? filtersx.bedroom : [],
      property_price: filtersx !== null ? filtersx.property_price : 20,

      bath_rooms: filtersx !== null ? filtersx.bath_rooms : [],
      balconies: filtersx !== null ? filtersx.balconies : [],
      door_facing: filtersx !== null ? filtersx.door_facing : [],
      furnishing_status: filtersx !== null ? filtersx.furnishing_status : [],
      parking: filtersx !== null ? filtersx.parking : [],
    });

    const queryParams = new URLSearchParams({
      page: 1,
      property_type: filtersx !== null ? filtersx.property_type : ["Villa"],
      property_status: filtersx !== null ? filtersx.property_status : [],
      city: filtersx !== null ? filtersx.city : [],
      property_builder: filtersx !== null ? filtersx.property_builder : [],
      bedroom: filtersx !== null ? filtersx.bedroom : [],
      property_price: filtersx !== null ? filtersx.property_price : 20,

      bath_rooms: filtersx !== null ? filtersx.bath_rooms : [],
      balconies: filtersx !== null ? filtersx.balconies : [],
      door_facing: filtersx !== null ? filtersx.door_facing : [],
      furnishing_status: filtersx !== null ? filtersx.furnishing_status : [],
      parking: filtersx !== null ? filtersx.parking : [],

      property_name: query,
    }).toString();

    navigate(`/properties?${queryParams}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (filters !== null) {
      getSearchAssets({
        page: newPage,
        property_type: filters !== null ? filters.property_type : ["Villa"],
        property_status: filters !== null ? filters.property_status : [],
        city: filters !== null ? filters.city : [],
        property_builder: filters !== null ? filters.property_builder : [],
        bedroom: filters !== null ? filters.bedroom : [],
        property_price: filters !== null ? filters.property_price : 20,

        bath_rooms: filters !== null ? filters.bath_rooms : [],
        balconies: filters !== null ? filters.balconies : [],
        door_facing: filters !== null ? filters.door_facing : [],
        furnishing_status: filters !== null ? filters.furnishing_status : [],
        parking: filters !== null ? filters.parking : [],

        property_name: query,
      });
    } else {
    }
    // Additional logic such as fetching data for the new page
  };

  const [showModal, setShowModal] = useState(false);

  const handleSelectCity = (selectedCity) => {
    localStorage.setItem("city", selectedCity);
    window.location.reload();

    setShowModal(false);
  };

  useEffect(() => {
    const city = localStorage.getItem("city");
    if (city === null || city === "") {
      setShowModal(true);
    }
  }, [localStorage.getItem("city")]);

  useEffect(() => {
    handleFilters(filters);
  }, []);

  useEffect(() => {
    setSimilarAssets(assets);
  }, [assets]);

  const HandleClick = (slug) => {
    window.open(`/property/${slug}`, "_blank");
    localStorage.setItem("projectData", JSON.stringify(similarAssets));
  };

  return (
    <div className="flex flex-col justify-center ">
      <Navbar />

      <div className="bg-white w-full max-w-7xl mx-auto p-4">
        <div
          style={{
            height: "19vh",
            backgroundImage: `url(${BgBanner})`,
            display: "flex",
            objectFit: "cover",
            borderRadius: 10,

            justifyContent: "space-between",
            alignItems: "center",

            // backgroundColor:"black",
          }}
        >
          <img
            src={Banner}
            alt="Bannerd"
            style={{
              objectFit: "cover",
              paddingLeft: 15,
            }}
            className="hidden md:flex  h-[25vh] "
          />
          <div
            className="px-4   w-[100%] flex-col justify-center items-center"
            // className="w-[100%] flex justify-center items-center"
          >
            <div className="flex px-0  justify-center items-center lg:justify-end lg:items-end flex-row ">
              <h1 className="text-sm   lg:text-xl font-bold  text-white">
                DO YOU WANT TO
              </h1>
              <h1 className="text-sm   lg:text-xl mx-2 font-bold  text-white">
                BUY OR SELL
              </h1>
              <h1 className="text-sm lg:text-xl font-bold  text-white">
                ANY PROPERTY?
              </h1>
            </div>

            <div className="flex flex-col  justify-center items-center lg:justify-end lg:items-end">
              <h1 style={{ color: "white" }} className="text-md mt-2 text-end">
                +91 8884769695
              </h1>

              <h1
                href="/contact"
                style={{ color: "white", textDecorationColor: "white" }}
                className="text-sm underline text-end"
              >
                https://resell.villas/contact
              </h1>
            </div>
          </div>
        </div>

        {/* <h2
          style={{
            fontSize: 24,
            marginBottom: 10,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600

            // backgroundColor:"black"
          }}
          className="text-lg mt-6 leading-none text-gray-900"
        >
          Featured projects
        </h2> */}
        <SearchBarWithDropdown
          onDataReceived={handleDataReceived}
          locationaOptions={
            availableFilters !== null &&
            availableFilters.property_location.length > 0
              ? availableFilters.property_location
              : []
          }
          configOptions={
            availableFilters !== null &&
            availableFilters.property_bhk.length > 0
              ? availableFilters.property_bhk
              : []
          }
          style={{ width: "100%", backgroundColor: "black" }}
        />
      </div>

      <div
        style={{
          // maxWidth:"80vw"
          fontFamily: "Poppins, sans-serif",
          alignSelf: "center",
        }}
        className="flex flex-row  justify-center items-start max-w-[100vw] md:max-w-[85vw]   px-10 gap-x-4"
      >
        <div
          style={{
            position: "sticky", // Make the div sticky
            top: "1vh", // Set the top offset when it should start sticking
          }}
          className="hidden xl:block w-[23vw] shadow-md p-6 mb-10"
        >
          <h6
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
            className="mt-4"
          >
            Advanced Filters
          </h6>

          <div
            style={{
              width: "5vw",
              backgroundColor: "purple",
              height: 3,

              marginTop: 10,
              marginBottom: 20,
            }}
          ></div>

          {/* <div
            style={{
              fontFamily: "sans-serif",
            }}
          >
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Property Type
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {availableFilters !== null &&
              availableFilters.property_type.length > 0
                ? availableFilters.property_type.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: type.includes(item.name)
                          ? "#9379B8"
                          : "white",
                        color: type.includes(item.name) ? "white" : "black",
                        borderRadius: 5,
                        fontSize: 12,
                        border: type.includes(item.name)
                          ? "0px solid #d8d0d0"
                          : ".5px solid #d8d0d0",
                        padding: "2px 10px",
                        margin: "10px 10px 0px 0px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleType(item.name)}
                    >
                      {item.name}
                    </div>
                  ))
                : null}
            </div>
          </div> */}

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Property Status
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {availableFilters !== null &&
              availableFilters.property_status.length > 0
                ? availableFilters.property_status.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: status.includes(item.name)
                          ? "#9379B8"
                          : "white",
                        color: status.includes(item.name) ? "white" : "black",
                        borderRadius: 5,
                        fontSize: 12,

                        border: status.includes(item.name)
                          ? "0px solid #d8d0d0"
                          : ".5px solid #d8d0d0",
                        padding: "2px 10px",
                        margin: "10px 10px 0px 0px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleStatus(item.name)}
                    >
                      {item.name}
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Property Locations
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {availableFilters !== null &&
              availableFilters.property_location.length > 0
                ? availableFilters.property_location.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: location.includes(item.name)
                          ? "#9379B8"
                          : "white",
                        color: location.includes(item.name) ? "white" : "black",
                        borderRadius: 5,
                        fontSize: 12,

                        border: location.includes(item.name)
                          ? "0px solid #d8d0d0"
                          : ".5px solid #d8d0d0",
                        padding: "2px 10px",
                        margin: "10px 10px 0px 0px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleLocation(item.name)}
                    >
                      {item.name}
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Property Builders
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {availableFilters !== null &&
              availableFilters.property_builder.length > 0
                ? availableFilters.property_builder
                    .slice(
                      0,
                      showAll ? availableFilters.property_builder.length : 15
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        style={{
                          backgroundColor: builder.includes(item.name)
                            ? "#9379B8"
                            : "white",
                          color: builder.includes(item.name)
                            ? "white"
                            : "black",
                          borderRadius: 5,
                          fontSize: 12,

                          border: builder.includes(item.name)
                            ? "0px solid #d8d0d0"
                            : ".5px solid #d8d0d0",
                          padding: "2px 10px",
                          margin: "10px 10px 0px 0px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleBuilder(item.name)}
                      >
                        {item.name}
                      </div>
                    ))
                : null}

              {!showAll &&
                availableFilters !== null &&
                availableFilters.property_builder.length > 15 && (
                  <button
                    onClick={handleShow}
                    style={{
                      fontSize: 12,
                      color: "#9379B8",
                      marginLeft: 15,
                      marginTop: 10,
                      fontWeight: 600,
                    }}
                  >
                    Show All {availableFilters.property_builder.length}{" "}
                    developers
                  </button>
                )}
              {showAll && (
                <button
                  onClick={handleShow}
                  style={{
                    fontSize: 12,
                    color: "#9379B8",
                    marginLeft: 15,
                    marginTop: 10,

                    fontWeight: 600,
                  }}
                >
                  Show Less
                </button>
              )}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Property BHK
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {availableFilters !== null &&
              availableFilters.property_bhk.length > 0
                ? availableFilters.property_bhk.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: bhk.includes(item.name)
                          ? "#9379B8"
                          : "white",
                        color: bhk.includes(item.name) ? "white" : "black",
                        borderRadius: 5,
                        fontSize: 12,

                        border: bhk.includes(item.name)
                          ? "0px solid #d8d0d0"
                          : ".5px solid #d8d0d0",
                        padding: "2px 10px",
                        margin: "10px 10px 0px 0px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleBHK(item.name)}
                    >
                      {item.name}
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Bathrooms
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {bathroomsx.map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: bathrooms.includes(item)
                      ? "#9379B8"
                      : "white",
                    color: bathrooms.includes(item) ? "white" : "black",
                    borderRadius: 5,
                    fontSize: 12,

                    border: bathrooms.includes(item)
                      ? "0px solid #d8d0d0"
                      : ".5px solid #d8d0d0",
                    padding: "2px 10px",
                    margin: "10px 10px 0px 0px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleBathrooms(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Balconies
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {balconiesx.map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: balconies.includes(item)
                      ? "#9379B8"
                      : "white",
                    color: balconies.includes(item) ? "white" : "black",
                    borderRadius: 5,
                    fontSize: 12,

                    border: balconies.includes(item)
                      ? "0px solid #d8d0d0"
                      : ".5px solid #d8d0d0",
                    padding: "2px 10px",
                    margin: "10px 10px 0px 0px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleBalconies(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Door Facing
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {door_facingx.map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: doorFacing.includes(item)
                      ? "#9379B8"
                      : "white",
                    color: doorFacing.includes(item) ? "white" : "black",
                    borderRadius: 5,
                    fontSize: 12,

                    border: doorFacing.includes(item)
                      ? "0px solid #d8d0d0"
                      : ".5px solid #d8d0d0",
                    padding: "2px 10px",
                    margin: "10px 10px 0px 0px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDoorFacing(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Furnishing
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {furnishing_statusx.map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: furnishingStatus.includes(item)
                      ? "#9379B8"
                      : "white",
                    color: furnishingStatus.includes(item) ? "white" : "black",
                    borderRadius: 5,
                    fontSize: 12,

                    border: furnishingStatus.includes(item)
                      ? "0px solid #d8d0d0"
                      : ".5px solid #d8d0d0",
                    padding: "2px 10px",
                    margin: "10px 10px 0px 0px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleFurnishingStatus(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Parking
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {parkingx.map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: parking.includes(item)
                      ? "#9379B8"
                      : "white",
                    color: parking.includes(item) ? "white" : "black",
                    borderRadius: 5,
                    fontSize: 12,

                    border: parking.includes(item)
                      ? "0px solid #d8d0d0"
                      : ".5px solid #d8d0d0",
                    padding: "2px 10px",
                    margin: "10px 10px 0px 0px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleParking(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Property Maximum Price
            </h6>
            <input
              type="range"
              min={0}
              max={20}
              value={propertyPrice}
              onChange={handleChange}
              step={1}
              style={{
                width: "100%",
                marginTop: 10,
              }}
            />
            <p>Value: 0 to {propertyPrice}</p>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <h6
              style={{
                marginTop: 15,
                marginLeft: 15,
                marginBottom: 10,
                fontWeight: "bold",
                fontSize: 18,
              }}
              className="my-4"
            >
              Showing {assets.length} projects from {totalAssets}
            </h6>
            <div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(totalAssets / 12)}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {assets.length > 0 ? (
            <div className="grid grid-cols-1 justify-items-center gap-8   md:grid-cols-2 lg:grid-cols-3">
              {assets.map((asset, index) => (
                <div
                  style={{
                    position: "relative",
                  }}
                  key={index}
                  className="bg-[#f9f2f2] rounded-lg p-4 flex flex-col items-center"
                >
                  <div className="w-full">
                    <img
                      onClick={() => HandleClick(asset.slug)}
                      src={
                        IMAGE_PATH +
                        asset.cover_image.fieldname +
                        "/" +
                        asset.cover_image.filename
                      }
                      alt="ExxxErr"
                      className="object-cover rounded-lg h-64 w-full"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      top: "-2vh",
                      //  backgroundColor: "white",
                    }}
                  >
                    <img
                      onClick={() => HandleClick(asset.slug)}
                      src={Verified}
                      alt="Verified"
                      className="h-[4vh]"
                    />
                  </div>
                  <div className="card-bottom w-full">
                    <h1
                      onClick={() => HandleClick(asset.slug)}
                      className="text-black font-bold text-lg"
                    >
                      {asset.property_name}
                    </h1>
                    <div className="flex justify-between items-center mt-2 mb-4">
                      <div className="flex text-sm">{asset.bedroom}</div>
                      {/* <div className="flex text-sm">2000 sq.ft</div> */}
                      <h1 className="text-sm">
                        {asset.property_type}, {asset.property_dimension} sq.ft
                      </h1>
                    </div>
                    <h3 className="text-black text-md mt-4">
                      ₹{asset.property_price} Cr
                    </h3>
                    <h2 className="text-gray-500 text-sm mt-2">
                      {asset.location}, {asset.city}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <div
              style={{
                marginTop: 15,
                marginLeft: 15,
                marginBottom: 10,
              }}
            >
              Showing {assets.length} out of {totalAssets}
            </div>
            <div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(totalAssets / 12)}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListProperty;

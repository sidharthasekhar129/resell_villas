import React, { useState, useEffect, useContext } from "react";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import assetContext from "../context/AssetsContext/AssetContext";

const FilterModal = () => {
  const [promise, setPromise] = useState(null);

  const context = useContext(assetContext);
  const { getAvailableFilters, availableFilters } = context;

  const [type, setType] = useState([]);
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

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const confirm = () =>
    new Promise((resolve, reject) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
     setPromise(null);
    
  };
  const handleSkip = () => {
     if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleConfirm = () => {
    promise?.resolve({
      property_type: type,
      property_status: status,
      city: location,
      property_builder: builder,
      bedroom: bhk,
      bath_rooms: bathrooms,
      balconies: balconies,
      door_facing: doorFacing,
      furnishing_status: furnishingStatus,
      parking: parking,
      property_price: propertyPrice,
    });

    handleClose();
  };

  const [showAll, setShowAll] = useState(false);

  const handleShow = () => {
    setShowAll(!showAll);
  };

  const bathroomsx = [1, 2, 3, 4, 5, 6, 7, 8];
  const balconiesx = [1, 2, 3, 4, 5, 6, 7, 8];
  const door_facingx = ["East", "West", "North", "South"];
  const furnishing_statusx = ["Furnished", "Unfurnished", "Semi Furnished"];
  const parkingx = ["Two Wheeler", "Four Wheeler", "Both"];

  const handleType = (element) => {
    const arr = toggleElement(type, element);
    setType(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStatus = (element) => {
    const arr = toggleElement(status, element);
    setStatus(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleLocation = (element) => {
    const arr = toggleElement(location, element);
    setLocation(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBuilder = (element) => {
    const arr = toggleElement(builder, element);
    setBuilder(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBHK = (element) => {
    const arr = toggleElement(bhk, element);
    setBHK(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBathrooms = (element) => {
    const arr = toggleElement(bathrooms, element);
    setBathrooms(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBalconies = (element) => {
    const arr = toggleElement(balconies, element);
    setBalconies(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleDoorFacing = (element) => {
    const arr = toggleElement(doorFacing, element);
    setDoorFacing(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleFurnishingStatus = (element) => {
    const arr = toggleElement(furnishingStatus, element);
    setFurnishingStatus(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleParking = (element) => {
    const arr = toggleElement(parking, element);
    setParking(arr);
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleChange = (event) => {
    setPropertyPrice(parseInt(event.target.value));
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
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
    getAvailableFilters();
  }, []);

  const handleSelect = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const ConfirmationDialog = () => (
    <Dialog open={promise !== null} onClose={handleClose} fullWidth>
      <DialogTitle style={{ fontWeight: "700" }}>
        <div className="flex justify-between items-center mb-4">
          <IconButton
            type="submit"
            edge="start"
            //disabled={checked.length === 0 ? true : false}
            //  onClick={() => handleDeleteUsers()}
            onClick={handleBack}
          >
            <IoIosArrowBack color="grey" />
          </IconButton>

          <div className="text-gray-500 font-semibold">
            {currentStep}/{steps.length}
          </div>
        </div>
      </DialogTitle>
      <DialogContent
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            marginBottom:20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap", // Flex wrap added here
          }}
        >
          {[
            builder.length > 0 ? builder.toString() : "",
            bhk.length > 0 ? bhk.toString() : "",
            type.length > 0 ? type.toString() : "",
            status.length > 0 ? status.toString() : "",
            location.length > 0 ? location.toString() : "",
            bathrooms.length > 0 ? bathrooms.toString() : "",
            balconies.length > 0 ? balconies.toString() : "",
            doorFacing.length > 0 ? doorFacing.toString() : "",
            furnishingStatus.length > 0 ? furnishingStatus.toString() : "",
            parking.length > 0 ? parking.toString() : "",
            propertyPrice != 20 ? propertyPrice.toString() : "",
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#9379B8",
                color: "white",
                borderRadius: 5,
                fontSize: 12,

                border: "0px solid #d8d0d0",

                padding: "2px 10px",
                margin: "10px 10px 0px 0px",
                cursor: "pointer",
              }}
              // onClick={() => handleBHK(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {currentStep === 1 ? (
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Builders
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {availableFilters !== null &&
              availableFilters.property_builder.length > 0
                ? availableFilters.property_builder
                    .slice(
                      0,
                      showAll ? availableFilters.property_builder.length : 20
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
                availableFilters.property_builder.length > 20 && (
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
        ) : currentStep === 2 ? (
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: 10,
            }}
          >
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select BHK
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
        ) : currentStep === 3 ? (
          <div
            style={{
              marginTop: 10,

              fontFamily: "Poppins, sans-serif",
            }}
          >
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Type
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
          </div>
        ) : currentStep === 4 ? (
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: 10,
            }}
          >
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Status
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
        ) : currentStep === 5 ? (
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: 10,
            }}
          >
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Locations
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
        ) : currentStep === 6 ? (
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: 10,
            }}
          >
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Bathrooms
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
        ) : currentStep === 7 ? (
          <div style={{ fontFamily: "Poppins, sans-serif", marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Balconies
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
        ) : currentStep === 8 ? (
          <div style={{ fontFamily: "Poppins, sans-serif", marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Door Facing
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
        ) : currentStep === 9 ? (
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: 10,
            }}
          >
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Furnishing
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
        ) : currentStep === 10 ? (
          <div style={{ fontFamily: "Poppins, sans-serif", marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select Parking
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
        ) : currentStep === 11 ? (
          <div style={{ fontFamily: "Poppins, sans-serif", marginTop: 10 }}>
            <h6
              style={{
                fontWeight: "bold",
              }}
            >
              Select your Budget
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
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSkip}
          style={{
            color: "red",

            fontFamily: "Poppins, sans-serif",
          }}
        >
          Skip
        </Button>
        <Button
          onClick={handleConfirm}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );

  return [ConfirmationDialog, confirm];
};

export default FilterModal;

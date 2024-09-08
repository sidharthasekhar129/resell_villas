import { BASE_URL } from "../constant";
import AssetContext from "../context/AssetsContext/AssetContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssetState = (propsx) => {
  const [assets, setAssets] = useState([]);
  const [totalAssets, setTotalAssets] = useState(0);

  const [assetsfeatured, setAssetsfeatured] = useState([]);
  const [totalAssetsFeatured, setTotalAssetsFeatured] = useState(0);

  const [asset, setAsset] = useState(null);

  const [amenities, setAmenities] = useState(null);
  const [builderDetails, setBuilderDetails] = useState(null);

  const [availableFilters, setAvailableFilters] = useState(null);

  const getAvailableFilters = async (props) => {
    try {
      const response = await fetch(`${BASE_URL}/filter/getfilterx`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        const json = await response.json();

        setAvailableFilters(json.data);
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        console.log("FAILED WITH STATUS CODE " + response.status.toString());
      }
    } catch (e) {
      console.log(e.message);
      console.log("SERVER DOWN");
    }
  };

  const getSearchAssets = async (props) => {
    const {
      page,
      property_type,
      property_status,
      property_builder,
      property_name,
      bedroom,
      bath_rooms,
      balconies,
      door_facing,
      furnishing_status,
      parking,
      city,
      is_featured,

      property_price,
    } = props;

    const limit = 12;
    const offset = page ? (page - 1) * limit : 0;

    const queryParams = {
      property_type: property_type,
      property_status: property_status,
      city: city,
      property_builder: property_builder,
      bedroom: bedroom,
      bath_rooms: bath_rooms,
      balconies: balconies,
      door_facing: door_facing,
      furnishing_status: furnishing_status,
      parking: parking,
      property_price: property_price,
      property_name: property_name,
      is_featured: is_featured,

      limit: limit,
      offset: offset,
    };

    // API Call

    try {
      const response = await fetch(
        `${BASE_URL}/asset/resell/get?${new URLSearchParams(queryParams)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const json = await response.json();
        const parsedData = json.data.map((item) => ({
          ...item,

          //  property_images: JSON.parse(item.property_images),
          cover_image: JSON.parse(item.cover_image),
        }));

        if (json.data.length > 0) {
          setAssets(parsedData);

          setTotalAssets(json.total);

          //console.log(parsedData);
        } else {
          setAssets([]);
          setTotalAssets(0);
        }
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        //console.log("FAILED WITH STATUS CODE " + response.status.toString());
      }
    } catch (e) {
      // console.log(e.message);
      console.log("SERVER DOWN");
    }
  };

  const getAssetsFeatured = async (props) => {
    const {
      page,
     
    } = props;

    const limit = 9;
    const offset = page ? (page - 1) * limit : 0;

    const queryParams = {
      property_type: ["Villa"],
      property_status: [],
      city: [],
      property_builder: [],
      bedroom: [],
      bath_rooms: [],
      balconies: [],
      door_facing: [],
      furnishing_status: [],
      parking: [],
      property_price: 20,
      property_name: "",
      is_featured: 1,

      limit: limit,
      offset: offset,
    };

    try {
      const response = await fetch(
        `${BASE_URL}/asset/resell/get?${new URLSearchParams(queryParams)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const json = await response.json();
        const parsedData = json.data.map((item) => ({
          ...item,

          cover_image: JSON.parse(item.cover_image),
        }));

        if (json.data.length > 0) {
          setAssetsfeatured(parsedData);

          setTotalAssetsFeatured(json.total);

          // console.log(parsedData);
        } else {
          setAssetsfeatured([]);
          setTotalAssetsFeatured(0);
        }
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        //console.log("FAILED WITH STATUS CODE " + response.status.toString());
      }
    } catch (e) {
      // console.log(e.message);
      console.log("SERVER DOWN");
    }
  };

  const getAAsset = async (props) => {
    const { slug } = props;

    // API Call
    console.log("THIS IS SLUG");
    console.log(slug);

    try {
      const response = await fetch(`${BASE_URL}/asset/resell/getx/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        const json = await response.json();
        const parsedData = json.data.map((item) => ({
          ...item,

          property_images: JSON.parse(item.property_images),
          floor_plan: JSON.parse(item.floor_plan),
          aminities: JSON.parse(item.aminities),
          landmarks: JSON.parse(item.landmarks),
          faqs: JSON.parse(item.faqs),
          brochure: JSON.parse(item.brochure),
        }));

        if (json.data.length > 0) {
          setAsset(parsedData[0]);
          // console.log(parsedData);
        }
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        //console.log("FAILED WITH STATUS CODE " + response.status.toString());
      }
    } catch (e) {
      // console.log(e.message);
      console.log("SERVER DOWN");
    }
  };

  const getAssetAmenities = async (props) => {
    const { ids } = props;
    const queryParams = {
      ids: ids,
    };

    try {
      const response = await fetch(
        `${BASE_URL}/filter/homznoffiz/amenity/get?${new URLSearchParams(
          queryParams
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const json = await response.json();
        // const parsedData = json.data.map((item) => ({
        //   ...item,
        // }));

        if (json.data.length > 0) {
          const parsedData = json.data.map((item) => ({
            ...item,
            //icon: JSON.parse(item.icon)
          }));

          // const groupByCategory = (amenities) => {
          //   return amenities.reduce(
          //     (acc, amenity) => {
          //       const { category } = amenity;
          //       if (!acc[category]) {
          //         acc[category] = [];
          //       }
          //       acc[category].push(amenity);
          //       if (!acc.list.includes(category)) {
          //         acc.list.push(category);
          //       }
          //       return acc;
          //     },
          //     { list: [] }
          //   );
          // };

          // const groupedAmenities = groupByCategory(json.data);

          // console.log(groupedAmenities);

          setAmenities(parsedData);
        }
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        //console.log("FAILED WITH STATUS CODE " + response.status.toString());
      }
    } catch (e) {
      // console.log(e.message);
      console.log("SERVER DOWN");
    }
  };

  const getAssetBuilderDetails = async (props) => {
    const { name } = props;

    try {
      const response = await fetch(
        `${BASE_URL}/filter/homznoffiz/builder/get/${name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const json = await response.json();
        const parsedData = json.data.map((item) => ({
          ...item,
          icon: JSON.parse(item.icon),
        }));

        if (json.data.length > 0) {
          setBuilderDetails(parsedData[0]);
        }
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        //console.log("FAILED WITH STATUS CODE " + response.status.toString());
      }
    } catch (e) {
      // console.log(e.message);
      console.log("SERVER DOWN");
    }
  };

  const registerLead = async (props) => {
    const { name, phone, email, message } = props;

    try {
      const response = await fetch(`${BASE_URL}/lead/resell/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          message: message,
          m_b_id: 0,
          status: 1,
          lead_type: 2,
          follow_up_message: '{"data": null}',
          property_location: '{"data": null}',
          property_locality: '{"data": null}',
          property_status: '{"data": null}',
          property_type: '{"data": null}',
          follow_up_datetime: "",
          is_public: false,
        }),
      });

      if (response.status === 200) {
        toast.success("Your Enquiry request has been sent successfully");
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        toast.error("Couldn't Add lead, Try again later");
      }
    } catch (e) {
      toast.error("Couldn't Add lead, Try again later");
    }
  };

  const registerRequirement = async (props) => {
    const { name, phone, message } = props;

    try {
      const response = await fetch(
        `${BASE_URL}/requirement/homznoffiz/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            uid: 0,
            name: name,
            phone: phone,
            message: message,
            status: 2,
            property_location: '{"data": null}',
            property_locality: '{"data": null}',
            property_status: '{"data": null}',
            property_type: '{"data": null}',
            starting_price: 1.1,
            maximum_price: 2.2,
          }),
        }
      );

      if (response.status === 200) {
        toast.success("Your Enquiry request has been sent successfully");
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        toast.error("Couldn't Add lead, Try again later");
      }
    } catch (e) {
      toast.error("Couldn't Add lead, Try again later");
    }
  };

  return (
    <AssetContext.Provider
      value={{
        assets,
        totalAssets,
        getSearchAssets,

        assetsfeatured,
        totalAssetsFeatured,
        getAssetsFeatured,

        getAAsset,
        asset,

        getAvailableFilters,
        availableFilters,

        amenities,
        getAssetAmenities,

        builderDetails,
        getAssetBuilderDetails,

        registerLead,
        registerRequirement,
      }}
    >
      {propsx.children}
    </AssetContext.Provider>
  );
};
export default AssetState;

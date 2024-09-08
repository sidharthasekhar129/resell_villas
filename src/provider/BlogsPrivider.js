import { BASE_URL } from "../constant";
import BlogsContext from "../context/BlogsContext/BlogsContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogsState = (propsx) => {
  const [blogs, setBlogs] = useState([]);
 
  const getBlogs = async (props) => {
    // API Call

    try {
      const response = await fetch(`${BASE_URL}/blog/homznoffiz/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        const json = await response.json();
        //  console.log(json.total);

        const parsedData = json.data.map((item) => ({
          ...item,
          image: JSON.parse(item.image), // Convert property_bhk string to JSON
        }));
        //   console.log(parsedData);
        setBlogs(parsedData);
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        // console.log("FAILED WITH STATUS CODE " + response.status.toString());
      }
    } catch (e) {
      // console.log(e.message);
      console.log("SERVER DOWN");
    }
  };

 

  return (
    <BlogsContext.Provider
      value={{
       
        blogs,
        getBlogs,
        
      }}
    >
      {propsx.children}
    </BlogsContext.Provider>
  );
};

export default BlogsState;

import { BASE_URL } from "../constant";
import AdminContext from "../context/AdminContext/AdminContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../provider/AuthProvider";

const AdminState = (propsx) => {
  const { setToken } = useAuth();

  const CreateUser = async (props) => {
    const { name, phone, email, password } = props;

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${BASE_URL}/users/resell/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
           },
          body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            password: password,
            image: "",
            is_manager: 0,
            age: 0,
            gender: "",
            address: "",
          }),
        });
        if (response.status === 200) {
          const json = await response.json();
          toast.success("Login successful");

          const jsonString = JSON.stringify(json);
          localStorage.setItem("me", jsonString);
          localStorage.setItem("token", json.token);

          setToken(json.token);
          resolve(true);
          // navigate("/", { replace: true });
        } else {
          toast.error("Couldn't create account try again later");
          reject("Signup Failed");

          //console.log("FAILED WITH STATUS CODE " + response.status.toString());
          //  //  props.showAlert("Unknown error occurred", "danger");
        }
      } catch (error) {
        toast.error("Couldn't create account try again later");

        reject(error);
      }
    });
  };

  const LoginUsers = async (props) => {
    const { email, password } = props;

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${BASE_URL}/users/resell/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        if (response.status === 200) {
          const json = await response.json();
          toast.success("Login successful");

          const jsonString = JSON.stringify(json);
          localStorage.setItem("me", jsonString);
          localStorage.setItem("token", json.token);

          setToken(json.token);
          resolve(true);
          // navigate("/", { replace: true });
        } else if (response.status === 403) {
          toast.error("Your access has been revoked, Contact your Admin");
          reject("Login Failed");
        } else {
          toast.error("Invalid Username or Password");
          reject("Login Failed");

          //console.log("FAILED WITH STATUS CODE " + response.status.toString());
          //  //  props.showAlert("Unknown error occurred", "danger");
        }
      } catch (error) {
        toast.error("Invalid Username or Password");

        reject(error);
      }
    });
  };

  const UpdateUser = async (props) => {
    const { id, name, phone, email, image, address } = props;
 
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${BASE_URL}/users/resell/update`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone, 
            image: image, 
            address:  address,
            id: id, 
           
          }),
        });

        if (response.status === 200) {
          toast.success("User updated successfully");
          getAUserByID({id:id});
          resolve(true);
        } else if (response.status === 403) {
          toast.error("Your access has been revoked, Contact your Admin");
          reject("Update Failed");
        } else {
          toast.error("Couldn't update user, Try again later");
          reject("Update Failed");
        }
      } catch (error) {
        console.error(error);
        toast.error("Couldn't update user, Try again later");
        reject(error);
      }
    });
  };
  const getAUserByID = async (props) => {
    const { id } = props;
 

    try {
      const response = await fetch(`${BASE_URL}/users/resell/get/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,

        },
      });

      if (response.status === 200) {
        const json = await response.json();
        const jsonString = JSON.stringify(json.data[0]);

        localStorage.setItem("me", jsonString);

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
  // Delete bulk admins
  const deleteAdmins = async (props) => {
    const { ids, page } = props;
    console.log(ids);
    // API Call
    try {
      const response = await fetch(`${BASE_URL}/admins/bulk/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ ids: ids }),
      });
      if (response.status === 200) {
        // const json = response.json();
        toast.success("Deleted successfully");
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        toast.error("Couldn't delete admin(s), Try again later");

        //console.log("FAILED WITH STATUS CODE " + response.status.toString());
        //  //  props.showAlert("Unknown error occurred", "danger");
      }
    } catch (e) {
      toast.error("Couldn't delete admin(s), Try again later");

      // console.log(e.message);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        LoginUsers,

        CreateUser,
        UpdateUser,

        deleteAdmins,
      }}
    >
      {propsx.children}
    </AdminContext.Provider>
  );
};
export default AdminState;

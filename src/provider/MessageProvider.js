import { BASE_URL } from "../constant";
import MessageContext from "../context/MessageContext/MessageContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MessageState = (propsx) => {
  const [chatUsers, setChatUsers] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

  const getChatUsers = async (props) => {
    const { page, id } = props;

    const limit = 10;
    const offset = page ? (page - 1) * limit : 0;

    const queryParams = {
      id: id,
      limit: limit,
      offset: offset,
    };

    // API Call

    try {
      const response = await fetch(
        `${BASE_URL}/chat/get_chat_users_user?${new URLSearchParams(
          queryParams
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        const json = await response.json();

        setChatUsers(json.data);
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

  const getChatMessages = async (props) => {
    return new Promise(async (resolve, reject) => {
      const { page, sender_id, receiver_id } = props;

      const limit = 300;
      const offset = page ? (page - 1) * limit : 0;

      const queryParams = {
        sender_id: sender_id,
        receiver_id: receiver_id,
        limit: limit,
        offset: offset,
      };

      // API Call

      console.log(
        `${BASE_URL}/chat/get_chat?sender_id=${sender_id}&receiver_id=${receiver_id}&limit=${limit}&offset=${offset}`
      );
      try {
        const response = await fetch(
          `${BASE_URL}/chat/get_chat?${new URLSearchParams(queryParams)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.status === 200) {
          const json = await response.json();
          // console.log(json.total);

          //setChatMessages(json.data);
          resolve(json.data);
        } else if (response.status === 403) {
          toast.error("Your access has been revoked, Contact your Admin");
          reject("Update Failed");
        } else {
          reject("Couldn't Fetched");

          //console.log("FAILED WITH STATUS CODE " + response.status.toString());
        }
      } catch (error) {
        reject(error);

        // console.log(e.message);
      }
    });
  };

  const CreateChatMessages = async (props) => {
    const {
      sender_id,
      receiver_id,
      message,
      message_type,
      is_seen,
      is_forwarded,
      tagged_message_id,
      reaction,
    } = props;
    // API Call

    try {
      const response = await fetch(`${BASE_URL}/chat/create_chat_msg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          sender_id: sender_id,
          receiver_id: receiver_id,
          message: message,
          message_type: message_type,
          is_seen: is_seen,
          is_forwarded: is_forwarded,
          tagged_message_id: tagged_message_id,
          reaction: reaction,
        }),
      });
      if (response.status === 200) {
        const json = await response.json();
        setChatMessages(chatMessages.concat(json.data));
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        toast.error("Error, Try again later");

        //console.log("FAILED WITH STATUS CODE " + response.status.toString());
        //  //  props.showAlert("Unknown error occurred", "danger");
      }
    } catch (e) {
      toast.error("Error, Try again later");

      // console.log(e.message);
    }
  };

  const CreateChatUser = async (props) => {
    const { user_id, admin_id, last_msg, is_blocked } = props;
    // API Call

    try {
      const response = await fetch(`${BASE_URL}/chat/create_chat_admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          user_id: user_id,
          admin_id: admin_id,
          last_msg: last_msg,
          is_blocked: is_blocked,
        }),
      });
      if (response.status === 200) {
        const json = await response.json();
        if (json.is_exist) {
          toast.error("User already exist in your chat");
        } else {
          toast.success("Chat user created");
        }
      } else if (response.status === 403) {
        toast.error("Your access has been revoked, Contact your Admin");
      } else {
        toast.error("Couldn't create chat user, Try again later");

        //console.log("FAILED WITH STATUS CODE " + response.status.toString());
        //  //  props.showAlert("Unknown error occurred", "danger");
      }
    } catch (e) {
      toast.error("Couldn't create chat user, Try again later");

      // console.log(e.message);
    }
  };

  return (
    <MessageContext.Provider
      value={{
        chatUsers,
        chatMessages,
        getChatUsers,
        getChatMessages,
        CreateChatMessages,
        CreateChatUser,
      }}
    >
      {propsx.children}
    </MessageContext.Provider>
  );
};
export default MessageState;

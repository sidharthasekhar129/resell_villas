import React, { useContext, useEffect, useRef, useState } from "react";

import messageContext from "../../context/MessageContext/MessageContext";
import { CiSearch } from "react-icons/ci";
import { IMAGE_PATH } from "../../constant";
import ErrorImage from "../../../src/assets/images/error.png"; // Path to your image file
import { IoMdArrowRoundBack } from "react-icons/io";

import { WEBSOCKET_URL } from "../../constant";

import UserImage from "../../../src/assets/images/user.png"; // Path to your image file
import TimeAgo from "../TimeAgo";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { MdOpenInNew } from "react-icons/md";

import io from "socket.io-client";
import ImageWithFallback from "../ImageWithFallback";

const AllMessages = () => {
  const socket = io(WEBSOCKET_URL);
  socket.on("connect", () => {
    console.log("Connected to WebSocket server");
  });

  const context = useContext(messageContext);

  const [me, setMe] = useState(JSON.parse(localStorage.getItem("me")));

  const { chatUsers, getChatUsers, getChatMessages } = context;

  const [query, setQuery] = useState("");
  const [typing_message, setTypingMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const [page, setPage] = useState(1);
  const [isAvailableData, setIsAvailableData] = useState(true);

  // useEffect(() => {
  //   const scrollContainer = document.getElementById("scroll-container");
  //   if (scrollContainer) {
  //     scrollContainer.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (scrollContainer) {
  //       scrollContainer.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const scrollContainer = document.getElementById("scroll-container");
  //   if (!scrollContainer) return;

  //   const scrollTop = scrollContainer.scrollTop;
  //   const scrollHeight = scrollContainer.scrollHeight;
  //   const clientHeight = scrollContainer.clientHeight;
  //   const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

  //   if (scrollPercentage === 0 && !loading && isAvailableData) {
  //     setLoading(true);
  //     console.log("making network call");

  //     console.log(selectedUser);
  //     getChatMessages({
  //       sender_id: selectedUser.user_id,
  //       receiver_id: selectedUser.admin_id,
  //       page: page,
  //     })
  //       .then((data) => {
  //         console.log("Found " + data.length);
  //         if (data.length > 0) {
  //           setChat((prevChats) => [...data, ...prevChats]);
  //         }
  //         if (data.length === 20) {
  //           setPage((prevPageNumber) => prevPageNumber + 1);
  //         }

  //         setLoading(false);
  //         setIsAvailableData(data.length === 20 ? true : false);
  //         //  scrollToMessage();
  //       })
  //       .catch((error) => {
  //         // Handle any errors that occurred during the promise execution
  //         setIsAvailableData(false);

  //         setLoading(false);
  //         // console.error('Error:', error);
  //       });
  //   }
  // };

  const [isShow, setIsShow] = useState(true);

  function scrollToMessage(chatId) {
    const chatElement = document.getElementById(chatId);
    if (chatElement) {
      const scrollContainer = document.getElementById("scroll-container");
      if (scrollContainer) {
        scrollContainer.scrollTop =
          chatElement.offsetTop - scrollContainer.offsetTop;
      }
    }
  }
  // function scrollToMessage(messageId) {
  //   const messageElement = document.getElementById(messageId);
  //   if (messageElement) {
  //     messageElement.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setTypingMessage(event.target.value);
  };

  const [chats, setChat] = useState([]);
  const chatListRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    const date = new Date()
      .toLocaleString()
      .split(", ")
      .map((part, index) =>
        index === 0
          ? part.split("/").reverse().join("-")
          : part
              .split(":")
              .map((p, i) => (i === 2 ? p.padStart(2, "0") : p))
              .join(":")
      )
      .join(" ");
    if (typing_message.trim().length > 0) {
      const messagex = {
        id: selectedUser.id,

        receiver_id: selectedUser.admin_id,
        sender_id: selectedUser.user_id,
        message: typing_message,
        message_type: 1,
        is_seen: 0,
        is_forwarded: 0,
        tagged_message_id: 0,
        reaction: "",
        created_at: date,
        updated_at: date,
      };
      socket.emit("admin", messagex);
      setTypingMessage("");
    }

    // event.target.reset();
  };

  const handleSelectedUser = async (user) => {
    setSelectedUser(user);
    setIsShow(false);

    getChatMessages({
      sender_id: user.user_id,
      receiver_id: user.admin_id,
      page: 1,
    })
      .then((data) => {
        data.length > 0 ? setChat(data.slice().reverse()) : setChat([]);
        setPage(data.length === 20 ? 2 : 1);
        setIsAvailableData(data.length === 20 ? true : false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the promise execution
        setChat([]);
        // console.error('Error:', error);
      });
  };

  useEffect(() => {
    // Get the scrollable container
    const container = chatListRef.current?.parentNode;
  
    if (container) {
      const scrollHeight = container.scrollHeight; // Total scrollable height
      const scrollPosition = scrollHeight * 0.99; // 70% of the height
  
      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [chats]);

  // useEffect(() => {
  //   // Scroll to the bottom of the chat list when chatcs change
  //   chatListRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chats]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getChatUsers({ page: 1, id: me.id });
      if (chatUsers.length > 0) {
        //  setSelectedUser(chatUsers[0]);
      }
    } else {
    }
  }, []);

  useEffect(() => {
    // Connect to the server

    socket.on(me.id.toString() + "x", (message) => {
      // console.log("Message received in admin channel:", message);
      // Handle the received message here

      setChat((prevChats) => [...prevChats, message]);
    });

    return () => {
      socket.disconnect();
      // Disconnect from the server when the component unmounts
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", fontFamily: "Poppins, sans-serif" }}>
        {isShow ? (
          <div className="h-[100vh] ">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                height: 40,
                marginLeft: "10px",
                marginRight: "20px",
                // backgroundColor:"black"
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: 500 }}>
                All Users
              </label>
            </div>

            <form
              className="form_search"
              onSubmit={handleSubmit}
              style={{
                marginLeft: 10,
                marginRight: 30,
              }}
            >
              <input
                className="serach_asset"
                variant="outlined"
                placeholder="Search users..."
                value={query}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  borderRadius: 5,
                }}
                InputProps={{
                  startAdornment: (
                    <IconButton type="submit" edge="start">
                      <CiSearch />
                    </IconButton>
                  ),
                  style: {
                    width: "100%",
                    border: "none", // Remove any default border
                    outline: "none", // Remove any default outline
                    boxShadow: "none",

                    height: "32px",
                  },
                }}
              />
            </form>
            <div
              style={{
                // height: "86vh",
                //maxWidth: "25vw",
                minWidth: "20vw",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                marginBottom: 10,
                marginTop: 20,
                //backgroundColor:"black"
              }}
            >
              {chatUsers.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectedUser(item)}
                  style={{
                    color: "#000",
                    fontWeight: 530,
                    textAlign: "left",
                    fontFamily: "Montserrat",
                    fontSize: 14,
                    maxLines: 1,
                    // minWidth:"",
                    // backgroundColor: "black",
                    // borderRadius: 10 /* Adjust border radius as needed */,
                    //border: ".5px solid rgb(194, 190, 190)",
                    padding: 5,
                    marginTop: 5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",

                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: 5,
                        marginRight: 5,
                        height: "6vh",
                        width: "6vh",

                        // // paddingTop: 10,
                      }}
                    >
                      <ImageWithFallback
                        style={{
                          height: "6vh",
                          width: "6vh",
                          borderRadius:
                            "3vh" /* Adjust border radius as needed */,
                          border: ".5px solid rgb(194, 190, 190)",
                        }}
                        src={
                          item.image !== ""
                            ? IMAGE_PATH + item.image
                            : UserImage
                        }
                        alt="error"
                        fallbackSrc={UserImage}

                        // onError={handleErrorImage}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          marginLeft: 10,
                          maxLines: 1,
                          fontWeight: "600",
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          // backgroundColor: "black",
                          overflow: "hidden",
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          paddingRight: 10,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            marginLeft: 10,
                            maxLines: 1,

                            display: "inline-block",
                            whiteSpace: "nowrap",
                            // backgroundColor: "black",
                            overflow: "hidden",
                          }}
                        >
                          {item.last_msg === "" ? "Say Hii" : item.last_msg}
                        </div>
                        <TimeAgo timestamp={item.updated_at} />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: ".5px",
                      backgroundColor: "lightgrey",
                      marginTop: 5,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {!isShow ? (
          <div>
            <div
              style={
                {
                  // minWidth: "50vw",
                  // maxWidth: "50vw",
                }
              }
            >
              <div
                style={{
                  display: "flex",
                  margin: 10,
                  paddingBottom: 5,
                  borderBottom: "2px solid #9379B8",

                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <IconButton onClick={() => setIsShow(true)}>
                  <IoMdArrowRoundBack
                    style={{
                      margin: "0px 10px",
                    }}
                    size="24px"
                  />
                </IconButton>

                <div
                  style={{
                    height: "6vh",
                    width: "6vh",

                    // paddingTop: 10,
                  }}
                >
                  <img
                    style={{
                      height: "6vh",
                      width: "6vh",
                      borderRadius: "3vh" /* Adjust border radius as needed */,
                      border: ".5px solid rgb(194, 190, 190)",
                    }}
                    src={
                      selectedUser !== null && selectedUser.image !== ""
                        ? IMAGE_PATH + selectedUser.image
                        : UserImage
                    }
                    alt="error"

                    // onError={handleErrorImage}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      marginLeft: 10,
                      maxLines: 1,
                      fontFamily: "sans-serif",
                      fontWeight: "600",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      //backgroundColor: "black",
                      overflow: "hidden",
                    }}
                  >
                    {selectedUser !== null ? selectedUser.name : ""}
                  </div>
                  <div
                    style={{
                      marginLeft: 10,
                      maxLines: 1,
                      fontFamily: "sans-serif",

                      display: "inline-block",
                      whiteSpace: "nowrap",
                      // backgroundColor: "black",
                      overflow: "hidden",
                    }}
                  >
                    {selectedUser !== null ? (
                      <TimeAgo timestamp={selectedUser.updated_at} />
                    ) : null}
                  </div>
                </div>
              </div>

              <div
                id="scroll-container"
                style={{
                  maxHeight: "64vh",
                  minHeight: "64vh",
                  display: "flex",

                  flexDirection: "column",
                  backgroundColor: "#f5f4f9",
                  //  color: "black",

                  overflowY: "auto",
                  padding: 10,
                }}
              >
                {chats.map((chat, index) => (
                  <div
                    id={chat.id}
                    key={index}
                    style={{
                      // display: "grid",
                      padding: 7,
                      marginBottom: 10,
                      borderRadius: 10,
                      // flexDirection: "column",
                      textAlign: chat.sender_id === me.id ? "right" : "left",
                      maxWidth: "100%",
                      // Align messages to start by default
                      margin: "5px",
                      fontFamily: "Montserrat",
                      fontSize: 12,
                      marginLeft: chat.sender_id === me.id ? "30vw" : "0vw",
                      marginRight: chat.sender_id === me.id ? "0vw" : "30vw",
                      alignSelf:
                        chat.sender_id === me.id ? "flex-end" : "flex-start",
                      backgroundColor:
                        chat.message.length === 0
                          ? "red"
                          : chat.sender_id === me.id
                          ? "black"
                          : "#eae5f5",
                    }}
                  >
                    {chat.message_type === 1 ? (
                      <div
                        style={{
                          fontSize: 16,
                          wordBreak: "break-all",
                          color: chat.sender_id === me.id ? "white" : "#26272b",
                          fontFamily: "sans-serif", 
                          textAlign: "left", 
                          //  backgroundColor: "black",
                          // maxWidth:"30vw",
                        }}
                      >
                        {chat.message.length > 0
                          ? chat.message
                          : "This message was deleted"}
                        {chat.tagged_message_id !== 0 ? (
                          <IconButton
                            aria-label="send"
                            onClick={() =>
                              scrollToMessage(chat.tagged_message_id)
                            }
                          >
                            <MdOpenInNew />
                          </IconButton>
                        ) : null}
                      </div>
                    ) : chat.message_type === 2 ? (
                      <div
                        style={{
                          // backgroundColor:"black",
                          height: chat.message === "" ? "3vh" : "44vh",
                          width: "40vh",
                        }}
                      >
                        {chat.message === "" ? (
                          <h6>This image was deleted</h6>
                        ) : (
                          <img
                            style={{
                              // backgroundColor:"black",
                              height: "40vh",
                              width: "40vh",
                              marginBottom: 10,
                            }}
                            src={
                              chat.message === ""
                                ? ErrorImage
                                : IMAGE_PATH + chat.message
                            }
                            alt="Error"

                            // onError={handleErrorImage}
                          />
                        )}

                        {chat.message === "" ? null : (
                          <a href={IMAGE_PATH + chat.message} target="_blank">
                            {IMAGE_PATH + chat.message}
                          </a>
                        )}
                      </div>
                    ) : chat.message_type === 3 ? (
                      <div
                        style={{
                          maxWidth: "30vw",
                          fontSize: 16,
                          wordBreak: "break-all",
                          color: chat.sender_id === me.id ? "white" : "#26272b",
                          fontFamily: "sans-serif",

                          textAlign: "left",
                          //  backgroundColor: "black",
                          // maxWidth:"30vw",
                        }}
                      >
                        {chat.message === "" ? (
                          <h6>This image was deleted</h6>
                        ) : (
                          <a href={IMAGE_PATH + chat.message} target="_blank">
                            {IMAGE_PATH + chat.message}
                          </a>
                        )}
                      </div>
                    ) : null}

                    <div
                      style={{
                        maxWidth: "30vw",
                        marginTop: 10,
                        fontSize: 12,
                        wordBreak: "break-all",
                        color: chat.sender_id === me.id ? "white" : "#26272b",
                      }}
                    >
                      <TimeAgo timestamp={chat.updated_at} />
                    </div>
                  </div>
                ))}
                <div ref={chatListRef}></div> 
                {/* Ref to the bottom of the list */}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  marginLeft: 10,
                  width: "100%",
                  //maxWidth: "45vw",
                }}
              >
                <IconButton aria-label="add media" edge="start">
                  <AddIcon />
                </IconButton>
                <form
                  onSubmit={handleSendMessage}
                  style={{ display: "flex", flex: 1 }}
                >
                  <div style={{ flex: 1 }}>
                    <TextField
                      name="message"
                      placeholder="Type your message"
                      value={typing_message}
                      onChange={handleInputChange2}
                      variant="outlined"
                      fullWidth
                    />
                  </div>

                  <div
                    style={{
                      marginLeft: 5,
                      borderRadius: 5,
                      width: 60,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#9379b8",
                      color: "white",
                    }}
                  >
                    <IconButton aria-label="send" onClick={handleSendMessage}>
                      <SendIcon style={{ color: "white" }} />
                    </IconButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default AllMessages;

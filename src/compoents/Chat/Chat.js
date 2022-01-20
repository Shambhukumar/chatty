import React, { useContext, useState } from "react";
import ChatContext from "../../Context/ChatContext";
import ThreeDots from "../../Assets/Svg/ThreeDots.svg";
import Cross from "../../Assets/Svg/Cross.svg";
import Fileupload from "../../Assets/Svg/Fileupload.svg";
import Send from "../../Assets/Svg/Send.svg";
import "./chat.scss";
const messages = [
  {
    name: "Esther Howard",
    messages: `"Hii Prakash !
  Feels like it’s been a while! How are you? Do you
  have any time for the remainder of the week to
  help me with an ongoing  project?`,
    time: "8:00 AM",
  },
  {
    name: "Prakash",
    messages: `Hii Easther, glad to hear from you, I’m fine, What
    about you? and how it’s going with the velocity 
    website? off cours, I’ll help with this project`,
    time: "8:01 AM",
  },
  {
    name: "Esther Howard",
    messages: `Super, I’ll get you the new brief for our own site
    over to you this evening, so you have time to 
    read over I’m good thank you!`,
    time: "8:03 AM",
  },
  {
    name: "Prakash",
    messages: `Of course I can, just catching up with steve on it
    and I’ll write out. Speak tomorrow! Let me know 
    if you have any questions!`,
    time: "8:05 AM",
  },
];
const Chat = () => {
  const { selectedChat } = useContext(ChatContext);
  const [messageData, setmessageData] = useState(messages);

  
  return (
    <div className="chat">
      <div className="chat-head">
        <div className="chat-head-personinfo">
          <img src={selectedChat.image} alt={selectedChat.name + "image"} />{" "}
          <span className="chat-head-personinfo-name">{selectedChat.name}</span>
        </div>
        <div className="chat-head-icons">
          <img
            src={ThreeDots}
            alt="three dots svg"
            className="chat-head-icons-dots"
          />
          <img src={Cross} alt="cross svg" />
        </div>
      </div>
      <div className="chat-body">
        <ul className="chat-body-conversation">
          {messageData.map((e, el) => {
            return (
              <li
                className={
                  e.name === selectedChat.name
                    ? "chat-body-conversation-selected"
                    : "chat-body-conversation-me"
                }
              >
                <img src={selectedChat.image} alt="person img" />
                <div className={
                  e.name === selectedChat.name
                    ? "chat-body-conversation-selected-text"
                    : "chat-body-conversation-me-text"
                }>
                  <span className={
                  e.name === selectedChat.name
                    ? "chat-body-conversation-selected-text-msg"
                    : "chat-body-conversation-me-text-msg"
                }>
                    {e.messages}
                  </span>
                  <span className={
                  e.name === selectedChat.name
                    ? "chat-body-conversation-selected-text-time"
                    : "chat-body-conversation-me-text-time"
                }>
                    {e.time}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="chat-body-messageSend">
          <div className="chat-body-messageSend-chatbox">
            <input type="text" placeholder="Write a message" />{" "}
            <img src={Fileupload} alt="uploadfile" />
          </div>
          <span className="chat-body-messageSend-send">
            <img src={Send} alt="send Message" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;

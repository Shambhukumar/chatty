import React, { useContext } from "react";
import ChatContext from "../../Context/ChatContext";
import ThreeDots from "../../Assets/Svg/ThreeDots.svg";
import Cross from "../../Assets/Svg/Cross.svg";
import Fileupload from "../../Assets/Svg/Fileupload.svg";
import Send from "../../Assets/Svg/Send.svg";
import "./chat.scss";
const Chat = () => {
  const { selectedChat } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chat-head">
        <div className="chat-head-personinfo">
          <img src={selectedChat.image} alt={selectedChat.name + "image"} />{" "}
          <span className="chat-head-personinfo-name">{selectedChat.name}</span>
        </div>
        <div className="chat-head-icons">
          <img src={ThreeDots} alt="three dots svg" className="chat-head-icons-dots"/>
          <img  src={Cross} alt="cross svg"/>
        </div>
      </div>
      <div className="chat-body">
      <div>
        Chat Message
      </div>
      <div className="chat-body-message">
        <div className="chat-body-message-chatbox">
          <input type="text" placeholder="Write a message"/> <img src={Fileupload} alt="uploadfile"/>
          
        </div>
        <span className="chat-body-message-send"><img src={Send} alt="send Message"/></span>
        </div>
      </div>
    </div>
  );
};

export default Chat;

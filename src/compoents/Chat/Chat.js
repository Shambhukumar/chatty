import React, { useContext, useState } from "react";
import ChatContext from "../../Context/ChatContext";
import ThreeDots from "../../Assets/Svg/ThreeDots.svg";
import Cross from "../../Assets/Svg/Cross.svg";
import Fileupload from "../../Assets/Svg/Fileupload.svg";
import Send from "../../Assets/Svg/Send.svg";
import "./chat.scss";

const Chat = () => {
  const { selectedChat, User, messages } = useContext(ChatContext);
  const [messageData, setmessageData] = useState(messages);
  const [currentMessage, setCurrentMessage] = useState();



  const SendMessage = () =>{
    if(currentMessage.length){
      setmessageData((preMessages)=>{
        return [...preMessages, {name: User.name, messages: currentMessage, time: "9:00 PM"}]
      })
      setCurrentMessage("")
    }
   
  }

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
                  e.name === User.name
                    ? "chat-body-conversation-me"
                    : "chat-body-conversation-selected"
                }
              >
                <img
                  src={e.name === User.name ? selectedChat.image : User.image}
                  alt="person img"
                />
                <div
                  className={
                    e.name === User.name
                      ? "chat-body-conversation-me-text"
                      : "chat-body-conversation-selected-text"
                  }
                >
                  <span
                    className={
                      e.name === User.name
                        ? "chat-body-conversation-me-text-msg"
                        : "chat-body-conversation-selected-text-msg"
                    }
                  >
                    {e.messages}
                  </span>
                  <span
                    className={
                      e.name === User.name
                        ? "chat-body-conversation-me-text-time"
                        : "chat-body-conversation-selected-text-time"
                    }
                  >
                    {e.time}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="chat-body-messageSend">
          <div className="chat-body-messageSend-chatbox">
            <input
              type="text"
              value={currentMessage}
              placeholder="Write a message"
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <img src={Fileupload} alt="uploadfile" />
          </div>
          <span className="chat-body-messageSend-send" onClick={()=> SendMessage()}>
            <img src={Send} alt="send Message" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;

import React from "react";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import "./chatContainer.scss";

const ChatContainer = () => {
  return (
    <div className="container">
      <ChatList />
      <Chat />
    </div>
  );
};

export default ChatContainer;

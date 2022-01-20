import React from "react";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import { useMediaQuery } from "react-responsive";
import "./chatContainer.scss";

const ChatContainer = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="container">
     { !isTabletOrMobile ? 
     <>
     <ChatList />
      <Chat />
      </> : <Chat/>}
    </div>
  );
};

export default ChatContainer;

import React, { useContext } from "react";
import "./chatList.scss";
import Search from "../../Assets/Svg/Search.svg";
import ChatContext from "../../Context/ChatContext";
const ChatList = () => {
  const { ChatListData } = useContext(ChatContext);
  return (
    <div className="chatList">
      {console.log(ChatListData)}
      <div className="chatList-search">
        <img src={Search} alt="Search icon" />
        <input type="text" placeholder="Search" />
      </div>

      <ul className="chatList-contacts">
        {ChatListData.map((e, el) => {
          return (
            <li className="chatList-contacts-item" key={el}>
              <div className="chatList-contacts-item-person">
                <img src={e.image} alt={e.name + "image"} />
                <span
                  className={
                    e.isOnline
                      ? "chatList-contacts-item-person-Online"
                      : "chatList-contacts-item-person-Ofline"
                  }
                ></span>
                <div className="chatList-contacts-item-person-text">
                  <span className="chatList-contacts-item-person-text-name">
                    {e.name}
                  </span>
                  <span className={e.unseenMessage === 0 ? "chatList-contacts-item-person-text-message": "chatList-contacts-item-person-text-message-seen"}>
                    {e.LastMessage}
                  </span>
                </div>
              </div>
              <div className="chatList-contacts-item-lastinfo">
                <span className="chatList-contacts-item-lastinfo-lastseen">
                  {!e.isOnline && e.lastSeen}
                </span>
                <span
                  className={
                    e.unseenMessage > 0
                      ? "chatList-contacts-item-lastinfo-unread"
                      : "chatList-contacts-item-lastinfo-unread chatList-contacts-item-lastinfo-unread-empty"
                  }
                >
                  {e.unseenMessage > 0 && e.unseenMessage}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatList;

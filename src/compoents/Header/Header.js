import React from "react";
import "./header.scss";

import Notification from "../../Assets/Svg/Notification.svg";
import Filter from "../../Assets/Svg/Filter.svg";
import HeaderPerson from "../../Assets/Image-Placeholder/headerPerson.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span className="header-left-Text">Chat</span>
        <div className="header-left-Filter">
          <img src={Filter} alt="Filter Svg" /> <span>Sort</span>
        </div>
        </div>

        <div className="header-account">
          
            <img src={Notification} alt="Notification Svg" />
          
          <div className="header-account-info">
            <img src={HeaderPerson} alt="profile pic"/><span className="header-account-info-name">Prakash</span> 
            <span className="header-account-info-arrow"></span>
          </div>
        </div>
     
    </div>
  );
};

export default Header;

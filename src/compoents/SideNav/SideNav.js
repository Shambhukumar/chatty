import React from "react";
import "./sideNav.scss";

import Dashboard from "../../Assets/Svg/Dashboard.svg";
import Chat from "../../Assets/Svg/Chat.svg";
import Home from "../../Assets/Svg/Home.svg";
import Settings from "../../Assets/Svg/Settings.svg";
import Logout from "../../Assets/Svg/Logout.svg";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="sideNav-list-Dashboard">
        <img src={Dashboard} alt="Dashboard avg" />
      </div>

      <ul className="sideNav-list">
        <li className="sideNav-list-Home">
          <img src={Home} alt="Home avg" />
        </li>
        <li className="sideNav-list-Chat sideNav-list-active">
          <img src={Chat} alt="Chat avg" />
        </li>

        <li className="sideNav-list-Settings">
          <img src={Settings} alt="Settings avg" />
        </li>
      </ul>

      <div className="sideNav-list-Logout">
        <img src={Logout} alt="logout" />
      </div>
    </div>
  );
};

export default SideNav;

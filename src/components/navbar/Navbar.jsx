import React from "react";
import "./navbar.css";
import Menu_icon from "./../../assets/menu.png";
import Logo from "./../../assets/logo.png";
import Search_icon from "./../../assets/search.png";
import Profile_icon from "./../../assets/jack.png";
import Upload_icon from "./../../assets/upload.png";
import More_icon from "./../../assets/more.png";
import Notification_icon from "./../../assets/notification.png";
import { Link } from "react-router";

const Navbar = ({ setSidebar }) => {
  const handleClickMenu = () => {
    setSidebar((prev) => (prev === false ? true : false));
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={Menu_icon} alt="menu-icon" className="menu-icon" onClick={handleClickMenu} />
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="logo" />{" "}
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" className="search-bar" placeholder="Search" id="search-bar" />
          <img src={Search_icon} alt="search-icon" className="search-icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={Upload_icon} alt="upload-icon" className="upload-icon" />
        <img src={More_icon} alt="more-icon" className="more-icon" />
        <img src={Notification_icon} alt="notification-icon" className="notification-icon" />
        <img src={Profile_icon} alt="profile-icon" className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;

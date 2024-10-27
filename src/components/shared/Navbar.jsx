import React from "react";
import "./Navbar.css";
import logo from "../../assets/download.png";
import user from "../../assets/images.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Menu icon for mobile view */}
      <div className="menu-icon">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="navbar-left">
        <img src={logo} alt="DriveLah Logo" className="logo" />
        <h3>Drive lah</h3>
      </div>
      <div className="navbar-right">
        <a href="#">Learn more</a>
        <a href="#">List your car</a>
        <a href="#">Inbox</a>
        <img src={user} alt="User Profile" className="profile" />
        {/* <i className="fa-regular fa-user profile-icon"></i>  */}
      </div>
    </div>
  );
};

export default Navbar;

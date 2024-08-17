import React from "react";
import "./Header.css";
import scorex from "../../assets/scorex.svg";

function Header() {
  return (
  
    <div className="header">
      <div className="header-1">
        <img src={scorex} alt="" />
        <h1>Scorex</h1>
      </div>
      <div className="header-2">
        <p>Home</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>About Us</p>
        <p>FAQ</p>
        <p>Contact Us</p>
        <select className="select">
          <option value=""> Рус</option>
          <option value="">Eng</option>
          <option value="">Кыр</option>
        </select>
        <button className="button-1">Login</button>
        <button className="button-2">Register</button>
      </div>
    </div>
  );
}

export default Header;

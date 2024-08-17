import React from "react";
import "./Footer.css";
import scorex from "../../assets/scorex.svg";
import inn from "../../assets/in.svg";
import face from "../../assets/f.svg";
import insta from "../../assets/ins.svg";
import twitter from "../../assets/twit.svg";
import youtube from "../../assets/youTube.svg";
import telegram from "../../assets/telegram.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="scor">
        <img src={scorex} alt="" />
        <h1>Scorex</h1>
        <select className="select">
          <option value=""> Рус</option>
          <option value="">Eng</option>
          <option value="">Кыр</option>
        </select>
      </div>
      <div className="footer-2">
        <p>Home</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>About Us</p>
        <p>FAQ</p>
        <p>Contact Us</p>
      </div>
      <div className="pree">
        <img src={inn} alt="" />
        <img src={face} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
        <img src={telegram} alt="" />
        <img src={insta} alt="" />
      </div>
    </div>
  );
}

export default Footer;

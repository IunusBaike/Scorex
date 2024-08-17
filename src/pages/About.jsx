import React from "react";
import girl from "../assets/girl.svg";
import crystal from "../../src/assets/crystal.png";

function About() {
  return (
    <div>
      <h1>what our clients say</h1>
      <p>
        The complete suite of enterprise management applications for Ad -
        serving, Push messaging and Hood Analyticsintegrated with the largest
        advertising networks in the industry.
      </p>
      <h3>
        We've been in the ad tech industry for over 7 years and we never had
        such a comprehensive platform like Scorex
      </h3>
      <img src={girl} alt="" />

      <div className="mein">
        <div>
          <h1>Nextgen employee scoring </h1>
          <p>
            Get insides on work quality and personal performance. Follow team
            metrics and check employee value based on related feedback.{" "}
          </p>
          <h5>Get Early Access</h5>
        </div>
        <div>
          <img src={crystal} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;

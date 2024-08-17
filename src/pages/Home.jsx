import React from "react";
import grup from "../assets/grup.png"

function Home() {
  return (
    <div className="text">
      <div>
        <h1>Nextgen employee scoring </h1>
        <p>
          Get insides on work quality and personal performance. Follow team
          metrics and check employee value based on related feedback.{" "}
        </p>
        <button>Get Early Access</button>
      </div>
      <div>
        <img src={grup} alt="" />
      </div>
    </div>
  );
}

export default Home;

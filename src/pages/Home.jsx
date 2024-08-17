import React from "react";
import grup from "../assets/grup.png"
import group from "../assets/group.png"
import group2 from "../assets/group2.png"

function Home() {
  return (
    <>
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
      <div className='home'>

        <div className='ultimate'>
          <h1>Scorex, the ultimate solution for modern workforce management</h1>
          <p>Shape the system according to your needs and watch
            as it seamlessly adapts to your organization's dynamics.</p>
        </div>

        <div className='jira'>
          <img src={grup} alt="" />
          <h2>JIRA Task Flow Integration</h2>
          <p>Integrate our service with JIRA and Gitlab to effortlessly track task statuses, trace changes, and import projects. Simply add your API key, and witness a harmonious collaboration between our platform and your existing workflow tools.</p>
        </div>
        </div>
    </>
  );
}

export default Home;

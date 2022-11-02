import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div id="aboutme" className="about-me" style={{ height: 500 }}>
        <div className="about-me-content">
          <div className="about-me-main-content">
            <h1>Hey, I'm Pallavi Goyal</h1>
            <h3>
              I am a software developer with an experience of 1.5 years and
              passionate about learning new technolgies.
            </h3>
            <div className="about-me-buttons">
              <a
                className="default-button"
                href="mailto:pallavigoyal2099@gmail.com"
              >
                Contact me
              </a>
              <Button type="primary" className="primary-button">
                Resume <DownloadOutlined />
              </Button>
            </div>
          </div>
          <div className="about-me-image">
            <img src={process.env.PUBLIC_URL + "/girl.png"} />
          </div>
        </div>
      </div>
      <div id="skills" className="skills" style={{ height: 500 }}>
        <h3>Skills</h3>
      </div>
      <div id="projects" className="projects" style={{ height: 500 }}>
        <h3>Projects</h3>
      </div>
      <div id="contact" className="Contact" style={{ height: 500 }}>
        <h3>Contacts</h3>
      </div>
    </div>
  );
};
export default Dashboard;

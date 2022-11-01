import React from "react";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div id="aboutme" className="about-me" style={{ height: 500 }}>
        <h3>About me</h3>
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

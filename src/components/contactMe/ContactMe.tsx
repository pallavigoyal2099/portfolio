import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./contactMe.css";

const ContactMe = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div id="contact-container">
      <form id="contact-form" action="action_page.php">
        <div id="name-container">
          <input
            id="first-name-input"
            type="text"
            name="first-name"
            placeholder="First name"
          ></input>
          <input
            id="last-name-input"
            type="text"
            name="last-name"
            placeholder="Last name"
          ></input>
        </div>

        <input
          id="mail-input"
          type="mail"
          name="mail"
          placeholder="Email"
        ></input>

        <textarea
          id="subject-input"
          name="subject"
          placeholder="Type your message here"
        ></textarea>

        <Button type="primary" className="submit-button">
          Submit
        </Button>
      </form>
      <div id="traditional-contact">
        <h2>Contact me through:</h2>
        <a href="mailto:pallavigoyal2099@gmail.com" id="contact-link">
          pallavigoyal2099@gmail.com
        </a>
        <hr />
        <h2>Find me on</h2>
        <GithubOutlined
          onClick={() => openInNewTab("https://github.com/pallavigoyal2099")}
        />
        <LinkedinOutlined
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/pallavi-goyal-a5523312a/")
          }
        />
      </div>
    </div>
  );
};

export default ContactMe;

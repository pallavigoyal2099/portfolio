import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { AlignLeftOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <div className="brand-name">
        <img src={process.env.PUBLIC_URL + "/portfolio-logo.png"} />
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <AlignLeftOutlined />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="navlinks">
          <li>
            <Link
              activeClass="active"
              offset={-90}
              to="aboutme"
              spy={true}
              smooth={true}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              offset={-90}
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" offset={-90} spy={true} smooth={true}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" offset={-90} spy={true} smooth={true}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

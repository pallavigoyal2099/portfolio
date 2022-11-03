import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
import React from "react";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div id="aboutme" className="about-me">
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
      <div id="projects" className="projects">
        <h3 className="heading">Recent Projects</h3>
        <section className="cards">
          <article className="card card--1">
            <div className="card__img">
              <img src={process.env.PUBLIC_URL + "/ecom.jpg"} alt="" />
            </div>

            <div className="card__img--hover">
              <img src={process.env.PUBLIC_URL + "/ecom.jpg"} alt="" />
            </div>
            <div className="card__info">
              <span className="card__category">Angular</span>
              <h3 className="card__title">GameKart</h3>
              <h4 className="card__subtitle">
                A platform to buy gaming consoles and it's accessories
              </h4>

              <span className="card__by">
                <Button type="text" className="text-button">
                  View <ArrowRightOutlined />
                </Button>
              </span>
            </div>
          </article>
          <article className="card card--1">
            <div className="card__img">
              <img src={process.env.PUBLIC_URL + "/task.jpg"} alt="" />
            </div>

            <div className="card__img--hover">
              <img src={process.env.PUBLIC_URL + "/task.jpg"} alt="" />
            </div>
            <div className="card__info">
              <span className="card__category">React</span>
              <h3 className="card__title">Task tracker</h3>
              <h4 className="card__subtitle">
                A platform to buy gaming consoles and it's accessories
              </h4>

              <span className="card__by">
                <Button type="text" className="text-button">
                  View <ArrowRightOutlined />
                </Button>
              </span>
            </div>
          </article>
          <article className="card card--1">
            <div className="card__img">
              <img src={process.env.PUBLIC_URL + "/adopt.jpg"} alt="" />
            </div>

            <div className="card__img--hover">
              <img src={process.env.PUBLIC_URL + "/adopt.jpg"} alt="" />
            </div>
            <div className="card__info">
              <span className="card__category">Angular</span>
              <h3 className="card__title">GameKart</h3>
              <h4 className="card__subtitle">
                A platform to buy gaming consoles and it's accessories
              </h4>

              <span className="card__by">
                <Button type="text" className="text-button">
                  View <ArrowRightOutlined />
                </Button>
              </span>
            </div>
          </article>
          <article className="card card--1">
            <div className="card__img">
              <img src={process.env.PUBLIC_URL + "/ecom.jpg"} alt="" />
            </div>

            <div className="card__img--hover">
              <img src={process.env.PUBLIC_URL + "/ecom.jpg"} alt="" />
            </div>
            <div className="card__info">
              <span className="card__category">Angular</span>
              <h3 className="card__title">GameKart</h3>
              <h4 className="card__subtitle">
                A platform to buy gaming consoles and it's accessories
              </h4>

              <span className="card__by">
                <Button type="text" className="text-button">
                  View <ArrowRightOutlined />
                </Button>
              </span>
            </div>
          </article>
        </section>
      </div>
      <div id="contact" className="Contact" style={{ height: 500 }}>
        <h3>Contacts</h3>
      </div>
    </div>
  );
};
export default Dashboard;

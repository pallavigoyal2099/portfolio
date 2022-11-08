import {
  ArrowRightOutlined,
  DownloadOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import ContactMe from "../contactMe/ContactMe";
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
                Resume
              </Button>
            </div>
          </div>
          <div className="about-me-image">
            <img src={process.env.PUBLIC_URL + "/girl.png"} />
          </div>
        </div>
      </div>
      <div id="skills" className="skills">
        <div className="section-title-pink">
          <h2>S k i l l s</h2>
          <div className="back-text-pink">Skills</div>
        </div>
        <div className="row">
          <div className="container-skills">
            <div className="card-skills">
              <div className="content">
                <div className="imgBx">
                  <img src={process.env.PUBLIC_URL + "/html.jpeg"} />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <StarFilled color="#ffffff" />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
              </ul>
            </div>
            <div className="card-skills">
              <div className="content">
                <div className="imgBx">
                  <img src={process.env.PUBLIC_URL + "/ang.png"} />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <StarFilled color="#ffffff" />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
              </ul>
            </div>
            <div className="card-skills">
              <div className="content">
                <div className="imgBx">
                  <img src={process.env.PUBLIC_URL + "/react.jpeg"} />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <StarFilled color="#ffffff" />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
              </ul>
            </div>
            <div className="card-skills">
              <div className="content">
                <div className="imgBx">
                  <img src={process.env.PUBLIC_URL + "/js.png"} />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <StarFilled color="#ffffff" />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
              </ul>
            </div>
            <div className="card-skills">
              <div className="content">
                <div className="imgBx">
                  <img src={process.env.PUBLIC_URL + "/ts.png"} />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <StarFilled color="#ffffff" />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
              </ul>
            </div>
            <div className="card-skills">
              <div className="content">
                <div className="imgBx">
                  <img src={process.env.PUBLIC_URL + "/css.jpeg"} />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <StarFilled color="#ffffff" />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
              </ul>
            </div>
            <div className="card-skills">
              <div className="content">
                <div className="imgBx">
                  <img src={process.env.PUBLIC_URL + "/cpp.png"} />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <StarFilled color="#ffffff" />
                </li>
                <li>
                  <StarFilled />
                </li>
                <li>
                  <StarFilled />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="projects">
        {/* <h3 className="heading">Recent Projects</h3> */}
        <div className="section-title">
          <h2>P r o j e c t s</h2>
          <div className="back-text">Projects</div>
        </div>
        <section className="cards row">
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
      <div id="contact" className="skills">
        <div className="section-title-pink">
          <h2>C o n t a c t</h2>
          <div className="back-text-pink">Contact</div>
        </div>
        <ContactMe />
      </div>
    </div>
  );
};
export default Dashboard;

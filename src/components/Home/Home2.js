import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Backend Engineer who loves building scalable, production-ready
              systems using Java and Spring Boot.
              <br />
              <br />
              I work extensively with
              <i>
                <b className="purple"> Java, Spring Boot, MySQL, REST APIs </b>
              </i>
              and I enjoy solving real-world problems through clean backend
              architecture.
              <br />
              <br />
              My areas of interest include
              <i>
                <b className="purple"> API Integrations, Multi-Tenant SaaS, </b>
                {" "}and backend systems involving{" "}
                <b className="purple">shipping, billing, and authentication workflows.</b>
              </i>
              <br />
              <br />
              I also like exploring modern tools and frameworks such as{" "}
              <b className="purple">Keycloak</b>,{" "}
              <i>
                <b className="purple"> Python (Flask), Django</b>
              </i>{" "}
              and frontend tech like{" "}
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>{" "}
              whenever needed.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tyagi-krishna"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tyagi-krishna"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Removed Instagram since you want professional-only presence */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

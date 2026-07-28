import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";

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
              I’m a Backend Engineer based in Gurgaon, with hands-on production experience building scalable Java and Spring Boot systems for SaaS, HRMS, and enterprise platforms that support real business workflows.
              <br />
              <br />
              I work extensively with
              <i>
                <b className="purple"> Java, Spring Boot, MySQL, REST APIs, and distributed services </b>
              </i>
              and I enjoy turning complex requirements into reliable, maintainable backend systems.
              <br />
              <br />
              My work often focuses on
              <i>
                <b className="purple"> multi-tenant architecture, API integrations, workflow automation, and performance optimization </b>
              </i>
              for real-world business workflows.
              <br />
              <br />
              I also enjoy modern tooling such as{" "}
              <b className="purple">Keycloak</b>,{" "}
              <i>
                <b className="purple">RabbitMQ, OpenSearch, Liquibase, and Python</b>
              </i>
              {" "}while staying comfortable with modern frontend stacks like{" "}
              <i>
                <b className="purple">React.js and Next.js</b>
              </i>
              {" "}when needed.
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

              <li className="social-icons">
                <a
                  href="mailto:krishnatyagi.cs@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="tel:+916397279142"
                  className="icon-colour home-social-icons"
                >
                  <FaPhone />
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

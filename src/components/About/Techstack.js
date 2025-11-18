import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiGit, DiMysql, DiPython } from "react-icons/di";
import { SiSpringboot, SiPostgresql, SiSpringsecurity, SiDocker, SiJavascript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Java — scalable backend services and API development">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Spring Boot — REST APIs, authentication, and microservices">
        <SiSpringboot />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="MySQL — optimized schemas, indexing, and performance tuning">
        <DiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="PostgreSQL — relational modeling and SQL workflows">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Spring Security — authentication, Keycloak, secure cookies">
        <SiSpringsecurity />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Docker — containerized backend environments">
        <SiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Git — version control and collaborative development">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="JavaScript — frontend scripting and utility logic">
        <SiJavascript />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Python — automation, Flask middleware, API tools">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="C++ — strong DSA and algorithms foundation">
        <CgCPlusPlus />
      </Col>

    </Row>
  );
}

export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiGit, DiMysql, DiPython } from "react-icons/di";
import { SiSpringboot, SiPostgresql, SiSpringsecurity, SiDocker, SiJavascript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Java — core backend language for scalable services">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Spring Boot — REST APIs, microservices, and enterprise applications">
        <SiSpringboot />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="MySQL — relational databases, indexing, and optimization">
        <DiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="PostgreSQL — advanced SQL, JSONB, and complex queries">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Spring Security — authentication, OAuth2, Keycloak integration">
        <SiSpringsecurity />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Docker — containerization, deployment, and orchestration">
        <SiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Git — version control, branching strategies, and CI/CD">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="JavaScript — frontend logic, React, and Node.js">
        <SiJavascript />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Python — scripting, Django, and automation tools">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="C++ — data structures, algorithms, and system design">
        <CgCPlusPlus />
      </Col>

    </Row>
  );
}

export default Techstack;

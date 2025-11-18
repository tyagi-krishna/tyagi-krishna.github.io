import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiGit, DiMysql, DiPython } from "react-icons/di";
import { SiSpringboot, SiPostgresql, SiSpringsecurity, SiDocker, SiJavascript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Java: Main language used for building scalable backend services, API integrations, and multi-tenant SaaS features.">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Spring Boot: Used to build production-ready REST APIs, authentication flows, shipping logic, and payment workflows.">
        <SiSpringboot />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="MySQL: Designed optimized schemas, wrote complex queries, and improved performance using indexing & pagination.">
        <DiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="PostgreSQL: Experience working with relational data models and backend services using SQL standards.">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Spring Security: Worked with authentication, Keycloak integration, secure cookies, JWT, and OAuth2.">
        <SiSpringsecurity />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Docker: Containerized backend services and ensured consistent development/testing environments.">
        <SiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Git: Version control, collaborative development, and managing production-grade repositories.">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="JavaScript: Used for frontend integration tasks and creating small utilities or scripts when needed.">
        <SiJavascript />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="Python: Used for automation, Flask middleware, and API integration tools.">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip="C++: Strong base for Data Structures & Algorithms (350+ problems solved).">
        <CgCPlusPlus />
      </Col>

    </Row>
  );
}

export default Techstack;

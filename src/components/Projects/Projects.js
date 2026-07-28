import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p className="project-intro">
          A curated selection of production systems and practical backend work
          that reflects my current resume, engineering depth, and focus on building impactful software.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Multi-Tenant HRMS Platform — Production"
              description="A production-grade HRMS system built around multi-tenant architecture, role-based access control, and workflow automation. Focused on secure onboarding, employee lifecycle operations, and scalable backend services for enterprise clients."
              ghLink={null}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Aftermarket Multi-Tenant SaaS Platform — Production"
              description="Enterprise aftermarket eCommerce platform handling order lifecycle, shipping integrations, refunds, carrier automation, and search at scale. Built with Java, Spring Boot, MySQL, Keycloak, RabbitMQ, and OpenSearch to support high-volume merchant operations."
              ghLink={null}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Event-Driven Workflow Platform"
              description="Designed and implemented asynchronous, event-driven services for workflow orchestration and background processing. The system improves resilience, decouples business actions, and supports high-throughput operations under peak load."
              ghLink="https://github.com/tyagi-krishna/Event-Based-E-Commerce"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="API Integration & Authentication Automation"
              description="Worked on integrations across billing, shipping, and identity systems with a strong focus on reliability and clean service boundaries. Keycloak-based RBAC, secure API flows, and automation reduced manual effort and improved consistency."
              ghLink={null}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blockchain Certificate Issuing & Verification"
              description="A side project for issuing and validating tamper-proof certificates using Ethereum smart contracts, React, and IPFS. Useful for demonstrating decentralized trust and modern web3 application patterns."
              ghLink="https://github.com/tyagi-krishna/Blockchain-Certificate-App"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Stock Market Prediction Prototype"
              description="A Django-based forecasting prototype that ingests market data and experiments with ML-driven trend analysis. Good for demonstrating data handling, model pipelines, and analytical dashboards."
              ghLink="https://github.com/tyagi-krishna/Stock-Market-Prices-Prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

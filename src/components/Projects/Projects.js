import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A curated selection of production systems and notable projects
          aligned with my backend work.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* AFTERMARKET PROJECT */}
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Aftermarket Multi‑Tenant SaaS Platform — Production"
              description={`Enterprise aftermarket eCommerce platform (production).
Built primarily with Java 17, Spring Boot microservices, MySQL, React.js and secured with Keycloak.

Highlights:
• Multi-tenant schema and strict tenant isolation
• End-to-end order lifecycle (checkout, cancel, partial return, refunds)
• Carrier integrations (UPS, TForce Freight) and automated label generation
• Bin-packing shipment optimization to reduce shipping overhead
• OpenSearch-powered parts discovery with sub-1s query latency
• Asynchronous workflows with RabbitMQ for peak-load resilience
• PayPal Subscriptions and TaxJar integration for billing/tax
• Schema migrations managed with Liquibase; dashboards via Apache Superset
Deployed to on-prem infrastructure and served real merchant traffic.`}
              ghLink={null}
            />
          </Col>

          {/* BLOCKCHAIN CERTIFICATE PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blockchain Certificate Issuing & Verification"
              description="Decentralized certificate issuance and verification using Ethereum smart contracts. Implemented with Solidity, Hardhat, React and IPFS for tamper-proof credential storage and instant on-chain verification."
              ghLink="https://github.com/tyagi-krishna/Blockchain-Certificate-App"
            />
          </Col>

          {/* STOCK MARKET PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stock Market Prices Prediction (Django + ML)"
              description="Django application ingesting NSE data with forecasting models (Scikit-Learn). Provides interactive charts, historical analysis, and prototype ML pipelines for price trend prediction."
              ghLink="https://github.com/tyagi-krishna/Stock-Market-Prices-Prediction"
            />
          </Col>

          {/* BLOCKCHAIN FUNDING SYSTEM */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Decentralized Funding Platform"
              description="Transparent fundraising dApp built with Solidity, Hardhat and a Next.js frontend. Implements contribution flows, on-chain record keeping, and automated contract logic for funding campaigns."
              ghLink="https://github.com/tyagi-krishna/Charity-Funding-System"
            />
          </Col>

          {/* BLOG WEBSITE */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog Platform (Django + DRF)"
              description="Blog CMS built with Django and Django REST Framework. Features user auth, admin content workflows, paginated APIs and extensible endpoint design for integrations."
              ghLink="https://github.com/tyagi-krishna/Blog-with-API"
            />
          </Col>

          {/* URL SHORTENER */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="URL Shortener (Django)"
              description="High-performance URL shortener with custom slugs, redirect analytics, and lightweight tracking. Built with Django and optimized redirect handlers."
              ghLink="https://github.com/tyagi-krishna/URL-Shortner"
            />
          </Col>

          {/* CHAT APP */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Django Real-Time Chat"
              description="Real-time chat application using Django Channels and WebSockets. Supports chat rooms, user sessions, and realtime messaging patterns."
              ghLink="https://github.com/tyagi-krishna/Django-Chat-App"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

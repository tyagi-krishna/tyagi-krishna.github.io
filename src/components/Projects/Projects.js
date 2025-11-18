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
          A few major projects and systems I have built.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* AFTERMARKET PROJECT */}
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}  // TEMPORARY — replace with real screenshot later
              isBlog={false}
              title="Aftermarket Multi-Tenant SaaS Platform (Production Project)"
              description="A full-scale multi-tenant SaaS platform built for aftermarket B2B eCommerce and asset management. Designed end-to-end using Java 17, Spring Boot, MySQL, React.js, and secure cookie authentication.

Key Features:
• Merchant-based multi-tenant architecture  
• UPS & TForce Freight integration (rates, BOL, pickup)  
• Custom packing logic based on weight/dimensions  
• Automated US tax engine using TaxJar  
• PayPal Subscriptions for billing & renewals  
• Fraud detection (IPQS: IP, email, phone)  
• Dynamic booking & service center scheduling system  
• High-performance SQL, pagination, and selective column projections  
• Migration to secure cookie-based Keycloak authentication  
• Admin dashboards via Apache Superset

This platform was deployed in production and handled real merchant workflows, logistics operations, and subscription billing."
              ghLink="https://github.com/tyagi-krishna"
            />
          </Col>

          {/* BLOCKCHAIN CERTIFICATE PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blockchain Based Certificate Generation & Verification"
              description="A decentralized system for issuing and verifying certificates using Ethereum blockchain. Built using Solidity, Hardhat, React JS, and IPFS to ensure tamper-proof credentials and instant verification."
              ghLink="https://github.com/tyagi-krishna/Blockchain-Certificate-App"
            />
          </Col>

          {/* STOCK MARKET PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stock Market Domain with Price Predictions"
              description="A Django-based application showing real-time NSE stock data and predicting price trends using Linear Regression (Scikit-Learn). Features interactive Matplotlib charts and financial insights."
              ghLink="https://github.com/tyagi-krishna/Stock-Market-Prices-Prediction"
            />
          </Col>

          {/* BLOCKCHAIN FUNDING SYSTEM */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blockchain Based Funding System"
              description="A decentralized fundraising platform built using Solidity smart contracts, Hardhat, and Next.js. Provides transparent contributions, automated logic, and immutable transaction records."
              ghLink="https://github.com/tyagi-krishna/Charity-Funding-System"
            />
          </Col>

          {/* BLOG WEBSITE */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog Website with REST API"
              description="A complete blog platform built using Django and Django REST Framework with authentication, CRUD operations, and REST endpoints for clean content workflows."
              ghLink="https://github.com/tyagi-krishna/Blog-with-API"
            />
          </Col>

          {/* URL SHORTENER */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="URL Shortener"
              description="A fast URL shortener built using Django, with custom slugs, analytics tracking, and efficient redirect logic."
              ghLink="https://github.com/tyagi-krishna/URL-Shortner"
            />
          </Col>

          {/* CHAT APP */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Django Chat App"
              description="A real-time chat application using Django and WebSockets. Users can join or create chat rooms and communicate instantly."
              ghLink="https://github.com/tyagi-krishna/Django-Chat-App"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

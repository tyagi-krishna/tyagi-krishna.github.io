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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blockchain based Certificate Generation and Verification"
              description="Revolutionize certificate handling with our project! Using Ethereum blockchain, we secure certificates with Hardhat, ReactJS for a user-friendly interface, and IPFS servers for decentralized storage. This ensures tamper-proof certificates, instant verification and transparent traceable transactions"
              ghLink="https://github.com/tyagi-krishna/Blockchain-Certificate-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stock Market Domain with Price Predictions"
              description="I’ve created a Stock Market Price Prediction website using Django, python and Nsetools API. With real-time market data, it employs a Linear Regression model from Scikit-learn for accurate predictions. The website offers a user-friendly interface with interactive visualizations using Matplotlib. Beyond predictions, it also showcase’s comprehensive features of Indian stock market companies, providing insights for strategic investment decisions."
              ghLink="https://github.com/tyagi-krishna/Stock-Market-Prices-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blockchain based Funding System"
              description="I've pioneered a revolutionary Blockchain-Based Funding System, utilizing Solidity, Hardhat, and Next.js. Smart contracts in Solidity ensure secure and transparent transactions, while Hardhat streamlines development. The Next.js frontend offers a user-friendly experience. This decentralized system eliminates intermediaries, supporting asset tokenization and providing an immutable transaction history. With integrated wallets and real-time analytics, my project transforms fundraising, fostering trust and efficiency in the process."
              ghLink="https://github.com/tyagi-krishna/Charity-Funding-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog website with REST API"
              description="I've crafted a dynamic Blog Website with a robust REST API using Django and Django REST Framework. This platform offers seamless content creation and consumption. The combination of Django's simplicity and REST Framework's flexibility ensures a user-friendly experience. With features like authentication, data serialization, and endpoints, my project empowers users to effortlessly manage, create, and share content,elevating the blogging experience"
              ghLink="https://github.com/tyagi-krishna/Blog-with-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="URL shortner"
              description="This quick and secure URL shortener powered by Django. Instantly transform lengthy URLs into shareable links. Customize slugs, track analytics, and manage links effortlessly."
              ghLink="https://github.com/tyagi-krishna/URL-Shortner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Django Chat APP"
              description="This is a simple chatting app where people can chat by joining any rooms or by creating new rooms and sharing those Room IDs."
              ghLink="https://github.com/tyagi-krishna/Django-Chat-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

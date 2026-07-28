import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Krishna Tyagi</span> and I currently
            live in <span className="purple">Gurgaon, India</span>.
            <br />
            I’m a Backend Engineer with production experience building reliable
            Java and Spring Boot systems for multi-tenant SaaS, HRMS, and
            distributed platforms. I enjoy designing systems from the ground up,
            improving performance, and turning business workflows into scalable,
            maintainable backend services.
            <br />
            <br />
            Key highlights:
            <br />
            <b className="purple">• Built and scaled multi-tenant HRMS and SaaS platforms</b>
            <br />
            <b className="purple">• Delivered OpenSearch-powered discovery with sub-1s latency</b>
            <br />
            <b className="purple">• Implemented event-driven workflows with RabbitMQ and Keycloak RBAC</b>
            <br />
            <b className="purple">• Automated provisioning and schema management with Liquibase</b>
            <br />
            <br />
            I completed my B.Tech in Computer Science (AI Specialization) in
            <span className="purple"> June 2025</span>. I’m especially interested in
            clean architecture, backend performance, automation, and API-driven
            product delivery.
            <br />
            <br />
            Outside of engineering, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Competitive Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring New Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech & Building Side Projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Engineering isn't just about writing code — it's about creating impact."
          </p>
          <footer className="blockquote-footer">
            Krishna Tyagi — krishnatyagi.cs@gmail.com | (+91) 6397279142
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

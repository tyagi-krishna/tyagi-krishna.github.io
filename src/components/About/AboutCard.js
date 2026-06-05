import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Krishna Tyagi</span> from{" "}
            <span className="purple">Ghaziabad, India</span>.
            <br />
            I’m a Backend Engineer with proven production experience building
            Java / Spring Boot systems across multi-tenant SaaS, distributed
            microservices, and enterprise platforms. I design systems from
            scratch and eliminate critical performance bottlenecks — for
            example, reducing API response times from 20s+ to under 2 seconds.
            <br />
            <br />
            Key highlights:
            <br />
            <b className="purple">• Architected multi-tenant HRMS and SaaS platforms</b>
            <br />
            <b className="purple">• Built OpenSearch-powered discovery with sub-1s latency</b>
            <br />
            <b className="purple">• Engineered async workflows with RabbitMQ and Keycloak RBAC</b>
            <br />
            <b className="purple">• Automated on-prem provisioning and managed schema changes with Liquibase</b>
            <br />
            <br />
            I completed my B.Tech in Computer Science (AI Specialization) in
            <span className="purple"> June 2025</span>. I enjoy clean architecture,
            performance tuning, automation, and integrating complex APIs to
            deliver measurable business value.
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

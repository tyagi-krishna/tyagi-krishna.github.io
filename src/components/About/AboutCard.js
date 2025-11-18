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
            I am a <span className="purple">Backend Engineer</span> with 
            hands-on experience building scalable, high-performance systems 
            using <b className="purple">Java, Spring Boot, MySQL, and REST APIs</b>.
            <br />
            <br />
            I completed my B.Tech in Computer Science (AI Specialization) in 
            <span className="purple"> June 2025</span>, and since then, I have been
            working on production-grade backend services for SaaS platforms,
            logistics workflows, authentication systems, and API-driven architectures.
            <br />
            <br />
            My work revolves around real-world problem solving — integrating complex APIs,
            optimizing backend performance, and designing reliable systems that scale.
            I love clean architecture, debugging, automation, and building systems that 
            deliver practical business value.
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
          <footer className="blockquote-footer">Krishna Tyagi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m Divy Pattani, an AI/ML Engineer Intern based in Gujarat, India.
            I’m currently pursuing B.Tech in Information Technology at LJ Institute of Engineering and Technology, while gaining hands-on industry experience in AI, Generative AI, and full-stack application development.
          </p>

          <p style={{ textAlign: "justify" }}>
            I enjoy building real-world digital solutions that combine AI-driven intelligence with clean system design. My interests include working with LLMs, prompt engineering, AI-assisted automation, and developing scalable full-stack applications that solve practical problems.
          </p>

          <p style={{ textAlign: "justify" }}>
            Apart from technology, I enjoy:
          </p>

          <ul style={{ textAlign: "left", marginLeft: "20px" }}>
            <li className="about-activity">
              <ImPointRight /> Playing volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places through travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
            "I believe in building solutions with purpose, curiosity, and continuous learning."
          </p>
          <footer
            className="blockquote-footer"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            — Divy Pattani
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

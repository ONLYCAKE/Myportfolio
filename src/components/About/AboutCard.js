import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm Divy Pattani, a Full-Stack Developer and final-year B.E. Information Technology
            student at LJ University, based in Gujarat, India.
          </p>

          <p style={{ textAlign: "justify" }}>
            I work across the full stack — React, Next.js, Node.js, NestJS, and AdonisJS on the
            frontend/backend, with PostgreSQL, MongoDB, and Redis for data and caching. Over the
            past year I've independently designed and built production systems end-to-end,
            including a multi-tenant invoicing and accounting platform, a restaurant POS and ERP
            system, and a crypto-trading bot SaaS platform, along with contributing to large-scale
            enterprise ERP software.
          </p>

          <p style={{ textAlign: "justify" }}>
            I enjoy solving real engineering problems — concurrency-safe transactions, REST API
            design, real-time systems with WebSockets, and clean database architecture. I also use
            AI-assisted development tools (Claude, GitHub Copilot, Cursor) to work faster while
            keeping full ownership and review of everything I ship.
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             👋 Hi, I'm <b className="purple">Divy Pattani</b>, a Full-Stack Developer and final-year B.E. Information Technology student at <b className="purple">LJ University</b>, based in Gujarat, India.
              <br />
              <br />
              I work across the full stack —{" "}
              <i>
                <b className="purple">React, Next.js, Node.js, NestJS, and AdonisJS</b>
              </i>{" "}
              on the frontend/backend, with{" "}
              <i>
                <b className="purple">PostgreSQL, MongoDB, and Redis</b>
              </i>{" "}
              for data and caching. Over the past year I've independently designed and built production systems end-to-end, including a{" "}
              <i>
                <b className="purple">multi-tenant invoicing & accounting platform, restaurant POS & ERP system, and a crypto-trading bot SaaS platform</b>
              </i>
              , along with contributing to large-scale enterprise ERP software.
              <br />
              <br />
              ⚡ I enjoy solving real engineering problems —{" "}
              <i>
                <b className="purple">concurrency-safe transactions, REST API design, real-time systems with WebSockets, and clean database architecture</b>
              </i>
              . I also leverage AI-assisted development tools (<i><b className="purple">Claude, GitHub Copilot, Cursor</b></i>) to work faster while keeping full ownership and review of everything I ship.
              <br />
              <br />
              🏆 Highlights:
              <ul>
                <li>
                  <b className="purple">HackNUThon 6.0 Winner 🥇</b> for DeployWhisper (AI-powered deployment tool)
                </li>
                <li>
                  <b className="purple">1st Runner-Up at Nirma Hackathon</b>
                </li>
                <li>
                  Built projects like{" "}
                  <b className="purple">Excel Analytics Platform (MERN)</b> and{" "}
                  <b className="purple">E-Commerce Website (Flask + Razorpay)</b>
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ONLYCAKE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/divy-pattani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_divy2546_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

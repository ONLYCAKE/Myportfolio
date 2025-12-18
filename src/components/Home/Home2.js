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
             👋 Hi, I’m Divy Pattani, an AI/ML Engineer Intern based in Gujarat, India.
I’m currently pursuing B.Tech in Information Technology at LJ Institute of Engineering and Technology, while gaining hands-on industry experience in AI, Generative AI, and full-stack development.
              <br />
              <br />
              I work with modern web and backend technologies such as{" "}
              <i>
                <b className="purple"> HTML, CSS, JavaScript, TypeScript, Python, React, Node.js, and PostgreSQL </b>
              </i>
              <br />
              <br />
              My primary interests lie in AI/ML and Generative AI, where I explore{" "}
              <i>
                <b className="purple">LLMs, prompt engineering, chatbot workflows, and AI-assisted automation</b>
              </i>
              , crbridging the gap between intelligent systems and real-world applications.{" "}
              <i>
                <b className="purple">Web Technologies & Products</b>
              </i>{" "}
              and exploring the exciting intersection of{" "}
              <i>
                <b className="purple">AI and Web Development.</b>
              </i>
              <br />
              <br />
              ⚡ I enjoy building{" "}
              <i>
                <b className="purple">full-stack and AI-enabled projects using MERN stack, Prisma, Flask/Django</b>
              </i>{" "}
              and modern tooling — from data-driven dashboards to production-ready AI solutions.
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

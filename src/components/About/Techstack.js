import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiOpenai, SiGoogle, SiMicrosoft, SiGithub, SiVisualstudiocode, SiRobotframework } from "react-icons/si";
import { DiNodejs, DiPostgresql, DiReact } from "react-icons/di";
import { SiExpress, SiPrisma, SiTypescript } from "react-icons/si";

function Techstack() {
  const skills = [
    <SiOpenai />,
    <SiGoogle />,
    <SiOpenai />,
    <SiMicrosoft />,
    <DiNodejs />,
    <SiExpress />,
    <SiPrisma />,
    <DiPostgresql />,
    <DiReact />,
    <SiTypescript />,
  ];

  const tools = [
    <SiVisualstudiocode />,
    <SiRobotframework />,
    <SiGithub />,
  ];

  return (
    <>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skills.map((icon, index) => (
          <Col xs={4} md={2} lg={2} key={index} className="tech-icons">
            {icon}
          </Col>
        ))}
      </Row>
      <h1 className="project-heading">
        <strong className="purple">AI Development </strong>Tools
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((icon, index) => (
          <Col xs={4} md={2} lg={2} key={index} className="tech-icons">
            {icon}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Techstack;

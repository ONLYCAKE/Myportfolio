import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiPython,
  DiPostgresql,
  DiMongodb,
  DiRedis,
  DiGit,
  DiLinux,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiAdonisjs,
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiSupabase,
  SiGithub,
  SiPostman,
  SiVisualstudiocode,
  SiPuppeteer,
} from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";
import {
  FaDatabase,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaTools,
  FaRobot,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

function Techstack() {
  const categories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: [
        { name: "React.js", icon: <DiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <DiJavascript1 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <DiHtml5 /> },
        { name: "CSS3", icon: <DiCss3 /> },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "NestJS", icon: <SiNestjs /> },
        { name: "AdonisJS", icon: <SiAdonisjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "WebSockets (Socket.IO)", icon: <SiSocketdotio /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "PostgreSQL", icon: <DiPostgresql /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "Redis", icon: <DiRedis /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Lucid ORM", icon: <FaDatabase /> },
        { name: "Supabase", icon: <SiSupabase /> },
      ],
    },
    {
      title: "Languages",
      icon: <FaCode />,
      skills: [
        { name: "Python", icon: <DiPython /> },
        { name: "SQL", icon: <TbSql /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <DiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Linux", icon: <DiLinux /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "pgAdmin", icon: <DiPostgresql /> },
      ],
    },
    {
      title: "AI-Assisted Development",
      icon: <FaRobot />,
      skills: [
        { name: "Claude", icon: <FaBrain /> },
        { name: "GitHub Copilot", icon: <SiGithub /> },
        { name: "Cursor", icon: <SiVisualstudiocode /> },
        { name: "Antigravity", icon: <FaRocket /> },
        { name: "Playwright MCP", icon: <SiPuppeteer /> },
      ],
    },
  ];

  return (
    <Row className="justify-content-center skill-grid-row" style={{ paddingBottom: "30px" }}>
      {categories.map((cat, idx) => (
        <Col lg={4} md={6} xs={12} key={idx} className="mb-4">
          <div className="skill-category-card">
            <div className="skill-category-title">
              {cat.icon}
              <span>{cat.title}</span>
            </div>
            <div className="skill-badge-list">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-badge">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

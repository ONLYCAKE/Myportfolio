import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Featured Projects Images
import invoicing from "../../Assets/Projects/invoicing.svg";
import tirupati from "../../Assets/Projects/tirupati.svg";
import psresto from "../../Assets/Projects/psresto.svg";
import mhtbotx from "../../Assets/Projects/mhtbotx.svg";
import sunshine_erp from "../../Assets/Projects/sunshine_erp.svg";
import terracode from "../../Assets/Projects/terracode.svg";

// Earlier / Academic Projects Images
import excel from "../../Assets/Projects/excel.jpg";
import image from "../../Assets/Projects/image.png";
import Uday_dairy_equipments from "../../Assets/Projects/Uday_dairy_equipments.png";
import house from "../../Assets/Projects/house.jpg";
import deploy from "../../Assets/Projects/deploy.png";
import todolist from "../../Assets/Projects/todolist.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import LMS from "../../Assets/Projects/LMS.png";

function Projects() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Production Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Production systems, SaaS platforms, and enterprise solutions architected and developed end-to-end.
        </p>

        {/* 6 Main Projects */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. Invoicing Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoicing}
              title="Invoicing Platform — B2B Invoicing & Accounting SaaS"
              stack={["AdonisJS", "React", "PostgreSQL", "Vite"]}
              description="Independently architected and built a multi-tenant invoicing and accounting SaaS covering the full order-to-cash cycle — quotations, proformas, invoices, payments, and ledgers — including a role-based permission system and audit-logging system."
              isPrivate={true}
            />
          </Col>

          {/* 2. Tirupati Polyflex */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tirupati}
              title="Tirupati Polyflex — Industrial B2B Catalog & CMS"
              stack={["Next.js", "React", "Supabase", "PostgreSQL"]}
              description="Independently built a production B2B industrial catalog and content management platform, including a self-serve CMS, a high-performance scroll-driven product animation, and SEO optimized for both search engines and AI assistants."
              demoLink="https://tirupatipolyflex.com/"
            />
          </Col>

          {/* 3. PS-Resto */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={psresto}
              title="PS-Resto — Restaurant ERP + POS System"
              stack={["AdonisJS", "React", "PostgreSQL", "Redis", "Socket.IO"]}
              description="Bootstrapped and built the backend of a multi-tenant restaurant POS and ERP system — KOT lifecycle, concurrency-safe table management, an invoice/settlement engine, and real-time order sync via WebSockets."
              isPrivate={true}
            />
          </Col>

          {/* 4. mhtbotx */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mhtbotx}
              title="mhtbotx — Crypto Trading Bot SaaS Platform"
              stack={["NestJS", "Next.js", "PostgreSQL"]}
              description="Built core backend systems for a SaaS platform enabling automated crypto trading bots — including a multi-level referral commission engine and a multi-wallet ledger system."
              isPrivate={true}
            />
          </Col>

          {/* 5. Sunshine ERP */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sunshine_erp}
              title="Sunshine ERP — Enterprise Business Platform"
              stack={["NestJS", "React", "PostgreSQL", "TypeScript"]}
              description="Contributed extensively to a full-scale enterprise platform covering sales, inventory, and finance modules, including a complete mobile-responsiveness overhaul and a multi-sheet Excel import system."
              demoLink="https://sunshine-erp.apps.peanutsquare.com/"
            />
          </Col>

          {/* 6. TerraCode Consulting */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terracode}
              title="TerraCode Consulting — Marketing Website"
              stack={["Next.js", "React", "TypeScript"]}
              description="Independently built a complete internationalization (i18n) system and a Digitalization ROI Calculator with real-time financial modeling."
              demoLink="https://terracodesoftware.com/"
            />
          </Col>
        </Row>

        {/* Toggle Button for Earlier / Academic Projects */}
        <div
          style={{
            marginTop: "60px",
            marginBottom: "35px",
            textAlign: "center",
            position: "relative",
            zIndex: 100,
          }}
        >
          <Button
            variant="primary"
            onClick={() => {
              setShowEarlier((prev) => {
                const nextState = !prev;
                if (nextState) {
                  setTimeout(() => {
                    const el = document.getElementById("earlier-projects-section");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }, 120);
                }
                return nextState;
              });
            }}
            style={{
              padding: "14px 34px",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "8px",
              backgroundColor: "#623686",
              borderColor: "#c770f0",
              boxShadow: "0 4px 18px rgba(199, 112, 240, 0.4)",
              cursor: "pointer",
              position: "relative",
              zIndex: 100,
              pointerEvents: "auto",
              transition: "all 0.3s ease",
            }}
          >
            {showEarlier ? "▲ Hide Earlier / Academic Projects" : "▼ View Earlier / Academic Projects"}
          </Button>
        </div>

        {showEarlier && (
          <div id="earlier-projects-section" style={{ marginTop: "20px", position: "relative", zIndex: 10 }}>
            <h2 className="project-heading" style={{ fontSize: "1.8em", marginTop: "20px" }}>
              Earlier & <strong className="purple">Academic Projects</strong>
            </h2>
            <p style={{ color: "white", marginBottom: "30px" }}>
              Previous hackathon winners, academic systems, and exploration projects.
            </p>

            <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
              {/* Excel Analytics Platform */}
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={excel}
                  title="Excel Analytics Platform"
                  stack={["MERN Stack", "Tailwind CSS"]}
                  description="Built an Excel Analytics Platform enabling users to upload Excel files, preview data, and generate interactive charts. Implemented real-time dashboard updates, secure authentication, and modern UI with TailwindCSS."
                  ghLink="https://github.com/ONLYCAKE/Excel-Analytics-Platform"
                />
              </Col>

              {/* Learning Management System (LMS) */}
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={LMS}
                  title="Learning Management System (LMS)"
                  stack={["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"]}
                  description="Built a production-ready LMS using React, TypeScript, Node.js, Prisma ORM, and PostgreSQL. Implemented role-based access for Admin, Instructor, and Student, AI-assisted learning workflows, real-time progress tracking, and automated PDF certificate generation."
                  ghLink="https://github.com/ONLYCAKE/Learning-Management-System"
                />
              </Col>

              {/* E-Commerce Management System */}
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Ecommerce}
                  title="E-Commerce Management System"
                  stack={["Node.js", "Express.js", "MongoDB", "React"]}
                  description="Developed a full-stack E-Commerce Management System simulating real-world business operations with secure authentication, role-based access, structured backend APIs, and real-time data handling."
                  ghLink="https://github.com/ONLYCAKE/Ecommerce_Management_System"
                />
              </Col>

              {/* House Price Prediction */}
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={house}
                  title="House-Price-Prediction"
                  stack={["Python", "Flask", "Django", "Scikit-Learn"]}
                  description="Built a House Price Prediction System using Machine Learning, integrated with Flask & Django for web deployment. Implemented real-time prediction of Bangalore home prices with trained regression models."
                  ghLink="https://github.com/ONLYCAKE/House-Price-Prediction"
                />
              </Col>

              {/* DeployWhisper */}
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={deploy}
                  title="DeployWhisper"
                  stack={["AI Tool", "Python", "CLI Automation"]}
                  description="Created an AI-powered tool to automate app deployment with a single command, reducing deployment time by 60% and improving developer efficiency. Won HackNUThon 6.0 🥇."
                  ghLink="https://github.com/ONLYCAKE/DeployWhisper"
                />
              </Col>

              {/* Image Decryption */}
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={image}
                  title="Image Decryption"
                  stack={["Python", "Streamlit", "Steganography"]}
                  description="Developed a Streamlit-based Image Steganography App in Python that hides and retrieves secret text messages inside images using the LSB (Least Significant Bit) technique."
                  ghLink="https://github.com/ONLYCAKE/imageDecryption"
                />
              </Col>

              {/* Uday Dairy Equipment */}
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Uday_dairy_equipments}
                  title="Uday Dairy Equipment"
                  stack={["Python", "Flask", "SQLite"]}
                  description="Developed a Mini E-Commerce System for Uday Dairy Equipment using Python, Flask, and SQLite with features like product showcase, shopping cart, checkout, and user authentication."
                  ghLink="https://github.com/ONLYCAKE/Uday-dairy-equipment"
                />
              </Col>

              {/* Mission: Possible - Student Edition */}
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={todolist}
                  title="Mission: Possible - Student Edition"
                  stack={["HTML", "CSS", "JavaScript"]}
                  description="Productivity and mindfulness web app that helps students manage tasks, track progress, stay focused with a Pomodoro timer, and take mindful breaks with dark mode and local data storage."
                  ghLink="https://github.com/ONLYCAKE/To-Do-List"
                />
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;

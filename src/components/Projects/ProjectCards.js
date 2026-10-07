import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      <Card.Body className="d-flex flex-column text-start">
        <Card.Title style={{ fontWeight: "700", fontSize: "1.25rem", color: "#fff", marginBottom: "8px" }}>
          {props.title}
        </Card.Title>

        {props.stack && (
          <div className="project-stack-tags mb-3">
            {Array.isArray(props.stack)
              ? props.stack.map((item, idx) => (
                  <span key={idx} className="project-stack-badge">
                    {item}
                  </span>
                ))
              : props.stack.split(",").map((item, idx) => (
                  <span key={idx} className="project-stack-badge">
                    {item.trim()}
                  </span>
                ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify", fontSize: "0.92rem", color: "#d6d6d6", flexGrow: 1, lineHeight: "1.55" }}>
          {props.description}
        </Card.Text>

        {props.isPrivate && (
          <div className="project-private-notice">
            🔒 Private client project — code walkthrough available on request
          </div>
        )}

        <div className="project-card-actions mt-3">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }}
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp;
              {"View Live Site"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

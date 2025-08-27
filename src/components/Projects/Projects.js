import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Use placeholder images or your own assets for now
import bharatpulse from "../../Assets/Projects/Bharat-pulse.png";
import editor from "../../Assets/Projects/FirstThought.png"; // Use a placeholder image that exists
import portfolio from "../../Assets/Projects/homepage.png";
import upi from "../../Assets/Projects/UPI.png";
import Indo from "../../Assets/Projects/Indo.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bharatpulse}
              isBlog={false}
              title="Bharat Pulse – India’s Global Engagement Platform"
              description="Full-stack platform aggregating real-time news from 150+ sources, visualizing global metrics with interactive dashboards, and implementing mobile-first design, real-time search, and historical timelines."
              ghLink="https://github.com/priyanshinegi05/bharat-pulse"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FirstThought – Full-Stack Publishing Platform"
              description="Modern blogging platform enabling users to create, edit, and manage posts, with JWT-secured authentication, profiles, likes, threaded comments, bookmarks, newsletters, search, tag-based filtering, and responsive PWA design."
              ghLink="https://github.com/priyanshinegi05/firstthought"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio – Developer Website"
              description="Personal portfolio website to showcase my projects, skills, and blogs. Includes project highlights, resume download, and a contact form, built with a focus on clean design, responsiveness, and fast performance."
              ghLink="https://github.com/priyanshinegi05/Personal-Portfolio"
              demoLink=""
            />
          </Col>
        </Row>
{/* --- New Blog Section --- */}
<h1 className="project-heading" style={{ marginTop: "50px" }}>
  My Published <strong className="purple">Articles</strong>
</h1>
<p style={{ color: "white" }}>
  A few of my writings on India’s diplomacy, foreign policy, and global affairs.
</p>

<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={Indo}
      isBlog={true}
      title="India’s Indo-Pacific Play: Strategy Over Noise"
      description="An analysis of India’s evolving Indo-Pacific strategy and its implications for global diplomacy."
      ghLink="https://www.youthkiawaaz.com/2025/06/indias-indo-pacific-play-strategy-over-noise"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={upi}
      isBlog={true}
      title="Redefining Diplomacy: UPI as India’s Soft Power Tool"
      description="Exploring how India’s digital payment system is emerging as a powerful soft diplomacy instrument."
      ghLink="https://www.youthkiawaaz.com/2025/07/redefining-diplomacy-how-upi-is-becoming-indias-soft-power-tool"
    />
  </Col>
</Row>

      </Container>
    </Container>
  );
}

export default Projects;


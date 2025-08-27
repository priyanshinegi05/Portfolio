import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyanshi Negi</span>
            <br />
            Computer Science Engineering student with expertise in full-stack
            development, cloud computing (GCP, Firebase), and DevOps.
            <br />
            Experienced in building scalable web applications using Node.js,
            Express.js, PostgreSQL, React.js, Next.js, Tailwind CSS, and Docker.
            <br/>
            <br/>
            I am also deeply interested in the intersection of technology and geopolitics, exploring how global tech trends shape diplomacy, governance, and international relations.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Team Collaboration
            </li>
            <li className="about-activity">
              <ImPointRight /> Communication & Leadership
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Priyanshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

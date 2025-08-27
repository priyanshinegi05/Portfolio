import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
              Hi, I'm <b className="purple">Priyanshi Negi</b>, a Computer Science Engineering student passionate about{" "}
              <b className="purple">Full Stack Development</b> and{" "}
              <b className="purple">DevOps</b>.
              <br />
            
              I have hands-on experience with
              <i>
                <b className="purple">
                  {" "}
                  Node.js, Express.js, PostgreSQL, React.js, Next.js, Tailwind CSS,
                  Docker, GCP, and Firebase.
                </b>
              </i>
              <br />
             
              I love building scalable web applications, deploying on cloud, and
              automating workflows.
              <br />
              <br />
              Passionate about both coding and understanding the world, I bridge my tech skills with an interest in <i>
                <b className="purple">
                  {" "} international relations  </b>
              </i>.
              <br />
              <br />
              Let's connect if you want to collaborate or discuss tech!
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
                  href="https://github.com/priyanshinegi05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/PNegi57257?t=BDgiWjz39twZwdkCGpTn3g&s=08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter /> 
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/priyanshi-negi-7578ba249"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/priyanshi_negi_/profilecard/?igsh=NDRlMDRkZzR5NDJx"
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

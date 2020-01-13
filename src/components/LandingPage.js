import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  ProgressBar
} from "react-bootstrap";
import james from "./1James.png";
import {
  FaArrowRight,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

class Landing extends Component {
  render() {
    return (
      <div>
        <section className="primary">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link>
                <Link className="color" to="/Resume">
                  Resume
                </Link>
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link>
                <Link className="color" to="/Projects">
                  Projects
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link className="color" to="/Contact">
                  Contact
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="jumbo">
            <Row>
              <Col sm={12}>
                <Jumbotron>
                  <Container
                    style={{ background: "none" }}
                    className="jumbotron-text"
                  >
                    <h1 className="Jumbo-text">
                      Hello, I'm{" "}
                      <span className="red-name">James Flannery</span>
                    </h1>
                    <h1 className="Jumbo-text">I am a web developer</h1>
                    <div className="primary-btn">
                      <Button variant="outline-secondary">
                        {" "}
                        Learn More <FaArrowRight />
                      </Button>
                    </div>
                  </Container>
                </Jumbotron>
              </Col>
            </Row>
          </div>
        </section>
        <section id="myTarget" className="secondary">
          <div className="iconNav">
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link>
                  <FaHtml5 className="iconSize" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FaCss3Alt className="iconSize" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <IoLogoJavascript className="iconSize" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FaReact className="iconSize" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FaNodeJs className="iconSize" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FaBootstrap className="iconSize" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <DiMongodb className="iconSize" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <DiFirebase className="iconSize" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Container className="homepage-cards">
              <Row>
                <Col sm={4}>
                  <div className="secondary-card-body">
                    <div className="secondary-img-div">
                      <img
                        className="secondary-card-img"
                        alt="profile-img"
                        src={james}
                      />
                    </div>
                    <h1 className="secondary-card-text">WHO'S THIS GUY?</h1>
                    <p className="secondary-card-text">
                      I am a software developer working for{" "}
                      <span className="secondary-card-span">Techtonic</span> out
                      of Boulder, CO
                    </p>
                    <p className="secondary-card-text">
                      I have a passion for solving puzzles and am aspiring to be
                      a FrontEnd Developer
                    </p>
                  </div>
                </Col>
                <Col sm={8}>
                  <div className="secondary-card-body2">
                    <h1 className="secondary-progress-title">
                      Language Progress
                    </h1>
                    <span className="black-name">
                      <FaHtml5 className="green-name" />
                      HTML
                      <ProgressBar animated now={70} />
                    </span>
                    <span className="black-name">
                      <FaCss3Alt className="green-name" />
                      CSS
                      <ProgressBar animated now={45} />
                    </span>
                    <span className="black-name">
                      <IoLogoJavascript className="green-name" />
                      JavaScript
                      <ProgressBar animated now={80} />
                    </span>
                    <span className="black-name">
                      <FaReact className="green-name" />
                      REACT
                      <ProgressBar animated now={80} />
                    </span>
                    <span className="black-name">
                      <FaNodeJs className="green-name" />
                      NODE.JS
                      <ProgressBar animated now={60} />
                    </span>
                    <span className="black-name">
                      <FaBootstrap className="green-name" />
                      BOOTSTRAP
                      <ProgressBar animated now={60} />
                    </span>
                    <span className="black-name">
                      <DiMongodb className="green-name" />
                      MONGODB
                      <ProgressBar animated now={40} />
                    </span>
                    <span className="black-name">
                      <DiFirebase className="green-name" />
                      FIREBASE
                      <ProgressBar animated now={50} />
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="thirds">
          <div className="space-div">
            <iframe
              title="SpaceInvaders"
              className="space-game"
              src="https://space-game-fb24c.firebaseapp.com/"
            >
              Javascript Space Invaders
            </iframe>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;

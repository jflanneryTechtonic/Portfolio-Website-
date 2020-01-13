import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
class Resume extends Component {
  render() {
    return (
      <div className="header-text">
        <section className="resume">
          <Nav className="justify-content-center">
          <Nav.Item>
              <Nav.Link>
                <Link className="color" to="/">
                  Home
                </Link>
              </Nav.Link>
            </Nav.Item>
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
        </section>
        <section>
          <div className="resume-footer"></div>
        </section>
      </div>
    );
  }
}

export default Resume;

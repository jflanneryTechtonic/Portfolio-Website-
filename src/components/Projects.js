import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FaHome } from 'react-icons/fa';

class Projects extends Component {
  render() {
    return (
      <div>
        <section className="projects">
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
      </div>
    );
  }
}

export default Projects;

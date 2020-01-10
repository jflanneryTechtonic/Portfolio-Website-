import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Form, Col, Button } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="contact">
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
          <div className="contact-form">
            <div className="contact-form-title">
              <h1>CONTACT ME</h1>
              <p>Have a question or want to work together?</p>
            </div>
            <Form id="contact-form">
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Name" />
                </Col>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email Address" />
                <Form.Control type="phone" placeholder="Phone Number" />
                <Form.Control
                  placeholder="Leave a comment"
                  as="textarea"
                  rows="12"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;

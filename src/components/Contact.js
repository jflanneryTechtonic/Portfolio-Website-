import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Form, Col, Button, Alert } from "react-bootstrap";

import Firebase from "firebase";
import config from "./config";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: []
    };
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log("DATA RETRIEVED");
  };
  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  render() {
    return (
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

        <h1 className="contact-form-title">
          Have a question or want to work together?
        </h1>
        <div className="contact-form-control">
          <div className="contact-form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control hidden ref="uid" />
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    ref="firstName"
                    placeholder="Enter First Name"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    ref="lastName"
                    placeholder="Enter Last Name"
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref="email"
                    placeholder="Enter Email"
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone #</Form.Label>
                  <Form.Control
                    type="tel"
                    ref="phone"
                    name="phone"
                    placeholder="Phone Number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridTextArea">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    ref="message"
                    as="textarea"
                    placeholder="Leave A Message"
                  />
                </Form.Group>
              </Form.Row>
              <Button type="submit">SUBMIT FORM</Button>
            </Form>
          </div>
        </div>
      </section>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let email = this.refs.email.value;
    let phone = this.refs.phone.value;
    let message = this.refs.message.value;
    let uid = this.refs.uid.value;

    if (uid && firstName && lastName && email && phone && message) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].firstName = firstName;
      developers[devIndex].lastName = lastName;
      developers[devIndex].email = email;
      developers[devIndex].phone = phone;
      developers[devIndex].company = message;
      this.setState({ developers });
    } else if (firstName && lastName && email && phone && message) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, firstName, lastName, email, phone, message });
      this.setState({ developers });
    }

    this.refs.firstName.value = "";
    this.refs.lastName.value = "";
    this.refs.email.value = "";
    this.refs.phone.value = "";
    this.refs.message.value = "";
    this.refs.uid.value = "";
  };

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.firstName.value = developer.firstName;
    this.refs.lastName.value = developer.lastName;
    this.refs.email.value = developer.email;
    this.refs.phone.value = developer.phone;
    this.refs.company.value = developer.message;
  };
}
export default Contact;

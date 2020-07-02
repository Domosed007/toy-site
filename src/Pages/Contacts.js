import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Contact us</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email addres</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            <Form.Text>Some text</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

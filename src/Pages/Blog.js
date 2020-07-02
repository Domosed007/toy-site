import React, { Component } from "react";
import { Container, Media, Row, Col, ListGroup, Card } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                alt="img"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Dk_c6Kwi4JaIxYDlvE3NfQHaHa%26pid%3DApi&f=1"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Some text</p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                alt="img"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Dk_c6Kwi4JaIxYDlvE3NfQHaHa%26pid%3DApi&f=1"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Some text</p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                alt="img"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Dk_c6Kwi4JaIxYDlvE3NfQHaHa%26pid%3DApi&f=1"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>Some text</p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>Some text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

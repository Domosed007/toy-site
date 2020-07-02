import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h3 className="text-center m-4">Our team</h3>
          <CardDeck className="m-4">
            <Card border="primary" text="primary">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Some text</Card.Text>
              </Card.Body>
              <Button variant="primary ">About us</Button>
            </Card>
            <Card border="primary" text="primary">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Some text</Card.Text>
              </Card.Body>
              <Button variant="primary ">About us</Button>
            </Card>
            <Card border="primary" text="primary">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Some text</Card.Text>
              </Card.Body>
              <Button variant="primary ">About us</Button>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}

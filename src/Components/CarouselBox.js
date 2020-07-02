import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import forest1 from "../assets/forest1.jpg";
import forest2 from "../assets/forest2.jpg";
import forest3 from "../assets/forest3.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={forest1} alt="Brige" />
          <Carousel.Caption>
            <h3>Image</h3>
            <p>lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={forest2} alt="white" />
          <Carousel.Caption>
            <h3>Image</h3>
            <p>lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={forest3} alt="treesIng" />
          <Carousel.Caption>
            <h3>Image</h3>
            <p>lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function HeaderCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.cnn.com/api/v1/images/stellar/prod/181002113456-01-golden-gate-bridge-restricted.jpg?q=w_3653,h_2055,x_0,y_0,c_fill"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.cnn.com/api/v1/images/stellar/prod/181002113456-01-golden-gate-bridge-restricted.jpg?q=w_3653,h_2055,x_0,y_0,c_fill"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.cnn.com/api/v1/images/stellar/prod/181002113456-01-golden-gate-bridge-restricted.jpg?q=w_3653,h_2055,x_0,y_0,c_fill"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

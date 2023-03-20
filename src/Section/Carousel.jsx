import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function HeaderCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    {
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/181002113456-01-golden-gate-bridge-restricted.jpg?q=w_3653,h_2055,x_0,y_0,c_fill",
      alt: "first image",
      title: "first",
      description: "first description",
    },
    {
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/181002113456-01-golden-gate-bridge-restricted.jpg?q=w_3653,h_2055,x_0,y_0,c_fill",
      alt: "second image",
      title: "second",
      description: "second description",
    },
    {
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/181002113456-01-golden-gate-bridge-restricted.jpg?q=w_3653,h_2055,x_0,y_0,c_fill",
      alt: "third image",
      title: "third",
      description: "third description",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems.map((carouselItem) => (
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carouselItem.image}
            alt={carouselItem.alt}
          />
          <Carousel.Caption>
            <h3>{carouselItem.title}</h3>
            <p>{carouselItem.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function HeaderCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    {
      image: "zurag1.png",
      alt: "first image",
      title: "first",
      description: "first description",
    },
    {
      image: "zurag2.png",
      alt: "second image",
      title: "second",
      description: "second description",
    },
    {
      image: "zurag3.png",
      alt: "third image",
      title: "third",
      description: "third description",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="bg-black">
      {carouselItems.map((carouselItem) => (
        <Carousel.Item>
          <div className="d-flex container justify-content-evenly">
            <div className="d-flex align-items-center">
              <div>
                <h1
                  className="fw-bold"
                  style={{ color: "#1B5A7D", marginBottom: "30px" }}
                >
                  {carouselItem.title}
                </h1>
                <h3>{carouselItem.description}</h3>
              </div>
            </div>
            <div>
              <img
                src={carouselItem.image}
                alt=""
                style={{ maxHeight: "360px" }}
              />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

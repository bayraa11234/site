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
    "https://www.hassandentistry.com/wp-content/uploads/dental-bonding-header.jpg",
      alt: "first image",
      title: "first",
      description: "first description",
    },
    {
      image:
        "https://www.nolanriverdentalcenter.com/wp-content/uploads/find-a-dentist-header.jpg",
      alt: "second image",
      title: "second",
      description: "second description",
    },
    {
      image:
        "https://vdentalcare.in/wp-content/uploads/2021/06/csm_Dental-medical_3_2_e5278842a1.jpg",
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
            style={{backgroundPosition:"center",backgroundSize:"cover"}}
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

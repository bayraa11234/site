import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const RevealAnimation = () => {
  const boxRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    boxRef.current.forEach((box, index) => {
      gsap.from(box, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: box,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <div>
      <div className="box" ref={(el) => (boxRef.current[0] = el)}>
        Element 1
      </div>
      <div className="box" ref={(el) => (boxRef.current[1] = el)}>
        Element 2
      </div>
      <div className="box" ref={(el) => (boxRef.current[2] = el)}>
        Element 3
      </div>
    </div>
  );
};

export default RevealAnimation;

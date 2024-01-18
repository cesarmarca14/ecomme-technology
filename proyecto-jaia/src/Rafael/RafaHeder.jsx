import React from 'react'
import './rafaHeader.css'

import {Carousel} from 'react-bootstrap';


function RafaHeader() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img 
          // size-full md:size-auto
          src="./src/Rafael/imagen/carrusel01.jpg" 
          alt="First Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img src="./src/Rafael/imagen/carrusel02.jpg" alt="Second Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
        src="./src/Rafael/imagen/carrusel03.jpg" alt="Third Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default RafaHeader;


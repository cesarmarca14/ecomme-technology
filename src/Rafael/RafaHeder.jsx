import React from 'react'
import './RafaHeader.css'
import {Carousel} from 'react-bootstrap'
import Slide1 from './imagen/carrusel01.jpg'
import Slide2 from './imagen/carrusel02.jpg'
import Slide3 from './imagen/carrusel03.jpg'


function RafaHeader() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img 
          // size-full md:size-auto
          src={Slide1}
          alt="First Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img src={Slide2} alt="Second Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
        src={Slide3} alt="Third Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default RafaHeader;


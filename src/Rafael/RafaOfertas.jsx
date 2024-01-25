import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getDataofertasApi } from "./rafaApi.js";
import "./RafaOfertas.css";
import './rafaHeader.css'
import {Carousel} from 'react-bootstrap'


const RafaOfertas = () => {
  
  return (
    <>
<Carousel>
        <Carousel.Item interval={1000}>
          <br /><br /><br /><br /><br />
          <img 
          //  size-full md:size-auto
          src="./src/Rafael/imagen/carrusel01.jpg" 
          alt="First Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <br /><br /><br /><br /><br />
        <img src="./src/Rafael/imagen/carrusel02.jpg" alt="Second Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <br /><br /><br /><br /><br />
        <img 
        src="./src/Rafael/imagen/carrusel03.jpg" alt="Third Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row xs={1} md={3} className="g-4">
        {getDataofertasApi.map((getDataofertasApi, idx) => (
          <Col key={idx}>
            <Card style={{height: '580px', width: '470px'}}>
                <div className="rowDiv">
                <img  className="rowImg" src={getDataofertasApi.img}/> 
                </div>
              <Card.Body>
                <Card.Title>{getDataofertasApi.name}</Card.Title>
                <Card.Text>{getDataofertasApi.description}</Card.Text>
                <Card.Text>Codigo: {getDataofertasApi.id}</Card.Text>
                <Card.Text>Precio: US$ {getDataofertasApi.price}</Card.Text>
                {/* <Card.Link href="#">more info</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RafaOfertas;

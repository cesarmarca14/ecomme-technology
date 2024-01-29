import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getDataofertasApi } from "./rafaApi.js";
import "./RafaOfertas.css";
import {Carousel} from 'react-bootstrap'
import slide1 from './imagen/carrusel01.jpg'
import slide2 from './imagen/carrusel02.jpg'
import slide3 from './imagen/carrusel03.jpg'

const RafaOfertas = () => {
  // vamos crea una variable para guaradr la lista de ofertas
  //const [ofertas, setPokemons] = useState([]);

  // debemos crear una funcion que se encargue de ejecutar la peticion de la lista de ofertas
  // console.log("lista", getDataofertasApi);

  return (
    <>
    <Carousel>
        <Carousel.Item interval={1000}>
          <br /><br /><br /><br /><br />
          <img 
          //  size-full md:size-auto
          src={slide1} 
          alt="First Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <br /><br /><br /><br /><br />
        <img src={slide2}  alt="Second Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <br /><br /><br /><br /><br />
        <img 
        src={slide3} alt="Third Slide"/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row xs={1} md={3} className="g-4">
        {getDataofertasApi.map((getDataofertasApi, idx) => (
          <Col key={idx}>
            <Card style={{height: '630px'}}>
                <div className="rowDiv">
                <img  className="rowImg" src={getDataofertasApi.img}/> 
                </div>
              <Card.Body>
                <Card.Title>{getDataofertasApi.name}</Card.Title>
                <Card.Text>{getDataofertasApi.description}</Card.Text>
                <Card.Text>Codigo: {getDataofertasApi.id}</Card.Text>
                <Card.Text>Precio: US$ {getDataofertasApi.price}</Card.Text>
                <Card.Link href="#">more info</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RafaOfertas;

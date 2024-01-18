import React from "react";
// import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getDataofertasApi } from "./rafaApi.js";
import "./RafaOfertas.css";

// export const RafaOfertas = () => {

const RafaOfertas = () => {
  // vamos crea una variable para guaradr la lista de ofertas
  //const [ofertas, setPokemons] = useState([]);

  // debemos crear una funcion que se encargue de ejecutar la peticion de la lista de ofertas
  // console.log("lista", getDataofertasApi);

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {getDataofertasApi.map((getDataofertasApi, idx) => (
          <Col key={idx}>
            <Card style={{height: '630px'}}>
                <div className="rowDiv">
                <img  className="rowImg" src={getDataofertasApi.img}/> 
                </div>
              {/* <Card.Img variant="top" src={getDataofertasApi.img} /> */}
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

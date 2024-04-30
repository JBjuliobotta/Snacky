import React, { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import Carousel from "react-bootstrap/Carousel";
import grupo_jovenes from "C:/Users/esteb/Desktop/Proyecto final/Snacky/src/assets/grupo_jovenes.png";
import snackz from "../../assets/tablaSnacks.png";
import saladixPu from "../../assets/saladixP.png";
import rollingcodepublicidad from "../../assets/rollingcodepublicidad.png"
// //import "../css/home.css";
// //import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import CardProduct from "../sections/CardProduct";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const API = import.meta.env.VITE_API;
  const getProducts = async () => {
    try {
      const response = await axios.get(`${API}/products`);
      setProductos(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  /*const [favoritos, setFavoritos] = useState(Array(15).fill(false));

  const handleFavoritoClick = (index) => {
    const newFavoritos = [...favoritos];
    newFavoritos[index] = !newFavoritos[index];
    setFavoritos(newFavoritos);
  };*/

  console.log("currentuser", currentUser);

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="w-100"
            src={grupo_jovenes}
            alt="Jovenes comiendo snacks."
          />
          <Carousel.Caption>
            <h3>No podemos salvar el mundo, pero si tu fin de semana.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="w-100" src={snackz} alt="Tabla de snacks" />
          <Carousel.Caption>
            <h3>Un sin fin de sabores.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={saladixPu} alt="Saladix publicidad" />
        </Carousel.Item>
      </Carousel>

      {/*<div className="cards-container">
        {favoritos.map((isFavorite, index) => (
          <Card className="card-m" style={{ width: "12rem" }} key={index}>
            <Button
              variant="light"
              style={{ position: "absolute", top: 0, right: 0 }}
              onClick={() => handleFavoritoClick(index)}
            >
              {isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              )}
            </Button>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>*/}
      <Container className="text-center">
        <Row>
          {productos.map((element) => {
            return (
              <CardProduct
                producto={element}
                key={element._id}
              />
            );
          })}
        </Row>
      </Container>
      <Container className="container-fluid d-none d-sm-none d-md-block d-lg-block d-xl-block bg-light my-2">
          <img src={rollingcodepublicidad} alt="publicidad" />
      </Container>
    </>
  );
};

export default Home;

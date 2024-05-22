import React, { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import Carousel from "react-bootstrap/Carousel";
import grupo_jovenes from "../../assets/Grupo_Jovenes.png";
import snackz from "../../assets/tablaSnacks.png";
import saladixPu from "../../assets/saladixP.png";
import rollingcodepublicidad from "../../assets/rollingcodepublicidad.png"
import CardProduct from "../sections/CardProduct";
import { Container, Row, Col, Form } from "react-bootstrap";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [productFilter, setproductFilter] = useState("");
  const [searchTitle, SetSearchTitle] = useState("");
  const API = import.meta.env.VITE_API;
  const getProducts = async () => {
    try {
      let URL = `${API}/products`;
      if (productFilter !== "" && searchTitle==="") {
        URL = `${API}/products?filter=${productFilter}`;
      } else if (productFilter !== "" && searchTitle!=="") {
        URL = `${API}/products?filter=${productFilter}&search=${searchTitle}`;
      } else if (productFilter === "" && searchTitle!=="") {
        URL = `${API}/products?search=${searchTitle}`;
      }
      const response = await fetch(URL);
      const resJson = await response.json();
      setProductos(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    currentUser
  }, [productFilter, searchTitle]);




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


      <Container className="text-center">
        <h1 className="text-light fw-bolder my-3">Destacados</h1>
        <Row>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group className="mb-3 text-light" controlId="category">
                <Form.Label>Categorías</Form.Label>
                <Form.Select
                  aria-label="category"
                  name="category"
                  onChange={(e) => {
                    setproductFilter(e.currentTarget.value);
                  }}
                >
                  <option value="">Todas</option>
                  <option value="Papas">Papas</option>
                  <option value="Maní">Maní</option>
                  <option value="Nachos">Nachos</option>
                  <option value="Cheetos">Cheetos</option>
                  <option value="Varios">Varios</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            <Form onSubmit={(e)=>{
              e.preventDefault();
            }}>
              <Form.Group className="mb-3 text-light" controlId="search">
                <Form.Label>Búsqueda por Título</Form.Label>
                <Form.Control type="text" placeholder="Búsqueda" name="title" onChange={(e)=>{
                  SetSearchTitle(e.currentTarget.value);
                }} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-evenly">
          {productos.map((element) => {
            return <CardProduct producto={element} key={element._id} />;
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

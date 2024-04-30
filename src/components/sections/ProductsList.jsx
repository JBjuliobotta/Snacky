import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useEffect } from "react";
import Product from "./Product";
import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [productFilter, setproductFilter] = useState("");
  const API = import.meta.env.VITE_API;

  const getProducts = async () => {
    try {
      let URL = `${API}/products`;
      if (productFilter !== "") {
        URL = `${API}/products?filter=${productFilter}`;
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
  }, [productFilter]);

  console.log("filtro", productFilter);

  return (
    <>
      <div className="container-fluid">
        <div className="text-center text-light">
          <h1>Listado de Productos</h1>
        </div>
        <div className="container-fluid">
          <Row>
            <Col xs={12} md={6}>
              <Form>
                <Form.Group className="mb-3 text-light" controlId="category">
                  <Form.Label>Filtrar por Categoría</Form.Label>
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
              <div className="contaner m-3 py-3">
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigate("/create-products");
                  }}
                >
                  Crear Producto
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <Table striped bordered hover variant="light" responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Imágen</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((element) => {
              return (
                <Product
                  producto={element}
                  key={element._id}
                  getProducts={getProducts}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductsList;

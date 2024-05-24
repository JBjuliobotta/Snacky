import React from "react";
import { Card, Button, Col } from "react-bootstrap";
//import "../css/home.css";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ producto }) => {
  const navigate = useNavigate();
  return (
    <>
      <Col sm={6} md={4} lg={3} xl={2} className="mx-3 my-2 mx-md-1 my-md-2">
        <div className="cards-container  align-items-center">
          <Card
            className="align-items-center"
            style={{ width: "12rem", height: "22rem" }}
          >
            <Card.Img
              className="object-fit-cover mt-3"
              style={{ maxWidth: "8rem", maxHeight: "12rem" }}
              variant="top"
              src={producto.image}
            />
            <Card.Body>
              <Card.Title className="my-0">{producto.title}</Card.Title>
              <Card.Text className="my-0">${producto.price}</Card.Text>
              <Button
                variant="danger"
                className="mt-1"
                onClick={() => {
                  navigate(`/productdetail/${producto._id}`);
                }}
              >
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default CardProduct;

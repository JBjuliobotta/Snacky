import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ producto }) => {
  const navigate = useNavigate();
  return (
    <>
      <Col  className="d-flex flex-row my-2 justify-content-center">
        <div className="cards-container  align-items-center">
          <Card
            className="align-items-center"
            style={{ width: "12rem", height: "22rem" }}
          >
            <Card.Img
              className="object-fit-cover mt-3"
              style={{ maxWidth: "8rem", maxHeight: "12rem" }}
              variant="top"
              src={producto.image} alt={producto.title}
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

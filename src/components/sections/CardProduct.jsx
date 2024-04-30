import React from "react";
import { Card, Button, Col} from "react-bootstrap";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ producto }) => {
  const navigate = useNavigate();
  return (
    <>
      <Col xs={6} sm={6} md={4} lg={2} xl={2} className="mx-3 my-3 text-center">
        <div className="cards-container">
          <Card className="card-m" style={{ width: "12rem" }}>
            <Card.Img variant="top" src={producto.image} />
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <Card.Text>{producto.price}</Card.Text>
              <Button variant="primary" onClick={()=>{navigate(`/productdetail/${producto._id}`)}}>Ver más</Button>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default CardProduct;

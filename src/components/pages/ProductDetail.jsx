import "../css/details.css";
//import snack from "../../assets/snack_image.png";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState([]);
  const { id } = useParams();
  const API = import.meta.env.VITE_API;

  const getProduct = async () => {
    try {
      const response = await axios.get(`${API}/products/${id}`);
      setProducto(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <section>
        <div className="container-b">
          <div className="white-b">
            <img className="product-i" src={producto.image} alt="papas" />
            <div className="product-d">
              <h1>{producto.title}</h1>
              <p>${producto.price}</p>
              <p>{producto.description}</p>
            </div>
            <Button variant="danger" size="lg"
            className="w-50"
            onClick={() => {
              navigate("/*");
            }}>
              <i class="bi bi-cart"></i>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

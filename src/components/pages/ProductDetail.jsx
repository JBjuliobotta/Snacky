import "../css/details.css";
//import snack from "../../assets/snack_image.png";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const navigate=useNavigate();
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
        <div className="container-g flex">
          <div className="izquierda">
            <div className="imagen_principal">
              <img src={producto.image} alt="papas" />
            </div>
          </div>
          <div className="derecha">
            <h1 className="title">{producto.title}</h1>
            <p>{producto.price}</p>
            <p>{producto.description}</p>
            <Button className="button-p" onClick={()=>{navigate(`/*`)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

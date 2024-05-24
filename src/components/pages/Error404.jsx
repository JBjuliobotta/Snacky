import "../css/error404.css";
import error404 from "../../assets/Erro404_page.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="centered-button">
        <Button className="custom-button fw-bold my-3" onClick={()=>{navigate("/")}}>Volver al Inicio</Button>
      </div>

      <div className="image-container">
        <img src={error404} alt="error404_image" />
      </div>
    </div>
  );
};

export default Error404;
import "../css/error404.css";
import error404 from "../../assets/Erro404_page.png";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <div>
      <div className="centered-button">
        <Button className="custom-button">Volver al Inicio</Button>
      </div>

      <div className="image-container">
        <img src={error404} alt="error404_image" />
      </div>
    </div>
  );
};

export default Error404;

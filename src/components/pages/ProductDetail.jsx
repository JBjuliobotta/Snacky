import "../css/productoD.css";
import snack from "../../assets/snack_image.png";
import { Button, Form } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <section>
      <div className="container flex">
        <div className="izq">
          <div className="image-p">
            <img src={snack} alt="snack_image" />
          </div>
        </div>

        <div className="der">
          <h1 className="title">Papas Fritas Pringles</h1>
          <Form.Select aria-label="Default select example">
            <option>Selecciona una opción</option>
            <option value="1">Original</option>
            <option value="2">Sal y Vinagre</option>
            <option value="3">Crema agria y cebolla</option>
            <option value="4">Texas BBQ</option>
          </Form.Select>

          <p className="description">
            ¡Imagínate este escenario! Te encuentras en el sofá, listo para
            disfrutar de tu película favorita o pasar un rato agradable con
            amigos. ¿Qué falta? ¡Las Pringles! Estas deliciosas y crujientes
            papas te invitan a un viaje de sabor que nunca olvidarás. Cada tubo
            de Pringles es como una puerta de entrada a un mundo de sensaciones.
            Desde el primer bocado, te transportarán a lugares lejanos y
            exóticos.
          </p>

          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

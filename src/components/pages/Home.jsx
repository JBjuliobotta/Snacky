import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Carousel from "react-bootstrap/Carousel";
import grupo_jovenes from "../../assets/grupo_jovenes.png"
import snackz from "../../assets/tablaSnacks.png"
import saladixPu from "../../assets/saladixP.png"

const Home = () => {
  const { currentUser } = useContext(UserContext);

  console.log("currentuser", currentUser);

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
            <img className="w-100" src={grupo_jovenes} alt="Jovenes comiendo snacks." />
          <Carousel.Caption>
            <h3>No podemos salvar el mundo, pero si tu fin de semana.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img className="w-100"src={snackz} alt="Tabla de snacks" />
          <Carousel.Caption>
            <h3>Un sin fin de sabores.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="w-100"src={saladixPu} alt="Saladix publicidad" />
       </Carousel.Item>
      </Carousel>

      <Section>
        
      </Section>

    </>
  );
};

export default Home;

import {Link} from "react-router-dom";
import snackyIcon from "../assets/snacky-icono.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate=useNavigate();
    return (
        <div className="container-fluid py-4 bg-light border-top sticky-bottom">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <Link to="/" className="d-block text-center">
                        <img src={snackyIcon} alt="Snacky Icon" className="img-fluid" width="200"/>
                    </Link>
                </div>

                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <ul className="nav flex-column text-center">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link text-muted">Home</Link></li>
                        <li className="nav-item mb-2"><Link to="/contact"
                                                            className="nav-link text-muted">Contactos</Link></li>
                        <li className="nav-item mb-2"><Link to="/about-us" className="nav-link text-muted">Sobre Nosotros</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <h5 className="text-center">Contacto</h5>
                    <ul className="list-unstyled d-flex justify-content-center">
                        <li className="me-3"><i className="bi bi-facebook" onClick={()=>{navigate("/*")}}/></li>
                        <li className="me-3"><i className="bi bi-instagram" onClick={()=>{navigate("/*")}}/></li>
                        <li className="me-3"><i className="bi bi-twitter-x" onClick={()=>{navigate("/*")}}/></li>
                        <li className="me-3"><i className="bi bi-whatsapp" onClick={()=>{navigate("/*")}}/></li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <p className="text-muted mb-0">&copy; Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

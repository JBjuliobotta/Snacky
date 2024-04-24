import {NavLink} from "react-router-dom";
import snackyIcon from "../assets/snacky-icono.png";

const Footer = () => {
    return (
        <div className="container-fluid py-4 bg-light border-top sticky-bottom">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <NavLink to="/" className="d-block text-center">
                        <img src={snackyIcon} alt="Snacky Icon" className="img-fluid" width="200"/>
                    </NavLink>
                </div>

                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <h5 className="text-center">Links</h5>
                    <ul className="nav flex-column text-center">
                        <li className="nav-item mb-2"><NavLink to="/" className="nav-link text-muted">Home</NavLink></li>
                        <li className="nav-item mb-2"><NavLink to="/features"
                                                            className="nav-link text-muted">Features</NavLink></li>
                        <li className="nav-item mb-2"><NavLink to="/about" className="nav-link text-muted">About</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <h5 className="text-center">Contacto</h5>
                    <ul className="list-unstyled d-flex justify-content-center">
                        <li className="me-3"><i className="bi bi-facebook"/></li>
                        <li className="me-3"><i className="bi bi-instagram"/></li>
                        <li className="me-3"><i className="bi bi-twitter-x"/></li>
                        <li className="me-3"><i className="bi bi-whatsapp"/></li>
                        <li className="me-3"><i className="bi bi-youtube"/></li>
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

import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Login from "./sections/Login";
import UserContext from "./context/UserContext";
import Registration from "./sections/Registration";

const NavBar = () => {
  const { currentUser, setCurrentUser, RemoveAuth } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showReg, setShowReg] = useState(false)
  const handleShow = () => {
    setIsOpen(true);
  };
  const handleShowReg = () => {
    setShowReg(true);
  };
  const handleCloseReg = () => {
    setShowReg(false);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const Logout = () => {
    RemoveAuth();
    setCurrentUser(undefined);
  };

  return (
    <>
      <Registration showReg={showReg} handleCloseReg={handleCloseReg}/>
      <Login isOpen={isOpen} handleClose={handleClose} />
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="light"
        sticky="top"
      >
        <Container>
          <NavLink to="/">
            <img
              src="../src/assets/snacky-icono.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={"nav-link"}>
                Inicio
              </NavLink>
              <NavLink to="/*" className={"nav-link"}>
                Destacados
              </NavLink>
              <NavLink to="/contact" className={"nav-link"}>
                Contacto
              </NavLink>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Papas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Nachos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Cheetos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Maní</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Varios</NavDropdown.Item>
              </NavDropdown>
              {currentUser !== undefined && currentUser.role === "Admin" && (
                <NavLink to="/administration" className={"nav-link"}>
                  Administración
                </NavLink>
              )}
            </Nav>
            <Nav>
            {currentUser === undefined && (
                <Button variant="primary" className="mx-2" onClick={handleShowReg}>
                  Registrarse
                </Button>
              )}
              {currentUser === undefined && (
                <Button variant="primary" className="mx-2" onClick={handleShow}>
                  Ingresar
                </Button>
              )}
              {currentUser !== undefined && (
                <Button variant="secondary" className="mx-2" onClick={Logout}>
                  Salir
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

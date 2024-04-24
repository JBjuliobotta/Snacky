import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Login from "./sections/Login";
import UserContext from "./context/UserContext";

const NavBar = () => {
  const { currentUser, setCurrentUser, RemoveAuth } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const Logout=()=>{
    RemoveAuth();
    setCurrentUser(undefined);
  }

  return (
    <>
      <Login isOpen={isOpen} handleClose={handleClose} />
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={"nav-link"}>
                Inicio
              </NavLink>
              {currentUser !== undefined && currentUser.role === "Admin" && (
                <NavLink to="/administration" className={"nav-link"}>
                  Administración
                </NavLink>
              )}
            </Nav>
            <Nav>
              {(currentUser===undefined)&&<Button variant="primary" className="mx-2" onClick={handleShow}>
                Login
              </Button>}
              {(currentUser!==undefined)&&<Button variant="secondary" className="mx-2" onClick={Logout}>
                Logout
              </Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

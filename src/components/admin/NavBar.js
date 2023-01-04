import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiLogOut } from "react-icons/bi";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
function NavBar() {
  const [show, setShow] = useState(true);
    const naviagte = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="admin-nav-bar bg-dark">
        <Container>
          <Navbar.Brand className="admin-brand">David Ellis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <div className="d-flex justify-content-center align-items-center">
                <Avatar className="mx-4">
                  {/* <FolderIcon /> */}
                </Avatar>
              
                <a className="d-flex text-decoration-none" style={{cursor:"pointer"}} onClick={()=>naviagte("/admin")}>
                  <BiLogOut size={40} color="white" />
                  <p style={{ color: "white", margin: "6px" }}>Logout</p>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

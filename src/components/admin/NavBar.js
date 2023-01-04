import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiLogOut } from "react-icons/bi";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import Typed from 'react-typed';


function NavBar() {
  const [show, setShow] = useState(true);
  const naviagte = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="admin-nav-bar bg-dark">
        <div className="container-fluid">
          <Navbar.Brand className="admin-brand">              
              <Typed
                className='typed text-light text-black text-4xl font-bold font-poppins ml-8 '
                strings={['David Ellis']}
                typeSpeed={120}
                backSpeed={50}
                loop
              />
              {/* <p className="text-black ml-8  text-base font-semibold mt-2 font-poppins "> Admin CMS</p> */}
            {/* David Ellis */}
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <div className="d-flex justify-content-center align-items-center">
                <Avatar className="mx-4">
                  {/* <FolderIcon /> */}
                </Avatar>

                <a className="d-flex text-decoration-none" style={{ cursor: "pointer" }} onClick={() => naviagte("/admin")}>
                  <BiLogOut size={40} color="white" />
                  <p style={{ color: "white", margin: "6px" }}>Logout</p>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <div className="d-flex justify-content-center align-items-center">
              <Avatar className="mx-4">
                {/* <FolderIcon /> */}
              </Avatar>

              <a className="d-flex text-decoration-none" style={{ cursor: "pointer" }} onClick={() => naviagte("/admin")}>
                <BiLogOut size={40} color="white" />
                <p style={{ color: "white", margin: "6px" }}>Logout</p>
              </a>
            </div>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;

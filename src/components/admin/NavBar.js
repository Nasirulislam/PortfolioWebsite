
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./../../Assets/images/4.jpg"
import { BiLogOut } from 'react-icons/bi';
function NavBar() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Navbar bg="light" expand="lg" className='admin-nav-bar'>
                <Container>
                    <Navbar.Brand href="#home" className='admin-brand'>David Ellis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link> */}
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        </Nav>
                        <Nav>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='logo-image' style={{ width: '100px', height: '50px' }}>
                                    <img className='rounded-circle img-fluid' style={{ height: '50px' }} src={logo} />
                                </div>
                                <BiLogOut size={30} color="white"/>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar
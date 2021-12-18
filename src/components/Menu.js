import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap"; 


const Menu = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">NRS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">STATIONS</Nav.Link>
                        <Nav.Link href="#link">CATEGORIES</Nav.Link>
                        <Nav.Link href="#link"></Nav.Link> 
                        <Nav.Link href="#link">FAVORITES</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Menu
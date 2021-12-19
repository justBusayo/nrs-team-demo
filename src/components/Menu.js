import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">NRS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/stations">STATIONS</Nav.Link>
                        <Nav.Link href="category">CATEGORIES</Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>
                        <Nav.Link href="#link">FAVORITES</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Menu
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, } from 'react-bootstrap';

function Header() {

    const css = {
        marginBottom: '58px'   // To make loaded components viewable.
    }

    return (
        <Container style={css}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">jonestroy.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;
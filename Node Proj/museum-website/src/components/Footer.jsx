import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f8f9fa' }}>
            <Navbar bg="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Facebook</Nav.Link>
                        <Nav.Link href="#features">Instagram</Nav.Link>
                        <Nav.Link href="#pricing">Twitter</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </footer>
    );
}

export default Footer;

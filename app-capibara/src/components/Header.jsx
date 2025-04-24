import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="/img/logo.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-left"
                    />{' Capibara POKE '}
                    
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Orders</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>)
}

export default Header
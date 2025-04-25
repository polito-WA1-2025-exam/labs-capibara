import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark fixed-top">
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        alt="Capibara Logo"
                        src="/img/logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-2"
                    />
                    <span>Capibara POKE</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#orders">Orders</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
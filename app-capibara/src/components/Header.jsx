import { Container, Navbar, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router'
import Footer from './Footer';

function Layout() {
    return (
        <>
        <Navbar expand="lg" className="d-flex bg-dark navbar-dark fixed-top position-absolute top-0" >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        alt="Capibara Logo"
                        src="/img/logo_clean.png"
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

        <Container>

        </Container>

        <Container>
            <Outlet/>
        </Container>
        
        
        <Footer/>

        </>
    );
}

export default Layout;
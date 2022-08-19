import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import logo from '../assets/img/castbox_logo-text.png'


const NavTop = () => {
    return (
        <Navbar expand="lg" className="App-link text-secondary fs-6 fw-bold" variant="dark">
            <Container>
                <Navbar.Brand href="/" className=" img">
                    <img src={logo} className="w-50 " alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto gap-2 " >
                        <Nav.Link href="#home">Get the App</Nav.Link>
                        <Nav.Link href="#link">For Podcaster</Nav.Link>
                        <Nav.Link href="#home">Livecast</Nav.Link>
                        <Nav.Link href="#link">Top Shows</Nav.Link>
                        <Nav.Link href="#home">Blog</Nav.Link>
                        <Nav.Link href="#link">Listen</Nav.Link>
                        <Nav.Link href="#link" className='ms-5' >Sign/SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavTop;
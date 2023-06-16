// HOOKS & ROUTER DOM
import { useNavigate } from 'react-router-dom';

// BOOTSTRAP COMPONENTS
import { Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo_black from "../../Assets/Images/gigforge-black.png";
import logo_green from "../../Assets/Images/gigforge-green.png";

import "./Navbar.css";

const MainNavbar = () => {
  const navigate = useNavigate();
  return <>
    {/* NAVBAR */}
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container className='align-items-baseline'>
        <Navbar.Brand href="#home">
          <img src={logo_green} alt="" style={{ maxWidth: 100}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-baseline">
            <Nav.Item className='ms-3 nav-hoverable'>
              <h6>Get Start</h6>
            </Nav.Item>
            <Nav.Item className='ms-3 nav-hoverable'>
              <h6>Explore</h6>
            </Nav.Item>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className='h6 ms-3 text-dark'>
              <NavDropdown.Item href="#action/3.1">CATEGORY 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">CATEGORY 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">CATEGORY 3</NavDropdown.Item>

            </NavDropdown>
            <Nav.Item className='mx-3 nav-hoverable'>
              <h6>Register</h6>
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-success sign-in" className='py-1 px-3 main-nav-sign-in' onClick={() => navigate("/sign-in")}>Sign-in</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
}

export default MainNavbar;
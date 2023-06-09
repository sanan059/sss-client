// REACT BOOTSTRAP COMPONENTS
import {Button , Container, Navbar} from 'react-bootstrap';

import './Navbar.css'

const MainNavbar = () => {
  return <>
    {/* NAVBAR */}
    <Navbar bg="dark" sticky='top' className='py-4 navbar-transparent' expand="lg">
      <Container>
        <Navbar.Brand href='#' className='text-light'>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex ms-auto">
            <Button variant="outline-light me-2">Register</Button>
            <Button variant="outline-light">Sign-in</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
}

export default MainNavbar;
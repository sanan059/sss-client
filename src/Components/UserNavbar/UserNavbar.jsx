// HOOKS & ROUTER DOM
import { useNavigate } from 'react-router-dom';

// BOOTSTRAP COMPONENTS
import {Button , Container, Navbar} from 'react-bootstrap';
// USERNAVBAR CSS
import './UserNavbar.css'

const UserNavbar = () => {
  const navigate = useNavigate();
  return <>
    {/* NAVBAR */}
    <Navbar className='py-4 navbar-transparent' expand="lg">
      <Container>
        <Navbar.Brand href='#' className='fw-bold'>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex ms-auto user-nav-buttons">
            <Button variant='light' className=" user-nav-buttons me-2" onClick={() => { navigate("/dashboard/services")}}>Services</Button>
            <Button variant='light' className=" user-nav-buttons me-2">Orders</Button>
            <Button variant='light' className=" user-nav-buttons me-2">Messages</Button>
            <Button variant='light' className=" user-nav-buttons me-2">Earnings</Button>
            <Button variant='light' className=" user-nav-buttons me-2">Notifications</Button>
            {/* <Button variant="" onClick={() => navigate("/sign-in")}>Sign-in</Button> */}
            <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 40 }}
                />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default UserNavbar;
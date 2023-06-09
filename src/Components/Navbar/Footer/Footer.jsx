// REACT BOOTSTRAP COMPONENTS
import {Button , Container, Navbar} from 'react-bootstrap';

const Footer = () => {
  return <>
    {/* FOOTER */}
    <Navbar bg="dark" className='text-center text-lg-left' expand="lg" fixed="bottom">
        <Container>
          <div className='text-center p-3 text-light'>
            &copy; {new Date().getFullYear()} Copyright:
            <a className='text-light' href='https://mdbootstrap.com/'> MDBootstrap.com</a>
          </div>
        </Container>
      </Navbar>
  </>
}

export default Footer;
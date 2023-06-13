// REACT BOOTSTRAP COMPONENTS
import {Container, Navbar} from 'react-bootstrap';

const Footer = () => {
  return <>
    {/* FOOTER */}
    <Navbar bg="dark" className='text-lg-left' expand="lg">
        <Container>
          <div className='p-3 text-light'>
            &copy; {new Date().getFullYear()} Copyright:
            <a className='text-light' href='https://ewdtech.com/'> ewdtech.com</a>
          </div>
        </Container>
      </Navbar>
  </>
}

export default Footer;
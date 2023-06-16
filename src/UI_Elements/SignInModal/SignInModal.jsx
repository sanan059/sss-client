// HOOKS
import { useState } from 'react';

// REACT COMPONENTS AND CUSTOM CSS
import { Modal, Button } from 'react-bootstrap';
import "../Banner/Banner.css"

// COMPONENTS
import SignIn from '../../Pages/SignIn/SignIn';

const SignInModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>

    <Button variant="outline-success" className='app-buttons-out' size="lg" onClick={handleShow}>
      Become Seller 
    </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignIn/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>

  </>
}

export default SignInModal;
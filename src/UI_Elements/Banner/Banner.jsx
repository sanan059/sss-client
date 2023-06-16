

// BOOTSTRAP COMPONENT AND ICONS
import { Carousel, Col, Container, Row, Form, InputGroup, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

// BANNER CSS
import './Banner.css';
import SignInModal from '../SignInModal/SignInModal';

// COMPONENTS

const Banner = () => {

  return <>
    {/* BANNER */}

    <Carousel indicators={false} slide={true} >
      <Carousel.Item>
        <img
          className="d-block w-100 banner-position"
          src="bg-hero-1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <Container>
            <Row className='banner-text'>
              <Col >
                <h1>Find the right Influncer Service here</h1>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className='outline-focus'
                  />
                  <Button className='app-buttons-in' id="button-addon2">
                    <AiOutlineSearch />
                  </Button>
                </InputGroup>
                <div className="mt-4">
                  <Button variant="success" className='me-3 app-buttons-in' size="lg">
                    Hire Influencers
                  </Button>{' '}
                  <SignInModal />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-position"
          src="bg-hero-2.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Container>
            <Row className='banner-text'>
              <Col >
                <h1>Find the right Youtuber Service here</h1>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className='outline-focus'
                  />
                  <Button variant="success" id="button-addon2">
                    <AiOutlineSearch />
                  </Button>
                </InputGroup>
                <div className="mt-4">
                  <Button variant="success" className='me-3 app-buttons-in' size="lg">
                  Hire Influencers
                  </Button>{' '}
                  <SignInModal />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-position"
          src="bg-hero-3.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Container>
            <Row className='banner-text'>
              <Col >
                <h1>Find the right Instagram Service here</h1>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className='outline-focus'
                  />
                  <Button variant="success" id="button-addon2">
                    <AiOutlineSearch />
                  </Button>
                </InputGroup>
                <div className="mt-4">
                  <Button variant="success" className='me-3 app-buttons-in' size="lg">
                  Hire Influencers
                  </Button>{' '}
                  <SignInModal />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
}

export default Banner;
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
  return <>
    {/* BANNER */}

    <Carousel style={{minHeight: '100vh'}} controls={false} indicators={false} slide={true} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bg-hero-1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <Container>
            <Row>
              <Col>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bg-hero-2.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Container>
            <Row>
              <Col>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bg-hero-3.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Container>
            <Row>
              <Col>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
}

export default Banner;
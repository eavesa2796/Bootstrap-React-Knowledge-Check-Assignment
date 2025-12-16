import Carousel from "react-bootstrap/Carousel";

function HeroImage() {
  return (
    <Carousel className="mb-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/2400/350?random=1"
          alt="First slide"
        />
        <Carousel.Caption className="caption-text">
          <h3>First Slide Label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/2400/350?random=2"
          alt="Second slide"
        />
        <Carousel.Caption className="caption-text">
          <h3>Second Slide Label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/2400/350?random=3"
          alt="Third slide"
        />
        <Carousel.Caption className="caption-text">
          <h3>Third Slide Label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroImage;

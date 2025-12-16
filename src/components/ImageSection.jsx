import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function ImageSection() {
  return (
    <Row className="my-4">
      <Col className="text-center">
        <Image
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=70"
          roundedCircle
          alt="Circular profile example"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <p className="text-muted mt-2 mb-0">Dr. Jane Smith</p>
      </Col>
    </Row>
  );
}

export default ImageSection;

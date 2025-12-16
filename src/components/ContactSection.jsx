import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function ContactSection() {
  return (
    <Row className="mb-4">
      <Col xs={12} className="text-center">
        <h2>Contact Us</h2>
        <p className="text-muted">We would love to hear from you!</p>
      </Col>
      <Col md={6} className="mx-auto">
        <Form>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your message here..."
              required
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
export default ContactSection;

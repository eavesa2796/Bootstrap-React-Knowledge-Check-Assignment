import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegistrationForm() {
  // State to track if the form has been validated
  const [wasValidated, setWasValidated] = useState(false);

  // State to store all form input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  // This function runs when the form is submitted
  function handleSubmit(e) {
    // Stop the page from refreshing
    e.preventDefault();

    // Get the form element
    const form = e.currentTarget;

    // Check if all required fields are filled out correctly
    if (!form.checkValidity()) {
      // If form is invalid, show error messages
      e.stopPropagation();
      setWasValidated(true);
      return; // Stop here, don't submit
    }

    // If we get here, the form is valid!
    setWasValidated(true);

    // Show what was submitted (in real app, you'd send to a server)
    console.log("Form submitted with:", { firstName, lastName, email, terms });
    // Note: Never log passwords in production!
    alert(
      `Form is valid! Submitted:\nName: ${firstName} ${lastName}\nEmail: ${email}`
    );

    // Clear the form after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setTerms(false);
    setWasValidated(false);
  }

  return (
    <Row className="justify-content-center">
      <Col lg={12}>
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="h4 mb-3">Registration Form</h2>

            <Form noValidate validated={wasValidated} onSubmit={handleSubmit}>
              <Row className="g-3">
                {/* First Name Input */}
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      First name is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Last Name Input */}
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Last name is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Email Input */}
                <Col md={12}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Password Input */}
                <Col md={12}>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={6}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Password is required (min 6 characters).
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Terms Checkbox */}
                <Col xs={12}>
                  <Form.Group controlId="terms">
                    <Form.Check
                      type="checkbox"
                      name="terms"
                      label="I agree to the terms and conditions"
                      checked={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                      required
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </Col>

                {/* Submit Button */}
                <Col xs={12}>
                  <Button type="submit" variant="success">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default RegistrationForm;

import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row className="text-center">
            <h3>
              Also check out my{" "}
              <a 
                href="https://www.youtube.com/channel/UCriN3IyE0tI6xji0QK-XC8Q" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                YouTube
              </a>
              {"? <3"}
            </h3>
          </Row>
        </div>
      </Col>
  )
}

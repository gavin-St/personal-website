import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import faireLogo from "../assets/img/faire-logo.png";
import chatsimpleLogo from "../assets/img/chatsimple-logo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Experience</h2>
                <div className="mb-8 flex items-start">
                  <Row className="mb-4">
                    <Col size={4} md={2} className="d-flex justify-content-center">
                    <img 
                      src={faireLogo} 
                      alt="Faire Logo" 
                      className="img-fluid" 
                      style={{ maxWidth: '300px', height: 'auto', objectFit: 'contain' }}
                    />

                    </Col>
                    <Col size={12} md={9}>
                      <h3 className="mt-3 h5 font-weight-bold">Faire</h3>
                      <p className="font-weight-medium">Software Engineer Intern</p>
                    </Col>
                      <p className="small">Sep 2024 - Dec 2024 (Backend Engineer)</p>
                      <ul className="list-unstyled">
                        <li className="small">• Led Product Display Feature Experiment: coordinated with DS and Frontend to improve product attributes
and A/B test retailer impressions.</li>
                      </ul>

                      <p className="small">Jan 2024 - Apr 2024 (Frontend Engineer)</p>
                      <ul className="list-unstyled">
                        <li className="small">• Engineered critical user surfaces in Faire’s pilot AI recommendation engine for product titles/descriptions.</li>
                      </ul>
                  </Row>
                </div>
              
                <div className="mb-8 flex items-start">
                  <Row className="mb-4">
                    <Col size={4} md={2}>
                      <img 
                        src={chatsimpleLogo} 
                        alt="Chatsimple logo" 
                        className="img-fluid" 
                        style={{ maxWidth: '300px', height: 'auto', objectFit: 'contain' }}
                      />
                    </Col>
                    <Col size={12} md={9}>
                      <h3 className="h5 font-weight-bold">Chatsimple Ltd</h3>
                      <p className="font-weight-medium">Software Engineer Intern</p>
                    </Col>
                      <p className="small">May 2023 - Aug 2023</p>
                      <ul className="list-unstyled -mt-8">
                        <li className="small">• Led the full-stack development of Chatsimple’s AI Chatbot product.</li>
                      </ul>
                  </Row>
                </div>

              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

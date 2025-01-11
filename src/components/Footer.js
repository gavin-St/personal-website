import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/gavin-logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-logo.png";
import navIcon3 from "../assets/img/mail-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/gavin-song-a90497227/" target="_blank" class="inline-block align-middle"><img src={navIcon1} alt="linkedin" /></a>
            <a href="https://github.com/gavin-St" target="_blank" class="inline-block align-middle"><img src={navIcon2} alt="github" /></a>
            <a href="mailto:g2song@uwaterloo.ca" class="inline-block align-middle"><img src={navIcon3} alt="mail to" /></a>
            </div>
            <p>Property of Gavin Song. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

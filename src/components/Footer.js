import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
            <h5>Design & Developed by Akshay</h5>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/akshaymgowda"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://instagram.com/akshaygowda565" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

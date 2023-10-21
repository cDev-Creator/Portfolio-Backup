import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

/* import navIcon1 from "../assets/img/nav1.png";
import navIcon2 from "../assets/img/nav2.png";
import navIcon3 from "../assets/img/nav3.png"; */

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-start" ></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div> */}
            <p className="copyright">Built and designed by Natalie McCoy.<p> All Rights Reserved. ©</p>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
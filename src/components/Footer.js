import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/github-mark-white.svg";
import navIcon3 from "../images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/luisa-quintero-990b2a258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgNYpLdtDRv2Kl%2BAZYYI%2FXg%3D%3D"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Luquintero24"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/luquintero24/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
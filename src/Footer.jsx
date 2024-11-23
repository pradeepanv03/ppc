import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import "./Footer.css"
export default function Footer() {

  return (
    <footer className=" text-white py-5" style={{background:'#001f3f'}}>

    <Container className='mt-2'>
    <Row>
      {/* Column 1: About Us */}
      <Col md={3}>
        <h5>About Us</h5>
        <ul className="list-unstyled">
          <li>About us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </Col>

      {/* Column 2: How to Sell Fast */}
      <Col md={3}>
        <h5>How to Sell Fast</h5>
        <ul className="list-unstyled">
          <li>Buy Now on PUC</li>
          <li>Price Plan</li>
          <li>Promote your ads</li>
        </ul>
      </Col>

      {/* Column 3: Help & Support */}
      <Col md={3}>
        <h5>Help & Support</h5>
        <ul className="list-unstyled">
          <li>Live Chat</li>
          <li>FAQ</li>
          <li>Contact us</li>
          <li className='hhh'>Delete My Account</li>
        </ul>
      </Col>

      {/* Column 4: Follow Us On */}
      <Col md={3}>
        <h5 >Follow Us On</h5>
        <div className="social-icons">
          <a href="https://www.facebook.com" className="text-white ">
            <FaFacebook size={30} style={{color:"#ffc631", marginRight:"5px"}} />
          </a>
          <a href="https://www.instagram.com" className="text-white ">
            <FaInstagram size={30} style={{color:"#ffc631", marginRight:"5px"}} />
          </a>
          <a href="https://www.youtube.com" className="text-white ">
            <FaYoutube size={30} style={{color:"#ffc631", marginRight:"5px"}}/>
          </a>
          <a href="https://www.linkedin.com" className="text-white">
            <FaLinkedin size={30} style={{color:"#ffc631"}}/>
          </a>
        </div>
      </Col>
    </Row>
  </Container>
  </footer>

)
}

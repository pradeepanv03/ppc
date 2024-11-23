import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import ppclogo from "./Assest/ppclogo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [expand, updateExpanded] = useState(false);
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate('/login');
  };
  return (
    <header>
      {/* Top Bar */}
      <div className="text-white py-2" style={{backgroundColor: "#ffc631"}}>
  <Container>
    <Row className="align-items-center">
      <Col xs={12} md={6} className="d-flex align-items-center justify-content-center justify-content-md-start">
        <span style={{color: "#001f3f"}}>Need Help?</span>
        <FaPhoneAlt className="mx-2" style={{color: "#001f3f"}}/>
        <span style={{color: "#001f3f"}}>Call: +91 0413-2222244</span>
      </Col>
      <Col xs={12} md={6} className="d-flex align-items-center justify-content-center justify-content-md-end">
        <Button  size="sm" className="me-2" onClick={handleLoginPage}>Login</Button>
        <Button  size="sm" className="me-2">Register</Button>
        <FaGlobe className="mx-2" style={{color: "#001f3f"}}/>
        <span style={{color: "#001f3f"}}>English</span>
      </Col>
    </Row>
  </Container>
</div>

{/* <div className="d-flex align-items-center py-2">
  <Container>
    <Row className="align-items-center">
      <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-md-0">
        <FaGlobe className="mx-2" />
        <span>New York, USA</span> |
        <span className="mx-2">Melbourne City, Australia</span>
      </Col>
      
      <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-center align-items-center mb-2 mb-md-0">
        <FaClock className="mx-2" />
        <span>Monday to Friday 9:00am - 6:00pm</span>
      </Col>
      
      <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end align-items-center">
        <Button variant="danger" className="ms-3">REQUEST A CALL</Button>
      </Col>
    </Row>
  </Container>
</div> */}

      {/* Main Navbar */}
      <Navbar style={{backgroundColor:"#001f3f"}} expand="lg">
        <Container>
      
          <Navbar.Brand href="/" className="text-danger">
            <img src={ppclogo} alt="Logo" style={{ height: '40px' }} />
          </Navbar.Brand>
          <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"style={{color: "white "}}>HOME</Nav.Link>
              <Nav.Link href="/myaccount" style={{color: "white "}}>My Account</Nav.Link>
              <Nav.Link href="/allproperty"style={{ color: "white "}}>All Property</Nav.Link>
              <Nav.Link href="#cars"style={{ color: "white "}}>Search</Nav.Link>
              <Nav.Link href="#gallery"style={{color: "white "}}>Pricing</Nav.Link>
              <Nav.Link href="#shop" style={{color: "white "}}>Bradford</Nav.Link>
            </Nav>
            <Link to="/">
  <Button style={{ backgroundColor: "#ffc631", color: "#001f3f", marginRight: "5px" }}>Add Listing</Button>
</Link>
            {/* <Button style={{backgroundColor: "#ffc631", color: "#001f3f ", marginRight: "5px"}} className="">Add Listing</Button> */}
            <Link to="/">
            <Button style={{backgroundColor: "#ffc631", color: "#001f3f "}} className="">Buyer assistance</Button>
            </Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./Assest/img1.jpg"
export default function Property () {
  return (
    <div style={{marginBottom:"100px",}}>
    
    <Container fluid className="my-5">
      <Row className="g-4">
        {/* Left Side - Form */}
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <div className="d-flex justify-content-center mb-3">
              <Button style={{background:"#3a79f9"}} className="me-2 active">Property For Sale</Button>
              <Button variant="dark">Property On Rent</Button>
            </div>
            <Form>
              <Form.Group controlId="country" className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Select>
                  <option>Select Country</option>
                  <option value="country1">Country 1</option>
                  <option value="country2">Country 2</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="city" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Select>
                  <option>Select City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="propertyId" className="mb-3">
                <Form.Label>Search by Property ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Property ID" />
              </Form.Group>
              <Form.Group controlId="address" className="mb-3">
                <Form.Label>Search by Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
              </Form.Group>
              <Form.Group controlId="area" className="mb-3">
                <Form.Label>Area</Form.Label>
                <Form.Range min="100" max="500" />
              </Form.Group>
              <Form.Group controlId="price" className="mb-4">
                <Form.Label>Price Filter</Form.Label>
                <Form.Range min="1000" max="8000" />
              </Form.Group>
              <div className="d-grid">
                <Button style={{background:"#3a79f9"}} size="lg">Search</Button>
              </div>
            </Form>
          </div>
        </Col>

        {/* Right Side - Image */}
        <Col xs={12} md={6} className="d-flex flex-column  justify-content-center">
        <h2 className="text-start mb-4">Our Villa Photos</h2>
        <img src={img1} alt="Villa" className="img-fluid" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

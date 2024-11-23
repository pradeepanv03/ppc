import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaBed, FaBath, FaCar, FaVectorSquare } from 'react-icons/fa';
export default function RentalProperty() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img
      variant="top"
      src="https://via.placeholder.com/300x200" // Replace with actual image URL
      alt="Property Image"
    />
    <Card.Body>
      <Card.Title>
        <span style={{ color: '#ff6b6b', fontSize: '1.5rem' }}>Rs.25,650</span>{' '}
        <small className="text-muted">Guide Price</small>
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Headland Semi Detached House For Sale
      </Card.Subtitle>
      <Card.Text className="text-muted">
        <small>London, United Kingdom</small>
      </Card.Text>
      <Row className="text-muted">
        <Col className="d-flex align-items-center">
          <FaBed className="me-1" /> 3 Bedrooms
        </Col>
        <Col className="d-flex align-items-center">
          <FaBath className="me-1" /> 3 Bathrooms
        </Col>
      </Row>
      <Row className="text-muted">
        <Col className="d-flex align-items-center">
          <FaCar className="me-1" /> 2 Garage
        </Col>
        <Col className="d-flex align-items-center">
          <FaVectorSquare className="me-1" /> 1000 SqFt
        </Col>
      </Row>
    </Card.Body>
  </Card>  )
}

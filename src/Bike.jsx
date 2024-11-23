import React from 'react'
import { Card, Row, Col , Button} from 'react-bootstrap';
import { FaRoad, FaGasPump, FaUser, FaCalendarAlt } from 'react-icons/fa';
import mt from "./Assest/mt.png"
import { Link } from 'react-router-dom';
export default function Bike() {

      const properties = [
    {
        price: "Rs.21,500",
        title: "Mt-15",
        location: "London, Pondy",
        Kilometer: 4,
        Petrol: "petrol",
        owner: "Single",
        Duration: '7 months',
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        status: "For Sale",
    },
    {
        price: "Rs.28,000",
        title: "pulsor 150",
        location: "London, Pondy",
        Kilometer: 4,
        Petrol: "petrol",
        owner: "Single",
        Duration: '1.8 years',
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        status: "For Sale",
    },
    {
        price: "Rs.42,500",
        title: "Yamaha r15",
        location: "London, pondy",
        Kilometer: 5000,
        Petrol: "petrol",
        owner: "Single",
        Duration: '1.5 years',
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        status: "Sold",
    },
    {
        price: "Rs.30,000",
        title: "Splinder",
        location: "Chennai, Tamil nadu",
        Kilometer: 19000,
        Petrol: "petrol",
        owner: "Single",
        Duration: '2 years',
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        status: "For Sale",
    },
    {
        price: "Rs.25,650",
        title: "Royal enfield",
        location: "Ig square, Pondy",
        Kilometer: 3000,
        Petrol: "petrol",
        owner: "Single",
        Duration: '5 months',
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        status: "For Sale",
    },
    {
        price: "Rs.45,000",
        title: "Yamaha FZ",
        location: "villupuram, Tamil Nadu",
        Kilometer: 5500,
        Petrol: "petrol",
        owner: "Single",
        Duration: '14 months',
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        status: "For Sale",
    },
];

  return (
    <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                <h2 style={{ color: '#001f3f', textAlign: 'center' }}>Bikes for Sales </h2>
                <Link to="/">
                <Button className="fbtn mt-3 mt-md-0">Show More BIKES</Button></Link>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <span className="text-danger">FEATURED FOR SALE</span>
                <span className="mx-3">|</span>
                <span>CURRENT TO RENT</span>
            </div>

            <Row>
                {properties.map((property, index) => (
                    <Col
                        key={index}
                        xs={12}    // Full width on mobile
                        sm={6}     // 2 columns on tablets
                        md={4}     // 3 columns on desktop
                        className="mb-4 d-flex justify-content-center"
                    >
                        <Card style={{ width: '100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={mt} alt="Property Image" />
                            <Card.Body>
                                <Card.Title>
                                    <span style={{ color: '#ff6b6b', fontSize: '1.5rem' }}>
                                        {property.price}
                                    </span>{' '}
                                    <small className="text-muted">Guide Price</small>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {property.title}
                                </Card.Subtitle>
                                <Card.Text className="text-muted">
                                    <small>{property.location}</small>
                                </Card.Text>

                                <Row className="text-muted mb-2">
                                    <Col xs={6} className="d-flex align-items-center">
                                        <FaRoad className="me-1" /> {property.Kilometer} Km
                                    </Col>
                                    <Col xs={6} className="d-flex align-items-center">
                                        <FaGasPump className="me-1" /> {property.Petrol} 
                                    </Col>
                                </Row>

                                <Row className="text-muted">
                                    <Col xs={6} className="d-flex align-items-center">
                                        <FaUser className="me-1" /> {property.owner} owner
                                    </Col>
                                    <Col xs={6} className="d-flex align-items-center">
                                        <FaCalendarAlt className="me-1" /> {property.Duration} 
                                    </Col>
                                </Row>

                                {/* {property.status === "Sold" && (
                                    <Badge bg="danger" className="mt-2">
                                        SOLD
                                    </Badge>
                                )} */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

    )
}
{/* <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/300x200" // Replace with actual image URL
        alt="Property Image"
      />
      <Card.Body>
        <Card.Title>
          <span style={{ color: '#ff6b6b', fontSize: '1.5rem' }}>$25,650</span>{' '}
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
            <FaRoad className="me-1" /> 3 Kilometers
          </Col>
          <Col className="d-flex align-items-center">
            <FaGasPump className="me-1" /> 3 Petro
          </Col>
        </Row>
        <Row className="text-muted">
          <Col className="d-flex align-items-center">
            <FaUser className="me-1" /> 2 Owners
          </Col>
          <Col className="d-flex align-items-center">
            <FaCalendarAlt className="me-1" /> 1000 Months
          </Col>
        </Row>
      </Card.Body>
    </Card>   */}
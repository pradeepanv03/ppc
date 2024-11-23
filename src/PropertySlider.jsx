import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const properties = [
    {
        price: "$25,650",
        title: "Headland Semi Detached House For Sale",
        location: "London, United Kingdom",
        bedrooms: 3,
        bathrooms: 3,
        garage: 2,
        sqft: 1000,
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    },
    {
        price: "$30,000",
        title: "New Semi Detached House For Sale",
        location: "London, United Kingdom",
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        sqft: 1000,
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    },
    {
        price: "$28,000",
        title: "Ravenslea Road Maisonette For Sale",
        location: "London, United Kingdom",
        bedrooms: 4,
        bathrooms: 2,
        garage: 2,
        sqft: 1000,
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    },
    {
        price: "$42,500",
        title: "2 Detached Bedroom House For Sale",
        location: "London, United Kingdom",
        bedrooms: 5,
        bathrooms: 4,
        garage: 3,
        sqft: 1100,
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    },
    {
        price: "$45,000",
        title: "4 Bedroom New House For Sale",
        location: "London, United Kingdom",
        bedrooms: 5,
        bathrooms: 3,
        garage: 2,
        sqft: 1200,
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    },
    {
        price: "$21,500",
        title: "New Superior Quality House For Sale",
        location: "London, United Kingdom",
        bedrooms: 4,
        bathrooms: 2,
        garage: 2,
        sqft: 11050,
        img: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    },
];

const FeaturedPropertyCarousel = () => {
    const [startIndex, setStartIndex] = useState(0);

    // Determine the number of visible cards based on screen width
    const getVisibleCards = () => {
        if (window.innerWidth >= 992) return 3; // lg
        if (window.innerWidth >= 768) return 2; // md
        return 1; // sm or xs
    };

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

    // Update the visible cards when the window is resized
    React.useEffect(() => {
        const handleResize = () => setVisibleCards(getVisibleCards());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to handle moving to the next card
    const handleNext = () => {
        if (startIndex < properties.length - visibleCards) {
            setStartIndex(startIndex + 1);
        }
    };

    // Function to handle moving to the previous card
    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Button variant="primary" onClick={handlePrev} disabled={startIndex === 0}>
                    Previous
                </Button>
                <Button variant="primary" onClick={handleNext} disabled={startIndex >= properties.length - visibleCards}>
                    Next
                </Button>
            </div>
            <Row className="justify-content-center">
                {properties.slice(startIndex, startIndex + visibleCards).map((property, index) => (
                    <Col lg={4} md={6} sm={12} key={index} className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={property.img} alt="Property Image" />
                            <Card.Body>
                                <Card.Title>
                                    <span style={{ color: '#ff6b6b', fontSize: '1.5rem' }}>{property.price}</span>{' '}
                                    <small className="text-muted">Guide Price</small>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {property.title}
                                </Card.Subtitle>
                                <Card.Text className="text-muted">
                                    <small>{property.location}</small>
                                </Card.Text>
                                
                                <Row className="text-muted mb-2">
                                    <Col className="d-flex align-items-center">
                                        <FaBed className="me-1" /> {property.bedrooms} Bedrooms
                                    </Col>
                                    <Col className="d-flex align-items-center">
                                        <FaBath className="me-1" /> {property.bathrooms} Bathrooms
                                    </Col>
                                </Row>
                                
                                <Row className="text-muted">
                                    <Col className="d-flex align-items-center">
                                        <FaCar className="me-1" /> {property.garage} Garage
                                    </Col>
                                    <Col className="d-flex align-items-center">
                                        <FaRulerCombined className="me-1" /> {property.sqft} SqFt
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FeaturedPropertyCarousel;

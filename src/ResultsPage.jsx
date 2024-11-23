import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';
import { TbCurrencyRupee } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const { filteredData } = location.state || { filteredData: [] };

  return (
    <div className="container" style={{marginTop:"30px", marginBottom:"30px"}}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                <h2 style={{ color: '#001f3f', textAlign: 'center' }}>Featured Properties</h2>
                <Link to="/">
                <Button className="fbtn mt-3 mt-md-0">Go back</Button></Link>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <span className="text-danger">FEATURED FOR SALE</span>
                <span className="mx-3">|</span>
                <span>FEATURED TO RENT</span>
            </div>
      {filteredData.length === 0 ? (
        <p>No results found</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredData.map((property) => (
            <Col key={property.id}>
              <Card style={{ width: '100%', maxWidth: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={property.car_image || '/default-image.jpg'}
                  alt={property.car_title1}
                  style={{border:'none',
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: `
          -15px -15px 15px rgba(255, 255, 255, 0.2),
          15px 15px 15px rgba(0, 0, 0, 0.1),
          inset -50px -50px 50px rgba(255, 255, 255, 0.2),
          inset 50px 50px 50px rgba(0, 0, 0, 0.1)
        `, 
                  }}
                />
                <Card.Body>
                  {/* Price */}
                  <Card.Title>
                    <span style={{ color: '#ff6b6b', fontSize: '1.5rem' }}>
                      <TbCurrencyRupee />
                      {property.price || 'N/A'}
                    </span>{' '}
                    <small className="text-muted">Guide Price</small>
                  </Card.Title>

                  {/* Title */}
                  <Card.Subtitle className="mb-2 text-muted">
                    {property.prop_mode || 'No Title Available'}
                  </Card.Subtitle>

                  {/* Location */}
                  <Card.Text className="text-muted">
                    <small>{property.state || 'State Not Provided'}</small> |{' '}
                    <small>{property.city || 'City Not Provided'}</small>
                  </Card.Text>

                  {/* Features */}
                  <Row className="text-muted mb-2">
                    <Col xs={6} className="d-flex align-items-center">
                      <FaBed className="me-1" /> {property.bed || 0} Bedrooms
                    </Col>
                    <Col xs={6} className="d-flex align-items-center">
                      <FaBath className="me-1" /> {property.bathrooms || 0} Bathrooms
                    </Col>
                  </Row>

                  <Row className="text-muted">
                    <Col xs={6} className="d-flex align-items-center">
                      <FaCar className="me-1" /> {property.garage || 0} Garage
                    </Col>
                    <Col xs={6} className="d-flex align-items-center">
                      <FaRulerCombined className="me-1" /> {property.tot_area || 0} SqFt
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ResultsPage;

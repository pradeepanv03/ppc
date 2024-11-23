
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbCurrencyRupee } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const FeaturedProperty = ({ propertyId = "6397" }) => {
    const [properties, setProperties] = useState([]);  // Holds the properties data
    const [error, setError] = useState(null);  // Holds any error message
    const navigate = useNavigate();
    // Fetch properties data when the component mounts or the propertyId changes
    useEffect(() => {
        const fetchProperties = async () => {
            const apiUrl = process.env.REACT_APP_API_URL + "/home.php?page=";
            try {
                // Fetch data for pages 1 to 6 in parallel
                const pageRequests = [];
                for (let i = 1; i <= 6; i++) {
                    pageRequests.push(
                        axios.post(apiUrl + i + "&phone=7904197097", new URLSearchParams({
                            id: propertyId
                        }))
                    );
                }

                // Wait for all page requests to finish
                const responses = await Promise.all(pageRequests);

                // Combine data from all pages
                const allProperties = responses.reduce((acc, res) => {
                    if (res.data && Array.isArray(res.data)) {
                        return acc.concat(res.data);
                    }
                    return acc;
                }, []);

                setProperties(allProperties);  // Set the properties state with combined data
            } catch (error) {
                setError("Error fetching house data: " + error.message);
                console.error("Error fetching house data:", error);
            }
        };

        fetchProperties();  // Fetch properties when the component mounts or propertyId changes
    }, [propertyId]);
const handleMoreProperty = () => {
        navigate('/showallproperty');
      };

      const handleCardClick = (propertyId) => {
        navigate(`/house/${propertyId}`);
    };
    return (
        <div className="container" style={{ marginTop: "30px" }}>
            {/* Header Section */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                <h2 style={{ color: '#001f3f', textAlign: 'center' }}>Featured Properties</h2>
                <Button className="fbtn mt-3 mt-md-0" onClick={handleMoreProperty}>Show More Property</Button>
            </div>

            {/* Display Error Message */}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            {/* Show message if no properties are available */}
            {!properties.length && !error && (
                <p style={{ color: "gray", textAlign: "center" }}>
                    No properties available at the moment.
                </p>
            )}

            {/* Tabs Section */}
            <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <span className="text-danger">FEATURED FOR SALE</span>
                <span className="mx-3">|</span>
                <span>FEATURED TO RENT</span>
            </div>

            {/* Properties List */}
            <Row>
                {properties.map((property, index) => (
                    <Col
                        key={property.id || index}
                        xs={12}    // Full width on mobile
                        sm={6}     // 2 columns on tablets
                        md={4}     // 3 columns on desktop
                        className="mb-4 d-flex justify-content-center"
                    >
                        <Card style={{ width: '100%', maxWidth: '18rem',background: "#fff",
                                    boxShadow:`
                                    -15px -15px 15px rgba(255, 255, 255, 0.2),
                                    15px 15px 15px rgba(0, 0, 0, 0.1),
                                    inset -50px -50px 50px rgba(255, 255, 255, 0.2),
                                    inset 50px 50px 50px rgba(0, 0, 0, 0.1)
                                  `,
                                    border:'none',
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                }}
                                onClick={() => handleCardClick(property.id)}

                                    >
                            {/* Property Image */}
                            <Card.Img
                                variant="top"
                                src={property.car_image || "/default-image.jpg"}
                                alt="Property Image"
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />

                            {/* Property Details */}
                            <Card.Body>
                                {/* Price */}
                                <Card.Title>
                                    <span style={{ color: '#ff6b6b', fontSize: '1.5rem' }}>
                                        <TbCurrencyRupee />
                                        {property.price || "N/A"}
                                    </span>{' '}
                                    <small className="text-muted">Guide Price</small>
                                </Card.Title>

                                {/* Property Mode */}
                                <Card.Subtitle className="mb-2 text-muted">
                                    {property.prop_mode || "No Title Available"}
                                </Card.Subtitle>

                                {/* Location */}
                                <Card.Text className="text-muted">
                                    <small>{property.state || "State Not Provided"}</small> |{" "}
                                    <small>{property.city || "City Not Provided"}</small>
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
        </div>
    );
};

export default FeaturedProperty;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { TbCurrencyRupee } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";

const ShowAllProperty = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pageGroup, setPageGroup] = useState(1);
    const navigate = useNavigate();

    const postsPerPage = 6;
    const pagesPerGroup = 6;

    useEffect(() => {
        const fetchGroupData = async () => {
            setLoading(true);
            try {
                const allData = [];
                const startPage = (pageGroup - 1) * pagesPerGroup + 1;
                const endPage = startPage + pagesPerGroup - 1;

                for (let page = startPage; page <= endPage; page++) {
                    const response = await axios.get(
                        `https://ppcpondy.com/application/home.php?page=${page}&phone=7904197097`
                    );
                    if (response.data && response.data.length > 0) {
                        allData.push(...response.data);
                    }
                }
                setCoinsData(allData);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchGroupData();
    }, [pageGroup]);

    const handleNextGroup = () => {
        setPageGroup((prevGroup) => prevGroup + 1);
    };

    const handlePrevGroup = () => {
        if (pageGroup > 1) {
            setPageGroup((prevGroup) => prevGroup - 1);
        }
    };
    const handleCardClick = (id) => {
        navigate(`/house/${id}`);
    };
    return (
        <>
        <Header />
        <div className="container my-4">
            <header className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                <h2 className="text-center" style={{color:'#001f3f'}}>More Properties</h2>
                <Button className="fbtn mt-3 mt-md-0" onClick={() => navigate("/")}>
                    Go back
                </Button>
            </header>

            {error && <p className="text-danger text-center">{error}</p>}
            {loading && <p className="text-center">Loading...</p>}

            <Row>
                {coinsData.length > 0 ? (
                    coinsData.map((property, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
                            <Card
                            onClick={() => handleCardClick(property.id)}
                                style={{
                                    width: "100%",
                                    maxWidth: "18rem",
                                    background: "#fff",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    border:'none'
                                }}
                                className="hover-scale"
                            >
                                <Card.Img
                                    variant="top"
                                    src={property.car_image || "/default-image.jpg"}
                                    alt="Property"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-between">
                                        <span className="text-danger fs-5">
                                            <TbCurrencyRupee /> {property.price || "N/A"}
                                        </span>
                                        <small className="text-muted">Guide Price</small>
                                    </Card.Title>
                                    <Card.Subtitle className="text-muted mb-2">
                                        {property.prop_mode || "No Title Available"}
                                    </Card.Subtitle>
                                    <Card.Text className="text-muted">
                                        <small>{property.state || "State Not Provided"}</small> |{" "}
                                        <small>{property.city || "City Not Provided"}</small>
                                    </Card.Text>
                                    <Row className="text-muted">
                                        <Col xs={6}>
                                            <FaBed className="me-1" /> {property.bed || 0} Bedrooms
                                        </Col>
                                        <Col xs={6}>
                                            <FaBath className="me-1" /> {property.bathrooms || 0} Bathrooms
                                        </Col>
                                    </Row>
                                    <Row className="text-muted mt-2">
                                        <Col xs={6}>
                                            <FaCar className="me-1" /> {property.garage || 0} Garage
                                        </Col>
                                        <Col xs={6}>
                                            <FaRulerCombined className="me-1" /> {property.tot_area || 0} SqFt
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    !loading && <p className="text-center">No properties available.</p>
                )}
            </Row>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <div className="d-flex justify-content-between w-100">
                        <Button
                            onClick={handlePrevGroup}
                            disabled={pageGroup === 1}
                            variant="outline-secondary"
                        >
                            Previous
                        </Button>
                        <Button onClick={handleNextGroup} variant="outline-secondary">
                            Next
                        </Button>
                    </div>
                </Row>
            </Container>

            <style jsx>{`
                .hover-scale:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
                }
            `}</style>
        </div>
        <Footer />
        </>
    );
};

export default ShowAllProperty;

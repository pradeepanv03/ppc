// import React from 'react';
// import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
// import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';

// const properties = [
//     {
//         price: "$21,500",
//         title: "New Superior Quality House For Sale",
//         location: "London, United Kingdom",
//         bedrooms: 4,
//         bathrooms: 2,
//         garage: 2,
//         sqft: 11050,
//         img: "https://via.placeholder.com/300x200",
//         status: "For Sale",
//     },
//     {
//         price: "$28,000",
//         title: "Ravenslea Road Maisonette For Sale",
//         location: "London, United Kingdom",
//         bedrooms: 4,
//         bathrooms: 2,
//         garage: 2,
//         sqft: 1000,
//         img: "https://via.placeholder.com/300x200",
//         status: "For Sale",
//     },
//     {
//         price: "$42,500",
//         title: "2 Detached Bedroom House For Sale",
//         location: "London, United Kingdom",
//         bedrooms: 5,
//         bathrooms: 4,
//         garage: 3,
//         sqft: 1000,
//         img: "https://via.placeholder.com/300x200",
//         status: "Sold",
//     },
//     {
//         price: "$30,000",
//         title: "New Semi Detached House For Sale",
//         location: "London, United Kingdom",
//         bedrooms: 1,
//         bathrooms: 1,
//         garage: 1,
//         sqft: 1000,
//         img: "https://via.placeholder.com/300x200",
//         status: "For Sale",
//     },
//     {
//         price: "$25,650",
//         title: "Headland Semi Detached House For Sale",
//         location: "London, United Kingdom",
//         bedrooms: 3,
//         bathrooms: 2,
//         garage: 2,
//         sqft: 1000,
//         img: "https://via.placeholder.com/300x200",
//         status: "For Sale",
//     },
//     {
//         price: "$45,000",
//         title: "4 Bedroom New House For Sale",
//         location: "London, United Kingdom",
//         bedrooms: 5,
//         bathrooms: 3,
//         garage: 2,
//         sqft: 1000,
//         img: "https://via.placeholder.com/300x200",
//         status: "For Sale",
//     },
// ];

// const FeaturedProperties = () => {
//     return (
//         <div className="container">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h2 className="text-purple">Featured Properties</h2>
//                 <Button variant="outline-primary">Show More Property</Button>
//             </div>
//             <div className="d-flex mb-3">
//                 <span className="text-danger">FEATURED FOR SALE</span>
//                 <span className="mx-3">|</span>
//                 <span>FEATURED TO RENT</span>
//             </div>
//             <Row>
//                 {properties.map((property, index) => (
//                     <Col key={index} md={4} className="mb-4">
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src={property.img} alt="Property Image" />
//                             <Card.Body>
//                                 <Card.Title>
//                                     <span style={{ color: '#ff6b6b', fontSize: '1.5rem' }}>{property.price}</span>{' '}
//                                     <small className="text-muted">Guide Price</small>
//                                 </Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">
//                                     {property.title}
//                                 </Card.Subtitle>
//                                 <Card.Text className="text-muted">
//                                     <small>{property.location}</small>
//                                 </Card.Text>
                                
//                                 <Row className="text-muted mb-2">
//                                     <Col className="d-flex align-items-center">
//                                         <FaBed className="me-1" /> {property.bedrooms} Bedrooms
//                                     </Col>
//                                     <Col className="d-flex align-items-center">
//                                         <FaBath className="me-1" /> {property.bathrooms} Bathrooms
//                                     </Col>
//                                 </Row>
                                
//                                 <Row className="text-muted">
//                                     <Col className="d-flex align-items-center">
//                                         <FaCar className="me-1" /> {property.garage} Garage
//                                     </Col>
//                                     <Col className="d-flex align-items-center">
//                                         <FaRulerCombined className="me-1" /> {property.sqft} SqFt
//                                     </Col>
//                                 </Row>

//                                 {property.status === "Sold" && (
//                                     <Badge bg="danger" className="mt-2">SOLD</Badge>
//                                 )}
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// };

// export default FeaturedProperties;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Badge } from "react-bootstrap";
// import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

// const FeatureCard = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await axios.get(
//           "https://ppcpondy.com/application/home.php?page=1&phone=7904197097"
//         );
//         console.log(response.data); // Log API response
//         setProperties(response.data.properties || []);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//       }
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-purple">Featured Properties</h2>
//         <Button variant="outline-primary">Show More Property</Button>
//       </div>
//       <div className="d-flex mb-3">
//         <span className="text-danger">FEATURED FOR SALE</span>
//         <span className="mx-3">|</span>
//         <span>FEATURED TO RENT</span>
//       </div>
//       <Row>
//         {properties.length > 0 ? (
//           properties.map((property, index) => (
//             <Col key={index} md={4} className="mb-4">
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img
//                   variant="top"
//                   src={property?.img || "default-image.jpg"}
//                   alt="Property Image"
//                 />
//                 <Card.Body>
//                   <Card.Title>
//                     <span style={{ color: "#ff6b6b", fontSize: "1.5rem" }}>
//                       {property?.price || "N/A"}
//                     </span>{" "}
//                     <small className="text-muted">Guide Price</small>
//                   </Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     {property?.title || "No title available"}
//                   </Card.Subtitle>
//                   <Card.Text className="text-muted">
//                     <small>{property?.location || "Unknown location"}</small>
//                   </Card.Text>

//                   <Row className="text-muted mb-2">
//                     <Col className="d-flex align-items-center">
//                       <FaBed className="me-1" /> {property?.bedrooms || 0} Bedrooms
//                     </Col>
//                     <Col className="d-flex align-items-center">
//                       <FaBath className="me-1" /> {property?.bathrooms || 0} Bathrooms
//                     </Col>
//                   </Row>

//                   <Row className="text-muted">
//                     <Col className="d-flex align-items-center">
//                       <FaCar className="me-1" /> {property?.garage || 0} Garage
//                     </Col>
//                     <Col className="d-flex align-items-center">
//                       <FaRulerCombined className="me-1" /> {property?.sqft || 0} SqFt
//                     </Col>
//                   </Row>

//                   {property?.status === "Sold" && (
//                     <Badge bg="danger" className="mt-2">
//                       SOLD
//                     </Badge>
//                   )}
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p>No properties available at the moment.</p>
//         )}
//       </Row>
//     </div>
//   );
// };

// export default FeatureCard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Badge } from "react-bootstrap";
// import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

// const FeatureCard = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/properties");
//         console.log(response.data); // Log API response
//         setProperties(response.data.properties || []);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//       }
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-purple">Featured Properties</h2>
//         <Button variant="outline-primary">Show More Property</Button>
//       </div>
//       <div className="d-flex mb-3">
//         <span className="text-danger">FEATURED FOR SALE</span>
//         <span className="mx-3">|</span>
//         <span>FEATURED TO RENT</span>
//       </div>
//       <Row>
//         {properties.length > 0 ? (
//           properties.map((property, index) => (
//             <Col key={index} md={4} className="mb-4">
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img
//                   variant="top"
//                   src={property?.img || "default-image.jpg"}
//                   alt="Property Image"
//                 />
//                 <Card.Body>
//                   <Card.Title>
//                     <span style={{ color: "#ff6b6b", fontSize: "1.5rem" }}>
//                       {property?.price || "N/A"}
//                     </span>{" "}
//                     <small className="text-muted">Guide Price</small>
//                   </Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     {property?.title || "No title available"}
//                   </Card.Subtitle>
//                   <Card.Text className="text-muted">
//                     <small>{property?.location || "Unknown location"}</small>
//                   </Card.Text>

//                   <Row className="text-muted mb-2">
//                     <Col className="d-flex align-items-center">
//                       <FaBed className="me-1" /> {property?.bedrooms || 0} Bedrooms
//                     </Col>
//                     <Col className="d-flex align-items-center">
//                       <FaBath className="me-1" /> {property?.bathrooms || 0} Bathrooms
//                     </Col>
//                   </Row>

//                   <Row className="text-muted">
//                     <Col className="d-flex align-items-center">
//                       <FaCar className="me-1" /> {property?.garage || 0} Garage
//                     </Col>
//                     <Col className="d-flex align-items-center">
//                       <FaRulerCombined className="me-1" /> {property?.sqft || 0} SqFt
//                     </Col>
//                   </Row>

//                   {property?.status === "Sold" && (
//                     <Badge bg="danger" className="mt-2">
//                       SOLD
//                     </Badge>
//                   )}
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p>No properties available at the moment.</p>
//         )}
//       </Row>
//     </div>
//   );
// };

// export default FeatureCard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Badge } from "react-bootstrap";
// import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

// const FeatureCard = () => {
//   const [properties, setProperties] = useState([]);
//   const apiUrl = process.env.REACT_APP_API_URL + "/home.php";
//       axios.post(apiUrl, 
//           new URLSearchParams({
//             id: "6397"
//           })
//         )
//         .then((res) => {
//           console.log("Data sent", res.data); // Successfully sent
//         })
//         .catch((error) => {
//           console.error("Error in sending data:", error); // Error handling
//     });
//   return (
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-purple">Featured Properties</h2>
//         <Button variant="outline-primary">Show More Property</Button>
//       </div>
//       {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
//       <div className="d-flex mb-3">
//         <span className="text-danger">FEATURED FOR SALE</span>
//         <span className="mx-3">|</span>
//         <span>FEATURED TO RENT</span>
//       </div>
//       <Row>
//         {properties.map((property, index) => (
//           <Col key={index} md={4} className="mb-4">
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={property.img} alt="Property Image" />
//               <Card.Body>
//                 <Card.Title>
//                   <span style={{ color: "#ff6b6b", fontSize: "1.5rem" }}>
//                     {property.price}
//                   </span>{" "}
//                   <small className="text-muted">Guide Price</small>
//                 </Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {property.title}
//                 </Card.Subtitle>
//                 <Card.Text className="text-muted">
//                   <small>{property.location}</small>
//                 </Card.Text>

//                 <Row className="text-muted mb-2">
//                   <Col className="d-flex align-items-center">
//                     <FaBed className="me-1" /> {property.bedrooms} Bedrooms
//                   </Col>
//                   <Col className="d-flex align-items-center">
//                     <FaBath className="me-1" /> {property.bathrooms} Bathrooms
//                   </Col>
//                 </Row>

//                 <Row className="text-muted">
//                   <Col className="d-flex align-items-center">
//                     <FaCar className="me-1" /> {property.garage} Garage
//                   </Col>
//                   <Col className="d-flex align-items-center">
//                     <FaRulerCombined className="me-1" /> {property.sqft} SqFt
//                   </Col>
//                 </Row>

//                 {property.status === "Sold" && (
//                   <Badge bg="danger" className="mt-2">
//                     SOLD
//                   </Badge>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default FeatureCard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Badge } from "react-bootstrap";
// import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

// const FeatureCard = () => {
//   const [properties, setProperties] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       const apiUrl = `${process.env.REACT_APP_API_URL}/home.php`;

//       try {
//         const response = await axios.post(
//           apiUrl,
//           new URLSearchParams({
//             id: "6397",
//           })
//         );
        
//         console.log("Data sent", response.data); // Log the response data
//         setProperties(response.data.properties || []); // Assuming `properties` is the array from the response
//       } catch (error) {
//         console.error("Error in sending data:", error);
//         setError("Failed to load properties. Please try again later.");
//       }
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-purple">Featured Properties</h2>
//         <Button variant="outline-primary">Show More Property</Button>
//       </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <div className="d-flex mb-3">
//         <span className="text-danger">FEATURED FOR SALE</span>
//         <span className="mx-3">|</span>
//         <span>FEATURED TO RENT</span>
//       </div>
//       <Row>
//         {properties.map((property, index) => (
//           <Col key={index} md={4} className="mb-4">
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={property.img} alt="Property Image" />
//               <Card.Body>
//                 <Card.Title>
//                   <span style={{ color: "#ff6b6b", fontSize: "1.5rem" }}>
//                     {property.price}
//                   </span>{" "}
//                   <small className="text-muted">Guide Price</small>
//                 </Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {property.title}
//                 </Card.Subtitle>
//                 <Card.Text className="text-muted">
//                   <small>{property.location}</small>
//                 </Card.Text>

//                 <Row className="text-muted mb-2">
//                   <Col className="d-flex align-items-center">
//                     <FaBed className="me-1" /> {property.bedrooms} Bedrooms
//                   </Col>
//                   <Col className="d-flex align-items-center">
//                     <FaBath className="me-1" /> {property.bathrooms} Bathrooms
//                   </Col>
//                 </Row>

//                 <Row className="text-muted">
//                   <Col className="d-flex align-items-center">
//                     <FaCar className="me-1" /> {property.garage} Garage
//                   </Col>
//                   <Col className="d-flex align-items-center">
//                     <FaRulerCombined className="me-1" /> {property.sqft} SqFt
//                   </Col>
//                 </Row>

//                 {property.status === "Sold" && (
//                   <Badge bg="danger" className="mt-2">
//                     SOLD
//                   </Badge>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default FeatureCard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Badge } from "react-bootstrap";
// import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

// const FeatureCard = () => {
//   const [properties, setProperties] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       // Construct the full URL
//       const apiUrl = `${process.env.REACT_APP_API_URL}/home.php?page=1&phone=7904197097`; 
//       console.log("Requesting data from URL:", apiUrl); // Debug: Log the API URL

//       try {
//         // Send the POST request to the API
//         const response = await axios.get(apiUrl, {
//           id: "6397", // Data sent in the request
//         });

//         console.log("Data received:", response.data); // Debug: Log the response data
//         // Assuming `properties` is the array in the response
//         setProperties(response.data.properties || []);
//       } catch (error) {
//         // Error handling
//         if (error.response) {
//           // Server responded with a status code other than 2xx
//           console.error("Error response from server:", error.response);
//           setError(`Failed to load properties. Server returned ${error.response.status}`);
//         } else if (error.request) {
//           // No response from the server
//           console.error("No response from server:", error.request);
//           setError("Failed to load properties. No response from server.");
//         } else {
//           // Error in setting up the request
//           console.error("Error in setting up request:", error.message);
//           setError(`Failed to load properties. Error: ${error.message}`);
//         }
//       }
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-purple">Featured Properties</h2>
//         <Button variant="outline-primary">Show More Property</Button>
//       </div>

//       {/* Display error message if there is one */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <div className="d-flex mb-3">
//         <span className="text-danger">FEATURED FOR SALE</span>
//         <span className="mx-3">|</span>
//         <span>FEATURED TO RENT</span>
//       </div>

//       <Row>
//         {/* Render the property cards */}
//         {properties.map((property) => (
//           <Col key={property.id} md={4} className="mb-4">
//             <Card style={{ width: "18rem" }}>
//               {/* Check if property.img exists, and if not, use a default image */}
//               <Card.Img
//                 variant="top"
//                 src={property.img || "/default-image.jpg"} // Default image if no image exists
//                 alt="Property Image"
//               />
//               <Card.Body>
//                 <Card.Title>
//                   <span style={{ color: "#ff6b6b", fontSize: "1.5rem" }}>
//                     {property.price}
//                   </span>{" "}
//                   <small className="text-muted">Guide Price</small>
//                 </Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {property.title}
//                 </Card.Subtitle>
//                 <Card.Text className="text-muted">
//                   <small>{property.location}</small>
//                 </Card.Text>

//                 <Row className="text-muted mb-2">
//                   <Col className="d-flex align-items-center">
//                     <FaBed className="me-1" /> {property.bedrooms} Bedrooms
//                   </Col>
//                   <Col className="d-flex align-items-center">
//                     <FaBath className="me-1" /> {property.bathrooms} Bathrooms
//                   </Col>
//                 </Row>

//                 <Row className="text-muted">
//                   <Col className="d-flex align-items-center">
//                     <FaCar className="me-1" /> {property.garage} Garage
//                   </Col>
//                   <Col className="d-flex align-items-center">
//                     <FaRulerCombined className="me-1" /> {property.sqft} SqFt
//                   </Col>
//                 </Row>

//                 {property.status === "Sold" && (
//                   <Badge bg="danger" className="mt-2">
//                     SOLD
//                   </Badge>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default FeatureCard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Badge } from "react-bootstrap";
// import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

// const FeatureCard = () => {
//   const [properties, setProperties] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       const apiUrl = `${process.env.REACT_APP_API_URL}/home.php?page=1&phone=7904197097`;
//       console.log("Requesting data from URL:", apiUrl);

//       try {
//         // API Call
//         const response = await axios.get(apiUrl, {
//           params: { id: "6397" }, // Correct query parameter usage
//         });

//         console.log("API Response:", response.data);

//         // Assuming the data you need is under `response.data.properties`
//         setProperties(response.data.properties || []);
//       } catch (error) {
//         console.error("Error fetching properties:", error);

//         if (error.response) {
//           setError(`Server error: ${error.response.status} - ${error.response.data}`);
//         } else if (error.request) {
//           setError("No response from server. Please check your connection.");
//         } else {
//           setError(`Error: ${error.message}`);
//         }
//       }
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-purple">Featured Properties</h2>
//         <Button variant="outline-primary">Show More Property</Button>
//       </div>

//       {/* Display error message if present */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Message for empty properties */}
//       {!properties.length && !error && (
//         <p style={{ color: "gray" }}>No properties available at the moment.</p>
//       )}

//       <div className="d-flex mb-3">
//         <span className="text-danger">FEATURED FOR SALE</span>
//         <span className="mx-3">|</span>
//         <span>FEATURED TO RENT</span>
//       </div>

//       <Row>
//         {/* Render properties */}
//         {properties.map((property) => (
//           <Col key={property.id || Math.random()} md={4} className="mb-4">
//             <Card style={{ width: "18rem" }}>
//               <Card.Img
//                 variant="top"
//                 src={property.img || "/default-image.jpg"} // Default image fallback
//                 alt={property.title || "Property Image"}
//               />
//               <Card.Body>
//                 <Card.Title>
//                   <span style={{ color: "#ff6b6b", fontSize: "1.5rem" }}>
//                     {property.price || "N/A"}
//                   </span>{" "}
//                   <small className="text-muted">Guide Price</small>
//                 </Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {property.title || "No Title Available"}
//                 </Card.Subtitle>
//                 <Card.Text className="text-muted">
//                   <small>{property.location || "Location Not Provided"}</small>
//                 </Card.Text>

//                 <Row className="text-muted mb-2">
//                   <Col className="d-flex align-items-center">
//                     <FaBed className="me-1" /> {property.bedrooms || 0} Bedrooms
//                   </Col>
//                   <Col className="d-flex align-items-center">
//                     <FaBath className="me-1" /> {property.bathrooms || 0} Bathrooms
//                   </Col>
//                 </Row>

//                 <Row className="text-muted">
//                   <Col className="d-flex align-items-center">
//                     <FaCar className="me-1" /> {property.garage || 0} Garage
//                   </Col>
//                   <Col className="d-flex align-items-center">
//                     <FaRulerCombined className="me-1" /> {property.sqft || 0} SqFt
//                   </Col>
//                 </Row>

//                 {property.status === "Sold" && (
//                   <Badge bg="danger" className="mt-2">
//                     SOLD
//                   </Badge>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default FeatureCard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Badge } from "react-bootstrap";
// import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

// const FeatureCard = () => {
//   const [properties, setProperties] = useState([]); // Holds the properties data
//   const [error, setError] = useState(null); // Holds any error message

//   useEffect(() => {
//     const fetchProperties = async () => {
//       const apiUrl = `${process.env.REACT_APP_API_URL}/home.php?page=1&phone=7904197097`;

//       console.log("Requesting data from URL:", apiUrl);

//       try {
//         // Make API call
//         const response = await axios.get(apiUrl, {
//           params: { id: "6397" }, // Adding query params if necessary
//         });

//         console.log("API Response Data:", response.data);

//         // Check the structure of response.data
//         if (response.data && response.data.properties) {
//           setProperties(response.data.properties); // Update the properties state
//         } else {
//           console.warn("No properties field in API response.");
//           setProperties([]); // Fallback to empty array
//         }
//       } catch (error) {
//         console.error("Error fetching properties:", error);

//         // Set an appropriate error message
//         if (error.response) {
//           setError(`Server error: ${error.response.status} - ${error.response.data}`);
//         } else if (error.request) {
//           setError("No response from server. Please check your connection.");
//         } else {
//           setError(`Error: ${error.message}`);
//         }
//       }
//     };

//     fetchProperties(); // Fetch data on component mount
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div className="container">
//       {/* Header Section */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-purple">Featured Properties</h2>
//         <Button variant="outline-primary">Show More Property</Button>
//       </div>

//       {/* Display Error Message */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Show message if no properties are available */}
//       {!properties.length && !error && (
//         <p style={{ color: "gray" }}>No properties available at the moment.</p>
//       )}

//       <div className="d-flex mb-3">
//         <span className="text-danger">FEATURED FOR SALE</span>
//         <span className="mx-3">|</span>
//         <span>FEATURED TO RENT</span>
//       </div>

//       {/* Properties List */}
//       <Row>
//         {properties.map((property, index) => {
//           // Log each property being rendered for debugging
//           console.log("Rendering property:", property);

//           return (
//             <Col key={property.id || index} md={4} className="mb-4">
//               <Card style={{ width: "18rem" }}>
//                 {/* Property Image */}
//                 <Card.Img
//                   variant="top"
//                   src={property.img || "/default-image.jpg"} // Default image fallback
//                   alt={property.title || "Property Image"}
//                 />

//                 {/* Property Details */}
//                 <Card.Body>
//                   {/* Price */}
//                   <Card.Title>
//                     <span style={{ color: "#ff6b6b", fontSize: "1.5rem" }}>
//                       {property.price || "N/A"}
//                     </span>{" "}
//                     <small className="text-muted">Guide Price</small>
//                   </Card.Title>

//                   {/* Title */}
//                   <Card.Subtitle className="mb-2 text-muted">
//                     {property.title || "No Title Available"}
//                   </Card.Subtitle>

//                   {/* Location */}
//                   <Card.Text className="text-muted">
//                     <small>{property.location || "Location Not Provided"}</small>
//                   </Card.Text>

//                   {/* Features */}
//                   <Row className="text-muted mb-2">
//                     <Col className="d-flex align-items-center">
//                       <FaBed className="me-1" /> {property.bedrooms || 0} Bedrooms
//                     </Col>
//                     <Col className="d-flex align-items-center">
//                       <FaBath className="me-1" /> {property.bathrooms || 0} Bathrooms
//                     </Col>
//                   </Row>

//                   <Row className="text-muted">
//                     <Col className="d-flex align-items-center">
//                       <FaCar className="me-1" /> {property.garage || 0} Garage
//                     </Col>
//                     <Col className="d-flex align-items-center">
//                       <FaRulerCombined className="me-1" /> {property.sqft || 0} SqFt
//                     </Col>
//                   </Row>

//                   {/* Status Badge */}
//                   {property.status === "Sold" && (
//                     <Badge bg="danger" className="mt-2">
//                       SOLD
//                     </Badge>
//                   )}
//                 </Card.Body>
//               </Card>
//             </Col>
//           );
//         })}
//       </Row>
//     </div>
//   );
// };

// export default FeatureCard;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { TbCurrencyRupee } from "react-icons/tb";

const FeatureCard = () => {
  const [properties, setProperties] = useState([]); // Holds the properties data
  const [error, setError] = useState(null); // Holds any error message

  useEffect(() => {
    const fetchproperties = async () => {

      const apiUrl = process.env.REACT_APP_API_URL + "/home.php?page=1&phone=7904197097"; 
      try {
        const res = await axios.post(apiUrl, new URLSearchParams({
          id: "6397" 
        }));

        if (res.data && Array.isArray(res.data)) {
          setProperties(res.data);
        } else {
          console.error("Unexpected data format:", res.data);
        }
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    };

    fetchproperties();
  }, []);
  return (
    // <div className="container">
    //   {/* Header Section */}
    //   <div className="d-flex justify-content-between align-items-center mb-4">
    //     <h2 className="text-purple">Featured Properties</h2>
    //     <Button variant="outline-primary">Show More Property</Button>
    //   </div>

    //   {/* Display Error Message */}
    //   {error && <p style={{ color: "red" }}>{error}</p>}

    //   {/* Show message if no properties are available */}
    //   {!properties.length && !error && (
    //     <p style={{ color: "gray" }}>No properties available at the moment.</p>
    //   )}

    //   <div className="d-flex mb-3">
    //     <span className="text-danger">FEATURED FOR SALE</span>
    //     <span className="mx-3">|</span>
    //     <span>FEATURED TO RENT</span>
    //   </div>

    //   {/* Properties List */}
    //   <Row>
    //     {properties.map((property, index) => {
    //       // Log each property being rendered for debugging
    //       console.log("Rendering property:", property);

    //       return (
    //         <Col key={property.id || index} md={4} className="mb-4">
    //           <Card style={{ width: "18rem" }}>
    //             {/* Property Image */}
    //             <Card.Img
    //               variant="top"
    //               src={property.car_image || "/default-image.jpg"} // Default image fallback
    //               alt={property.title || "Property Image"}
    //               style={{ width: "100%", height: "200px", objectFit: "cover" }}
    //             />

    //             {/* Property Details */}
    //             <Card.Body>
    //               {/* Price */}
    //               <Card.Title>
    //                 <span style={{ color: "#ff6b6b", fontSize: "1.5rem" }}><TbCurrencyRupee /> 

    //                   {property.price || "N/A"}
    //                 </span>{" "}
    //                 <small className="text-muted">Guide Price</small>
    //               </Card.Title>

    //               {/* Title */}
    //               <Card.Subtitle className="mb-2 text-muted">
    //                 {property.prop_mode || "No Title Available"}
    //               </Card.Subtitle>

    //               {/* Location */}
    //               <Card.Text className="text-muted">
    //                 <small>{property.state || "Location Not Provided"}</small> | <small>{property.city || "Location Not Provided"}</small>
    //               </Card.Text>

    //               {/* Features */}
    //               <Row className="text-muted mb-2">
    //                 <Col className="d-flex align-items-center">
    //                   <FaBed className="me-1" /> {property.bed || 0} Bedrooms
    //                 </Col>
    //                 <Col className="d-flex align-items-center">
    //                   <FaBath className="me-1" /> {property.bathrooms || 0} Bathrooms
    //                 </Col>
    //               </Row>

    //               <Row className="text-muted">
    //                 <Col className="d-flex align-items-center">
    //                   <FaCar className="me-1" /> {property.garage || 0} Garage
    //                 </Col>
    //                 <Col className="d-flex align-items-center">
    //                   <FaRulerCombined className="me-1" /> {property.tot_area || 0} SqFt
    //                 </Col>
    //               </Row>

    //               {/* Status Badge */}
    //               {property.status === "Sold" && (
    //                 <Badge bg="danger" className="mt-2">
    //                   SOLD
    //                 </Badge>
    //               )}
    //             </Card.Body>
    //           </Card>
    //         </Col>
    //       );
    //     })}
    //   </Row>
    // </div>
<div className="container">
  {/* Header Section */}
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
    <h2 className="text-purple text-center text-md-start mb-3 mb-md-0">
      Featured Properties
    </h2>
    <Button variant="outline-primary" className="w-100 w-md-auto">
      Show More Property
    </Button>
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
    <span className="mx-3 d-none d-md-inline">|</span>
    <span>FEATURED TO RENT</span>
  </div>

  {/* Properties List */}
  <Row>
    {properties.map((property, index) => {
      return (
        <Col key={property.id || index} xs={12} sm={6} md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            {/* Property Image */}
            <Card.Img
              variant="top"
              src={property.car_image || "/default-image.jpg"} // Default image fallback
              alt={property.title || "Property Image"}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />

            {/* Property Details */}
            <Card.Body>
              {/* Price */}
              <Card.Title>
                <span
                  style={{
                    color: "#ff6b6b",
                    fontSize: "1.5rem",
                    display: "block",
                  }}
                >
                  <TbCurrencyRupee />
                  {property.price || "N/A"}
                </span>
                <small className="text-muted">Guide Price</small>
              </Card.Title>

              {/* Title */}
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
                <Col className="d-flex align-items-center">
                  <FaBed className="me-1" /> {property.bed || 0} Bedrooms
                </Col>
                <Col className="d-flex align-items-center">
                  <FaBath className="me-1" /> {property.bathrooms || 0} Bathrooms
                </Col>
              </Row>

              <Row className="text-muted">
                <Col className="d-flex align-items-center">
                  <FaCar className="me-1" /> {property.garage || 0} Garage
                </Col>
                <Col className="d-flex align-items-center">
                  <FaRulerCombined className="me-1" /> {property.tot_area || 0} SqFt
                </Col>
              </Row>

              {/* Status Badge */}
              {property.status === "Sold" && (
                <Badge bg="danger" className="mt-2">
                  SOLD
                </Badge>
              )}
            </Card.Body>
          </Card>
        </Col>
      );
    })}
  </Row>
</div>


  );
};

export default FeatureCard;
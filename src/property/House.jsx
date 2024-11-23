
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import { Button, Carousel, Col, Container, Row, Card } from "react-bootstrap";
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import house1 from '../images/house1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import Header from "../Header";
import Footer from "../Footer";
import "../property/House.css"
  
  export default function House() {
    const { id } = useParams(); // Get the 'id' parameter from the URL
    const [houseData, setHouseData] = useState([]);
      const [isDarkMode, setIsDarkMode] = useState(false);
    const [imageData, setImageData] = useState([]);
    // const [mainImage, setMainImage] = useState(null);
    


    const [mainImage, setMainImage] = useState(imageData && imageData.length > 0 ? imageData[0] : house1);

    useEffect(() => {
      if (imageData && imageData.length > 0) {
        setMainImage(imageData[0]);
      }
    }, [imageData]);
  
  
    const handleThumbnailClick = (thumbnail) => {
      setMainImage(thumbnail); 
    };
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
  
    // Scroll Functions
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }, [isDarkMode]);
  
  
    // Fetch data based on the 'id'
    useEffect(() => {
      const fetchHouseData = async () => {
        const apiUrl = `${process.env.REACT_APP_API_URL}/detail.php`;
        try {
          const res = await axios.post(apiUrl, new URLSearchParams({ id: id }));
          if (Array.isArray(res.data)) setHouseData(res.data);
        } catch (error) {
          console.error("Error fetching house data:", error);
        }
      };
  
      const fetchImageData = async () => {
        const apiUrl = `${process.env.REACT_APP_API_URL}/get_image.php`;
        try {
          const res = await axios.post(apiUrl, new URLSearchParams({ getid: id }));
          if (Array.isArray(res.data)) {
            const images = res.data.map(item => item.image_name);
            setImageData(images);
            if (images.length > 0) setMainImage(images[0]);
          }
        } catch (error) {
          console.error("Error fetching image data:", error);
        }
      };
  
      fetchHouseData();
      fetchImageData();
    }, [id]); // Dependency on 'id' to refetch data when the 'id' changes
  
    // const handleThumbnailClick = (thumbnail) => {
    //   setMainImage(thumbnail);
    // };



  const featureIcons = {
    bedroom: "fas fa-bed",
    car_park: "fas fa-car",
    furnished: "fas fa-couch",
    lift: "fas fa-elevator",
    property_approved: "fas fa-check-circle",
    bank_loan: "fas fa-bank",
    ownership: "fas fa-key",
    negotiation: "fas fa-comments-dollar",
    activation_date: "fas fa-calendar-check",
    expire_date: "fas fa-calendar-times",
    description: "fas fa-info-circle", 
    property_featured: "fas fa-star",
    approved_by: "fas fa-user-check",
    approved_date: "fas fa-calendar-check",
    area: "fas fa-map",
    district: "fas fa-city",
    door_no: "fas fa-door-open",
    submit_date: "fas fa-clock",
    lead: "fas fa-bullhorn",
    total_views: "fas fa-eye",
    best_time_to_call:"fas fa-phone",
    // state:"fas fa-flag",
    submitted_by:"fas fa-user",
    pre_approved_by:"fas fa-check-circle",
    pre_approved_date:"fas fa-calendar-day",
    ads_type:"fas fa-ad",
    payment_type:"fas fa-credit-card",
    bill_created:"fas fa-calendar-plus",
    billed_office:"fas fa-building",
    sale_type: "fas fa-tags" 
  };




  return (
    <>
<Header />
<div className="container-fluid detail">
  <div className="row">
        <Carousel className="slider" controls={false} indicators={false} interval={3000} pause={true}>
          <Carousel.Item>
            <img src={c3} alt="Slide 1" height={500} className="d-block w-100 carousel-image" />
            <Carousel.Caption className="text-center" style={{ marginBottom: "20px" }}>
              <Row>
                <Col xs={12} style={{ fontStyle: "italic" }}>
                  <h1 className="p-2 fw-bold mb-1" style={{ color: "black" }}>YOUR DREAM HOUSE</h1>
                  <h3 style={{ color: "white", fontSize: "40px", marginBottom: "100px", fontWeight: "bold" }}>Home is not a place… it's a feeling</h3>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={c2} alt="Slide 2" height={500} className="d-block w-100 carousel-image" />
            <Carousel.Caption className="text-center" style={{ marginBottom: "20px" }}>
              <Row>
                <Col xs={12} style={{ fontStyle: "italic" }}>
                  <h1 className="p-2 fw-bold mb-1" style={{ color: "black" }}>YOUR DREAM HOUSE</h1>
                  <h3 style={{ color: "white", fontSize: "40px", marginBottom: "100px", fontWeight: "bold" }}>Home is not a place… it's a feeling</h3>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
 

    <div className="container detail  mt-5">
     
{/* Dark Mode / Light Mode Toggle Button */}
<button 
        className={`btn btn-${isDarkMode ? 'light' : 'dark'}`} 
        onClick={toggleDarkMode}
        style={{
          position: "fixed",
           top: "10%",
           right: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          borderRadius: "50%",
          padding: "10px 20px",
          
        }}
      >
        {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
      </button>

      {/* Scroll Arrows (Fixed Position) */}
      <FontAwesomeIcon
        icon={faArrowUp}
        className="scroll-arrow-up text-warning"
        onClick={scrollToTop}
      />
      <FontAwesomeIcon
        icon={faArrowDown}
        className="scroll-arrow-down text-warning"
        onClick={scrollToBottom}
      />


<div>
      {houseData.length > 0 ? (
        houseData.map((head, index) => (
          <div key={index} className="mb-4">
            <div className="row">
             
                <h1 className="text-center p-2 text-success"> <strong>{head.property_type}</strong> </h1>
                <p><i className="fas fa-user me-3 text-success"></i><strong>APP BY:</strong> {head.app_by || "Not available"}</p>
                <p><i className="fas fa-id-badge me-3 text-info"></i><strong>PPC ID:</strong> {head.ppc_id || "Not available"}</p> 
                <p><i className="fas fa-id-badge me-3 text-info"></i><strong>Bill No:</strong> {head.bill_no || "Not available"}</p> 

              </div>
            </div>
        
        ))
      ) : (
        <div>No head data available</div>  
      )}
      </div>



{houseData.length > 0 ? (
        houseData.map((house, index) => (
          <div key={index} className="card mb-4">
            <div className="row p-4">
              <div className="col-md-6">
                {/* Main Image */}
                <img
                  src={mainImage}  // Use the dynamically set main image
                  alt="House"
                  className="img-fluid"
                  style={{ width: '100%' }}
                />

                {/* Thumbnail Images */}
                {imageData && imageData.length > 1 && (
                  <div className="mt-2">
                    {imageData.slice(1).map((thumbnail, thumbIndex) => (
                      <img
                        key={thumbIndex}
                        src={thumbnail}
                        alt={`Thumbnail ${thumbIndex}`}
                        className="img-thumbnail me-2"
                        style={{ width: '80px', height: '80px',cursor:"pointer" }}
                        onClick={() => handleThumbnailClick(thumbnail)} // Handle click event to change main image
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Property Details */}
              <div className="col-md-6 pt-2">
                <h5 className="pb-2">
                  <i className="fas fa-dollar-sign icon-price me-3 text-warning"></i>
                  Price: ₹{house.price}
                </h5>
                <p><i className="fas fa-phone me-3 text-danger"></i><strong>Owner Phone:</strong> {house.owner_phone || "Not available"}</p>
                <p><i className="fas fa-home me-3 text-secondary"></i><strong>Property Mode:</strong> {house.property_mode || "Not available"}</p>
                <p><i className="fas fa-tag feature-icon me-3 text-primary"></i> <strong>Property Type:</strong> {house.property_type}</p>
                <p><i className="fas fa-calendar-alt feature-icon me-3 text-muted"></i> <strong>Property Age:</strong> {house.property_age}</p>
                <p><i className="fas fa-ruler-combined icon-area me-3 text-info"></i> <strong>Area:</strong> {house.total_area} {house.area_unit}</p>
                <p><i className="fas fa-arrow-alt-circle-right feature-icon me-3 text-success"></i> <strong>Facing:</strong> {house.facing}</p>
                <p><i className="fas fa-location-arrow me-4 text-success"></i><strong>Nagar: </strong>{house.nagar || "No description available"}</p>
                <p><i className="fas fa-map-marker-alt me-4 text-danger"></i><strong>City: </strong>{house.city || "No description available"}</p>
                <p><i className="fas fa-info-circle me-3 text-primary"></i><strong>Description: </strong>{house.description || "No description available"}</p>
                <a href="#" className="btn btn-info me-4 mt-3">I'm Interested</a>
                <a href="#" className="btn btn-success mt-3">Contact</a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No house data available</div>
      )}

  {/* Features Card */}
  <h2 className="pb-3 pt-3"> Property Info & Features  </h2>
      <div className="features card p-5">
        {houseData.length > 0 ? (
          houseData.map((features, index) => (
            <div key={index} className="row">
              {Object.keys(features).map((key) => (
                key !== 'property_image' && features[key] && featureIcons[key] && (
                  <div className="col-md-4 mb-3" key={key}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          <i className={`${featureIcons[key]} me-2 text-primary`} style={{ fontSize: "1.5rem" }}></i> 
                          {key.replace(/_/g, " ").toUpperCase()}
                        </h5>
                        <p className="card-text text-center">
                          {key === "property_featured"
                            ? features[key] === "1" 
                              ? "Yes" 
                              : "No"
                            : features[key]}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          ))
        ) : (
          <div>No Features data available</div>  
        )}
        </div>

      {/* Google Map Section */}
      <div className="mt-5">
        <h2>Location: Pondicherry</h2>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps?q=Pondicherry&hl=en&z=14&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>

      {/* House Tour Video Section */}
      <div className="mt-5">
        <h2>Take a Tour of the House</h2>
        <div className="video-container">
          <iframe 
            width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/zumJJUL_ruM" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
      

       {/* Location Info and Action Cards */}
  <div className="mt-5">
  <h2>Location Info</h2>
  {houseData.length > 0 ? (
        houseData.map((Location, index) => (
          <div key={index} className="mb-4">
            <div className="row">
             
            <h4><i className="fas fa-map-marker-alt me-2 text-success"></i>{Location.city || "No description available"} , 
            <span>  {Location.district || "No description available"} </span></h4>
            
              </div>
            </div>
        
        ))
      ) : (
        <div>No Location data available</div>  
      )}
  <div className="card mt-2 pb-4">
  <Row className="g-4 mt-2">
  <Col md={1} sm={4} xs={6}></Col>
  {/* Send Interest Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/interest.png" alt="Send Interest" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">Send Interest</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Contact Owner Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3"  src="https://www.ppcpondy.com/img/img/3/contact.png" alt="Contact Owner" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">Contact Owner</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Shortlist Ad Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/shortlist.png" alt="Shortlist Ad" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">Shortlist Ad</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Report Ad Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/report.png" alt="Report Ad" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">Report Ad</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Need Help Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/help1.png" alt="Need Help" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">NEED HELP?</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <div className="d-flex justify-content-center mt-4 gap-3 pb-3">
  {/* Previous Ad Button */}
  <button className="btn btn-outline-primary d-flex align-items-center justify-content-center">
    <FontAwesomeIcon icon={faArrowLeft} /> <span className="ms-2">Previous Ad</span>
  </button>

  {/* Next Ad Button */}
  <button className="btn btn-outline-primary d-flex align-items-center justify-content-center">
    <span className="me-2">Next Ad</span> <FontAwesomeIcon icon={faArrowRight} />
  </button>
</div>

<hr></hr>

<Row className="align-items-center ">
  {/* First Column: Question */}
  <Col md={8} sm={12} className="text-center mt-4">
    <h4>Do you have a used property to sell?</h4>
  </Col>

  {/* Second Column: Button */}
  <Col md={4} sm={12} className="d-flex justify-content-center mt-4 justify-content-sm-start">
    <Button variant="success" className="px-4">Post Your Ad Now!</Button>
  </Col>
</Row>

  </div>
  </div>

    </div>
    <Footer />
    </>
  );
}









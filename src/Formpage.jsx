
import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "./Assest/banner.jpeg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormPage = () => {
  const [price, setPrice] = useState('');
  const [propMode, setPropMode] = useState('');
  const [city, setCity] = useState('');  // State for city location select input
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Stores filtered data

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetailSearch, setShowDetailSearch] = useState(false);  // Modal state
  const [formData, setFormData] = useState({
    propertyType: '',
    propertyMode: '',
    priceMin: '',
    priceMax: '',
    negotiation: 'No',
    ownership: '',
    state: '',
    district: '',
    city: '',
    area: '',
    propertyAge: '',
    propertyApproved: 'No',
    bankLoan: 'No',
    noOfFloors: '',
    attachedBathroom: 'No',
    westernToilet: 'No',
    furnished: 'No',
    carParking: 'No',
    lift: 'No',
    areaUnit: '',
    facing: '',
    postedBy: '',
    postedDate: '',
    mobileNumber: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let page = 1;
      const maxPages = 100; // Limit to avoid infinite loops
      const accumulatedData = [];

      try {
        while (page <= maxPages) {
          const response = await axios.get(
            `https://ppcpondy.com/application/search_data.php`,
            {
              params: {
                id: 6397,
                page: page,
                phone: 7904197097,
                countrycode: 91,
              },
            }
          );

          if (response.status === 200) {
            const result = response.data;
            accumulatedData.push(...result);

            // Stop fetching if there are no more results
            if (result.length === 0) break;
          } else {
            throw new Error(`Failed to fetch data on page ${page}`);
          }

          page++;
        }

        setData(accumulatedData); // Set all data
        setFilteredData(accumulatedData); // Initially show all data
      } catch (error) {
        setError(error.message); // Handle error
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount


  const handlePriceChange = (e) => setPrice(e.target.value);
  const handlePropModeChange = (e) => setPropMode(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Filter data based on form selections
  //   const filteredData = data.filter((item) => {
  //     return (
  //       (price ? item.price === price : true) &&
  //       (propMode ? item.prop_mode === propMode : true) &&
  //       (city ? item.city === city : true)
  //     );
  //   });

  //   console.log('Filtered Data:', filteredData);
  //   navigate('/results', { state: { filteredData } });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if at least one of the fields has a value
    if (!price && !propMode && !city) {
      alert('Please provide at least one filter before submitting.');
      return; // Stop submission if no inputs are provided
    }
  
    // Filter data based on form selections
    const filteredData = data.filter((item) => {
      return (
        (price ? item.price === price : true) &&
        (propMode ? item.prop_mode === propMode : true) &&
        (city ? item.city === city : true)
      );
    });
  
    console.log('Filtered Data:', filteredData);
    navigate('/results', { state: { filteredData } });
  };
  

  // const handleDetailSearchSubmit = (e) => {
  //   e.preventDefault();

  //   // Filter data based on modal form selections
  //   const filteredData = data.filter((item) => {
  //     return (
  //       (formData.propertyType ? item.prop_type === formData.propertyType : true) &&
  //       (formData.propertyMode ? item.prop_mode === formData.propertyMode : true) &&
  //       (formData.priceMin ? item.price >= formData.priceMin : true) &&
  //       (formData.priceMax ? item.price <= formData.priceMax : true)
  //     );
  //   });

  //   console.log('Filtered Data from Modal:', filteredData);
  //   setShowDetailSearch(false); // Close modal after filtering
  //   navigate('/results', { state: { filteredData } });
  // };

  const handleDetailSearchSubmit = (e) => {
    e.preventDefault();
  
    // Check if at least one field in formData has a value
    if (
      !formData.propertyType &&
      !formData.propertyMode &&
      !formData.priceMin &&
      !formData.priceMax
    ) {
      alert('Please provide at least one filter before submitting.');
      return; // Stop submission if no inputs are provided
    }
  
    // Filter data based on modal form selections
    const filteredData = data.filter((item) => {
      return (
        (formData.propertyType ? item.prop_type === formData.propertyType : true) &&
        (formData.propertyMode ? item.prop_mode === formData.propertyMode : true) &&
        (formData.priceMin ? item.price >= formData.priceMin : true) &&
        (formData.priceMax ? item.price <= formData.priceMax : true)
      );
    });
  
    console.log('Filtered Data from Modal:', filteredData);
    setShowDetailSearch(false); // Close modal after filtering
    navigate('/results', { state: { filteredData } });
  };
  
  const handleClose = () => setShowDetailSearch(false);
  const handleShow = () => setShowDetailSearch(true);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div
      style={{
        backgroundImage:  `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <Container fluid className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "100%" }}>
      <div className="text-center px-3">
  <h5 className="text-warning mb-2" style={{ fontSize: "1.5rem" }}>
    WELCOME TO PPC
  </h5>
  <h1 className="fw-bold mb-3 display-4">Invest Today in</h1>
  <h1 className="fw-bold mb-3 display-4">Your Dream Home</h1>

  {/* <p className="mb-4 mx-auto" style={{ maxWidth: "80%" }}>
    Duis ultricies, tortor a accumsan fermentum, purus diam mollis velit, eu bibendum ipsum erat quis leo.
    Vestibulum finibus, leo dapibus feugiat rutrum, augue lacus rhoncus velit.
  </p> */}
</div>
<Form onSubmit={handleSubmit}>
<Row
    className="justify-content-center align-items-center text-center w-100 mx-auto"
    style={{
      maxWidth: "1000px", // Limits max width for large screens
      background: "#ffc631",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "25px",
      transition: "box-shadow 0.3s ease-in-out",
    }}
  >
 
    <Col xs={12} sm={6} md={2} className="mb-3">
          <Form.Select value={price} onChange={handlePriceChange}>
            <option value="">Price</option>
            <option value="3,400">3,400</option>
            <option value="10,000">10,000</option>
            <option value="15,000">15,000</option>
            <option value="20,000">20,000</option>
          </Form.Select>
    </Col>
    <Col xs={12} sm={6} md={2} className="mb-3">
    <Form.Select value={propMode} onChange={handlePropModeChange}>
            <option value="">Property Mode</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </Form.Select>
    </Col>
    <Col xs={12} sm={6} md={2} className="mb-3">
    <Form.Select value={city} onChange={handleCityChange}>
            <option value="">city</option>
            <option value="Ariyankuppam">Ariyankuppam</option>                                
      <option value="Ariyur">Ariyur</option>                                
      <option value="Bahour">Bahour</option>                                
      <option value="Ellapillaichavady">Ellapillaichavady</option>                                
      <option value="Embalam">Embalam</option>                                
      <option value="Gorimedu">Gorimedu</option>                                
      <option value="kaaterikuppam">kaaterikuppam</option>                                
      <option value="Kalapet">Kalapet</option>                                
      <option value="kannikoil">kannikoil</option>                                
      <option value="Karasur">Karasur</option>                                
      <option value="Karikalampakkam">Karikalampakkam</option>                                
      <option value="Kathirkamam">Kathirkamam</option>                                
      <option value="kirumampakkam">kirumampakkam</option>                                
      <option value="Kurumbapet">Kurumbapet</option>                                
      <option value="Lawspet">Lawspet</option>                                
      <option value="Madagadipet">Madagadipet</option>                                
      <option value="Madukarai">Madukarai</option>                                
      <option value="Manavely">Manavely</option>                                
      <option value="Mangalam">Mangalam</option>                                
      <option value="Mannadipet">Mannadipet</option>                                
      <option value="Mettupalayam">Mettupalayam</option>                                
      <option value="Moolakulam">Moolakulam</option>                                
      <option value="Mudaliarpet">Mudaliarpet</option>                                
      <option value="Murungapakkam">Murungapakkam</option>                                
      <option value="Muthialpet">Muthialpet</option>                                
      <option value="Muthirapalayam">Muthirapalayam</option>                                
      <option value="Nellithope">Nellithope</option>                                
      <option value="Netapakkam">Netapakkam</option>                                
      <option value="New Saram">New Saram</option>                                
      <option value="Odiampet">Odiampet</option>                                
      <option value="Old Saram">Old Saram</option>                                
      <option value="Orleanpet">Orleanpet</option>                                
      <option value="Ossudu">Ossudu</option>                                
      <option value="Ozhukarai">Ozhukarai</option>                                
      <option value="Pillaiyarkuppam">Pillaiyarkuppam</option>                                
      <option value="Pondicherry City">Pondicherry City</option>                                
      <option value="Pondicherry White Town">Pondicherry White Town</option>                                
      <option value="Rainbow nagar">Rainbow nagar</option>                                
      <option value="Sanyasikuppam">Sanyasikuppam</option>                                
      <option value="Sedarapet">Sedarapet</option>                                
      <option value="Sellipet">Sellipet</option>                                
      <option value="Thattanchavady">Thattanchavady</option>                                
      <option value="Thavalakuppam">Thavalakuppam</option>                                
      <option value="Thirubhuvanai">Thirubhuvanai</option>                                
      <option value="Thirukanchi">Thirukanchi</option>                                
      <option value="Tirukanur">Tirukanur</option>                                
      <option value="Thiruvandarkoil">Thiruvandarkoil</option>                                
      <option value="Thondamanatham">Thondamanatham</option>                                
      <option value="Uppalam">Uppalam</option>                                
      <option value="Uruvaiyar">Uruvaiyar</option>                                
      <option value="Vaadhanur">Vaadhanur</option>                                
      <option value="Velrampet">Velrampet</option>                                
      <option value="Villianur">Villianur</option>                                
      <option value="Manapet">Manapet</option>                                
      <option value="Kuruvinatham">Kuruvinatham</option>                                
      <option value="Karaiyambuthur">Karaiyambuthur</option>                                
      <option value="Seliamedu">Seliamedu</option>                                
      <option value="Chennai">Chennai</option>                                
      <option value="Coimbatore">Coimbatore</option>                                
      <option value="Madurai">Madurai</option>                                
      <option value="Tiruchirappalli">Tiruchirappalli</option>                                
      <option value="Salem">Salem</option>                                
      <option value="Tirunelveli">Tirunelveli</option>                                
      <option value="Tiruppur">Tiruppur</option>                                
      <option value="Vellore">Vellore</option>                                
      <option value="Erode">Erode</option>                                
      <option value="Thoothukkudi">Thoothukkudi</option>                                
      <option value="Dindigul">Dindigul</option>                                
      <option value="Thanjavur">Thanjavur</option>                                
      <option value="Ranipet">Ranipet</option>                                
      <option value="Sivakasi">Sivakasi</option>                                
      <option value="Karur">Karur</option>                                
      <option value="Udhagamandalam">Udhagamandalam</option>                                
      <option value="Hosur">Hosur</option>                                
      <option value="Nagercoil">Nagercoil</option>                                
      <option value="Kanchipuram">Kanchipuram</option>                                
      <option value="Kumarapalayam">Kumarapalayam</option>                                
      <option value="Karaikkudi">Karaikkudi</option>                                
      <option value="Neyveli">Neyveli</option>                                
      <option value="Cuddalore">Cuddalore</option>                                
      <option value="Kumbakonam">Kumbakonam</option>                                
      <option value="Tiruvannamalai">Tiruvannamalai</option>                                
      <option value="Pollachi">Pollachi</option>                                
      <option value="Rajapalayam">Rajapalayam</option>                                
      <option value="Gudiyatham">Gudiyatham</option>                                
      <option value="Pudukkottai">Pudukkottai</option>                                
      <option value="Vaniyambadi">Vaniyambadi</option>                                
      <option value="Ambur">Ambur</option>                                
      <option value="Nagapattinam">Nagapattinam</option>                                
      <option value="Villupuram">Villupuram</option>                                
      <option value="Tindivanam">Tindivanam</option>                                
      <option value="Chidambaram">Chidambaram</option>                                
      <option value="Gorimedu">Gorimedu</option>                                
      <option value="Venkata Nagar">Venkata Nagar</option>                                
      <option value="Vikravandi">Vikravandi</option>                                
      <option value="Others">Others</option>                                
      <option value="Karaikal">Karaikal</option>                                
      <option value="Virudhachalam">Virudhachalam</option>                                
      <option value="Kandamangalam">Kandamangalam</option>                                
      <option value="Reddiyarpalayam">Reddiyarpalayam</option>                                
      <option value="Mylapore">Mylapore</option>                                
      <option value="Kathirkamam">Kathirkamam</option>                                
      <option value="Kalmandapam">Kalmandapam</option>                                
      <option value="Kottakuppam">Kottakuppam</option>                                
      <option value="Vyasarpadi">Vyasarpadi</option>                                
      <option value="Thavalakuppam">Thavalakuppam</option>                                
      <option value="Tirukkanur">Tirukkanur</option>                                
      <option value=""></option>                                
      <option value="Vazhudavur">Vazhudavur</option>                                
      <option value="Tirunelvelli">Tirunelvelli</option>                                
      <option value="Auroville">Auroville</option>  
          </Form.Select>
    </Col>
    <Col xs={12} sm={6} md={2} className="mb-3">
      <Button
        style={{
          background: "#001f3f",
          color: "#ffc631",
          border: "none",
        }}
       type="submit"
        className="w-100"
      >
        Search
      </Button>
    </Col>
    <Col xs={12} sm={6} md={2} className="mb-3">
      <Button
        style={{
          color: "#001f3f",
          border: "2px solid #001f3f",
          background: "none",
        }}
        onClick={handleShow}
        className="w-100"
      >
        Detail Search
      </Button>
    </Col>
  </Row>
  </Form>
        {/* Detail Search Modal */}
        <Modal show={showDetailSearch} onHide={handleClose} centered size="lg" >
          <Modal.Header closeButton style={{background:'#001f3f', color:'#ffc631'}}>
            <Modal.Title>Detail Search</Modal.Title>
          </Modal.Header>
          
          <Modal.Body style={{background:'#001f3f', color:'#ffc631'}}>
          <Form onSubmit={handleDetailSearchSubmit}>
    <Row className="g-3">
      {/* Property Type */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Property Type</Form.Label>
          <Form.Select name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Apartment">Apartment</option>
            <option value="Independent House">Independent House</option>
            <option value="Villa">Villa</option>
            <option value="Farm House">Farm House</option>
            <option value="Plot">Plot</option>
            <option value="Land">Land</option>
            <option value="Hotel/Resorts">Land</option>
            <option value="commercial Building">commercial Building</option>
            <option value="Guest House">Guest House</option>
            <option value="Godown">Godown</option>
            <option value="Industrial Building/Shed">Industrial Building/Shed</option>
            <option value="Others">Others</option>

          </Form.Select>
        </Form.Group>
      </Col>

      {/* Property Mode */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Property Mode</Form.Label>
          <Form.Select name="propertyMode" value={formData.propertyMode} onChange={handleInputChange}>
          <option value="">Property Mode</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Price Min */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Price Min</Form.Label>
          <Form.Select name="priceMin" value={formData.priceMin} onChange={handleInputChange}>
          <option value="">Select Minimum Price</option>
          <option value="Any Price">Any Price</option>
          <option value="50000">50,000</option>
          <option value="100000">100,000</option>
          <option value="200000">200,000</option>
          <option value="300000">300,000</option>
          <option value="400000">400,000</option>
          <option value="500000">500,000</option>
          <option value="600000">600,000</option>
          <option value="700000">700,000</option>
          <option value="800000">800,000</option>
          <option value="900000">900,000</option>
          <option value="1000000">1000,000</option>
          <option value="1500000">1500,000</option>
          <option value="2500000">2500,000</option>
          <option value="3500000">3500,000</option>
          <option value="5000000">5000,000</option>
          <option value="7500000">7500,000</option>
          <option value="10000000">1000,0000</option>
        </Form.Select>
        </Form.Group>
      </Col>

      {/* Price Max */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Price Max</Form.Label>
          <Form.Select name="priceMax" value={formData.priceMax} onChange={handleInputChange}>
          <option value="">Select Maximum Price</option>
          <option value="Any Price">Any Price</option>
          <option value="50000">50,000</option>
          <option value="100000">100,000</option>
          <option value="200000">200,000</option>
          <option value="300000">300,000</option>
          <option value="400000">400,000</option>
          <option value="500000">500,000</option>
          <option value="600000">600,000</option>
          <option value="700000">700,000</option>
          <option value="800000">800,000</option>
          <option value="900000">900,000</option>
          <option value="1000000">1000,000</option>
          <option value="1500000">1500,000</option>
          <option value="2500000">2500,000</option>
          <option value="3500000">3500,000</option>
          <option value="5000000">5000,000</option>
          <option value="7500000">7500,000</option>
          <option value="10000000">1000,0000</option>
        </Form.Select>
        </Form.Group>
      </Col>

      {/* Negotiation */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Negotiation</Form.Label>
          <Form.Select name="negotiation" value={formData.negotiation} onChange={handleInputChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="Others">Others</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Ownership */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Ownership</Form.Label>
          <Form.Select name="ownership" value={formData.ownership} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Single owner">Songle Owner</option>
          <option value="Multiple Owners">Multiple Owners</option>
          <option value="Power of Attorney">Power of Attorney</option>
        </Form.Select>
        </Form.Group>
      </Col>

      {/* State */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Select name="state" value={formData.state} onChange={handleInputChange}>
          <option value="">Select State</option>
          <option value="Pondicherry">Pondicherry</option>
          <option value="Tamilnadu">Tamilnadu</option>
          <option value="Others">Others</option>
          {/* Add other states */}
        </Form.Select>
        </Form.Group>
      </Col>

      {/* District */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>District</Form.Label>
          <Form.Select name="district" value={formData.district} onChange={handleInputChange}>
          <option value="">Select District</option>
          <option value="Karaikal">Karaikal</option>
            <option value="Mahe">Mahe</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Yanam">Yanam</option>
            <option value="Ariyalur">Ariyalur</option>
            <option value="Chengalpet">Chengalpet</option>
            <option value="Chennai">Chennai</option>
            <option value="coimbatore">coimbatore</option>
            <option value="Cuddalore">Cuddalore</option>
            <option value="Dharmapuri">Dharmapuri</option>
            <option value="Dindigul">Dindigul</option>
            <option value="Erode">Erode</option>
            <option value="Kallakurichi">Kallakurichi</option>
            <option value="Kancheepuram">Kancheepuram</option>
            <option value="Karur">Karur</option>
            <option value="Krishnagiri">Krishnagiri</option>
            <option value="Madurai">Madurai</option>
            <option value="Mayiladuthurai">Mayiladuthurai</option>
            <option value="Nagapattinam">Nagapattinam</option>
            <option value="Kanyakumari">Kanyakumari</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Perambalur">Perambalur</option>
            <option value="Pudukottai">Pudukottai</option>
            <option value="Ramanathapuram">Ramanathapuram</option>
            <option value="Ranipet">Ranipet</option>
            <option value="Salem">Salem</option>
            <option value="sivagangai">sivagangai</option>
            <option value="Tenkasi">Tenkasi</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Theni">Theni</option>
            <option value="Thiruvallur">Thiruvallur</option>
            <option value="Thiruvarur">Thiruvarur</option>
            <option value="Tuticorin">Tuticorin</option>
            <option value="Trichirappalli">Trichirappalli</option>
            <option value="Thirunelveli">Thirunelveli</option>
            <option value="Tirupathur">Tirupathur</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Tiruvannamalai">Tiruvannamalai</option>
            <option value="The Nilgiris">The Nilgiris</option>
            <option value="Vellor">Vellor</option>
            <option value="Viluppuram">Viluppuram</option>
            <option value="Virudhunagar">Virudhunagar</option>
            <option value="Others">Others</option>



          {/* Add other districts */}
        </Form.Select>
        </Form.Group>
      </Col>

      {/* City */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Select name="city" value={formData.city} onChange={handleInputChange}>
          <option value="">city</option>
          <option value="Ariyankuppam">Ariyankuppam</option>                                
      <option value="Ariyur">Ariyur</option>                                
      <option value="Bahour">Bahour</option>                                
      <option value="Ellapillaichavady">Ellapillaichavady</option>                                
      <option value="Embalam">Embalam</option>                                
      <option value="Gorimedu">Gorimedu</option>                                
      <option value="kaaterikuppam">kaaterikuppam</option>                                
      <option value="Kalapet">Kalapet</option>                                
      <option value="kannikoil">kannikoil</option>                                
      <option value="Karasur">Karasur</option>                                
      <option value="Karikalampakkam">Karikalampakkam</option>                                
      <option value="Kathirkamam">Kathirkamam</option>                                
      <option value="kirumampakkam">kirumampakkam</option>                                
      <option value="Kurumbapet">Kurumbapet</option>                                
      <option value="Lawspet">Lawspet</option>                                
      <option value="Madagadipet">Madagadipet</option>                                
      <option value="Madukarai">Madukarai</option>                                
      <option value="Manavely">Manavely</option>                                
      <option value="Mangalam">Mangalam</option>                                
      <option value="Mannadipet">Mannadipet</option>                                
      <option value="Mettupalayam">Mettupalayam</option>                                
      <option value="Moolakulam">Moolakulam</option>                                
      <option value="Mudaliarpet">Mudaliarpet</option>                                
      <option value="Murungapakkam">Murungapakkam</option>                                
      <option value="Muthialpet">Muthialpet</option>                                
      <option value="Muthirapalayam">Muthirapalayam</option>                                
      <option value="Nellithope">Nellithope</option>                                
      <option value="Netapakkam">Netapakkam</option>                                
      <option value="New Saram">New Saram</option>                                
      <option value="Odiampet">Odiampet</option>                                
      <option value="Old Saram">Old Saram</option>                                
      <option value="Orleanpet">Orleanpet</option>                                
      <option value="Ossudu">Ossudu</option>                                
      <option value="Ozhukarai">Ozhukarai</option>                                
      <option value="Pillaiyarkuppam">Pillaiyarkuppam</option>                                
      <option value="Pondicherry City">Pondicherry City</option>                                
      <option value="Pondicherry White Town">Pondicherry White Town</option>                                
      <option value="Rainbow nagar">Rainbow nagar</option>                                
      <option value="Sanyasikuppam">Sanyasikuppam</option>                                
      <option value="Sedarapet">Sedarapet</option>                                
      <option value="Sellipet">Sellipet</option>                                
      <option value="Thattanchavady">Thattanchavady</option>                                
      <option value="Thavalakuppam">Thavalakuppam</option>                                
      <option value="Thirubhuvanai">Thirubhuvanai</option>                                
      <option value="Thirukanchi">Thirukanchi</option>                                
      <option value="Tirukanur">Tirukanur</option>                                
      <option value="Thiruvandarkoil">Thiruvandarkoil</option>                                
      <option value="Thondamanatham">Thondamanatham</option>                                
      <option value="Uppalam">Uppalam</option>                                
      <option value="Uruvaiyar">Uruvaiyar</option>                                
      <option value="Vaadhanur">Vaadhanur</option>                                
      <option value="Velrampet">Velrampet</option>                                
      <option value="Villianur">Villianur</option>                                
      <option value="Manapet">Manapet</option>                                
      <option value="Kuruvinatham">Kuruvinatham</option>                                
      <option value="Karaiyambuthur">Karaiyambuthur</option>                                
      <option value="Seliamedu">Seliamedu</option>                                
      <option value="Chennai">Chennai</option>                                
      <option value="Coimbatore">Coimbatore</option>                                
      <option value="Madurai">Madurai</option>                                
      <option value="Tiruchirappalli">Tiruchirappalli</option>                                
      <option value="Salem">Salem</option>                                
      <option value="Tirunelveli">Tirunelveli</option>                                
      <option value="Tiruppur">Tiruppur</option>                                
      <option value="Vellore">Vellore</option>                                
      <option value="Erode">Erode</option>                                
      <option value="Thoothukkudi">Thoothukkudi</option>                                
      <option value="Dindigul">Dindigul</option>                                
      <option value="Thanjavur">Thanjavur</option>                                
      <option value="Ranipet">Ranipet</option>                                
      <option value="Sivakasi">Sivakasi</option>                                
      <option value="Karur">Karur</option>                                
      <option value="Udhagamandalam">Udhagamandalam</option>                                
      <option value="Hosur">Hosur</option>                                
      <option value="Nagercoil">Nagercoil</option>                                
      <option value="Kanchipuram">Kanchipuram</option>                                
      <option value="Kumarapalayam">Kumarapalayam</option>                                
      <option value="Karaikkudi">Karaikkudi</option>                                
      <option value="Neyveli">Neyveli</option>                                
      <option value="Cuddalore">Cuddalore</option>                                
      <option value="Kumbakonam">Kumbakonam</option>                                
      <option value="Tiruvannamalai">Tiruvannamalai</option>                                
      <option value="Pollachi">Pollachi</option>                                
      <option value="Rajapalayam">Rajapalayam</option>                                
      <option value="Gudiyatham">Gudiyatham</option>                                
      <option value="Pudukkottai">Pudukkottai</option>                                
      <option value="Vaniyambadi">Vaniyambadi</option>                                
      <option value="Ambur">Ambur</option>                                
      <option value="Nagapattinam">Nagapattinam</option>                                
      <option value="Villupuram">Villupuram</option>                                
      <option value="Tindivanam">Tindivanam</option>                                
      <option value="Chidambaram">Chidambaram</option>                                
      <option value="Gorimedu">Gorimedu</option>                                
      <option value="Venkata Nagar">Venkata Nagar</option>                                
      <option value="Vikravandi">Vikravandi</option>                                
      <option value="Others">Others</option>                                
      <option value="Karaikal">Karaikal</option>                                
      <option value="Virudhachalam">Virudhachalam</option>                                
      <option value="Kandamangalam">Kandamangalam</option>                                
      <option value="Reddiyarpalayam">Reddiyarpalayam</option>                                
      <option value="Mylapore">Mylapore</option>                                
      <option value="Kathirkamam">Kathirkamam</option>                                
      <option value="Kalmandapam">Kalmandapam</option>                                
      <option value="Kottakuppam">Kottakuppam</option>                                
      <option value="Vyasarpadi">Vyasarpadi</option>                                
      <option value="Thavalakuppam">Thavalakuppam</option>                                
      <option value="Tirukkanur">Tirukkanur</option>                                
      <option value=""></option>                                
      <option value="Vazhudavur">Vazhudavur</option>                                
      <option value="Tirunelvelli">Tirunelvelli</option>                                
      <option value="Auroville">Auroville</option>  
          {/* Add other cities */}
        </Form.Select>
        </Form.Group>
      </Col>

      {/* Area */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Area</Form.Label>
          <Form.Select name="area" value={formData.area} onChange={handleInputChange}>
          <option value="">Select Area</option>
          <option value="Abishegapakkam">Abishegapakkam</option>                                
      <option value="Ariyankuppam">Ariyankuppam</option>                                
      <option value="Arumbarthapuram">Arumbarthapuram</option>                                
      <option value="Bahoor">Bahoor</option>                                
      <option value="Bommayarpalayam">Bommayarpalayam</option>                                
      <option value="Kalapet">Kalapet</option>                                
      <option value="Courivinatham">Courivinatham</option>                                
      <option value="Dhanvantry Nagar">Dhanvantry Nagar</option>                                
      <option value="Embalam">Embalam</option>                                
      <option value="Irumbai">Irumbai</option>                                
      <option value="Karayamputhur">Karayamputhur</option>                                
      <option value="Karaikal">Karaikal</option>                                
      <option value="Karikalambakkam">Karikalambakkam</option>                                
      <option value="Kariyamanikam">Kariyamanikam</option>                                
      <option value="Kijour">Kijour</option>                                
      <option value="Kilpudupattu">Kilpudupattu</option>                                
      <option value="Kirumambakkam">Kirumambakkam</option>                                
      <option value="Korkadu">Korkadu</option>                                
      <option value="Kottakuppam">Kottakuppam</option>                                
      <option value="Kuilapalayam">Kuilapalayam</option>                                
      <option value="Lawspet">Lawspet</option>                                
      <option value="Maducore">Maducore</option>                                
      <option value="Mahe">Mahe</option>                                
      <option value="Manamedu">Manamedu</option>                                
      <option value="Manapeth">Manapeth</option>                                
      <option value="Mandagapet">Mandagapet</option>                                
      <option value="Mangalam">Mangalam</option>                                
      <option value="Mannadipattu">Mannadipattu</option>                                
      <option value="Morattandi">Morattandi</option>                                
      <option value="Mottoupalayam">Mottoupalayam</option>                                
      <option value="Murungapakkam">Murungapakkam</option>                                
      <option value="Mutharayarpalayam">Mutharayarpalayam</option>                                
      <option value="Mudaliarpet">Mudaliarpet</option>                                
      <option value="Muthialpet">Muthialpet</option>                                
      <option value="Nallavadu">Nallavadu</option>                                
      <option value="Nellithoppe">Nellithoppe</option>                                
      <option value="Nettapakkam">Nettapakkam</option>                                
      <option value="Odiampet">Odiampet</option>                                
      <option value="Odiensalai">Odiensalai</option>                                
      <option value="Others">Others</option>                                
      <option value="Ozhugarai">Ozhugarai</option>                                
      <option value="Padmini Nagar">Padmini Nagar</option>                                
      <option value="Pandakkal">Pandakkal</option>                                
      <option value="Pillaichavady">Pillaichavady</option>                                
      <option value="Pillayarkuppam">Pillayarkuppam</option>                                
      <option value="Pondicherry Town">Pondicherry Town</option>                                
      <option value="Pooranankuppam">Pooranankuppam</option>                                
      <option value="Poothurai">Poothurai</option>                                
      <option value="Rayapudupakkam">Rayapudupakkam</option>                                
      <option value="Reddiyarpalayam">Reddiyarpalayam</option>                                
      <option value="Saram">Saram</option>                                
      <option value="Sedarapet">Sedarapet</option>                                
      <option value="Seliamedu">Seliamedu</option>                                
      <option value="Sellipet">Sellipet</option>                                
      <option value="Sri Aurobindo Ashram">Sri Aurobindo Ashram</option>                                
      <option value="Sulthanpet">Sulthanpet</option>                                
      <option value="Thattanchavady">Thattanchavady</option>                                
      <option value="Thengaithittu">Thengaithittu</option>                                
      <option value="Thimmanaickenpalayam">Thimmanaickenpalayam</option>                                
      <option value="Tirukkanur">Tirukkanur</option>                                
      <option value="Vadhanur">Vadhanur</option>                                
      <option value="Veerampattinam">Veerampattinam</option>                                
      <option value="Venkata Nagar">Venkata Nagar</option>                                
      <option value="Villianur">Villianur</option>                                
      <option value="Vimacoundinpaleam">Vimacoundinpaleam</option>                                
      <option value="Viranam">Viranam</option>                                
      <option value="Yanam">Yanam</option>                                
      <option value="Acharapakkam">Acharapakkam</option>                                
      <option value="Agastheeswaram">Agastheeswaram</option>                                
      <option value="Alanganallur">Alanganallur</option>                                
      <option value="Alangayam">Alangayam</option>                                
      <option value="Alankulam">Alankulam</option>                                
      <option value="Alathur">Alathur</option>                                
      <option value="Alwarthirunagari">Alwarthirunagari</option>                                
      <option value="Ambasamudram">Ambasamudram</option>                                
      <option value="Ammapet">Ammapet</option>                                
      <option value="Anaicut">Anaicut</option>                                
      <option value="Anaimalai">Anaimalai</option>                                
      <option value="Anakkavoor">Anakkavoor</option>                                
      <option value="Andanallur">Andanallur</option>                                
      <option value="Andimadam">Andimadam</option>                                
      <option value="Andipatti">Andipatti</option>                                
      <option value="Annagramam">Annagramam</option>                                
      <option value="Annavasal">Annavasal</option>                                
      <option value="Annur">Annur</option>                                
      <option value="Anthiyur">Anthiyur</option>                                
      <option value="Arakonam">Arakonam</option>                                
      <option value="Arantangi">Arantangi</option>                                
      <option value="Aravakurichi">Aravakurichi</option>                                
      <option value="Arcot">Arcot</option>                                
      <option value="Arimalam">Arimalam</option>                                
      <option value="Ariyalur">Ariyalur</option>                                
      <option value="Arni">Arni</option>                                
      <option value="Arupukottai">Arupukottai</option>                                
      <option value="Athoor">Athoor</option>                                
      <option value="Attur">Attur</option>                                
      <option value="Avinashi">Avinashi</option>                                
      <option value="Avudayarkoil">Avudayarkoil</option>                                
      <option value="Ayothiyapattinam">Ayothiyapattinam</option>                                
      <option value="Bargur">Bargur</option>                                
      <option value="Batlagundu">Batlagundu</option>                                
      <option value="Bhavani">Bhavani</option>                                
      <option value="Bhavanisagar">Bhavanisagar</option>                                
      <option value="Bodinaickanur">Bodinaickanur</option>                                
      <option value="Bogalur">Bogalur</option>                                
      <option value="Budalur">Budalur</option>                                
      <option value="Chellampatti">Chellampatti</option>                                
      <option value="Chengam">Chengam</option>                                
      <option value="Chennimalai">Chennimalai</option>                                
      <option value="Cheranmahadevi">Cheranmahadevi</option>                                
      <option value="Chetpet">Chetpet</option>                                
      <option value="Cheyyar">Cheyyar</option>                                
      <option value="Chinnamanur">Chinnamanur</option>                                
      <option value="Chinnasalem">Chinnasalem</option>                                
      <option value="Chithamur">Chithamur</option>                                
      <option value="Coonoor">Coonoor</option>                                
      <option value="Cuddalore">Cuddalore</option>                                
      <option value="Cumbum">Cumbum</option>                                
      <option value="Devakottai">Devakottai</option>                                
      <option value="Dharapuram">Dharapuram</option>                                
      <option value="Dharmapuri">Dharmapuri</option>                                
      <option value="Dindigul">Dindigul</option>                                
      <option value="Elacipalayam">Elacipalayam</option>                                
      <option value="Ellapuram">Ellapuram</option>                                
      <option value="Erode">Erode</option>                                
      <option value="Erumapatty">Erumapatty</option>                                
      <option value="Gandarvakottai">Gandarvakottai</option>                                
      <option value="Gangavalli">Gangavalli</option>                                
      <option value="Gingee">Gingee</option>                                
      <option value="Gobi">Gobi</option>                                
      <option value="Gudalur">Gudalur</option>                                
      <option value="Gudimangalam">Gudimangalam</option>                                
      <option value="Gudiyatham">Gudiyatham</option>                                
      <option value="Gummidipoondi">Gummidipoondi</option>                                
      <option value="Guziliamparai">Guziliamparai</option>                                
      <option value="Harur">Harur</option>                                
      <option value="Hosur">Hosur</option>                                
      <option value="Idappady">Idappady</option>                                
      <option value="Ilayangudi">Ilayangudi</option>                                
      <option value="Jawadumalai">Jawadumalai</option>                                
      <option value="Jayamkondam">Jayamkondam</option>                                
      <option value="Jolarpet">Jolarpet</option>                                
      <option value="K Myladumparai">K Myladumparai</option>                                
      <option value="K.Paramathi">K.Paramathi</option>                                
      <option value="K.V. Kuppam">K.V. Kuppam</option>                                
      <option value="Kabilarmalai">Kabilarmalai</option>                                
      <option value="Kadaladi">Kadaladi</option>                                
      <option value="Kadambathur">Kadambathur</option>                                
      <option value="Kadavur">Kadavur</option>                                
      <option value="Kadayam">Kadayam</option>                                
      <option value="Kadayampatti">Kadayampatti</option>                                
      <option value="Kadayanallur">Kadayanallur</option>                                
      <option value="Kalaiyarkoil">Kalaiyarkoil</option>                                
      <option value="Kalakadu">Kalakadu</option>                                
      <option value="Kalasapakkam">Kalasapakkam</option>                                
      <option value="Kallakurichi">Kallakurichi</option>                                
      <option value="Kallal">Kallal</option>                                
      <option value="Kallikudi">Kallikudi</option>                                
      <option value="Kalrayan Hills">Kalrayan Hills</option>                                
      <option value="Kammapuram">Kammapuram</option>                                
      <option value="Kamuthi">Kamuthi</option>                                
      <option value="Kanai">Kanai</option>                                
      <option value="Kanchipuram">Kanchipuram</option>                                
      <option value="Kandamangalam">Kandamangalam</option>                                
      <option value="Kandhili">Kandhili</option>                                
      <option value="Kangayam">Kangayam</option>                                
      <option value="Kaniyambadi">Kaniyambadi</option>                                
      <option value="Kannangudi">Kannangudi</option>                                
      <option value="Karamadai">Karamadai</option>                                
      <option value="Karambakkudi">Karambakkudi</option>                                
      <option value="Kariapatti">Kariapatti</option>                                
      <option value="Karimangalam">Karimangalam</option>                                
      <option value="Karungulam">Karungulam</option>                                
      <option value="Karur">Karur</option>                                
      <option value="Katpadi">Katpadi</option>                                
      <option value="Kattankolathur">Kattankolathur</option>                                
      <option value="Kattumannar Koil">Kattumannar Koil</option>                                
      <option value="Kaveripakkam">Kaveripakkam</option>                                
      <option value="Kaveripattanam">Kaveripattanam</option>                                
      <option value="Kayathar">Kayathar</option>                                
      <option value="Keelaiyur">Keelaiyur</option>                                
      <option value="Keelapavoor">Keelapavoor</option>                                
      <option value="Keerapalayam">Keerapalayam</option>                                
      <option value="Kelamangalam">Kelamangalam</option>                                
      <option value="Killiyoor">Killiyoor</option>                                
      <option value="Kilpennathur">Kilpennathur</option>                                
      <option value="Kilvelur">Kilvelur</option>                                
      <option value="Kinathukadavu">Kinathukadavu</option>                                
      <option value="Kodaikanal">Kodaikanal</option>                                
      <option value="Kodavasal">Kodavasal</option>                                
      <option value="Kodumudi">Kodumudi</option>                                
      <option value="Kolathur">Kolathur</option>                                
      <option value="Koliyanur">Koliyanur</option>                                
      <option value="Kollidam">Kollidam</option>                                
      <option value="Kollihills">Kollihills</option>                                
      <option value="Konganapuram">Konganapuram</option>                                
      <option value="Koradacheri">Koradacheri</option>                                
      <option value="Kotagiri">Kotagiri</option>                                
      <option value="Kottampatti">Kottampatti</option>                                
      <option value="Kottur">Kottur</option>                                
      <option value="Kovilpatti">Kovilpatti</option>                                
      <option value="Krishnagiri">Krishnagiri</option>                                
      <option value="Krishnarayapuram">Krishnarayapuram</option>                                
      <option value="Kulithalai">Kulithalai</option>                                
      <option value="Kumaratchi">Kumaratchi</option>                                
      <option value="Kumbakonam">Kumbakonam</option>                                
      <option value="Kundadam">Kundadam</option>                                
      <option value="Kundrathur">Kundrathur</option>                                
      <option value="Kunnandarkoil">Kunnandarkoil</option>                                
      <option value="Kurinjipadi">Kurinjipadi</option>                                
      <option value="Kurunthancode">Kurunthancode</option>                                
      <option value="Kuruvikulam">Kuruvikulam</option>                                
      <option value="Kuthalam">Kuthalam</option>                                
      <option value="Lalgudi">Lalgudi</option>                                
      <option value="Lathur">Lathur</option>                                
      <option value="Mac. Choultry">Mac. Choultry</option>                                
      <option value="Madathukulam">Madathukulam</option>                                
      <option value="Madhanur">Madhanur</option>                                
      <option value="Madukkarai">Madukkarai</option>                                
      <option value="Madukkur">Madukkur</option>                                
      <option value="Madurai East">Madurai East</option>                                
      <option value="Madurai West">Madurai West</option>                                
      <option value="Madurantakam">Madurantakam</option>                                
      <option value="Mailam">Mailam</option>                                
      <option value="Mallasamudram">Mallasamudram</option>                                
      <option value="Manachanallur">Manachanallur</option>                                
      <option value="Manamadurai">Manamadurai</option>                                
      <option value="Manamelkudi">Manamelkudi</option>                                
      <option value="Manapparai">Manapparai</option>                                
      <option value="Mandapam">Mandapam</option>                                
      <option value="Mangalur">Mangalur</option>                                
      <option value="Manikandam">Manikandam</option>                                
      <option value="Mannargudi">Mannargudi</option>                                
      <option value="Manur">Manur</option>                                
      <option value="Marungapuri">Marungapuri</option>                                
      <option value="Mathur">Mathur</option>                                
      <option value="Mayiladuthurai">Mayiladuthurai</option>                                
      <option value="Mecheri">Mecheri</option>                                
      <option value="Melaneelithanallur">Melaneelithanallur</option>                                
      <option value="Melbhuvanagiri">Melbhuvanagiri</option>                                
      <option value="Melmalayanur">Melmalayanur</option>                                
      <option value="Melpuram">Melpuram</option>                                
      <option value="Melur">Melur</option>                                
      <option value="Marakkanam">Marakkanam</option>                                
      <option value="Minjur">Minjur</option>                                
      <option value="Modakkuruchi">Modakkuruchi</option>                                
      <option value="Mohanur">Mohanur</option>                                
      <option value="Morappur">Morappur</option>                                
      <option value="Mudukulathur">Mudukulathur</option>                                
      <option value="Mugaiyur">Mugaiyur</option>                                
      <option value="Mulanur">Mulanur</option>                                
      <option value="Munchirai">Munchirai</option>                                
      <option value="Musiri">Musiri</option>                                
      <option value="Muthupettai">Muthupettai</option>                                
      <option value="Nagapattinam">Nagapattinam</option>                                
      <option value="Nainarkoil">Nainarkoil</option>                                
      <option value="Nallampalli">Nallampalli</option>                                
      <option value="Nallur">Nallur</option>                                
      <option value="Namagiripet">Namagiripet</option>                                
      <option value="Namakkal">Namakkal</option>                                
      <option value="Nambiyur">Nambiyur</option>                                
      <option value="Nangavalli">Nangavalli</option>                                
      <option value="Nanguneri">Nanguneri</option>                                
      <option value="Nannilam">Nannilam</option>                                
      <option value="Narikudi">Narikudi</option>                                
      <option value="Natham">Natham</option>                                
      <option value="Natrampalli">Natrampalli</option>                                
      <option value="Needamangalam">Needamangalam</option>                                
      <option value="Nemili">Nemili</option>                                
      <option value="Nilakottai">Nilakottai</option>                                
      <option value="Oddanchatram">Oddanchatram</option>                                
      <option value="Olakkur">Olakkur</option>                                
      <option value="Omalur">Omalur</option>                                
      <option value="Orathanadu">Orathanadu</option>                                
      <option value="Ottapidaram">Ottapidaram</option>                                
      <option value="P.N.Palayam">P.N.Palayam</option>                                
      <option value="Palacode">Palacode</option>                                
      <option value="Palani">Palani</option>                                
      <option value="Palayamkottai">Palayamkottai</option>                                
      <option value="Palladam">Palladam</option>                                
      <option value="Pallipalayam">Pallipalayam</option>                                
      <option value="Pallipet">Pallipet</option>                                
      <option value="Panamarathupatti">Panamarathupatti</option>                                
      <option value="Panruti">Panruti</option>                                
      <option value="Papanasam">Papanasam</option>                                
      <option value="Pappakudi">Pappakudi</option>                                
      <option value="Pappireddipatti">Pappireddipatti</option>                                
      <option value="Paramakudi">Paramakudi</option>                                
      <option value="Paramathy">Paramathy</option>                                
      <option value="Parangipettai">Parangipettai</option>                                
      <option value="Pattukkottai">Pattukkottai</option>                                
      <option value="Pennagaram">Pennagaram</option>                                
      <option value="Perambalur">Perambalur</option>                                
      <option value="Peranamallur">Peranamallur</option>                                
      <option value="Peravurani">Peravurani</option>                                
      <option value="Periyakulam">Periyakulam</option>                                
      <option value="Pernambet">Pernambet</option>                                
      <option value="Perundurai">Perundurai</option>                                
      <option value="Pollachi(N)">Pollachi(N)</option>                                
      <option value="Pollachi(S)">Pollachi(S)</option>                                
      <option value="Polur">Polur</option>                                
      <option value="Pongalur">Pongalur</option>                                
      <option value="Ponnamaravathi">Ponnamaravathi</option>                                
      <option value="Poonamallee">Poonamallee</option>                                
      <option value="Poondi">Poondi</option>                                
      <option value="Puduchatram">Puduchatram</option>                                
      <option value="Pudukkottai">Pudukkottai</option>                                
      <option value="Pudupalayam">Pudupalayam</option>                                
      <option value="Pudur">Pudur</option>                                
      <option value="Pullampady">Pullampady</option>                                
      <option value="Puzhal">Puzhal</option>                                
      <option value="R.K.Pet">R.K.Pet</option>                                
      <option value="R.S. Mangalam">R.S. Mangalam</option>                                
      <option value="Radhapuram">Radhapuram</option>                                
      <option value="Rajakkamangalam">Rajakkamangalam</option>                                
      <option value="Rajapalayam">Rajapalayam</option>                                
      <option value="Ramanathapuram">Ramanathapuram</option>                                
      <option value="Rasipuram">Rasipuram</option>                                
      <option value="Reddiarchatram">Reddiarchatram</option>                                
      <option value="Rishivandiyam">Rishivandiyam</option>                                
      <option value="S.Pudur">S.Pudur</option>                                
      <option value="S.S.Kulam">S.S.Kulam</option>                                
      <option value="Sakkottai">Sakkottai</option>                                
      <option value="Salem">Salem</option>                                
      <option value="Sankarankoil">Sankarankoil</option>                                
      <option value="Sankarapuram">Sankarapuram</option>                                
      <option value="Sankari">Sankari</option>                                
      <option value="Sathy">Sathy</option>                                
      <option value="Sattankulam">Sattankulam</option>                                
      <option value="Sattur">Sattur</option>                                
      <option value="Sedapatti">Sedapatti</option>                                
      <option value="Sembanarkoil">Sembanarkoil</option>                                
      <option value="Sendamangalam">Sendamangalam</option>                                
      <option value="Sendurai">Sendurai</option>                                
      <option value="Sethubavachatram">Sethubavachatram</option>                                
      <option value="Shanarpatti">Shanarpatti</option>                                
      <option value="Shencottai">Shencottai</option>                                
      <option value="Sholavaram">Sholavaram</option>                                
      <option value="Sholinghur">Sholinghur</option>                                
      <option value="Shoolagiri">Shoolagiri</option>                                
      <option value="Singampunari">Singampunari</option>                                
      <option value="Sirkali">Sirkali</option>                                
      <option value="Sivaganga">Sivaganga</option>                                
      <option value="Sivakasi">Sivakasi</option>                                
      <option value="Sriperumbudur">Sriperumbudur</option>                                
      <option value="Srivaikundam">Srivaikundam</option>                                
      <option value="Srivilliputhur">Srivilliputhur</option>                                
      <option value="Sultanpet">Sultanpet</option>                                
      <option value="Sulur">Sulur</option>                                
      <option value="T.Kallupatty">T.Kallupatty</option>                                
      <option value="T.N. Palayam">T.N. Palayam</option>                                
      <option value="T.Palur">T.Palur</option>                                
      <option value="T.Pet">T.Pet</option>                                
      <option value="T.V. Nallur">T.V. Nallur</option>                                
      <option value="Talavadi">Talavadi</option>                                
      <option value="Tenkasi">Tenkasi</option>                                
      <option value="Thalainayar">Thalainayar</option>                                
      <option value="Thalaivasal">Thalaivasal</option>                                
      <option value="Thally">Thally</option>                                
      <option value="Thandrampet">Thandrampet</option>                                
      <option value="Thanjavur">Thanjavur</option>                                
      <option value="Thanthoni">Thanthoni</option>                                
      <option value="Tharamangalam">Tharamangalam</option>                                
      <option value="Thellar">Thellar</option>                                
      <option value="Theni">Theni</option>                                
      <option value="Thimiri">Thimiri</option>                                
      <option value="Thirukalukundram">Thirukalukundram</option>                                
      <option value="Thirumangalam">Thirumangalam</option>                                
      <option value="Thirumanur">Thirumanur</option>                                
      <option value="Thirumarugal">Thirumarugal</option>                                
      <option value="Thirumayam">Thirumayam</option>                                
      <option value="Thirupathur">Thirupathur</option>                                
      <option value="Thiruporur">Thiruporur</option>                                
      <option value="Thirupparankundram">Thirupparankundram</option>                                
      <option value="Thiruppathur">Thiruppathur</option>                                
      <option value="Thiruppullani">Thiruppullani</option>                                
      <option value="Thiruppuvanam">Thiruppuvanam</option>                                
      <option value="Thiruthuraipoondi">Thiruthuraipoondi</option>                                
      <option value="Thiruvadanai">Thiruvadanai</option>                                
      <option value="Thiruvaiyaru">Thiruvaiyaru</option>                                
      <option value="Thiruvarankulam">Thiruvarankulam</option>                                
      <option value="Thiruvarur">Thiruvarur</option>                                
      <option value="Thiruvattar">Thiruvattar</option>                                
      <option value="Thiruverambur">Thiruverambur</option>                                
      <option value="Thiruvidaimarudur">Thiruvidaimarudur</option>                                
      <option value="Thiruvonam">Thiruvonam</option>                                
      <option value="Thiyagadurgam">Thiyagadurgam</option>                                
      <option value="Thogamalai">Thogamalai</option>                                
      <option value="Thomas Malai">Thomas Malai</option>                                
      <option value="Thondamuthur">Thondamuthur</option>                                
      <option value="Thoothukudi">Thoothukudi</option>                                
      <option value="Thoppampatti">Thoppampatti</option>                                
      <option value="Thottiam">Thottiam</option>                                
      <option value="Thovalai">Thovalai</option>                                
      <option value="Thuckalay">Thuckalay</option>                                
      <option value="Thuraiyur">Thuraiyur</option>                                
      <option value="Thurinjapuram">Thurinjapuram</option>                                
      <option value="Tiruchendur">Tiruchendur</option>                                
      <option value="Tiruchengode">Tiruchengode</option>                                
      <option value="Tiruchuli">Tiruchuli</option>                                
      <option value="Tirukoilur">Tirukoilur</option>                                
      <option value="Tirunavalur">Tirunavalur</option>                                
      <option value="Tiruppanandal">Tiruppanandal</option>                                
      <option value="Tiruppur">Tiruppur</option>                                
      <option value="Tiruttani">Tiruttani</option>                                
      <option value="Tiruvalangadu">Tiruvalangadu</option>                                
      <option value="Tiruvallur">Tiruvallur</option>                                
      <option value="Tiruvannamalai">Tiruvannamalai</option>                                
      <option value="Udangudi">Udangudi</option>                                
      <option value="Udhagai">Udhagai</option>                                
      <option value="Udumalpet">Udumalpet</option>                                
      <option value="Ulundurpet">Ulundurpet</option>                                
      <option value="Uppiliyapuram">Uppiliyapuram</option>                                
      <option value="Usilampatti">Usilampatti</option>                                
      <option value="Uthamapalayam">Uthamapalayam</option>                                
      <option value="Uthangarai">Uthangarai</option>                                
      <option value="Uthiramerur">Uthiramerur</option>                                
      <option value="Uthukuli">Uthukuli</option>                                
      <option value="Vadamadurai">Vadamadurai</option>                                
      <option value="Vadipatti">Vadipatti</option>                                
      <option value="Vaiyampatty">Vaiyampatty</option>                                
      <option value="Valangaiman">Valangaiman</option>                                
      <option value="Valapady">Valapady</option>                                
      <option value="Vallam">Vallam</option>                                
      <option value="Valliyoor">Valliyoor</option>                                
      <option value="Vandavasi">Vandavasi</option>                                
      <option value="Vanur">Vanur</option>                                
      <option value="Vasudevanallur">Vasudevanallur</option>                                
      <option value="Vedaranyam">Vedaranyam</option>                                
      <option value="Vedasandur">Vedasandur</option>                                
      <option value="Veerapandy">Veerapandy</option>                                
      <option value="Vellakoil">Vellakoil</option>                                
      <option value="Vellore">Vellore</option>                                
      <option value="Vembakkam">Vembakkam</option>                                
      <option value="Vembakottai">Vembakottai</option>                                
      <option value="Vennandur">Vennandur</option>                                
      <option value="Veppanapalli">Veppanapalli</option>                                
      <option value="Veppanthattai">Veppanthattai</option>                                
      <option value="Veppur">Veppur</option>                                
      <option value="Vikkiravandi">Vikkiravandi</option>                                
      <option value="Vilathikulam">Vilathikulam</option>                                
      <option value="Villivakkam">Villivakkam</option>                                
      <option value="Viralimalai">Viralimalai</option>                                
      <option value="Virudhunagar">Virudhunagar</option>                                
      <option value="Vridhachalam">Vridhachalam</option>                                
      <option value="Walajabad">Walajabad</option>                                
      <option value="Walajah">Walajah</option>                                
      <option value="Watrap">Watrap</option>                                
      <option value="West Arni">West Arni</option>                                
      <option value="Yercaud">Yercaud</option>                                
      <option value="Others">Others</option>                                
      <option value="Others">Others</option>                                
      <option value="Boomiyanpet">Boomiyanpet</option>                                
      <option value="Ellaipillaichavady">Ellaipillaichavady</option>                                
      <option value="Mudaliarpet">Mudaliarpet</option>                                
      <option value="Bahour">Bahour</option>                                
      <option value="Moolakulam">Moolakulam</option>                                
      <option value="Thavalakuppam">Thavalakuppam</option>                                
      <option value="Poraiyar">Poraiyar</option>                                
      <option value="Brindavan">Brindavan</option>                                
      <option value="Tindivanam">Tindivanam</option>                                
      <option value="Chidambaram">Chidambaram</option>                                
      <option value="Gorimedu">Gorimedu</option>                                
      <option value="Pinachikuppam">Pinachikuppam</option>                                
      <option value="Rainbow nagar">Rainbow nagar</option>                                
      <option value="Ossudu">Ossudu</option>                                
      <option value="Vadalur">Vadalur</option>                                
      <option value="Neyveli">Neyveli</option>                                
      <option value="Mailam">Mailam</option>                                
      <option value="Singirikudi">Singirikudi</option>                                
      <option value="Vikravandi">Vikravandi</option>                                
      <option value="Thirukoilur">Thirukoilur</option>                                
      <option value="Pattanur">Pattanur</option>                                
      <option value="Siruvanthadu">Siruvanthadu</option>                                
      <option value="Villupuram">Villupuram</option>                                
      <option value="Reddicahvady">Reddicahvady</option>                                
      <option value="Reddichavady">Reddichavady</option>                                
      <option value="Kelampakkam">Kelampakkam</option>                                
      <option value="Kizhputhupet">Kizhputhupet</option>                                
      <option value="Veerangiuram">Veerangiuram</option>                                
      <option value="Kottucherry">Kottucherry</option>                                
      <option value="Neravi">Neravi</option>                                
      <option value="Thirunallar">Thirunallar</option>                                
      <option value="Virudhachalam">Virudhachalam</option>                                
      <option value="Periyakattupalayam">Periyakattupalayam</option>                                
      <option value="Medavakkam">Medavakkam</option>                                
      <option value="Manjakuppam">Manjakuppam</option>                                
      <option value="Shanmugapuram">Shanmugapuram</option>                                
      <option value="Guduvancherry">Guduvancherry</option>                                
      <option value="Koothapakkam">Koothapakkam</option>                                
      <option value="Thiruvandarkoil">Thiruvandarkoil</option>                                
      <option value="Thirukanchi">Thirukanchi</option>                                
      <option value="Thennal">Thennal</option>                                
      <option value="Avanipur">Avanipur</option>                                
      <option value="Ayyanavaram">Ayyanavaram</option>                                
      <option value="Vempampattu">Vempampattu</option>                                
      <option value="Mylapore">Mylapore</option>                                
      <option value="Senthanatham">Senthanatham</option>                                
      <option value="Chavady">Chavady</option>                                
      <option value="kottakuppam">kottakuppam</option>                                
      <option value="Pathukannu">Pathukannu</option>                                
      <option value="Triplicane">Triplicane</option>                                
      <option value="Ayanavaram">Ayanavaram</option>                                
      <option value="Nungambakkam">Nungambakkam</option>                                
      <option value="Kizhoor ">Kizhoor </option>                                
      <option value="Tambaram">Tambaram</option>                                
      <option value="Vandalur">Vandalur</option>                                
      <option value="Kathirkamam">Kathirkamam</option>                                
      <option value="Moratandi">Moratandi</option>                                
      <option value="Periyapalayam">Periyapalayam</option>                                
      <option value="Vyasarpadi">Vyasarpadi</option>                                
      <option value="Auroville">Auroville</option>                                
      <option value="Purasaivakkam">Purasaivakkam</option>                                
      <option value="KEEZHAKASAKUDY">KEEZHAKASAKUDY</option>                                
      <option value="Amjikarai">Amjikarai</option>                                
      <option value="Ambathur">Ambathur</option>                                
      <option value="Vandrapet">Vandrapet</option>                                
      <option value="Vandrapet">Vandrapet</option>                                
      <option value="Aavadi">Aavadi</option>                                
      <option value="Royapettah">Royapettah</option>                                
      <option value="Otteri">Otteri</option>                                
      <option value="Korattur">Korattur</option>                                
      <option value="Ayyur Agaram">Ayyur Agaram</option>                                
      <option value="New bye pass- 100 feet road">New bye pass- 100 feet road</option>                                
      <option value="Thirubhuvanai">Thirubhuvanai</option>                                
      <option value="Chennai">Chennai</option>                                
      <option value="Pinnachikuppam">Pinnachikuppam</option>                                
      <option value="Periyakatupalayam">Periyakatupalayam</option>                                
      <option value="Varakalpattu">Varakalpattu</option>                                
      <option value="Thavalakuppam">Thavalakuppam</option>                                
      <option value="Vazhudavur">Vazhudavur</option>                                
      <option value="Tirunelvelli">Tirunelvelli</option>                                
      <option value="Auroville">Auroville</option>     
        </Form.Select>
        </Form.Group>
      </Col>

      {/* Property Age */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Property Age</Form.Label>
          <Form.Select name="propertyAge" value={formData.propertyAge} onChange={handleInputChange}>
            <option value="Under Construction">Under Construction</option>
            <option value="Newly Built">Newly Built</option>
            <option value="2yrs">2yrs</option>
            <option value="3yrs">3yrs</option>
            <option value="4yrs">4yrs</option>
            <option value="5yrs">5yrs</option>
            <option value="6yrs">6yrs</option>
            <option value="7yrs">7yrs</option>
            <option value="8yrs">8yrs</option>
            <option value="9yrs">9yrs</option>
            <option value="10yrs">10yrs</option>
            <option value="11yrs">12yrs</option>
            <option value="12yrs">12yrs</option>
            <option value="13yrs">12yrs</option>
            <option value="14yrs">12yrs</option>
            <option value="15yrs">12yrs</option>
            <option value="16yrs">12yrs</option>
            <option value="17yrs">12yrs</option>
            <option value="18yrs">12yrs</option>
            <option value="19yrs">12yrs</option>
            <option value="20+yrs">12yrs</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Property Approved */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Property Approved</Form.Label>
          <Form.Select name="propertyApproved" value={formData.propertyApproved} onChange={handleInputChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Bank Loan */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Bank Loan</Form.Label>
          <Form.Select name="bankLoan" value={formData.bankLoan} onChange={handleInputChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Number of Floors */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Number of Floors</Form.Label>
          <Form.Select name="noOfFloors" value={formData.noOfFloors} onChange={handleInputChange}>
          <option value="Under Ground">Under Ground</option>
            <option value="Ground no_of_floors">Ground no_of_floors</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>


          </Form.Select>
        </Form.Group>
      </Col>

      {/* Attached Bathroom */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Attached Bathroom</Form.Label>
          <Form.Select name="attachedBathroom" value={formData.attachedBathroom} onChange={handleInputChange}>
          <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Western Toilet */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Western Toilet</Form.Label>
          <Form.Select name="westernToilet" value={formData.westernToilet} onChange={handleInputChange}>
          <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Furnished */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Furnished</Form.Label>
          <Form.Select name="furnished" value={formData.furnished} onChange={handleInputChange}>
            <option value="Un Furnished">Un Furnished</option>
            <option value="Semi Furnished">Semi Furnished</option>
            <option value="Fully Furnished">Fully Furnished</option>
            
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Car Parking */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Car Parking</Form.Label>
          <Form.Select name="carParking" value={formData.carParking} onChange={handleInputChange}>
            <option value="Closed">Closed</option>
            <option value="Open">Open</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Lift */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Lift</Form.Label>
          <Form.Select name="lift" value={formData.lift} onChange={handleInputChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Area Unit */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Area Unit</Form.Label>
                 <Form.Select name="areaUnit" value={formData.areaUnit} onChange={handleInputChange}>
            <option value="Sq.ft">Sq.ft</option>
            <option value="Sq.MeterCent">Sq.MeterCent</option>
            <option value="Cent">Cent</option>
            <option value="Acre">Acre</option>
            <option value="Hectare">Hectare</option>

          </Form.Select>
        </Form.Group>
      </Col>

      {/* Facing */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Facing</Form.Label>
                           <Form.Select name="facing" value={formData.facing} onChange={handleInputChange}>
            <option value="North">            <option value="North">Sq.ft</option>
            </option>
            <option value="North-West">North-West</option>
            <option value="North-East">North-East</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="South">South</option>
            <option value="South-East">South-East</option>
            <option value="South-West">South-West</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* Posted By */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Posted By</Form.Label>
          <Form.Select name="postedDate" value={formData.postedDate} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Owner">Owner</option>
           <option value="Agent">Agent</option>
           <option value="Dealer">Dealer</option>

          </Form.Select>
        </Form.Group>
      </Col>

      {/* Posted Date */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Posted Date</Form.Label>
          <Form.Control
            type="date"
            name="postedDate"
            value={formData.postedDate}
            onChange={handleInputChange}
          />
          
        </Form.Group>
      </Col>

      {/* Mobile Number */}
      <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
          />
        </Form.Group>
      </Col>
      <Col>
      <Button type="submit" style={{background:'#001f3f', color:'#ffc631', border:'2px solid #ffc631 '}}>Search</Button>
      </Col>
    </Row>
  </Form>


</Modal.Body>

        </Modal>
      </Container>
    </div>
  );
};

export default FormPage;
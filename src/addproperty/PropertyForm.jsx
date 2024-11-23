
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  FaMoneyBill, FaCalendarAlt, FaBed, FaRulerCombined,  FaChartArea, FaBuilding, FaCar, FaBath, FaHome, FaHandHoldingUsd, FaArrowCircleUp, FaBicycle, FaTag, FaShieldAlt, FaUserAlt, FaMapSigns, FaMapMarkerAlt, FaFileAlt, FaPhoneAlt, FaUser, FaTags } from 'react-icons/fa';
import { FaCity, FaClock, FaEnvelope, FaImage, FaRegAddressCard } from 'react-icons/fa6';


export default function PropertyForm() {

    const initialFormData = {
        ppcId: '',
        price: '',
        propertyMode:'',
        propertyType:'',
        length: '',
        breadth: '',
        totalArea: '',
        ownership: '',
        propertyApproved: '',
        bankLoan: '',
        bedrooms: '',
        noOfFloors: '',
        attachedBathroom: '',
        western: '',
        carPark: '',
        furnished: '',
        facing: '',
        propertyAge: '',
        postedBy: '',
    salesMode: '',
    salesType: '',
    areaUnit: '',
    lift: '',
    ownerEmail:'',
    ownerName:'',
    ownerPhone:'',
    alternatePhone:'',
    bestTimeToCall:'',
        description: '',
        propertyType: '',
        location: {
            city: '',
            area: '',
            state: '',
            district: ''
        },
        nagar:'',
        streetName:'',
        doorNumber:'',
        image: null
    };

    const [formData, setFormData] = useState(initialFormData);

    const [showModal, setShowModal] = useState(false);

    // Handle opening the modal
    const handleShow = () => setShowModal(true);
  
    // Handle closing the modal
    const handleClose = () => setShowModal(false);
  
    // Handle delete button click
    const handleDelete = () => {
      console.log('Delete button clicked');
      handleClose();  // Close the modal after action
    };
  
    // Handle update button click
    const handleUpdate = () => {
      console.log('Update button clicked');
      handleClose();  // Close the modal after action
    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith('location.')) {
            const locationField = name.split('.')[1];
            setFormData(prevState => ({
                ...prevState,
                location: {
                    ...prevState.location,
                    [locationField]: value
                }
            }));
        }
        // Handle checkbox inputs like car parking and attached bathroom
        // else if (name === 'carPark' || name === 'lift') {
        //     setFormData(prevState => ({
        //         ...prevState,
        //         [name]: checked
        //     }));
        // }
        // // Handle number inputs like attached bathroom
        // else if (name === 'attachedBathroom') {
        //     setFormData(prevState => ({
        //         ...prevState,
        //         [name]: value
        //     }));
        // }
        // // Handle bathroom type (Western or Indian)
        // else if (name === 'westernToilet') {
        //     setFormData(prevState => ({
        //         ...prevState,
        //         [name]: value
        //     }));
        // }
        // Handle file input
        else if (name === 'image') {
            const file = e.target.files[0];
            if (file && !file.type.startsWith("image/")) {
                toast.error("Please upload a valid image.");
                return;
            }
            setFormData(prevState => ({
                ...prevState,
                [name]: file
            }));
        }
        else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success message
        toast.success("Property details added successfully!");

        // Reset the form by setting formData to its initial state
        setFormData(initialFormData);
    };

    return (
        <>
            <ToastContainer />
            <Container style={{ marginTop: "30px" }}>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <Card className="p-4 bg-dark text-white">
                            <Form onSubmit={handleSubmit}>
                            <h1 className="m-2 text-white fw-bold mb-4 text-center">Property Details Form</h1>
                             
    <Row className="justify-content-center">
      <Col md={3}></Col>
      <Col md={6} xs={8} lg={6}>
        <Card className="mb-3">
          <Card.Body>
            <Form.Group controlId="image">
              <Form.Label className="text-success fw-bold">
                <FaImage className="me-2" /> Upload Image
              </Form.Label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                required
                className="form-control"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>

      <Col md={3}></Col>  
    </Row>

<Row>
                                {/* Column 1 */}
                                <Col md={6} className='p-3'>
<Card className='p-3'>
<h3 className="d-flex align-items-center text-warning pb-3">
      <FaHome className="me-2" /> Property Details
    </h3>
    <Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="propertyMode">
            <Form.Label className='text-success fw-bold'>
                <FaHome className="me-2" />
                Property Mode
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <select
                name="propertyMode"
                value={formData.propertyMode}
                onChange={handleChange}
                required
                className="form-control"
            >
                <option value="">Select Property Mode</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="propertyType">
            <Form.Label className="text-success fw-bold">
                <FaBuilding className="me-2" />
                Property Type
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="form-control"
            >
                <option value="">Select Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="independent_house">Independent House</option>
                <option value="villa">Villa</option>
                <option value="farm_house">Farm House</option>
                <option value="plot">Plot</option>
                <option value="land">Land</option>
                <option value="hotel_resorts">Hotel/Resorts</option>
                <option value="commercial_building">Commercial Building</option>
                <option value="guest_house">Guest House</option>
                <option value="godown">Godown</option>
                <option value="industrial_building_shed">Industrial Building/Shed</option>
                <option value="others">Others</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>



<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="price">
            <Form.Label className='text-success fw-bold'>
                <FaTag className="me-2" />
                Price
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="propertyAge">
            <Form.Label className="text-success fw-bold">
                <FaCalendarAlt className="me-2" />
                Property Age 
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <select
                name="propertyAge"
                value={formData.propertyAge}
                onChange={handleChange}
                required
                className="form-control"
            >
                <option value="">Select Property Age</option>
                <option value="under_construction">Under Construction</option>
                <option value="newly_built">Newly Built</option>
                <option value="2years">2yrs</option>
                <option value="3years">3yrs</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
      <Card.Body>
        <Form.Group controlId="bankLoan">
          <Form.Label className="text-success fw-bold">
            <FaMoneyBill className="me-2" />
            Bank Loan
          </Form.Label>
          <select
            name="bankLoan" 
            value={formData.bankLoan} 
            onChange={handleChange} 
            className="form-control"
          >
            <option value="">Select Bank Loan</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </Form.Group>
      </Card.Body>
    </Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="length">
            <Form.Label className='text-success fw-bold'>
                <FaRulerCombined className="me-2" />
                Length (ft)
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <input
                type="number"
                name="length"
                value={formData.length}
                onChange={handleChange}
                required
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="breadth">
            <Form.Label className='text-success fw-bold'>
                <FaRulerCombined className="me-2" />
                Breadth (ft)
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <input
                type="number"
                name="breadth"
                value={formData.breadth}
                onChange={handleChange}
                required
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="totalArea">
            <Form.Label className='text-success fw-bold'>
                <FaChartArea className="me-2" />
                Total Area (sq.ft)
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <input
                type="text"
                name="totalArea"
                value={formData.totalArea}
                onChange={handleChange}
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="ownership">
            <Form.Label className='text-success fw-bold'>
                <FaHome className="me-2" />
                Ownership
            </Form.Label>
            <select
                name="ownership"
                value={formData.ownership}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Ownership</option>
                <option value="Single Owner">Single Owner</option>
                <option value="Multiple Owners">Multiple Owners</option>
                <option value="Power Of Attorney">Power Of Attorney</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="bedrooms">
            <Form.Label className="text-success fw-bold">
                <FaBed className="me-2" />
                Bedrooms
            </Form.Label>
            <select
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Number of Bedrooms</option>
                <option value="No">No</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="areaUnit">
            <Form.Label className="text-success fw-bold">
                <FaRulerCombined className="me-2" />
                Area Unit
            </Form.Label>
            <select
                name="areaUnit"
                value={formData.areaUnit}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Area Unit</option>
                <option value="sqft">sq.ft</option>
                <option value="sqm">sq.meter</option>
                <option value="cent">Cent</option>
                <option value="acre">Acre</option>
                <option value="hectare">Hectare</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="propertyApproved">
            <Form.Label className="text-success fw-bold">
                <FaShieldAlt className="me-2" />
                Property Approved
            </Form.Label>
            <select
                name="propertyApproved"
                value={formData.propertyApproved}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Property Approved</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="postedBy">
            <Form.Label className="text-success fw-bold">
                <FaUserAlt className="me-2" />
                Posted By
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <select
                name="postedBy"
                value={formData.postedBy}
                onChange={handleChange}
                required
                className="form-control"
            >
                <option value="" disabled>Select option</option>
                <option value="owner">Owner</option>
                <option value="broker">Broker</option>
                <option value="developer">Developer</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="facing">
            <Form.Label className="text-success fw-bold">
                <FaArrowCircleUp className="me-2" />
                Facing
            </Form.Label>
            <select
                name="facing"
                value={formData.facing}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Facing</option>
                <option value="East">East</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="West">West</option>
                <option value="North-East">North-East</option>
                <option value="North-South">North-South</option>
                <option value="South-West">South-West</option>
                <option value="South-East">South-East</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="salesMode">
            <Form.Label className="text-success fw-bold">
                <FaHandHoldingUsd className="me-2" />
                Sales Mode
            </Form.Label>
            <select
                name="salesMode"
                value={formData.salesMode}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Sales Mode</option>
                <option value="fullPayment">Full Payment</option>
                <option value="partialPayment">Partial Payment</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="salesType">
            <Form.Label className="text-success fw-bold">
                <FaTag className="me-2" />
                Sales Type
            </Form.Label>
            <select
                name="salesType"
                value={formData.salesType}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Sales Type</option>
                <option value="urgent">Urgent</option>
                <option value="normal">Normal</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="attachedBathroom">
            <Form.Label className="text-success fw-bold">
                <FaBath className="me-2" />
                Attached Bathrooms
            </Form.Label>
            <select
                name="attachedBathroom"
                value={formData.attachedBathroom}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Number of Attached Bathrooms</option>
                <option value="NO">No</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="westernToilet">
            <Form.Label className="text-success fw-bold">
                <FaBath className="me-2" />
                Western
          </Form.Label>
            <select
                name="westernToilet"
                value={formData.westernToilet}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Western</option>
                <option value="No">No</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="description">
            <Form.Label className='text-success fw-bold'>
                <FaFileAlt className="me-2" /> Description
            </Form.Label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>

</Card>
</Col>



<Col md={6} className='p-3'>

<Card className='p-3'>
    <h3 className="d-flex align-items-center text-warning pb-3"><FaTags className="me-2" /> Property Features </h3>

    <Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="furnished">
            <Form.Label className="text-success fw-bold">
                <FaHome className="me-2" />
                Furnished
            </Form.Label>
            <select
                name="furnished"
                value={formData.furnished}
                onChange={handleChange}
                className="form-control"
            >
                <option value=''>Select Furnished Or Not</option>
                <option value="Furnished">Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="lift">
            <Form.Label className="text-success fw-bold">
                <FaBuilding className="me-2" />
                Lift
            </Form.Label>
            <select
                name="lift"
                value={formData.lift}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Lift Status</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="closed">Closed</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>



                             


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="noOfFloors">
            <Form.Label className="text-success fw-bold">
                <FaBuilding className="me-2" />
                Number of Floors
            </Form.Label>
            <select
                name="noOfFloors"
                value={formData.noOfFloors}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Number of Floors</option>
                <option value="underfloor">Underfloor</option>
                <option value="groundfloor">Groundfloor</option>
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
            </select>
        </Form.Group>
    </Card.Body>
</Card>


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="carPark">
            <Form.Label className="text-success fw-bold">
                <FaCar className="me-2" />
                Car Parking
            </Form.Label>
            <select
                name="carPark"
                value={formData.carPark}
                onChange={handleChange}
                className="form-control"
            >
                <option value=""> Select Car Parking </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>




</Card>


<Card className='p-3'>
<h3 className="d-flex align-items-center text-warning pb-3">
    <FaMapMarkerAlt className="me-2" /> Rental Property Address
</h3>
<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="location.state">
            <Form.Label className='text-success fw-bold'>
                <FaMapSigns className="me-2" /> State
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <input
                type="text"
                name="location.state"
                value={formData.location.state}
                onChange={handleChange}
                required
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="location.city">
            <Form.Label className='text-success fw-bold'>
                <FaCity className="me-2" /> City
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <input
                type="text"
                name="location.city"
                value={formData.location.city}
                onChange={handleChange}
                required
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>


<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="location.district">
            <Form.Label className='text-success fw-bold'>
                <FaMapSigns className="me-2" /> District
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <input
                type="text"
                name="location.district"
                value={formData.location.district}
                onChange={handleChange}
                required
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="location.area">
            <Form.Label className='text-success fw-bold'>
                <FaMapMarkerAlt className="me-2" /> Area
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <input
                type="text"
                name="location.area"
                value={formData.location.area}
                onChange={handleChange}
                required
                className="form-control"
            />
        </Form.Group>
    </Card.Body>
</Card>


{/* New Input Fields */}
<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="streetName">
            <Form.Label className="text-success fw-bold">
                <FaRegAddressCard className="me-2" /> Street Name
            </Form.Label>
            <input
                type="text"
                name="streetName"
                value={formData.streetName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Street Name"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="doorNumber">
            <Form.Label className="text-success fw-bold">
                <FaRegAddressCard className="me-2" /> Door Number
            </Form.Label>
            <input
                type="text"
                name="doorNumber"
                value={formData.doorNumber}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Door Number"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="nagar">
            <Form.Label className="text-success fw-bold">
                <FaRegAddressCard className="me-2" /> Nagar (Area)
            </Form.Label>
            <input
                type="text"
                name="nagar"
                value={formData.nagar}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Nagar (Area)"
            />
        </Form.Group>
    </Card.Body>
</Card>
</Card>


<Card className='p-3'>

<h3 className="d-flex align-items-center text-warning pb-3">   <FaUser className="me-2" />  Owner Detailes  </h3>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="ownerName">
            <Form.Label className="text-success fw-bold">
                <FaUserAlt className="me-2" /> Owner Name
            </Form.Label>
            <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter Owner Name"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="ownerEmail">
            <Form.Label className="text-success fw-bold">
                <FaEnvelope className="me-2" /> Enter Your E-mail Address
            </Form.Label>
            <input
                type="email"
                name="ownerEmail"
                value={formData.ownerEmail}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Your Email Address"
            />
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="ownerPhone">
            <Form.Label className="text-success fw-bold">
                <FaPhoneAlt className="me-2" /> Enter Phone Number
                <span className='text-danger fw-bold fs-3'>*</span>
            </Form.Label>
            <div className="input-group">
                <span className="input-group-text">+91</span>
                <input
                    type="tel"
                    name="ownerPhone"
                    value={formData.ownerPhone}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter Your Phone Number"
                    pattern="[0-9]{10}" // Restrict input to 10 digits
                    maxLength="10" // Limit input to 10 characters
                />
            </div>
        </Form.Group>
    </Card.Body>
</Card>

<Card className="mb-3">
    <Card.Body>
        <Form.Group controlId="alternatePhone">
            <Form.Label className="text-success fw-bold">
                <FaPhoneAlt className="me-2" /> Enter Alternate Phone
            </Form.Label>
            <div className="input-group">
                <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="form-select input-group-text"
                >
                    {/* List of Country Codes */}
                    <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (USA/Canada)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+81">+81 (Japan)</option>
                    <option value="+33">+33 (France)</option>
                    <option value="+49">+49 (Germany)</option>
                    <option value="+1">+1 (Mexico)</option>
                    {/* Add more countries as required */}
                </select>
                <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Alternate Phone Number"
                    pattern="[0-9]{10}" 
                    maxLength="10" 
                />
            </div>
        </Form.Group>
    </Card.Body>
</Card>

<Card>
    <Card.Body>
        <Form.Group controlId="bestTimeToCall">
            <Form.Label className="text-success fw-bold">
                <FaClock className="me-2" /> Best Time to Call
            </Form.Label>
            <select
                name="bestTimeToCall"
                value={formData.bestTimeToCall}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Select Best Time to Call</option>
                <option value="any-time">Any Time</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 9 PM)</option>
                <option value="night">Night (9 PM - 12 AM)</option>
            </select>
        </Form.Group>
    </Card.Body>
</Card>

</Card>
         </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={6} lg={6}>
                                <Button variant="success" className="mt-4" type="submit">Add Property</Button>
                                </Col>

<Col xs={6} lg={6} >
      {/* Manage Property Button */}
      <Button variant="primary" className="mt-4" onClick={handleShow}>
        Manage Property
      </Button>

      {/* Modal */}
      <Modal show={showModal}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Manage Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Button variant="danger" className="w-100" onClick={handleDelete}>
                Delete
              </Button>
            </Col>
            <Col>
              <Button variant="warning" className="w-100" onClick={handleUpdate}>
                Update
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      </Col>
    </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}















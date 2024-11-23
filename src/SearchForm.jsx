// import React, { useState } from "react";
// import Modal from "react-modal"; // Install via npm install react-modal
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDollarSign, faCity, faBuilding, faTag, faMapMarkerAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// const SearchForm = () => {
//   const [formData, setFormData] = useState({
//     mode: "",
//     type: "",
//     state: "",
//     city: "",
//     minPrice: "",
//     maxPrice: "",
//     area: "",
//   });

//   const [detailsFormData, setDetailsFormData] = useState({
//     propertyType: "",
//     propertyMode: "",
//     priceMin: "",
//     priceMax: "",
//     negotiation: false,
//     ownership: "",
//     state: "",
//     district: "",
//     city: "",
//     area: "",
//     propertyAge: "",
//     propertyApproved: false,
//     bankLoan: false,
//     noOfFloors: "",
//     attachedBathroom: false,
//     westernToilet: false,
//     furnished: false,
//     carParking: false,
//     lift: false,
//     areaUnit: "",
//     facing: "",
//     postedBy: "",
//     postedDate: "",
//     mobileNumber: "",
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDetailsChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setDetailsFormData({
//       ...detailsFormData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSearch = () => {
//     console.log("Searching with", formData, detailsFormData);
//     setIsModalOpen(false);
//   };

//   const resetForm = () => {
//     setFormData({
//       mode: "",
//       type: "",
//       state: "",
//       city: "",
//       minPrice: "",
//       maxPrice: "",
//       area: "",
//     });
//     setDetailsFormData({
//       propertyType: "",
//       propertyMode: "",
//       priceMin: "",
//       priceMax: "",
//       negotiation: false,
//       ownership: "",
//       state: "",
//       district: "",
//       city: "",
//       area: "",
//       propertyAge: "",
//       propertyApproved: false,
//       bankLoan: false,
//       noOfFloors: "",
//       attachedBathroom: false,
//       westernToilet: false,
//       furnished: false,
//       carParking: false,
//       lift: false,
//       areaUnit: "",
//       facing: "",
//       postedBy: "",
//       postedDate: "",
//       mobileNumber: "",
//     });
//   };

//   return (
//     <div>
//       <h1>Property Search Form</h1>
//       <form>
//         <label>Mode:</label>
//         <input type="text" name="mode" value={formData.mode} onChange={handleChange} />
//         <label>Type:</label>
//         <input type="text" name="type" value={formData.type} onChange={handleChange} />
//         <label>State:</label>
//         <input type="text" name="state" value={formData.state} onChange={handleChange} />
//         <label>City:</label>
//         <input type="text" name="city" value={formData.city} onChange={handleChange} />
//         <label>Min Price:</label>
//         <input type="number" name="minPrice" value={formData.minPrice} onChange={handleChange} />
//         <label>Max Price:</label>
//         <input type="number" name="maxPrice" value={formData.maxPrice} onChange={handleChange} />
//         <label>Area:</label>
//         <input type="number" name="area" value={formData.area} onChange={handleChange} />
//       </form>
//       <button onClick={() => setIsModalOpen(true)}>Detailed Search</button>
//       <button onClick={resetForm}>Reset</button>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         ariaHideApp={false}
//         style={{
//           content: {
//             maxWidth: "90%",
//             margin: "auto",
//             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
//           },
//         }}
//       >
//         <h2>Detailed Search Options</h2>
//         <form>
//           {/* Additional Fields with Icons */}
//           <div>
//             <label>Property Type:</label>
//             <div className="input-with-icon">
//               <FontAwesomeIcon icon={faBuilding} />
//               <input
//                 type="text"
//                 name="propertyType"
//                 value={detailsFormData.propertyType}
//                 onChange={handleDetailsChange}
//               />
//             </div>
//           </div>
//           <div>
//             <label>Property Mode:</label>
//             <div className="input-with-icon">
//               <FontAwesomeIcon icon={faTag} />
//               <input
//                 type="text"
//                 name="propertyMode"
//                 value={detailsFormData.propertyMode}
//                 onChange={handleDetailsChange}
//               />
//             </div>
//           </div>
//           <div>
//             <label>Minimum Price:</label>
//             <div className="input-with-icon">
//               <FontAwesomeIcon icon={faDollarSign} />
//               <input
//                 type="number"
//                 name="priceMin"
//                 value={detailsFormData.priceMin}
//                 onChange={handleDetailsChange}
//               />
//             </div>
//           </div>
//           <div>
//             <label>Maximum Price:</label>
//             <div className="input-with-icon">
//               <FontAwesomeIcon icon={faDollarSign} />
//               <input
//                 type="number"
//                 name="priceMax"
//                 value={detailsFormData.priceMax}
//                 onChange={handleDetailsChange}
//               />
//             </div>
//           </div>
//           <div>
//             <label>Is Negotiable:</label>
//             <input
//               type="checkbox"
//               name="negotiation"
//               checked={detailsFormData.negotiation}
//               onChange={handleDetailsChange}
//             />
//           </div>
//           {/* Add other fields with similar structure */}
//           <button type="button" onClick={handleSearch}>Search</button>
//           <button type="button" onClick={() => setIsModalOpen(false)}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </button>
//         </form>
//       </Modal>

//       <style jsx>{`
//         .input-with-icon {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//         input {
//           flex: 1;
//           padding: 8px;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//         }
//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SearchForm;


import React, { useState } from "react";
import Modal from "react-modal"; 
// import { FaDollarSign, FaCity, FaBuilding, FaTag, FaMapMarkerAlt } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

import { Button, Form, Row, Col } from 'react-bootstrap';

// const SearchForm = () =>{
//   const [formData, setFormData] = useState({
//     mode: "",
//     type: "",
//     state: "",
//     city: "",
//     minPrice: "",
//     maxPrice: "",
//     area: "", 
//   });

//   const [detailsFormData, setDetailsFormData] = useState({
//     propertyType: "",
//     propertyMode: "",
//     priceMin: "",
//     priceMax: "",
//     negotiation: "No",
//     ownership: "",
//     state: "",
//     district: "",
//     city: "",
//     area: "",
//     propertyAge: "",
//     propertyApproved: "No",
//     bankLoan: "No", 
//     noOfFloors: "", 
//     attachedBathroom: "No", 
//     westernToilet: "No", 
//     furnished: "No", 
//     carParking: "No", 
//     lift: "No", 
//     areaUnit: "", 
//     facing: "", 
//     postedBy: "", 
//     postedDate: "", 
//     mobileNumber: "", 
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setDetailsFormData({ ...detailsFormData, [name]: value });
//   };

//   const handleSearch = () => {
//     console.log("Searching with", formData, detailsFormData);
//     setIsModalOpen(false);
//   };

//   const resetForm = () => {
//     setFormData({
//       mode: "",
//       type: "",
//       state: "",
//       city: "",
//       minPrice: "",
//       maxPrice: "",
//       area: "", 
//     });
//     setDetailsFormData({
//       propertyType: "",
//       propertyMode: "",
//       priceMin: "",
//       priceMax: "",
//       negotiation: "No",
//       ownership: "",
//       state: "",
//       district: "",
//       city: "",
//       area: "",
//       propertyAge: "",
//       propertyApproved: "No",
//       bankLoan: "No",
//       noOfFloors: "",
//       attachedBathroom: "No",
//       westernToilet: "No",
//       furnished: "No",
//       carParking: "No",
//       lift: "No",
//       areaUnit: "",
//       facing: "",
//       postedBy: "",
//       postedDate: "",
//       mobileNumber: "",
//     });
//   };

//   return (
//     <div className="container" style={{marginTop:"30px"}}>
//       {/* <h1>Property Search Form</h1> */}
//       <Form className="simpform">
//       <h1>Property Search Form</h1>

//         <Row>
//           <Col md={4}>
//             <Form.Group controlId="formMode">
//               <Form.Label>Mode:</Form.Label>
//               <Form.Control
//               className="inputstyle"
//                 type="text"
//                 name="mode"
//                 value={formData.mode}
//                 onChange={handleChange}
//                 placeholder="Enter mode"
//               />
//             </Form.Group>
//           </Col>
//           <Col md={4}>
//             <Form.Group controlId="formType">
//               <Form.Label>Type:</Form.Label>
//               <Form.Control
//               className="inputstyle"
//                 type="text"
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 placeholder="Enter type"
//               />
//             </Form.Group>
//           </Col>
//           <Col md={4}>
//             <Form.Group controlId="formState">
//               <Form.Label>State:</Form.Label>
//               <Form.Control
//               className="inputstyle"
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 placeholder="Enter state"
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={4}>
//             <Form.Group controlId="formCity">
//               <Form.Label>City:</Form.Label>
//               <Form.Control
//               className="inputstyle"
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter city"
//               />
//             </Form.Group>
//           </Col>
//           <Col md={4}>
//             <Form.Group controlId="formMinPrice">
//               <Form.Label>Min Price:</Form.Label>
//               <Form.Control
//               className="inputstyle"
//                 type="number"
//                 name="minPrice"
//                 value={formData.minPrice}
//                 onChange={handleChange}
//                 placeholder="Min price"
//               />
//             </Form.Group>
//           </Col>
//           <Col md={4}>
//             <Form.Group controlId="formMaxPrice">
//               <Form.Label>Max Price:</Form.Label>
//               <Form.Control
//               className="inputstyle"
//                 type="number"
//                 name="maxPrice"
//                 value={formData.maxPrice}
//                 onChange={handleChange}
//                 placeholder="Max price"
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={4}>
//             <Form.Group controlId="formArea">
//               <Form.Label>Area:</Form.Label>
//               <Form.Control
//               className="inputstyle"
//                 type="text" 
//                 name="area"
//                 value={formData.area}
//                 onChange={handleChange}
//                 placeholder="Enter area (e.g., '1500 sq ft')"
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Button className="formbtn" onClick={() => setIsModalOpen(true)}>Detailed Search</Button>
//         <Button className="formbtn" onClick={handleSearch}>Search</Button>
//         <Button className="formbtn" onClick={resetForm}>Reset</Button>
//       </Form>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         ariaHideApp={false}
//         style={{
//           content: {
//             backgroundColor: "#ffc631", // Background color for the modal
//             color: "#001f3f", // Font color for the modal
//             maxWidth: "90%",
//             margin: "auto",
//             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
//             padding: "20px",
//           },
//         }}
//       >
//         <h2>Detailed Search Options</h2>
//         <Button className="dtfbtn" onClick={() => setIsModalOpen(false)}><RiCloseLine />
//         </Button>

//         <Form>
//           <Row>
//             <Col md={3}>
//               <Form.Group controlId="formPropertyType">
//                 <Form.Label>Property Type:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="text"
//                   name="propertyType"
//                   value={detailsFormData.propertyType}
//                   onChange={handleDetailsChange}
//                   placeholder="Property Type"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formPropertyMode">
//                 <Form.Label>Property Mode:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="text"
//                   name="propertyMode"
//                   value={detailsFormData.propertyMode}
//                   onChange={handleDetailsChange}
//                   placeholder="Property Mode"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formPriceMin">
//                 <Form.Label>Min Price:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="number"
//                   name="priceMin"
//                   value={detailsFormData.priceMin}
//                   onChange={handleDetailsChange}
//                   placeholder="Min Price"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formPriceMax">
//                 <Form.Label>Max Price:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="number"
//                   name="priceMax"
//                   value={detailsFormData.priceMax}
//                   onChange={handleDetailsChange}
//                   placeholder="Max Price"
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={3}>
//               <Form.Group controlId="formBankLoan">
//                 <Form.Label>Bank Loan:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   as="select"
//                   name="bankLoan"
//                   value={detailsFormData.bankLoan}
//                   onChange={handleDetailsChange}
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formNoOfFloors">
//                 <Form.Label>No. of Floors:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="number"
//                   name="noOfFloors"
//                   value={detailsFormData.noOfFloors}
//                   onChange={handleDetailsChange}
//                   placeholder="No. of Floors"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formAttachedBathroom">
//                 <Form.Label>Attached Bathroom:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   as="select"
//                   name="attachedBathroom"
//                   value={detailsFormData.attachedBathroom}
//                   onChange={handleDetailsChange}
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formWesternToilet">
//                 <Form.Label>Western Toilet:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   as="select"
//                   name="westernToilet"
//                   value={detailsFormData.westernToilet}
//                   onChange={handleDetailsChange}
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={3}>
//               <Form.Group controlId="formFurnished">
//                 <Form.Label>Furnished:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   as="select"
//                   name="furnished"
//                   value={detailsFormData.furnished}
//                   onChange={handleDetailsChange}
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formCarParking">
//                 <Form.Label>Car Parking:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   as="select"
//                   name="carParking"
//                   value={detailsFormData.carParking}
//                   onChange={handleDetailsChange}
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </Form.Control
//                 >
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formLift">
//                 <Form.Label>Lift:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   as="select"
//                   name="lift"
//                   value={detailsFormData.lift}
//                   onChange={handleDetailsChange}
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formAreaUnit">
//                 <Form.Label>Area Unit:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="text"
//                   name="areaUnit"
//                   value={detailsFormData.areaUnit}
//                   onChange={handleDetailsChange}
//                   placeholder="e.g. sq ft"
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={3}>
//               <Form.Group controlId="formFacing">
//                 <Form.Label>Facing:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="text"
//                   name="facing"
//                   value={detailsFormData.facing}
//                   onChange={handleDetailsChange}
//                   placeholder="e.g. North"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formPostedBy">
//                 <Form.Label>Posted By:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="text"
//                   name="postedBy"
//                   value={detailsFormData.postedBy}
//                   onChange={handleDetailsChange}
//                   placeholder="Posted By"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formPostedDate">
//                 <Form.Label>Posted Date:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="date"
//                   name="postedDate"
//                   value={detailsFormData.postedDate}
//                   onChange={handleDetailsChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={3}>
//               <Form.Group controlId="formMobileNumber">
//                 <Form.Label>Mobile Number:</Form.Label>
//                 <Form.Control
//                 className="inputstyle"
//                   type="text"
//                   name="mobileNumber"
//                   value={detailsFormData.mobileNumber}
//                   onChange={handleDetailsChange}
//                   placeholder="Mobile Number"
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Button className="dtfbtn" onClick={handleSearch}>Search</Button>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default SearchForm;


// import React from 'react'

export default function SearchForm() {
      const [formData, setFormData] = useState({
        mode: "",
        type: "",
        state: "",
        city: "",
        minPrice: "",
        maxPrice: "",
        area: "", 
      });
    
      const [detailsFormData, setDetailsFormData] = useState({
        propertyType: "",
        propertyMode: "",
        priceMin: "",
        priceMax: "",
        negotiation: "No",
        ownership: "",
        state: "",
        district: "",
        city: "",
        area: "",
        propertyAge: "",
        propertyApproved: "No",
        bankLoan: "No", 
        noOfFloors: "", 
        attachedBathroom: "No", 
        westernToilet: "No", 
        furnished: "No", 
        carParking: "No", 
        lift: "No", 
        areaUnit: "", 
        facing: "", 
        postedBy: "", 
        postedDate: "", 
        mobileNumber: "", 
      });
    
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleDetailsChange = (e) => {
        const { name, value } = e.target;
        setDetailsFormData({ ...detailsFormData, [name]: value });
      };
    
      const handleSearch = () => {
        console.log("Searching with", formData, detailsFormData);
        setIsModalOpen(false);
      };
    
      const resetForm = () => {
        setFormData({
          mode: "",
          type: "",
          state: "",
          city: "",
          minPrice: "",
          maxPrice: "",
          area: "", 
        });
        setDetailsFormData({
          propertyType: "",
          propertyMode: "",
          priceMin: "",
          priceMax: "",
          negotiation: "No",
          ownership: "",
          state: "",
          district: "",
          city: "",
          area: "",
          propertyAge: "",
          propertyApproved: "No",
          bankLoan: "No",
          noOfFloors: "",
          attachedBathroom: "No",
          westernToilet: "No",
          furnished: "No",
          carParking: "No",
          lift: "No",
          areaUnit: "",
          facing: "",
          postedBy: "",
          postedDate: "",
          mobileNumber: "",
        });
      };
  return (
<div className="container" style={{marginTop:"30px"}}>
      {/* <h1>Property Search Form</h1> */}
      <Form className="simpform">
      <h1>Property Search Form</h1>

        <Row>
          <Col md={4}>
            <Form.Group controlId="formMode">
              <Form.Label>Mode:</Form.Label>
              <Form.Control
                type="text"
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                placeholder="Enter mode"
                 className="inputstyle"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formType">
              <Form.Label>Type:</Form.Label>
              <Form.Control
              
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Enter type"
                className="inputstyle"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formState">
              <Form.Label>State:</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="inputstyle"

              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="formCity">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="inputstyle"

              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formMinPrice">
              <Form.Label>Min Price:</Form.Label>
              <Form.Control
                type="number"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleChange}
                placeholder="Min price"
                className="inputstyle"

              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formMaxPrice">
              <Form.Label>Max Price:</Form.Label>
              <Form.Control
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleChange}
                placeholder="Max price"
                className="inputstyle"

              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="formArea">
              <Form.Label>Area:</Form.Label>
              <Form.Control
            
                type="text" 
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Enter area (e.g., '1500 sq ft')"
                className="inputstyle"

              />
            </Form.Group>
          </Col>
        </Row>

        <Button className="formbtn" onClick={() => setIsModalOpen(true)}>Detailed Search</Button>
        <Button className="formbtn" onClick={handleSearch}>Search</Button>
        <Button className="formbtn" onClick={resetForm}>Reset</Button>
      </Form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
        style={{
          content: {
            backgroundColor: "#ffc631", // Background color for the modal
            color: "#001f3f", // Font color for the modal
            maxWidth: "90%",
            margin: "auto",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            padding: "20px",
          },
        }}
      >
        <h2>Detailed Search Options</h2>
        <Button className="dtfbtn" onClick={() => setIsModalOpen(false)}><RiCloseLine />
        </Button>

        <Form>
          <Row>
            <Col md={3}>
              <Form.Group controlId="formPropertyType">
                <Form.Label>Property Type:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="text"
                  name="propertyType"
                  value={detailsFormData.propertyType}
                  onChange={handleDetailsChange}
                  placeholder="Property Type"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formPropertyMode">
                <Form.Label>Property Mode:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="text"
                  name="propertyMode"
                  value={detailsFormData.propertyMode}
                  onChange={handleDetailsChange}
                  placeholder="Property Mode"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formPriceMin">
                <Form.Label>Min Price:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="number"
                  name="priceMin"
                  value={detailsFormData.priceMin}
                  onChange={handleDetailsChange}
                  placeholder="Min Price"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formPriceMax">
                <Form.Label>Max Price:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="number"
                  name="priceMax"
                  value={detailsFormData.priceMax}
                  onChange={handleDetailsChange}
                  placeholder="Max Price"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Form.Group controlId="formBankLoan">
                <Form.Label>Bank Loan:</Form.Label>
                <Form.Control
                className="inputstyle"
                  as="select"
                  name="bankLoan"
                  value={detailsFormData.bankLoan}
                  onChange={handleDetailsChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formNoOfFloors">
                <Form.Label>No. of Floors:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="number"
                  name="noOfFloors"
                  value={detailsFormData.noOfFloors}
                  onChange={handleDetailsChange}
                  placeholder="No. of Floors"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formAttachedBathroom">
                <Form.Label>Attached Bathroom:</Form.Label>
                <Form.Control
                className="inputstyle"
                  as="select"
                  name="attachedBathroom"
                  value={detailsFormData.attachedBathroom}
                  onChange={handleDetailsChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formWesternToilet">
                <Form.Label>Western Toilet:</Form.Label>
                <Form.Control
                className="inputstyle"
                  as="select"
                  name="westernToilet"
                  value={detailsFormData.westernToilet}
                  onChange={handleDetailsChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Form.Group controlId="formFurnished">
                <Form.Label>Furnished:</Form.Label>
                <Form.Control
                className="inputstyle"
                  as="select"
                  name="furnished"
                  value={detailsFormData.furnished}
                  onChange={handleDetailsChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formCarParking">
                <Form.Label>Car Parking:</Form.Label>
                <Form.Control
                className="inputstyle"
                  as="select"
                  name="carParking"
                  value={detailsFormData.carParking}
                  onChange={handleDetailsChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control
                >
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formLift">
                <Form.Label>Lift:</Form.Label>
                <Form.Control
                className="inputstyle"
                  as="select"
                  name="lift"
                  value={detailsFormData.lift}
                  onChange={handleDetailsChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formAreaUnit">
                <Form.Label>Area Unit:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="text"
                  name="areaUnit"
                  value={detailsFormData.areaUnit}
                  onChange={handleDetailsChange}
                  placeholder="e.g. sq ft"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Form.Group controlId="formFacing">
                <Form.Label>Facing:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="text"
                  name="facing"
                  value={detailsFormData.facing}
                  onChange={handleDetailsChange}
                  placeholder="e.g. North"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formPostedBy">
                <Form.Label>Posted By:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="text"
                  name="postedBy"
                  value={detailsFormData.postedBy}
                  onChange={handleDetailsChange}
                  placeholder="Posted By"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formPostedDate">
                <Form.Label>Posted Date:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="date"
                  name="postedDate"
                  value={detailsFormData.postedDate}
                  onChange={handleDetailsChange}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formMobileNumber">
                <Form.Label>Mobile Number:</Form.Label>
                <Form.Control
                className="inputstyle"
                  type="text"
                  name="mobileNumber"
                  value={detailsFormData.mobileNumber}
                  onChange={handleDetailsChange}
                  placeholder="Mobile Number"
                />
              </Form.Group>
            </Col>
          </Row>

          <Button className="dtfbtn" onClick={handleSearch}>Search</Button>
        </Form>
      </Modal>
    </div>
      );
};


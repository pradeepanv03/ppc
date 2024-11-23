import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EquipmentForm = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [pickupOption, setPickupOption] = useState('self');

  const handleSearch = () => {
    // Handle search logic here
    console.log({
      category,
      location,
      startDate,
      endDate,
      pickupOption
    });
  };

  return (
    <div className="p-4" style={{ backgroundColor: '#f4b41a', color: '#fff' }}>
      <h3 className="text-center mb-4">Simple Search</h3>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formCategory">
              <Form.Label>Select Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formLocation">
              <Form.Label>Select Location</Form.Label>
              <Form.Control
                as="select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formDates">
              <Form.Label>Date Range</Form.Label>
              <div style={{ display: 'flex' }}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                  selectsStart
                  className="form-control"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                  selectsEnd
                  className="form-control"
                />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Check
              type="radio"
              label="Self-Pickup"
              name="pickupOption"
              id="selfPickup"
              checked={pickupOption === 'self'}
              onChange={() => setPickupOption('self')}
            />
            <Form.Check
              type="radio"
              label="Owner Delivery"
              name="pickupOption"
              id="ownerDelivery"
              checked={pickupOption === 'owner'}
              onChange={() => setPickupOption('owner')}
            />
          </Col>
        </Row>

        <Button
          variant="dark"
          className="w-100"
          onClick={handleSearch}
        >
          Find My Propertys
        </Button>
      </Form>
    </div>
  );
};

export default EquipmentForm;

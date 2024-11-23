import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PropertyCard() {
  const [houseData, setHouseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouseData = async () => {
      setLoading(true);

      const apiUrl = process.env.REACT_APP_API_URL + "/detail.php"; 
      try {
        const res = await axios.post(apiUrl, new URLSearchParams({
          id: "6397" 
        }));

        if (res.data && Array.isArray(res.data)) {
          setHouseData(res.data);
        } else {
          console.error("Unexpected data format:", res.data);
        }
      } catch (error) {
        console.error("Error fetching house data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHouseData();
  }, []);

  return (
    <div className="container mt-5">
      {loading && <div>Loading house data...</div>}

      {houseData.length > 0 ? (
        houseData.map((house, index) => (
          <div key={index} className="card mb-4">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={house.property_image}
                  alt="house"
                  className="img-fluid"
                />
              </div>

              <div className="col-md-6 p-5">
                <h5>Price: ₹{house.price}</h5>
                <p><strong>Property Title:</strong> {house.property_title}</p>
                <p><strong>Property Type:</strong> {house.property_type}</p>
                <p><strong>Property Age:</strong> {house.property_age}</p>
                <p><strong>Location:</strong> {house.city}, {house.state}</p>
                <p><strong>Area:</strong> {house.total_area} {house.area_unit}</p>
                <p><strong>Facing:</strong> {house.facing}</p>
                <p><strong>Bedroom:</strong> {house.bedroom}</p>
                <p><strong>Car Park:</strong> {house.car_park}</p>
                <p><strong>Furnished:</strong> {house.furnished}</p>
                <p><strong>Lift:</strong> {house.lift}</p>
                <p><strong>Property Approved:</strong> {house.property_approved}</p>
                <p><strong>Bank Loan Available:</strong> {house.bank_loan}</p>
                <p><strong>Ownership:</strong> {house.ownership}</p>
                <p><strong>Negotiation:</strong> {house.negotiation}</p>
                <p><strong>Activation Date:</strong> {house.activation_date}</p>
                <p><strong>Expire Date:</strong> {house.expire_date}</p>
                <p><strong>Posted By:</strong> {house.posted_by}</p>
                <p><strong>Contact:</strong> {house.owner_phone}</p>
                <p><strong>Best Time to Call:</strong> {house.best_time_to_call}</p>
                <p><strong>Description:</strong> {house.description || "No description available"}</p>
                <p><strong>Property Featured:</strong> {house.property_featured === "1" ? "Yes" : "No"}</p>
                <p><strong>Approved By:</strong> {house.approved_by}</p>
                <p><strong>Approved Date:</strong> {house.approved_date}</p>
                <p><strong>Area Name:</strong> {house.area}</p>
                <p><strong>District:</strong> {house.district}</p>
                <p><strong>Door Number:</strong> {house.door_no}</p>
                <p><strong>Submit Date:</strong> {house.submit_date}</p>
                <p><strong>Lead:</strong> {house.lead === "0" ? "No" : "Yes"}</p>
                <p><strong>Total Views:</strong> {house.total_views}</p>

                {/* New Section for Additional Features */}
                {house.features && house.features.length > 0 && (
                  <div className="row mt-4">
                    <div className="col-md-12">
                      <h5>Additional Features:</h5>
                      <ul className="list-group">
                        {house.features.map((feature, idx) => (
                          <li key={idx} className="list-group-item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        !loading && <div>No house data available</div>
      )}
    </div>
  );
}
import React from 'react';
import CountUp from 'react-countup';
import { FaHome, FaUsers, FaCheckCircle } from 'react-icons/fa';

const stats = [
    { label: "Total Properties", count: 6139, icon: <FaHome size={50} color="#ffffff" /> },
    { label: "Our Happy Users", count: 19160573, icon: <FaUsers size={50} color="#ffffff" /> },
    { label: "Verified Users", count: 11548, icon: <FaCheckCircle size={50} color="#ffffff" /> },
];

const Statistics = () => {
    return (
        <div className="d-flex justify-content-around align-items-center" style={{ backgroundColor: '#001f3f', padding: '20px 0', color: 'white' }}>
            {stats.map((stat, index) => (
                <div key={index} className="d-flex align-items-center text-center" style={{ minWidth: '150px' }}>
                    <div className="me-3">{stat.icon}</div>
                    <div>
                        <h2 style={{ margin: 0 }}>
                            <CountUp start={0} end={stat.count} duration={3} separator="," />
                        </h2>
                        <p style={{ margin: 0 }}>{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Statistics;

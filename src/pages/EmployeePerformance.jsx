import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const EmployeePerformance = () => {
    return (
        <div>
            <h1>Employee Performance</h1>
            <div className="mb-3">
                <h5>John Doe</h5>
                <ProgressBar now={80} label="80%" />
            </div>
            <div className="mb-3">
                <h5>Jane Smith</h5>
                <ProgressBar now={65} label="65%" />
            </div>
        </div>
    );
};

export default EmployeePerformance;

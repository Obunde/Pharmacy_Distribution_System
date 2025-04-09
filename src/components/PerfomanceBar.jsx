import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PerformanceBar = ({ employee, value }) => {
    return (
        <div className="mb-3">
            <h6>{employee}</h6>
            <ProgressBar now={value} label={`${value}%`} />
        </div>
    );
};

export default PerformanceBar;


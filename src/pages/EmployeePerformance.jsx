import React from 'react';
import PerformanceBar from '../components/PerfomanceBar';

const performanceData = [
    { employee: 'Jane Doe', value: 80 },
    { employee: 'John Smith', value: 65 },
    { employee: 'Mary Johnson', value: 90 },
];

const EmployeePerformance = () => {
    return (
        <div className="container mt-5 pt-4">
            <h2>Employee Performance</h2>
            {performanceData.map((data, index) => (
                <PerformanceBar key={index} employee={data.employee} value={data.value} />
            ))}
        </div>
    );
};

export default EmployeePerformance;

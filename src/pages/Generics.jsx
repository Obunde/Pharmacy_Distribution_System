import React from 'react';
import DrugsTable from '../components/DrugesTable';

const dummyData = [
    { name: 'Paracetamol', quantity: 100, price: 50, salesperson: 'John Doe' },
    { name: 'Ibuprofen', quantity: 200, price: 75, salesperson: 'Jane Smith' },
    { name: 'Amoxicillin', quantity: 150, price: 100, salesperson: 'Alice Johnson' },
    { name: 'Ciprofloxacin', quantity: 80, price: 120, salesperson: 'Bob Brown' },
    { name: 'Metformin', quantity: 120, price: 200, salesperson: 'Charlie Black' },
];

const Generics = () => {
    return (
        <div className="container mt-5 pt-4">
            <DrugsTable title="Generics Drug List" drugs={dummyData} />
        </div>
    );
};

export default Generics;

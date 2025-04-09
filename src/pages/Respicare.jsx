import React from 'react';
import DrugsTable from '../components/DrugesTable';

const dummyData = [
    { name: 'Paracetamol', quantity: 100, price: 50, salesperson: 'John Doe' },     
    { name: 'Amoxicillin', quantity: 120, price: 100, salesperson: 'Jane Akumu' },
    { name: 'Ibuprofen', quantity: 80, price: 75, salesperson: 'Mark Otieno' },
    { name: 'Ciprofloxacin', quantity: 60, price: 120, salesperson: 'Sarah Wanjiru' },
    { name: 'Metformin', quantity: 150, price: 200, salesperson: 'David Mwangi' },
]

const Respicare = () => {
    return (
        <div className="container mt-4">
            <DrugsTable title="Respicare Drug List" drugs={dummyData} />
        </div>
    );
};

export default Respicare;

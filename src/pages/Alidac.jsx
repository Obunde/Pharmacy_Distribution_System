import React from 'react';
import { Table } from 'react-bootstrap';
import DrugsTable from '../components/DrugesTable';

const dummyData = [
    {name: 'Paracetamol', quantity: 100, price: 50, salesperson: 'John Doe'},
    {name: 'Ibuprofen', quantity: 200, price: 75, salesperson: 'Jane Smith'},   
];

const Alidac = () => {
    return (
        <div className='container mt-4'>
            <DrugsTable title="Alidac Drugs" drugs={dummyData} />
        </div>
    );
};

export default Alidac;

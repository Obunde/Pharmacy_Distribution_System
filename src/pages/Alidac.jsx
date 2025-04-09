import React from 'react';
import { Table } from 'react-bootstrap';

const Alidac = () => {
    return (
        <div>
            <h1>Alidac Page</h1>
            <p>Drugs List & Salesperson Information</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Drug Name</th>
                        <th>Salesperson</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Paracetamol</td>
                        <td>John Doe</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Amoxicillin</td>
                        <td>Jane Smith</td>
                        <td>300</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Alidac;

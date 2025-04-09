import React from 'react';
import { Table } from 'react-bootstrap';

const OverallSales = () => {
    return (
        <div>
            <h1>Overall Sales</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Total Sales</th>
                        <th>Salesperson</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Product A</td>
                        <td>1000</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Product B</td>
                        <td>750</td>
                        <td>Jane Smith</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default OverallSales;

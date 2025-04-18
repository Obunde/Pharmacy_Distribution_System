import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SelectedFile = () => {
    const { filename } = useParams();
    const [invoices, setInvoices] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await fetch(`http://localhost:8000/get-invoices/${filename}/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch invoices');
                }
                const data = await response.json();
                setInvoices(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInvoices();
    }, [filename]);

    return (
        <div>
            <Navbar />
            <div className="container mt-5 pt-4">
                <h2 className="mb-4">Invoices for: <span className="text-primary">{filename}</span></h2>

                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : error ? (
                    <div className="alert alert-danger">{error}</div>
                ) : invoices.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Customer</th>
                                    <th>Item</th>
                                    <th>Group</th>
                                    <th>Region</th>
                                    <th>Rate</th>
                                    <th>Qty</th>
                                    <th>Net Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoices.map((invoice) => (
                                    <tr key={invoice.id}>
                                        <td>{invoice.id}</td>
                                        <td>{invoice.invoice_date}</td>
                                        <td>{invoice.customer_name}</td>
                                        <td>{invoice.item_name}</td>
                                        <td>{invoice.item_group}</td>
                                        <td>{invoice.customer_region}</td>
                                        <td>{invoice.rate}</td>
                                        <td>{invoice.qty}</td>
                                        <td>{invoice.net_amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-muted">No invoices found for this file.</p>
                )}
            </div>
        </div>
    );
};

export default SelectedFile;

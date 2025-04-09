import React from 'react';

const DrugsTable = ({ title, drugs }) => {
    return (
        <div className="mt-4">
            <h2>{title}</h2>
            {drugs.length > 0 ? (
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Drug Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price (Ksh)</th>
                            <th scope="col">Salesperson</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drugs.map((drug, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{drug.name}</td>
                                <td>{drug.quantity}</td>
                                <td>{drug.price}</td>
                                <td>{drug.salesperson}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-muted">No drugs available to display.</p>
            )}
        </div>
    );
};

export default DrugsTable;

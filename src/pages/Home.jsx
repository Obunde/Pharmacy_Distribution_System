import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="container mt-5">
            <h1>Home Page - Upload Excel File & List of Uploaded Files</h1>
            <Button variant="primary">Upload File</Button>
        </div>
    );
};

export default Home;

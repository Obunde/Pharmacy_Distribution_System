import React, { useState} from 'react';
import FileUpload from '../components/FileUpload';
import UploadedFilesList from '../components/uploadedFilesList';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileUpload = (file) => {
        // Add the uploaded file to the state
        setUploadedFiles([...uploadedFiles, file]);
    };

    return (
        <div className="container mt-5 pt-4">
            <h1 className="mt-4">Home Page: Select an Excel File </h1>
            <FileUpload onFileUpload={handleFileUpload} />
            <UploadedFilesList files={uploadedFiles} />
        </div>
    );
};



export default Home;

import React, { useState} from 'react';
import FileUpload from '../components/FileUpload';
import UploadedFilesList from '../components/uploadedFilesList';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Home = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileUpload = (file) => {
        // Add the uploaded file to the state
        setUploadedFiles([...uploadedFiles, file]);
    };

    return (
        <div className="container">
            <h1 className="mt-4">Home Page - Upload Excel File & List of Uploaded Files</h1>
            <FileUpload onFileUpload={handleFileUpload} />
            <UploadedFilesList files={uploadedFiles} />
        </div>
    );
};



export default Home;

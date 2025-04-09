import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FileUpload = ({ onFileUpload }) => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file && onFileUpload) {
            onFileUpload(file);
            setFile(null); // Clear the file input after upload
        }
    };

    return (
        <div className="mb-4">
        <Form>
            <Form.Group controlId="formFile">
                <Form.Label>Select Excel File</Form.Label>
                <Form.Control
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleChange}
                    className="mb-2"
                />
            </Form.Group>
            <Button
                variant="primary"
                onClick={handleUpload}
                disabled={!file}
                className="w-100"
            >
                {file ? 'Upload File' : 'Choose a File'}
            </Button>
        </Form>
    </div>
    );
};

export default FileUpload;

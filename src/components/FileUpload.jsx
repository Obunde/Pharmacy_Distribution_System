import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FileUpload = ({ onFileUpload }) => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const base64File = {
                    name: file.name,
                    data: event.target.result
                };

                // Store in localStorage
                const existing = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
                existing.push(base64File);
                localStorage.setItem('uploadedFiles', JSON.stringify(existing));

                // Callback
                if (onFileUpload) {
                    onFileUpload(base64File);
                }

                setFile(null); // Clear input
            };

            reader.readAsDataURL(file); // ✅ Read as base64
        }
    };

    return (
        <div className="mb-4">
            <Form>
                <Form.Group controlId="formFile">
                    <Form.Label>Upload Excel File</Form.Label>
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

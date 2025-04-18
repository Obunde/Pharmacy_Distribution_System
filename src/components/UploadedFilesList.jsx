import React from 'react';
import { Link } from 'react-router-dom';

const UploadedFilesList = ({ files }) => {
    // Save uploaded files to localStorage for future retrieval (optional, can also be done on upload)
    React.useEffect(() => {
        const fileData = files.map(file => ({
            name: file.name,
            size: file.size,
            data: Array.from(new Uint8Array(file.data || [])), // support binary data if present
        }));
        localStorage.setItem('uploadedFiles', JSON.stringify(fileData));
    }, [files]);

    return (
        <div className="mt-4">
            <h3>Uploaded Files</h3>
            {files.length > 0 ? (
                <ul className="list-group">
                    {files.map((file, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <Link to={`/selected-file/${file.name}`} className="text-decoration-none">
                                {file.name}
                            </Link>
                            <span className="badge bg-primary rounded-pill">
                                {(file.size / 1024).toFixed(2)} KB
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No files uploaded yet.</p>
            )}
        </div>
    );
};

export default UploadedFilesList;

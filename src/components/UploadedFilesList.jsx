import React from 'react';

const UploadedFilesList = ({ files }) => {
    return (
        <div className="mt-4">
            <h3>Uploaded Files</h3>
            {files.length > 0 ? (
                <ul className="list-group">
                    {files.map((file, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {file.name}
                            <span className="badge bg-primary rounded-pill">{(file.size / 1024).toFixed(2)} KB</span>
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

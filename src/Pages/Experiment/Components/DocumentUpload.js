import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toaster, toast } from 'sonner'

const DocumentUpload = ({ label, formData, setFormData }) => {
    const [documentFile, setDocumentFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleDocumentChange = (event) => {
        const file = event.target.files[0];
        setDocumentFile(file);
    };

    const handleDocumentUpload = () => {
        if (documentFile) {
            setLoading(true);

            setTimeout(() => {
                setFormData({
                    ...formData,
                    [label.toLowerCase().replace(/\s+/g, '')]: documentFile, 
                });

                setLoading(false);
                setNotification('Document uploaded successfully');
                toast.success(`${label} Uploaded Successfully`) 
                setTimeout(() => {
                    setNotification(null);
                }, 2000);
            }, 2000);
        } else {
            setNotification('Please upload the document');
            toast.error('Please upload the document');
        }
    };

    return (
        <div className='document-upload-container'>
            <label>{label}</label>
            <div className="doc-input">
                <input type='file' accept='image/*,.pdf' className='file-input' onChange={handleDocumentChange} />
                <button className='doc-upload-button' onClick={handleDocumentUpload} disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload Document'}
                </button>
            </div>
            <Toaster richColors position="top-center" style={{ marginTop: '50px',marginLeft:'60px',zIndex:5,width:'80%'}}/>

            {/* {notification && <div className='notification'>{notification}</div>} */}

        </div>
    );
};

DocumentUpload.propTypes = {
    label: PropTypes.string.isRequired,
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
};

export default DocumentUpload;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Toaster, toast } from 'sonner'

// const DocumentUpload = ({ label, formData, setFormData }) => {
//     const [documentFile, setDocumentFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [notification, setNotification] = useState(null);

//     const handleDocumentChange = (event) => {
//         const file = event.target.files[0];
//         setDocumentFile(file);
//     };

//     const handleDocumentUpload = () => {
//         if (documentFile) {
//             setLoading(true);

//             setTimeout(() => {
//                 setFormData({
//                     ...formData,
//                     [label.toLowerCase().replace(/\s+/g, '')]: documentFile, 
//                 });

//                 setLoading(false);
//                 setNotification('Document uploaded successfully');
//                 toast.success(`${label} Uploaded Successfully`) 
//                 setTimeout(() => {
//                     setNotification(null);
//                 }, 2000);
//             }, 2000);
//         } else {
//             setNotification('Please upload the document');
//             toast.error('Please upload the document');
//         }
//     };

//     return (
//         <div className='document-upload-container'>
//             <label>{label}</label>
//             <div className="doc-input">
//                 <input type='file' accept='image/*,.pdf' className='file-input' onChange={handleDocumentChange} />
//                 <button className='doc-upload-button' onClick={handleDocumentUpload} disabled={loading}>
//                     {loading ? 'Uploading...' : 'Upload Document'}
//                 </button>
//             </div>
//             <Toaster richColors position="top-center" style={{ marginTop: '50px',marginLeft:'60px',zIndex:5,width:'80%'}}/>

//             {/* {notification && <div className='notification'>{notification}</div>} */}

//         </div>
//     );
// };

// DocumentUpload.propTypes = {
//     label: PropTypes.string.isRequired,
//     formData: PropTypes.object.isRequired,
//     setFormData: PropTypes.func.isRequired,
// };

// export default DocumentUpload;







// DocumentUpload.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toaster, toast } from 'sonner';
import axios from 'axios';

const DocumentUpload = ({ label, setFormData }) => {
    const [documentFile, setDocumentFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleDocumentChange = (event) => {
        const file = event.target.files[0];
        setDocumentFile(file);
    };

    const handleDocumentUpload = async () => {
        if (documentFile) {
            setLoading(true);

            try {
                const formData = new FormData();
                formData.append(`${label.toLowerCase().replace(/\s+/g, '')}`, documentFile);

                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.post(
                    `https://b3d0-154-159-237-69.ngrok-free.app/api/file_upload`,
                    formData,
                    {
                        headers: {
                            accessToken: accessToken,
                            // 'Content-Type': 'multipart/form-data',
                        },
                    }
                );

                setFormData((prevData) => ({
                    ...prevData,
                    [label.toLowerCase().replace(/\s+/g, '')]: response.data.filePath,
                }));

                setLoading(false);
                toast.success(`${label} Uploaded Successfully`);
            } catch (error) {
                console.error(`Error uploading ${label} document:`, error);
                toast.error(`Error uploading ${label} document`);
            }
        } else {
            toast.error('Please upload the document');
        }
    };

    return (
        <div className="document-upload-container">
            <label>{label}</label>
            <div className="doc-input">
                <input type="file" accept="application/pdf" className="file-input" onChange={handleDocumentChange} name={label.toLowerCase().replace(/\s+/g, '')} />
                <button className="doc-upload-button" onClick={handleDocumentUpload} disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload Document'}
                </button>
            </div>
            <Toaster richColors position="top-center" style={{ marginTop: '50px', marginLeft: '60px', zIndex: 5, width: '80%' }} />
        </div>
    );
};

DocumentUpload.propTypes = {
    label: PropTypes.string.isRequired,
    setFormData: PropTypes.func.isRequired,
};

export default DocumentUpload;

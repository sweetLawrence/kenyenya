import React, { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import basePath from '../../../Utilities/axios';

const DocumentUpload = ({ label, name, onFileSelect, value, formData, setFormData }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fieledValue,setFieldValue] = useState('');


    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
        } else {
            console.error('Please select a valid PDF file.');
        }
    };

    const handleFileSubmit = () => {
        if (selectedFile) {
            const newformData = new FormData();
            newformData.append(name, selectedFile);
            alert(label.toLowerCase().replace(/\s+/g, ''))
            const newLabel = label.toLowerCase().replace(/\s+/g, '');
            const accessToken = localStorage.getItem('accessToken');
            axios.patch(`${basePath}/api/file_upload/${name}`, newformData, {
                headers: {
                    accessToken: accessToken,
                    'Content-Type': 'multipart/form-data'

                },
            })
                .then((response) => {
                    console.log(`File ${name} uploaded successfully!`);
                    console.log(value)
                    toast.success(`${label} Uploaded Successfully`)
                    console.log("SERVER", response)
                    setFormData({
                        ...formData,
                        [newLabel]: response.data.originalname,
                    });
                    // setFieldValue(response.data)

                })
                .catch((error) => {
                    console.error(`Error uploading file ${name}:`, error);
                });

            onFileSelect(name, selectedFile);
            setSelectedFile(null);
        } else {
            // console.error('');
            toast.error('Please select a file before submitting.');
        }
    };

    return (
        <div className='document-upload-container'>
            <label>{label}</label>
            <div className="doc-input">
                <input type="file" accept=".pdf" name={name} onChange={handleFileChange} className='file-input' />

                <div className="down">
                    <p className=''>{value}</p>
                    <button className='doc-upload-button' onClick={handleFileSubmit}>Upload</button>
                </div>

            </div>
            <Toaster richColors position="top-center" style={{ marginTop: '50px', marginLeft: '60px', zIndex: 5, width: '80%' }} />
        </div>
    );
};

export default DocumentUpload;

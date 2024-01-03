import React from 'react'
import DocumentUpload from '../Components/DocumentUpload'

const DocumentUploads = ({ formData, setFormData }) => {

  const handleFileUpload = (name, file) => {
    console.log(`FRONTEND File ${name} uploaded:`, file);
    // setFormData({
      // ...formData,
      // [name.toLowerCase().replace(/\s+/g, '')]: file.name,
  // });
   
  };
  return (
    <div className="docs-uploads">
      <DocumentUpload label="National ID" name="nationalid" onFileSelect={handleFileUpload} value={formData.nationalid} formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Passport Photo" name="passportphoto" onFileSelect={handleFileUpload} value={formData.passportphoto} formData={formData} setFormData={setFormData} />
      {/* <DocumentUpload label="NHIF Card" formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Admission Letter" formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Regulation Declaration" formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Result Slip" formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Course Acceptance Declaration" formData={formData} setFormData={setFormData} /> */}

    </div>
  )
}

export default DocumentUploads
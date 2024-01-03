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
      <DocumentUpload label="Birth Certificate" name="birthcertificate" onFileSelect={handleFileUpload} value={formData.birthcertificate} formData={formData} setFormData={setFormData} />
      <DocumentUpload label="KCSE Certificate" name="kcsecertificate" onFileSelect={handleFileUpload} value={formData.kcsecertificate} formData={formData} setFormData={setFormData} />
      <DocumentUpload label="KCPE Certificate" name="kcpecertificate" onFileSelect={handleFileUpload} value={formData.kcpecertificate} formData={formData} setFormData={setFormData} />
      <DocumentUpload label="(KCSE) Leaving Certificate" name="kcseleavingcertificate" onFileSelect={handleFileUpload} value={formData.kcseleavingcertificate} formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Recommendation Letter" name="recommendation" onFileSelect={handleFileUpload} value={formData.recommendation} formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Filled Admission Letter" name="admissionletter" onFileSelect={handleFileUpload} value={formData.admissionletter} formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Passport Photo" name="passportphoto" onFileSelect={handleFileUpload} value={formData.passportphoto} formData={formData} setFormData={setFormData} />
      <DocumentUpload label="NHIF Card" name="nhifcard" onFileSelect={handleFileUpload} value={formData.nhifcard} formData={formData} setFormData={setFormData} />
      {/* <DocumentUpload label="NHIF Card" formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Admission Letter" formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Regulation Declaration" formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Result Slip" formData={formData} setFormData={setFormData} />
      <DocumentUpload label="Course Acceptance Declaration" formData={formData} setFormData={setFormData} /> */}

    </div>
  )
}

export default DocumentUploads
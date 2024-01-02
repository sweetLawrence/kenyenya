import React from 'react'
import DocumentUpload from '../Components/DocumentUpload'

const DocumentUploads = ({formData, setFormData}) => {
  return (
    <div className="docs-uploads">
      <DocumentUpload label="National ID" formData={formData} setFormData ={setFormData}/>
      <DocumentUpload label="Passport Photo" formData={formData} setFormData ={setFormData}/>
      <DocumentUpload label="NHIF Card" formData={formData} setFormData ={setFormData}/>
      <DocumentUpload label="Admission Letter" formData={formData} setFormData ={setFormData}/>
      <DocumentUpload label="Regulation Declaration" formData={formData} setFormData ={setFormData}/>
      <DocumentUpload label="Result Slip" formData={formData} setFormData ={setFormData}/>
      <DocumentUpload label="Course Acceptance Declaration" formData={formData} setFormData ={setFormData}/>
      
    </div>
  )
}

export default DocumentUploads
import React from 'react'
import ImageUpload from '../Components/ImageUpload'

const Profilephoto = ({ formData, setFormData }) => {
    return (
        <div>
            <ImageUpload formData={formData} setFormData={setFormData}/>
        </div>
    )
}

export default Profilephoto
import React, { useState } from 'react';
import '../../../Styles/upload.css';
import { Toaster, toast } from 'sonner'
import axios from 'axios'
import basePath from '../../../Utilities/axios';
// import { Spinner } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const ImageUpload = ({ formData, setFormData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [url, setUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      setLoading(true);

      const newformData = new FormData();
      newformData.append('dp', selectedImage);
      // setFormData({
      //   ...formData,
      //   profilePhoto: selectedImage,
      // });
      const accessToken = localStorage.getItem('accessToken');
      // alert(accessToken)
      const response = await axios.patch(`${basePath}/api/upload`, newformData, {
        headers: {
          accessToken: accessToken,
          'Content-Type': 'multipart/form-data',
          'ngrok-skip-browser-warning': "ngrokSkipBrowserWarningValue",

        },
      });
      setSelectedImage(null);
      // console.log(response.data.url)
      // setUrl(response.data.url);
      setFormData({
        ...formData,
        profilephoto: response.data.url,
      });

      if (!response.data.error) {
        // console.log("repsonsedailbevacwbvd", response.data)
        toast.success(`Profile Picture Uploaded Successfully`)
        // setTimeout(() => {
        setNotification(null);
        setLoading(false);
      } else {
        toast.error('Error uploading profile picture');
        setLoading(false);
      }


      // setNotification('Image uploaded successfully');

      // }, 2000);

    } else {
      // setNotification('No image selected');
      toast.error('Please upload your profile picture');
    }
  };

  function handleDelete() {
    setFormData({
      ...formData,
      profilephoto: '',
    });
  }
  return (
    <div className='image-upload-container'>

      <input type='file' accept='image/*' className='file-input' onChange={handleImageChange} name="dp" />
      <button className='upload-button' onClick={handleImageUpload} disabled={loading}>
        {loading ? 
    
        <>
            <Spinner animation="grow" />;
          </>
        : 'Upload Image'}
      </button>



      {notification && <div className='notification'>{notification}</div>}

      {formData.profilephoto && (
        <div className='dp-container'>
          <img
            className='preview-image'
            src={formData.profilephoto}
            // value={formData.profilephoto}
            alt='Selected'
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
          <div className="action_btns">
            <button
              className='delete-button'
              onClick={handleDelete}>Delete</button>
          </div>

        </div>
      )}
      {selectedImage && (
        <div className='preview-container'>
          <h2>Preview:</h2>
          <img
            className='preview-image'
            src={URL.createObjectURL(selectedImage)}
            value={formData.profilePhoto}
            alt='Selected'
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>

      )}
      <Toaster richColors position="top-right" style={{ marginTop: '50px', marginLeft: '60px', zIndex: 5, width: '80%' }} />
    </div>
  );
};

export default ImageUpload;

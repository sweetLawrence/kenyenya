// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadDocument = () => {
//   const [formData, setFormData] = useState({
//     pdfFile: null,
//   });

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, pdfFile: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
   
//     data.append('file', formData.pdfFile);

//     try {
//       await axios.post('http://localhost:3001/api/file_upload', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('File uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>

//       <label>
//         Upload PDF:
//         <input type="file" name="file" accept=".pdf" onChange={handleFileChange} />
//       </label>
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UploadDocument;


// FileInput.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadDocument = ({ label, name, onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

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
      const formData = new FormData();
      formData.append(name, selectedFile); // Use the provided name prop dynamically

      // Use Axios to send the file to the backend with dynamic params
      axios.post(`http://localhost:3001/api/file_upload/${name}`, formData)
        .then((response) => {
          console.log(`File ${name} uploaded successfully!`);
          // Additional actions can be performed based on the response
        })
        .catch((error) => {
          console.error(`Error uploading file ${name}:`, error);
        });

      // Call the provided onFileSelect function with the selected file and name
      onFileSelect(name, selectedFile);
      setSelectedFile(null); // Clear the selected file after submitting
    } else {
      console.error('Please select a file before submitting.');
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input type="file" accept=".pdf" name={name} onChange={handleFileChange} />
      <button onClick={handleFileSubmit}>Submit</button>
    </div>
  );
};

export default UploadDocument;

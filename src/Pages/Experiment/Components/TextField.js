import '../../../Styles/application.css'
import React, { useState } from 'react';


const TextField = ({ label,type, placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        // required 
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default TextField;

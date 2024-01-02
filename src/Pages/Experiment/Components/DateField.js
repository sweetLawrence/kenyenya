import React from 'react';
import '../../../Styles/DateField.css'; 

const DateField = ({ label, value, onChange,placeholder  }) => {
  return (
    <div className="date-container">
      <label className="date-label">{label}</label>
      <input
        type="date"
        className="date-field"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default DateField;

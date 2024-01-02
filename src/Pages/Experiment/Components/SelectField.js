  import React from 'react';
  import '../../../Styles/SelectField.css'; 

  const SelectField = ({ label, options, value, onChange }) => {
    return (
      <div className="select-container">
        <label className="select-label">{label}</label>
        <select
          className="select-field"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  export default SelectField;

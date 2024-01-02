import React from 'react'
import SelectField from "../Components/SelectField"

const Cocurricular = ({ formData, setFormData }) => {
  const sports = [
    { value: 'Sport?', label: 'Sport?' },
    { value: 'Softball', label: 'Softball' },
    { value: 'Baseball', label: 'Baseball' },
    { value: 'Football', label: 'Football' },
    { value: 'Swimming', label: 'Swimming' },
    { value: 'Hockey', label: 'Hockey' },
    { value: 'Tennis', label: 'Tennis' },
    { value: 'Handball', label: 'Handball' },

  ];
  const clubs = [
    { value: 'Club?', label: 'Club?' },
    { value: 'Society of Engineering', label: 'Society of Engineering' },
  ];

  const handleSelectChange = (value, field) => {

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="sign-up-container">

      <SelectField label="Select game of choice" options={sports} value={formData.sport || ""} onChange={(value) => handleSelectChange(value, "sport")} />
      <SelectField label="Clubs Details" options={clubs} value={formData.club || ""} onChange={(value) => handleSelectChange(value, "club")} />

    </div>
  )
}

export default Cocurricular
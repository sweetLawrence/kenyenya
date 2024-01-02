import React from 'react'
import SelectField from "../Components/SelectField"

const SelectCourse = ({ formData, setFormData }) => {
  const levels = [
    { value: 'select level?', label: 'select level?' },
    { value: 'New Intake', label: 'New Intake' },
    { value: 'Upgrading Intake', label: 'Upgrading Intake' },

  ];
  const courses = [
    { value: 'select course?', label: 'Select course?' },
    { value: 'Diploma in Early Childhood Teacher Education (DECTE)', label: 'Diploma in Early Childhood Teacher Education (DECTE)' },
    { value: 'Diploma in Primary Teacher Education (DPTE)', label: 'Diploma in Primary Teacher Education (DPTE)' },
  ];

  const handleSelectChange = (value, field) => {

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="sign-up-container">

      <SelectField label="Select Level" options={levels} value={formData.level || ""} onChange={(value) => handleSelectChange(value, "level")} />
      <SelectField label="Select Course" options={courses} value={formData.course || ""} onChange={(value) => handleSelectChange(value, "course")} />

    </div>
  )
}

export default SelectCourse
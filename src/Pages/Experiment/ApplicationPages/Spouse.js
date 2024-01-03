import React from 'react'
import TextField from "../Components/TextField";
import SelectField from "../Components/SelectField";

const Spouse = ({ formData, setFormData }) => {
  const options = [
    { value: 'marital status?', label: 'Marital status?' },
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Widowed', label: 'Widowed' },
    { value: 'Divorced', label: 'Divorced' },
  ];

  const handleSelectChange = (value, field) => {

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleTextChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <SelectField label="Marital Status" options={options} value={formData.maritalstatus} onChange={(value) => handleSelectChange(value, "maritalstatus")} />
      <TextField label="Surname" value={formData.spousesurname} type="text" onChange={(value) => handleTextChange(value, "spousesurname")} placeholder="Surname of your Spouse here.." />
      <TextField label="Other Name" value={formData.spouseothername} type="text" onChange={(value) => handleTextChange(value, "spouseothername")} placeholder="Other Name of your Spouse here.." />
      <TextField label="P.O Box" value={formData.spousebox} type="number" onChange={(value) => handleTextChange(value, "spousebox")} placeholder="" />
      <TextField label="Town" value={formData.spousetown} type="text" onChange={(value) => handleTextChange(value, "spousetown")} placeholder="Enter Spouse nearest town here.." />
      <TextField label="Town code" value={formData.spousetowncode} type="number" onChange={(value) => handleTextChange(value, "spousetowncode")} placeholder="Enter Spouse town code here.." />
      <TextField label="Phone No" value={formData.spousephone} type="text" onChange={(value) => handleTextChange(value, "spousephone")} placeholder="Enter Spouse Phone No here.." />
      <TextField label="Spouse Email" value={formData.spouseemail} type="email" onChange={(value) => handleTextChange(value, "spouseemail")} placeholder="Enter Spouse Email here.." />


    </div>
  )
}

export default Spouse
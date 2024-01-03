import React from "react";
import TextField from "../Components/TextField";
import DateField from "../Components/DateField";
import SelectField from "../Components/SelectField";



function SignUpInfo({ formData, setFormData }) {
  const options = [
    { value: '', label: 'select sex' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
  const disability = [
    { value: 'disabled?', label: 'disabled?' },
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ];


  const handleSelectChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleDateChange = (value) => {

    setFormData({
      ...formData,
      dateofbirth: value,
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
      <div className="subtitle">Personal Details</div>
      <TextField label="Surname" placeholder="Enter surname" type="text" value={formData.surname} onChange={(value) => handleTextChange(value, "surname")} />
      <TextField label="Name" placeholder="Enter (First and Second Name) here..." type="text" value={formData.name} onChange={(value) => handleTextChange(value, "name")} />
      <TextField label="Id Number" placeholder="Enter your correct National ID Number" type="number" value={formData.national_id} onChange={(value) => handleTextChange(value, "national_id")} />
      <TextField label="Birth Certificate Number" placeholder="Enter your correct National Birth Certificate Number" type="text" value={formData.birthcertnumber} onChange={(value) => handleTextChange(value, "birthcertnumber")} />
      <TextField label="P.O Box" placeholder="Enter your Box Number" value={formData.box} onChange={(value) => handleTextChange(value, "box")} />
      <TextField label="Town" placeholder="Enter your nearest town here.." value={formData.town} type="text" onChange={(value) => handleTextChange(value, "town")} />
      <TextField label="Town Code" placeholder="Enter your town code here.." value={formData.towncode} type="number" onChange={(value) => handleTextChange(value, "towncode")} />
      <TextField label="Phone No" placeholder="Enter your Phone No here.." value={formData.phone} type="text" onChange={(value) => handleTextChange(value, "phone")} />
      <TextField label="Email" placeholder="Enter your Personal Email here.." value={formData.email} type="email" onChange={(value) => handleTextChange(value, "email")} />
      <TextField label="Country" placeholder="" value={formData.country} type="text" onChange={(value) => handleTextChange(value, "country")} />
      <TextField label="KCSE Index Number/Year" placeholder="E.g 12345678912/2019" type="text" value={formData.kcseIndex} onChange={(value) => handleTextChange(value, "kcseIndex")} />
      {/* <TextField label="Date of Birth" placeholder="" /> */}
      <DateField label="Date of Birth" placeholder='mm/dd/yy' value={formData.dateofbirth} onChange={(value) => handleDateChange(value, "dateofbirth")} />
      <SelectField label="Sex" options={options} type="text" value={formData.sex || ""} onChange={(value) => handleSelectChange(value, "sex")} />
      <div className="subtitle">Place of Birth</div>
      <TextField label="Village" placeholder="Enter your Village Name (permanent place) here.." type="text"value={formData.village} onChange={(value) => handleTextChange(value, "village")} />
      <TextField label="Location" placeholder="Enter your Location Name (permanent place) here.." type="text" value={formData.location} onChange={(value) => handleTextChange(value, "location")} />
      <TextField label="Division" placeholder="Enter your Division (permanent place) here.." type="text" value={formData.division} onChange={(value) => handleTextChange(value, "division")} />
      <TextField label="Town" placeholder="Enter your Town (permanent place) here.." type="text" value={formData.birthtown} onChange={(value) => handleTextChange(value, "birthtown")} />
      <TextField label="Region" placeholder="Enter region name" value={formData.region} type="text" onChange={(value) => handleTextChange(value, "region")} />
      <TextField label="County" placeholder="Enter county name" value={formData.county} type="text" onChange={(value) => handleTextChange(value, "county")} />
      <TextField label="Assistant Chief Name" placeholder="Enter surname" value={formData.asschief} type="text" onChange={(value) => handleTextChange(value, "asschief")} />
      <TextField label="Chief Name" placeholder="Enter surname" value={formData.chief} type="text" onChange={(value) => handleTextChange(value, "chief")} />
      <div className="subtitle">Disability status</div>
      <SelectField label="Disabled?" options={disability} value={formData.disabled || ""} onChange={(value) => handleSelectChange(value, "disabled")} />
    </div>
  );
}

export default SignUpInfo;


// "eslintConfig": {
//   "extends": [
//     "react-app",
//    "other-config",
//     "react-app/jest"
//   ]
// },

import React from "react";
import TextField from "../Components/TextField";

function Family({ formData, setFormData }) {
  const handleTextChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <div className="subtitle"> Enter correct details of Guardian</div>
      <TextField label="First Name" placeholder="Enter First Name of your Guardian here.." type="text"value={formData.guardianName} onChange={(value) => handleTextChange(value, "guardianName")} />
      <TextField label="Surname" placeholder="Enter surname of your Guardian here.." type="text" value={formData.guardianSurname} onChange={(value) => handleTextChange(value, "guardianSurname")}/>
      <TextField label="Occupation" placeholder="Enter Occupation of your Guardian here.." type="text" value={formData.guardianOccupation} onChange={(value) => handleTextChange(value, "guardianOccupation")}/>
      <TextField label="Id Number" placeholder="Enter your Guardian Id Number" type="text" value={formData.guardianId} onChange={(value) => handleTextChange(value, "guardianId")}/>
      <TextField label="P.O Box" placeholder="Enter your Guardian Box Number.." type="number" value={formData.guardianBox} onChange={(value) => handleTextChange(value, "guardianBox")}/>
      <TextField label="Town" placeholder="Enter nearest town of your Guardian here..." vtype="text" alue={formData.guardianTown} onChange={(value) => handleTextChange(value, "guardianTown")}/>
      <TextField label="Town code" placeholder="Enter your town code here.." type="number" value={formData.guardianTownCode} onChange={(value) => handleTextChange(value, "guardianTownCode")}/>
      <TextField label="Phone No" placeholder="Enter your Phone No here.." type="text" value={formData.guardianPhone} onChange={(value) => handleTextChange(value, "guardianPhone")}/>
      <TextField label="Email" placeholder="Enter your Guardian Email here.." type="email" value={formData.guardianEmail} onChange={(value) => handleTextChange(value, "guardianEmail")}/>
      {/* <TextField label="Date of Birth" placeholder="" /> */}
      {/* <DateField label="Date of Birth" placeholder='mm/dd/yy'  onChange={handleDateChange}/> */}
      {/* <SelectField label="Sex" options={options} value={formData.selectedOption} onChange={handleSelectChange}/> */}
      <div className="subtitle">Enter correct details of your next of Kin.</div>
      <TextField label="First Name" placeholder="Enter First Name of your next of Kin here.." type="text" value={formData.kinFirstName} onChange={(value) => handleTextChange(value, "kinFirstName")}/>
      <TextField label="Surname" placeholder="Enter surname of your next of Kin here.."type="text"  value={formData.kinSurName} onChange={(value) => handleTextChange(value, "kinSurName")}/>
      <TextField label="Relationship" placeholder="Enter relationship of your next of Kin with you here.." type="text" value={formData.kinRelation} onChange={(value) => handleTextChange(value, "kinRelation")}/>
      <TextField label="Occupation" placeholder="Enter Occupation of your next of Kin here.." type="text" value={formData.kinOccupation} onChange={(value) => handleTextChange(value, "kinOccupation")}/>
      <TextField label="Id Number" placeholder="Enter your next of Kin Id Number" type="number" value={formData.kinId} onChange={(value) => handleTextChange(value, "kinId")}/>
      <TextField label="P.O Box" placeholder="Enter your next of Kin Box Number.." type="number" value={formData.kinBox} onChange={(value) => handleTextChange(value, "kinBox")}/>
      <TextField label="Town" placeholder="Enter nearest town of your next of Kin here..." type="text" value={formData.kinTown} onChange={(value) => handleTextChange(value, "kinTown")}/>
      <TextField label="Town code" placeholder="Enter your next of Kin town code here.." type="number" value={formData.kinTownCode} onChange={(value) => handleTextChange(value, "kinTownCode")}/>
      <TextField label="Phone No" placeholder="Enter your next of Kin Phone No here.." type="text" value={formData.kinPhone} onChange={(value) => handleTextChange(value, "kinPhone")}/>
      <TextField label="Kin Email" placeholder="Enter your next of Kin Email here.." type="email" value={formData.kinEmail} onChange={(value) => handleTextChange(value, "kinEmail")}/>
      <div className="subtitle">Enter correct details of first person to be contacted In-case of Emergency.</div>
      <TextField label="First Name" placeholder="Enter First Name of your Emergency Person here.." type="text" value={formData.emergencyAFirstName} onChange={(value) => handleTextChange(value, "emergencyAFirstName")}/>
      <TextField label="Surame" placeholder="Enter surname of your Emergency Person here.." type="text" value={formData.emergencyASurName} onChange={(value) => handleTextChange(value, "emergencyASurName")}/>
      <TextField label="Occupation" placeholder="Enter Occupation of First Emergency Person here..." type="text" value={formData.emergencyAOccupation} onChange={(value) => handleTextChange(value, "emergencyAOccupation")}/>
      {/* <TextField label="Occupation" placeholder="Enter Occupation of your First Emergency here.." onChange={(value) => handleTextChange(value, "emergencyAFirstName")}/> */}
      <TextField label="Id Number" placeholder="Enter your Emergency Person Id Number" type="number" value={formData.emergencyAId} onChange={(value) => handleTextChange(value, "emergencyAId")}/>
      <TextField label="P.O Box" placeholder="Enter your Emergency Person Box Number.." type="number" value={formData.emergencyABox} onChange={(value) => handleTextChange(value, "emergencyABox")}/>
      <TextField label="Town" placeholder="Enter nearest town of your Emergency Person  here..." type="text" value={formData.emergencyATown} onChange={(value) => handleTextChange(value, "emergencyATown")}/>
      <TextField label="Town code" placeholder="Enter Emergency Person town code here.." type="number" value={formData.emergencyATownCode} onChange={(value) => handleTextChange(value, "emergencyATownCode")}/>
      <TextField label="Phone No" placeholder="Enter Emergency Person Phone No here.." type="text" value={formData.emergencyAPhone} onChange={(value) => handleTextChange(value, "emergencyAPhone")}/>
      <TextField label="Person Email" placeholder="Enter your Emergency Person Email here.." type="email" value={formData.emergencyAEmail} onChange={(value) => handleTextChange(value, "emergencyAEmail")}/>
      <div className="subtitle">Enter correct details of second person to be contacted In-case of Emergency.</div>
      <TextField label="First Name" placeholder="Enter First Name of your Emergency Person here.." type="text" value={formData.emergencyBFirstName} onChange={(value) => handleTextChange(value, "emergencyBFirstName")}/>
      <TextField label="Surame" placeholder="Enter surname of your Emergency Person here.." type="text" value={formData.emergencyBSurName} onChange={(value) => handleTextChange(value, "emergencyBSurName")}/>
      <TextField label="Occupation" placeholder="Enter Occupation of First Emergency Person here..." type="text" value={formData.emergencyBOccupation} onChange={(value) => handleTextChange(value, "emergencyBOccupation")}/>
      {/* <TextField label="Occupation" placeholder="Enter Occupation of your First Emergency here.." onChange={(value) => handleTextChange(value, "emergencyAId")}/> */}
      <TextField label="Id Number" placeholder="Enter your Emergency Person Id Number" type="number" value={formData.emergencyBId} onChange={(value) => handleTextChange(value, "emergencyBId")}/>
      <TextField label="P.O Box" placeholder="Enter your Emergency Person Box Number.." type="number" value={formData.emergencyBBox} onChange={(value) => handleTextChange(value, "emergencyBBox")}/>
      <TextField label="Town" placeholder="Enter nearest town of your Emergency Person  here..."  type="text" value={formData.emergencyBTown} onChange={(value) => handleTextChange(value, "emergencyBTown")}/>
      <TextField label="Town code" placeholder="Enter Emergency Person town code here.." type="number" value={formData.emergencyBTownCode} onChange={(value) => handleTextChange(value, "emergencyBTownCode")}/>
      <TextField label="Phone No" placeholder="Enter Emergency Person Phone No here.." type="text" value={formData.emergencyBPhone} onChange={(value) => handleTextChange(value, "emergencyBPhone")}/>
      <TextField label="Person Email" placeholder="Enter your Emergency Person Email here.." type="email" value={formData.emergencyBEmail} onChange={(value) => handleTextChange(value, "emergencyBEmail")}/>
    </div>
  );
}

export default Family;

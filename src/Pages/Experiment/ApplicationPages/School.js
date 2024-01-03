import React from 'react'
import TextField from "../Components/TextField";
import SelectField from "../Components/SelectField";

const School = ({ formData, setFormData }) => {
    const options = [
        { value: 'Grade?', label: 'Grade?' },
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C' },
        { value: 'C-', label: 'C-' },
        { value: 'D+', label: 'D+' },
        { value: 'D', label: 'D' },
        { value: 'D-', label: 'D-' },
        { value: 'E', label: 'E' },

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
            <div className="subtitle">Enter Correct Details of your High School</div>
            <TextField label="School Name" placeholder="Enter High school Name you attended here.." value={formData.schoolname} type="text" onChange={(value) => handleTextChange(value, "schoolname")} />
            <TextField label="School P.O Box" placeholder="Enter High school Box Number here..." value={formData.schoolBox} type="number" onChange={(value) => handleTextChange(value, "schoolBox")} />
            <TextField label="Town" placeholder="Enter Town name here..." value={formData.schoolTown} type="text" onChange={(value) => handleTextChange(value, "schoolTown")} />
            <TextField label="From Year?" placeholder="When did join the high school..." value={formData.schooljoinyear} type="number" onChange={(value) => handleTextChange(value, "schooljoinyear")} />
            <TextField label="To Year?" placeholder="When did finish the high school.." value={formData.schoolfinishyear} type="number" onChange={(value) => handleTextChange(value, "schoolfinishyear")} />
            <TextField label="Exam Body?" placeholder="Exam Body e.g kcse ..." value={formData.exambody} type="text" onChange={(value) => handleTextChange(value, "exambody")} />
            <TextField label="School Result" placeholder="Enter Result (comma separation) eg Maths:A, English:B,..." value={formData.schoolresults} type="text" onChange={(value) => handleTextChange(value, "schoolresults")} />
            <SelectField label="Overall Grade" options={options} value={formData.overallgrade || ""} type="text" onChange={(value) => handleSelectChange(value, "overallgrade")} />

            <div className="subtitle">Enter Correct Details of Other School Attended</div>
            <TextField label="School Name" placeholder="Enter Other school Name you attended here.." value={formData.otherschoolname} type="text" onChange={(value) => handleTextChange(value, "otherschoolname")} />
            <TextField label="School P.O Box" placeholder="Enter Other school Box Number here..." value={formData.otherschoolbox} type="number" onChange={(value) => handleTextChange(value, "otherschoolbox")} />
            <TextField label="Town" placeholder="Enter Town name here..." value={formData.otherschoolTown} type="text" onChange={(value) => handleTextChange(value, "otherschoolTown")} />
            <TextField label="From Year?" placeholder="When did join the Other school..." value={formData.otherschooljoinyear} type="number" onChange={(value) => handleTextChange(value, "otherschooljoinyear")} />
            <TextField label="To Year?" placeholder="When did finish the Other school.." value={formData.otherschoolfinishyear} type="number" onChange={(value) => handleTextChange(value, "otherschoolfinishyear")} />
            <TextField label="Exam Body?" placeholder="Exam Body e.g kcse ..." value={formData.otherschoolexambody} type="text" onChange={(value) => handleTextChange(value, "otherschoolexambody")} />
            <TextField label="School Result" placeholder="Enter Result (comma separation) eg Maths:A, English:B,..." value={formData.otherschoolresults} type="text" onChange={(value) => handleTextChange(value, "otherschoolresults")} />
            <TextField label="Qualifications" placeholder="" value={formData.qualifications} type="text" onChange={(value) => handleTextChange(value, "qualifications")} />

        </div>
    )
}

export default School
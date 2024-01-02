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
            <TextField label="School Name" placeholder="Enter High school Name you attended here.." value={formData.schoolname} onChange={(value) => handleTextChange(value, "schoolname")} />
            <TextField label="School P.O Box" placeholder="Enter High school Box Number here..." value={formData.schoolBox} onChange={(value) => handleTextChange(value, "schoolBox")} />
            <TextField label="Town" placeholder="Enter Town name here..." value={formData.schoolTown} onChange={(value) => handleTextChange(value, "schoolTown")} />
            <TextField label="From Date?" placeholder="When did join the high school..." value={formData.schooljoinyear} onChange={(value) => handleTextChange(value, "schooljoinyear")} />
            <TextField label="To Date?" placeholder="When did finish the high school.." value={formData.schoolfinishyear} onChange={(value) => handleTextChange(value, "schoolfinishyear")} />
            <TextField label="Exam Body?" placeholder="Exam Body e.g kcse ..." value={formData.exambody} onChange={(value) => handleTextChange(value, "exambody")} />
            <TextField label="School Result" placeholder="Enter Result (comma separation) eg Maths:A, English:B,..." value={formData.schoolresults} onChange={(value) => handleTextChange(value, "schoolresults")} />
            <SelectField label="Overall Grade" options={options} value={formData.overallgrade || ""} onChange={(value) => handleSelectChange(value, "overallgrade")} />

            <div className="subtitle">Enter Correct Details of Other School Attended</div>
            <TextField label="School Name" placeholder="Enter Other school Name you attended here.." value={formData.otherschoolname} onChange={(value) => handleTextChange(value, "otherschoolname")} />
            <TextField label="School P.O Box" placeholder="Enter Other school Box Number here..." value={formData.otherschoolbox} onChange={(value) => handleTextChange(value, "otherschoolbox")} />
            <TextField label="Town" placeholder="Enter Town name here..." value={formData.otherschoolTown} onChange={(value) => handleTextChange(value, "otherschoolTown")} />
            <TextField label="From Date?" placeholder="When did join the Other school..." value={formData.otherschooljoinyear} onChange={(value) => handleTextChange(value, "otherschooljoinyear")} />
            <TextField label="To Date?" placeholder="When did finish the Other school.." value={formData.otherschoolfinishyear} onChange={(value) => handleTextChange(value, "otherschoolfinishyear")} />
            <TextField label="Exam Body?" placeholder="Exam Body e.g kcse ..." value={formData.otherschoolexambody} onChange={(value) => handleTextChange(value, "otherschoolexambody")} />
            <TextField label="School Result" placeholder="Enter Result (comma separation) eg Maths:A, English:B,..." value={formData.otherschoolresults} onChange={(value) => handleTextChange(value, "otherschoolresults")} />
            <TextField label="Qualifications" placeholder="" value={formData.qualifications} onChange={(value) => handleTextChange(value, "qualifications")} />

        </div>
    )
}

export default School
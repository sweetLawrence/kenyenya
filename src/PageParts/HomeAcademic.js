import React from 'react'
import Captioned from '../SubComponents/Captioned'
import exam from '../images/exams.jpg'
import useSchoolData from '../CustomHooks/useSchoolData'
import Button1 from '../SubComponents/Button1'
import { useNavigate } from 'react-router-dom'
import Table2 from '../Components/Table2'
import useIntakes from '../CustomHooks/useIntakes'
import paragraphy from '../CustomHooks/paragraphy'

const HomeAcademic = () => {
    const { academic_data } = useSchoolData()
    const { courses } = useIntakes()
    const navigate = useNavigate()
    
  return (
    <div className='tri-page' id='academic'>
        <Captioned src={exam} caption="Students Taking Examination" />
        <div className='text'>
            <h1 className='title-h1'>ACADEMIC HISTORY</h1>
            <div>
                <p>{paragraphy(academic_data)}</p>
                <Table2 title="PROGRAMS OFFERED" data={courses.filter(p=>p.level.includes('New'))} />
                <Button1 text="Apply to join" action={()=>navigate('/application')} />
            </div>
        </div>
    </div>
  )
}

export default HomeAcademic
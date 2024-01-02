import React from 'react'
import Captioned from '../SubComponents/Captioned'
import tuitionBlock from '../images/tuitionBlock.jpg'
import useSchoolData from '../CustomHooks/useSchoolData'
import { useNavigate } from 'react-router-dom'
import Button1 from '../SubComponents/Button1'
import paragraphy from '../CustomHooks/paragraphy'

const HomeAbout = () => {
    const { background } = useSchoolData()
    const navigate = useNavigate()

    const readMore = () => navigate("/about")
  return (
    <div className='tri-page'>
        <Captioned src={tuitionBlock} caption="The College Tuition Block" />
        <div className='text'>
            <h1 className='title-h1'>ABOUT THE COLLEGE</h1>
            <div>
                <span id='school-about'>{paragraphy(background)}</span>
                <Button1 text={"Read More..."} action={readMore} />
            </div>
        </div>
        
    </div>
  )
}

export default HomeAbout
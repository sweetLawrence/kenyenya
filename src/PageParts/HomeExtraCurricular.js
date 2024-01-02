import React from 'react'
import Captioned from '../SubComponents/Captioned'
import drama from '../images/drama.jpg'
import useSchoolData from '../CustomHooks/useSchoolData'
import paragraphy from '../CustomHooks/paragraphy'

const HomeExtraCurricular = () => {
    const { extra_curriculum_data} = useSchoolData()

  return (
    <div className='tri-page' id="extra-curricular">
        <Captioned src={drama} caption="Drama Students in Action" />
        <div className='text'>
            <h1 className='title-h1'>SPORTS & PERFORMING ART</h1>
            <div>
                <p>{paragraphy(extra_curriculum_data)}</p>
            </div>
        </div>
    </div>
  )
}

export default HomeExtraCurricular
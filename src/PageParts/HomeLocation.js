import React from 'react'
import Captioned from '../SubComponents/Captioned'
import gate from '../images/schoolGate.png'

const HomeLocation = () => {
  return (
    <div className='tri-page'>
        <Captioned src={gate} caption="The Main College Gate" />
        <h1 className='title-h1'>Location and Direction of the College</h1>
        <div className='text'>
        <iframe title='Kenya TTC location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.303369658329!2d34.770543274710384!3d-0.9205524990705412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b5bf5e166622f%3A0x597a934b9448ef60!2sKenyenya%20Teachers%20Training%20College!5e0!3m2!1sen!2ske!4v1685047119094!5m2!1sen!2ske" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default HomeLocation
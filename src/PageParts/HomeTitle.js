import React from 'react'
import logo from '../images/logo.jpg.png'
import {MdEmail, MdPhone} from 'react-icons/md'
import useSchoolData from '../CustomHooks/useSchoolData'
import grad2 from '../images/grad2.jpg'
import grad1 from '../images/grad1.jpg'
import Carousel from '../Components/Carousel'

// styling is under pages
function HomeTitle() {
    const {email, phone} = useSchoolData()
    let images = [
        {original: grad1}, {original: grad2}
    ]
    return (
        <div className='title' id="title-parent">
            <div className='details' id="school-title">
                <h1>KENYENYA TEACHERS' TRAINING COLLEGE</h1>
                <img src={logo} alt='logo'/>
                <span>
                    <a href={`mailto:${email}`}>
                            <MdEmail/>
                            <p>{email}</p>
                    </a>
                    <a href={`tel:${phone[0]}`}>
                            <MdPhone/>
                            <p>{phone[0]}</p>
                    </a>
                </span>
            </div>
            <div className='images'>
                <Carousel images={images}/>
            </div>
        </div>
    )
}

export default HomeTitle
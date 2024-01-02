import React from 'react'
import useSchoolData from '../CustomHooks/useSchoolData'
import { } from 'react-icons/'
import { MdEmail, MdPhone } from 'react-icons/md'
import { BsMailbox2 } from 'react-icons/bs'

import bg from '../images/bgWave.png'

const Footer = () => {
    const { phone, email } = useSchoolData()

  return (
    <footer>
        <img id='bg-wave' src={bg} alt="" />
        <div className='links'>
            <div>
                <h2>Contacts</h2>
                {phone.map((no, i)=><span key={i}>
                    <MdPhone />
                    <a href={`tel:${no}`}>{no}</a>
                </span>)}
                <span>
                    <MdEmail />
                    <a href={`mailto:${email}`}>{email}</a>
                </span>
                <span>
                    <BsMailbox2 />
                    <a href="">P.O. BOX 166-40211, Kenyenya</a>
                </span>
              
            </div>

            <div>
                <h2>Quick Links</h2>
                <a href={"/fee"} >Download Fee Structure</a>
                <a href="/application">Send joining application</a>
                <a href="/staff">School Staff</a>
                <a href="https://thisistsungulawrence.vercel.app/" target='_blank'>Developer Consultation</a>
            </div>
        </div>
        
        <p>Kenyenya TTC Copyright {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
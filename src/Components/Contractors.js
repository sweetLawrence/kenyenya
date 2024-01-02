import React from 'react'
import '../Styles/t-announcement.css';
import { Link } from 'react-router-dom';
import TenderAnnouncementImage from '../images/advertpic.png'
import tenderAdvert from '../docs/advert2.pdf'
import ConstructionImg from '../images/construction-advert.jpg'
import contractors from '../docs/contractors.pdf'
import advert from '../docs/contractors_advert.pdf'

const Contractors = () => {
    return (
        <div className='t-announcement-1'>
            <h3>Pre-qualification of Contractors For Works and Services</h3>
            <h5><i>Click this image to <span className='instr'>download</span> advertisement</i></h5>
            <h6>Click the <span className='instr'>Download tender</span> button at the bottom to download your form.</h6>
            <div className="main-container">

                <a href={advert}
                    download="Contractors Advert"
                    target="_blank"
                    rel="noreferrer">
                    <img className='tender-image construction' src={ConstructionImg} alt="construction-announcement" />
                </a>


            </div>
            <div className="navigate-button">
                {/* <Link to="/downloadtenders"> */}
                    
                    <a className='' href={contractors}
                        download="PRE-QUALIFICATION OF WORKS AND SERVICES DOCUMENT"
                        target="_blank"
                        rel="noreferrer">
                            <button className="downloadlink tender-b">Download Tender</button>
                        </a>
                   
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Contractors
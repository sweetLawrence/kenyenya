import '../Styles/t-announcement.css';
import React from 'react'
import { Link } from 'react-router-dom';
import TenderAnnouncementImage from '../images/advertpic.png'
import tenderAdvert from '../docs/advert2.pdf'
import ConstructionImg from '../images/construction-advert.jpg'

const TenderAnnouncement = () => {
    return (
        <div className='t-announcement-2'>
            <h2>Tender Announcements</h2>
            <div className="t-announcement">
                <div className="left">
                   
                        {/* <h3>Tender Announcement (2023/2024 Goods and Services Supply)</h3>
                <h5><i>Click this image to <span className='instr'>download</span> advertisement</i></h5>
                <h6>Click the <span className='instr'>select tender</span> button at the bottom to download your form.</h6>
                <div className="main-container">

                    <a href={tenderAdvert}
                        download={tenderAdvert}
                        target="_blank"
                        rel="noreferrer">
                        <img className='tender-image' src={TenderAnnouncementImage} alt="tender-nnouncement" />
                    </a>


                </div>
                <div className="navigate-button">
                    <Link to="/downloadtenders">
                        <button className="downloadlink tender-b">Select Tender</button>
                    </Link>
                </div> */}
                        <h3>2023/2024 Goods and Services Supply</h3>
                        <p className="closed">Closed</p>
                        <Link className='link' to='/goods'>
                            <p>Click To View</p>
                            
                        </Link>
                       
                    
                   
                </div>


                <div className="middle">
                    <h3>Supply and Delivery of Construction Materials </h3>
                    <Link className='link' to='/construction'>
                        <p>Click To View</p>
                    </Link>
                </div>
                <div className="right">
                    {/* <h3>Tender Announcement - Supply and Delivery of Construction Materials </h3>
                <h5><i>Click this image to <span className='instr'>download</span> advertisement</i></h5>
                <h6>Click the <span className='instr'>select tender</span> button at the bottom to download your form.</h6>
                <div className="main-container">

                    <a href={tenderAdvert}
                        download={tenderAdvert}
                        target="_blank"
                        rel="noreferrer">
                        <img className='tender-image construction' src={ConstructionImg} alt="construction-announcement" />
                    </a>


                </div>
                <div className="navigate-button">
                    <Link to="/downloadtenders">
                        <button className="downloadlink tender-b">Select Tender</button>
                    </Link>
                </div> */}
                    <h3>Pre-qualification of Contractors For Works and Services</h3>
                    <Link className='link' to='/contractors'>
                        <p>Click To View</p>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default TenderAnnouncement
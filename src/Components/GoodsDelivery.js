import React from 'react'
import '../Styles/t-announcement.css';
import { Link } from 'react-router-dom';
import TenderAnnouncementImage from '../images/advertpic.png'
import tenderAdvert from '../docs/advert2.pdf'
import ConstructionImg from '../images/construction-advert.jpg'

const GoodsDelivery = () => {
    return (
        <div className='t-announcement-1'>
            <h3>Tender Announcement (2023/2024 Goods and Services Supply)</h3>
            <h5><i>Click this image to <span className='instr'>download</span> advertisement</i></h5>
            <h6>Click the <span className='instr'>select tender</span> button at the bottom to download your form.</h6>
            <div className="main-container">

                <a href={tenderAdvert}
                    download={tenderAdvert}
                    target="_blank"
                    rel="noreferrer">
                    <img className='tender-image x' src={TenderAnnouncementImage} alt="tender-nnouncement" />
                </a>


            </div>
            <div className="navigate-button">
                <Link to="/downloadtenders">
                    <button className="downloadlink tender-b">Select Tender</button>
                </Link>
            </div>
        </div>
    )
}

export default GoodsDelivery
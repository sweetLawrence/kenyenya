import React from 'react'
import '../Styles/t-announcement.css';
import { Link } from 'react-router-dom';
import TenderAnnouncementImage from '../images/advertpic.png'
import tenderAdvert from '../docs/advert2.pdf'
import ConstructionImg from '../images/supply_page.jpg'
import construction_document from '../docs/constructionmaterials.pdf'
import advert from '../docs/construction_materials-supply_advert.pdf'

const ConstructionDelivery = () => {
    return (
        <div className='t-announcement-1'>
            <h3>Supply and Delivery of Construction Materials </h3>
            <h5><i>Click this image to <span className='instr'>download</span> advertisement</i></h5>
            <h6>Click the <span className='instr'>Download Tender</span> button at the bottom to download your form.</h6>
            <div className="main-container">

                <a href={advert}
                    download="Construction Materials Supply Advert"
                    target="_blank"
                    rel="noreferrer">
                    <img className='tender-image construction' src={ConstructionImg} alt="construction-announcement" />
                </a>


            </div>
            <div className="navigate-button">
                {/* <Link to="/downloadtenders"> */}
                    <a className='' href={construction_document}
                        download="Construction Materials Supply Tender"
                        target="_blank"
                        rel="noreferrer"><button className="downloadlink tender-b">Download Tender</button></a>
                    
                {/* </Link> */}
            </div>
        </div>
    )
}

export default ConstructionDelivery
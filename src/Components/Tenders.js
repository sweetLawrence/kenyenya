import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'

const Tenders = ({ title, active, setActive, category, document, eligibility }) => {

    return (
        <div className='accordion'>
            
            <div className="Heading" onClick={() =>
                setActive(title)
            }>
                <div className="t-container">
                    <p>{title}</p>
                    <span
                        onClick={() =>
                            setActive(title)
                        }
                    >{active == title ? "X" : "|||"}</span>
                </div>
            </div>

            {/* <div className="content"> */}
            <div className={(active == title ? "show" : "") + " content"}>
                <div className="container">
                    <p className='category'>Category : {category}</p>
                    <p className='eligibility'>Eligibility : <span className='elig'>{eligibility}</span></p>
                </div>
                <div className="download">

                    <a className='downloadlink x' href={document}
                        download={document}
                        target="_blank"
                        rel="noreferrer">Download Form</a>

                </div>
            </div>
        </div>
    )
}
// 20 tenders

export default Tenders
import React, { useEffect } from 'react'
import Page from '../Components/Page'
import { Link, useNavigate } from 'react-router-dom';

const ApplicationDetail = () => {
    const navigation = useNavigate();
    
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        // Check if accessToken is present in localStorage
        if (accessToken) {
            // Redirect to /application-page if accessToken is present
            navigation('/application-page');
        }
    }, [navigation]);

    return (
        <div data-aos="zoom-in" className='instructions'>

            <div className="newIntake">
                <div className="main-title">
                    How to Apply - Joining Instructions
                </div>
                <h2> Intake Programs</h2>
                {/* <i>No Cluster Point Required</i> */}
                <p className="new-intake">1. (DECTE Level)</p>

                <div className="detail-level">
                    <p className="detail">For admission to this level, ensure that your KCSE mean grade is <b>C Plain</b> and above.</p>

                </div>
                <p className="new-intake">2. (ECDE Upgrade)</p>
                <div className="detail-level">
                    <p className="detail">For admisssion to DECTE level, be an <b>ECDE Certificate</b> holder from KNEC.</p>
                </div>

                <p className="new-intake">3. (DPTE Level)</p>

                <div className="detail-level">
                    <p className="detail">Ensure that your KCSE mean grade is <b>C Plain</b> and above.</p>
                </div>

                <p className="upgrading-intake">4. (PTE Upgrade)</p>
                <div className="detail-level">
                    <p className="detail">For admission to DPTE level, be a <b>PTE Certificate</b> holder from KNEC.</p>
                </div>

            </div>

            <div className="applyNow ">
                <Link to="/loginpage">
                    <button className="click-to-apply ">Click Here to Apply</button>
                </Link>

            </div>
        </div>

    )
}

export default ApplicationDetail
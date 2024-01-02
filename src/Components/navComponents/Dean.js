import React from 'react'
import { DeanData } from '../navigationData/DeanData'


const Dean = ({ onClick,goBack }) => {
    const handleItemClick = (index) => {
        if (index === 0) {
          goBack();
        }
      };
    return (
        <div className='division animate__animated animate__fadeInLeft'>
            <ul className="sidebarlist">
                {DeanData.map((val, key) => {
                    return (
                        <li className="row special-row" key={key} onClick={() => handleItemClick(key)}>
                            {val}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dean



function sum(a,b){
    return a+b
}


sum(12,13)
sum(568,5656)
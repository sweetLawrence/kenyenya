import React from 'react'
import { TechnicalMgtData } from '../navigationData/TechnicalMgtData'

const TechnicalMgt = ({onClick,goBack}) => {
  const handleItemClick = (index) => {
    if (index === 0) {
      goBack();
    }
  };
  return (
    
    <div className='division animate__animated animate__fadeInLeft'>
        <ul className="sidebarlist">
        {TechnicalMgtData.map((val, key) => {
          return (
            <li className="row special-row" key={key} onClick={() => handleItemClick(key)}>{val}</li>
          )
        })}
      </ul>

    </div>
  )
}

export default TechnicalMgt
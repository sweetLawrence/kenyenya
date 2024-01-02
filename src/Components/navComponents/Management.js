import React from 'react'
import 'animate.css';
import { ManagementData } from '../navigationData/ManagementData';

const Management = ({ onClick, goBack,goBackMain }) => {
  const handleItemClick = (index) => {
    if (index === 0) {
      goBackMain();
    }
    if (index === 2) {
      onClick(2);
    }
    if (index === 4) {
      onClick(4);
    }
    if (index === 5) {
      onClick(5);
    }
     if (index === 6) {
      onClick(6);
    }
  };
 
  return (
    <div className='division animate__animated animate__slideInLeft'>
      <ul className="sidebarlist">

        {ManagementData.map((val, key) => {
          return (
            <li className="row special-row" key={key} onClick={() => handleItemClick(key)}>{val}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Management
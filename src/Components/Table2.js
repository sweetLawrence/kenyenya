import React from 'react'
import '../Styles/components.css'

/**
//  * @param {String} secHead - this is the secondary heading either Requirements or Minimum Grade & Cluster Subjet 
//  * @param {Array} subsHeads - (subheadings)An array of the secondary heading constaining subheadings
//  * 
//  * @returns 
//  */

const Table2 = ({title, data=[]}) => {

    return (
      <div className='table-2'>
        <h2>{title}</h2>
        <div className='ol'>
          {data.map(({course}, i)=><span className='li' key={i}><p>{++i}.</p><p>{course}</p></span>)}
        </div>
      </div>
    )
}

export default Table2
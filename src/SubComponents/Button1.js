import React from 'react'
import '../Styles/sub_comp.css'
import bg from '../images/bgWaveRed.png'

const Button1 = ({text, action}) => {
  return (
      // <button className='btn-1' onClick={action}>
      <button className='w-max p-2 bg-reddish text-white' onClick={action}>
          <img className={"top-0"} id='bg-wave' src={bg} alt=""/>
          <p>{text}</p>
      </button>
  )
}

export default Button1
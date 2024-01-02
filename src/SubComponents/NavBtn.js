import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../Styles/sub_comp.css'

const NavBtn = ({text, path}) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const goto = () => navigate(path)

    const style = {
        backgroundColor: pathname === "/"+path ? "#FF4870" : "transparent" ,
        boxShadow: pathname === "/"+path && "0px 0px 4px rgba(0, 0, 0, 0.297)",
        border: pathname === "/"+path && "2px solid rgba(247, 247, 247, 0.256)"
    }

  return (
    <button className='nav-btn' onClick={goto}
        style={style}>
        {text}
    </button>
  )
}

export default NavBtn
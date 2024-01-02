import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../Styles/components.css'

const MobileDropDown = ({paths}) => {
    const tray = useRef(null);
    const navigate = useNavigate()
    const [drop, setDrop] = useState(false)

    const goto = (index, path) => {
        navigate(index === 0 ? "/" : path.toLowerCase())
    }

    return (
        <span className='mt-auto mb-auto mr-2 block md:hidden' onBlur={() => setDrop(false)}>
        <button className='bar-btn' onClick={() => setDrop(!drop)}>
            <div style={{width: '45px'}}/>
            <div style={{width: drop ? "20px" : "45px"}}/>
            <div style={{width: drop ? "40px" : "45px"}}/>
        </button>
            {drop && <div data-aos={drop ? "slide-right" : "slide-left"}
                          className=' w-max min-w-[70%] grid bg-white fixed top-[3em] right-0 drop-shadow-2xl'>
                {paths.map((path, i) => <button
                    className={"w-full bg-primary text-white hover:bg-primary-600 "}
                    key={i}
                    id='drop-downs'
                    onTouchEnd={() => goto(i, path)}
                    data-aos="fade-up"
                >
                    {path}
                </button>)}
            </div>}
    </span>
    )
}

export default MobileDropDown
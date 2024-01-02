import React, {useState} from 'react'
import {MainNavData} from '../navigationData/MainNavData';
import 'animate.css';
import MenuIcon from '@mui/icons-material/Menu';

const MainNav = ({onClick, goBack}) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (index) => {
        if (index === 1) {
            onClick(2);
        }
    };

    return (

        <div className='division animate__animated animate__fadeIn'>
            <ul className="sidebarlist animate__animated animate__fadeIn animate__slow">
                {MainNavData.map((val, key) => {
                    return (
                        <li className="row" key={key} onClick={() => handleItemClick(key)}>{val}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MainNav


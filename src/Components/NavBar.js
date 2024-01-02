import React, {useEffect, useState} from 'react';
import '../Styles/components.css'
import logo from '../images/logo.jpg.png'
import bg from '../images/bgWave.png'
import NavBtn from '../SubComponents/NavBtn';
import MobileDropDown from './MobileDropDown';
import {useNavigate} from 'react-router-dom';

const ClickableLogo = () => {
    const navigate = useNavigate()

    return <span className={"clickable-logo"} onClick={() => navigate("/")}>
          <img id='logo' src={logo} alt='logo'/>
            <h1 className={"hidden md:block"}>KTTC</h1>
        </span>
}


const NavBar = () => {
    const navigate = useNavigate()
    const [isPc, setIsPc] = useState(window.innerWidth > 600)
    const paths = ["Home", "About", "Gallery", "Application", "Management", "Announcements", "Tenders"]


    useEffect(() => {
        setIsPc(window.innerWidth > 600)
        window.addEventListener('resize', () => {
            setIsPc(window.innerWidth > 600)
        })
        return () => {
            window.removeEventListener('resize', () => {
            })
        }
    }, [])

    return (<nav className='main-nav'>
        <img src={bg} alt="" id='bg-wave'/>
        <div className={"hidden md:grid w-max h-full grid-flow-col gap-2 justify-around justify-items-center "}>
            {paths.map((path, i) => <NavBtn key={i}
                                            text={path} path={i === 0 ? "" : path.toLowerCase()}
            />)}
        </div>
        <ClickableLogo />
        <MobileDropDown paths={paths}/>
    </nav>)
}

export default NavBar
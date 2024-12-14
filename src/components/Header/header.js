import Logo from '../../assets/logo.png';
import './header.css';
import Switch from 'react-switch';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
    const [switchValue, setSwitchValue] = useState(true);

    function handleChangeSwitch(){
        setSwitchValue(false);
    }
    return (
        <header className='header_container'>
            <div className='header_logo'>
                <img src={Logo} alt='Logo fintrack'/>
                <span>Fintrack</span>
            </div>
            <div className='header_options'>
                <Link to='/signup'>Sign-up</Link>
                <Link to='/'>Sign-in</Link>
                <Switch onChange={handleChangeSwitch} checked={switchValue}/>
                
            </div>
        </header>
    )
}
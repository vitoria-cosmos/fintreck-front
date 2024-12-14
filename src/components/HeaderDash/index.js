import Logo from '../../assets/logo.png';
// import './header.css';
import Switch from 'react-switch';
import { useState } from 'react';


export default function HeaderDash() {
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
                <span>Logout</span>          
                <Switch onChange={handleChangeSwitch} checked={switchValue}/>
                
            </div>
        </header>
    )
}
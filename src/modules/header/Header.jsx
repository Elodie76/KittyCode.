import React from 'react';
// import logo from '../../assets/images/logo/-Kitty-Code-23-07-2024.gif';
//
import Navbar from '../../Components/navbar/Navbar';

const Header = () => {
    return (
        <div className='header'>
            {/* <div className='logo'><AnimatedGif src={logo} alt='logo' /></div> */}
            <div className='logo'>PixelPlaza.</div>
            <Navbar />
        </div>
    );
};

export default Header;
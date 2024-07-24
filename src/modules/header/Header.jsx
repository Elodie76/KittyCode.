import React from 'react';
import logo from '../../assets/images/logo/-Kitty-Code-23-07-2024.gif';
import AnimatedGif from '../../Components/animated-gif/AnimatedGif';
import Navbar from '../../Components/navbar/Navbar';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'><AnimatedGif src={logo} alt='logo' /></div>
            <Navbar />
        </div>
    );
};

export default Header;
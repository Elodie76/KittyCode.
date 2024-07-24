import React from 'react';
import Headers from '../../modules/header/Header';
import Footer from '../../modules/footer/Footer';
import Citation from '../../Components/citation/Citation';


const Home = () => {
    return (
        <div className='home page'>
            <Headers />
            <div className='main'>
                <Citation />
            </div>
            
        </div>
    );
};

export default Home;
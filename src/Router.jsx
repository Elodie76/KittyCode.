import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/About/About';
import Contact from './pages/contact/Contact';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default Router;
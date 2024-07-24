import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "underline" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "underline" : "")}>
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "underline" : "")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
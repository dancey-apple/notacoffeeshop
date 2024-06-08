import React from 'react';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="NavLinks">
                <li className="NavLink">Home</li>
                <li className="NavLink">About</li>
                <li className="NavLink">Menu</li>
                <li className="NavLink">Locations</li>
            </ul>
        </nav>
    );
}

export default NavBar;
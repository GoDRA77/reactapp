import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='nav-container'>
                <ul className='navigation'>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/Weather'>Weather</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
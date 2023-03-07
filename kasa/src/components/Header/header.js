import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './header.scss'
import {  STRINGS } from '../../strings/constants';
import { IMAGES} from '../../assets/images';


const Header = () => {
    // Assigning location variable
    const location = useLocation();

    // Destructuring pathname from location
    const { pathname } = location;

    // Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <div className='header'>
            <header>

                <Link to='/home'>
                    <img src={IMAGES.RED_LOGO} alt="red logo" ></img>
                </Link>
                <nav>
                    <ul>
                        {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
                        <li className={splitLocation[1] === "home" ? "active" : ""}>
                            <Link to='/home'>{STRINGS.HEADER_MENU_HOME}</Link>
                        </li>
                        <li className={splitLocation[1] === "about" ? "active" : ""}>
                            <Link to='/about'>{STRINGS.HEADER_MENU_ABOUT}</Link>
                        </li>

                    </ul>
                </nav>
            </header >

        </div >
    );
};

export default Header;
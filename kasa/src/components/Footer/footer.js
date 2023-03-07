import React from 'react';
import './footer.scss'
import { STRINGS } from '../../strings/constants';
import { IMAGES} from '../../assets/images';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={IMAGES.BLACK_LOGO} alt="black logo"></img>
            <p>{STRINGS.COPYRIGHT}</p>
        </div>
    );
};

export default Footer;
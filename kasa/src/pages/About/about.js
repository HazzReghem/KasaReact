import React from 'react';
import Banner from '../../components/Banner/banner';
import AboutBody from './AboutBody/aboutBody';
import './about.scss'
import { IMAGES} from '../../assets/images';


const About = () => {
    return (
        <div className='about'>
            <Banner banner={IMAGES.BANNER_ABOUT} />
            <AboutBody />
        </div>
    );
};

export default About;
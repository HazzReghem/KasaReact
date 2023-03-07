import React from 'react';
import Banner from '../../components/Banner/banner';
import Gallery from './Gallery/gallery';
import './home.scss';
import { STRINGS } from '../../strings/constants';
import { IMAGES } from '../../assets/images';


const Home = () => {

    return (
        <div className='home'>
            <Banner banner={IMAGES.BANNER_HOME} text={STRINGS.BANNER_TITLE} />
            <Gallery />
        </div>
    );
};

export default Home;
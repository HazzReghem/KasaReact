import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import apiAparts from '../../services/apiApart';

import './apart.scss'
import arrow_close from '../../assets/arrow_down.svg'

// Components //
import Slideshow from '../../components/Slideshow/slideshow';
import TagLocation from '../../components/TagLocation/tagLocation';
import Rating from '../../components/Rating/rating';
import Collapse from '../../components/Collapse/collapse';
import Loader from '../../components/Loader/loader';


const Apart = () => {

    const { apartId } = useParams();
    const [apart, setApart] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        apiAparts.getApart(apartId)
            .then((json) => {
                setApart(json);
            })
            .catch(e => setError(e));

    }, [apartId]);


    // Build the view only if the values ​​have been retrieved and initialized in "apart"
    if (apart) {

        return (
            <div className='apart'>

                <div className='apart__slideshow'>
                    <Slideshow pictures={apart.pictures} alt={apart.description} />
                </div>

                <div className='apart__profil'>

                    <div className='apart__profil__name'>

                        <div className='apart__profil__name__title'>
                            <h2>{apart.title}</h2>
                            <p>{apart.location}</p>
                        </div>

                        <div className='apart__profil__name__tags'>
                            {apart.tags.map((item, index) =>
                                (<TagLocation key={index} tags={item} />))
                            }
                        </div>
                    </div>

                    <div className='apart__profil__host'>

                        <Rating rating={apart.rating} />

                        <div className='apart__profil__host__hoster'>
                            <p>{apart.host["name"]} </p>
                            <img src={apart.host["picture"]} alt={"proprietaire"}></img>
                        </div>
                    </div>
                </div>

                <div className='apart__collapse'>

                    <Collapse title="Description" arrow={arrow_close} text={apart.description} />
                    <Collapse title="Équipement" arrow={arrow_close} text={apart.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)} />
                </div>

            </div>
        );
    } else if (error) {
        return (
            <Navigate to="/error"/>
        )
    }
    else {
        return (
            <Loader />
        )
    }
};

export default Apart;
import React from 'react';
import NotFoundBody from './NotFoundBody/notFoundBody';
import './notFound.scss';

const NotFound = () => {
    return (
        <div className='error_container'>
            <NotFoundBody />
        </div>
    );
};

export default NotFound;
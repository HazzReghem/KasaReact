import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/home';
import About from '../pages/About/about';
import NotFound from '../pages/NotFound/notFound';
import Layout from '../pages/layout';
import Apart from '../pages/Apart/apart';



const PublicRouter = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/logements/:apartId' element={<Apart />}
                />
                <Route path='/error' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
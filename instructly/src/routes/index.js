import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../views/about'
import Register from '../views/register';

const index = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<About/>}></Route>
                <Route path={'/login'} element={<About/>}></Route>
                <Route path={'/admin/register'} element={<Register/>}></Route>
            </Routes>
        </div>
    );
};

export default index;
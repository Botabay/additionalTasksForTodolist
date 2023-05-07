import React from 'react';
import styles from './Site.module.css';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { PageThree } from './pages/PageThree';
import { Error404 } from './pages/Error404';
import { dataState } from '../dataState/dataState';
import { ImportantPage } from './ImportantPage';


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <ul>
                        <li><NavLink to="/page/1" className={({isActive})=>isActive?styles.activ:styles.navLink}> page1 </NavLink></li>
                        <li><NavLink to="/page/2" className={({isActive})=>isActive?styles.activ:styles.navLink}> page2 </NavLink></li>
                        <li><NavLink to="/page/3" className={({isActive})=>isActive?styles.activ:styles.navLink}> page3 </NavLink></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    content
                    <Routes>
                        <Route path='/' element={<Navigate to={'/page/1'} />} />

                        <Route path='/page/:id' element={<ImportantPage pages={dataState.pages} />}   />
                        {/* {dataState.pages.map(el=><Route path='/page/:d' element={<div>{el.about}</div>} />)} */}
                        {/* <Route path='/page1' element={<PageOne />} />
                        <Route path='/page2' element={<PageTwo />} />
                        <Route path='/page3' element={<PageThree />} /> */}


                        <Route path='/*' element={<Error404 />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};


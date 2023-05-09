import React, { useEffect } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import styles from './Site.module.css'
import { useState } from "react";
import { useWindowSize } from "./../helpers/useWindowSize";
import { PageThree } from "./pages/PageThree";
import { Error404 } from "./pages/Error404";
import { Page } from "./pages/Page";
import { dataState } from "../dataState/dataState";
import { styled } from 'styled-components'


export const Site = () => {
    // const [burger,setBurger]=useState<boolean>(false)
    // function useWindowSize() {
    //     const [windowSize, setWindowSize] = useState(0);
    //     useEffect(() => {
    //         function handleResize() { setWindowSize(window.innerWidth) }
    //         window.addEventListener('resize', handleResize);
    //         handleResize();
    //         return () => window.removeEventListener('resize', handleResize)
    //     }, [])
    //     return windowSize;
    // }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            {/* {burger?<div>burger</div>:<div></div>} */}
            {useWindowSize() > 600 ? <div><ul>
                <li>link at burger1</li>
                <li>ink at burger2</li>
                <li>ink at burger3</li>
                <li>ink at burger4</li>
            </ul></div> : <div>burger</div>}
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper><NavLink to={'/page/0'} >PAGE 1</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={'/page/1'} >PAGE 2</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={'/page/2'} >PAGE 3</NavLink></NavWrapper>
                    {/* <div><NavLink to={'/page/0'} className={({isActive})=>isActive ?styles.active : styles.navLink}>PAGE 1</NavLink></div>
                    <div><NavLink to={'/page/1'} className={({isActive})=>isActive ?styles.active : styles.navLink}>PAGE 2</NavLink></div>
                    <div><NavLink to={'/page/2'} className={({isActive})=>isActive ?styles.active : styles.navLink}>PAGE 3</NavLink></div> */}
                    {/*<div><NavLink to={'/page3'} className={({isActive})=>isActive ?styles.active : styles.navLink}>PAGE 3</NavLink></div>*/}
                    {/*<div><a href='/page3'>PAGE 3 AHREF</a></div>*/}
                </div>

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'} />} />

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages} />} />

                        {/*<Route path={'/page2'} element={<PageTwo/>}/>*/}
                        {/*<Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={'/*'} element={<Error404 />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};


const NavWrapper = styled.div`
margin-left:10px;
font-size: 20px;

& > a {
    text-decoration: none;
    color: #03eaff;
}
& > a.active {
    color:red;
}
& >a:hover {
    color:steelblue;
}


`

import React from 'react';
import { Header, Aside, Footer } from './components';
import "./styles.css"

export const Layout = ({children}) => {
return (
    <div className='layout'>
        <Aside/>
    <div className='contenedor'>
    <Header/>
    {children}
    <Footer/>
    </div>
    </div>
);
};
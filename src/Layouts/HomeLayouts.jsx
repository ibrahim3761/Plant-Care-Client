import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Componenets/Header';
import Footer from '../Componenets/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='md:px-10 md:py-10 px-5 py-5'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default HomeLayouts;
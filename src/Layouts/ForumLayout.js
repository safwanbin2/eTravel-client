import React from 'react';
import { Outlet } from 'react-router-dom';
import ForumHero from '../Pages/Forum/ForumHero';
import SideBar from '../Pages/Forum/SideBar';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import './ForumLayout.css';

const ForumLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ForumHero></ForumHero>
            <div className='forum w-11/12 mx-auto my-10'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ForumLayout;
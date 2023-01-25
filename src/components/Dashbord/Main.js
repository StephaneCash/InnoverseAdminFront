import React from 'react';
import Dashboard from './Dashboard';
import RightSide from '../RightSide/RightSide';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

const Main = () => {
    return (
        <div className='appDash'>
            <Navbar />
            <div className='dashbaordMain'>
                <Sidebar />
                <Dashboard />
                <RightSide />
            </div>
        </div>
    )
}

export default Main
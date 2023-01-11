import React from 'react';
import Cards from '../cards/Cards';
import Table from '../tables/Table';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    )
}

export default Dashboard
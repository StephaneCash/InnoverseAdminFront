import React from 'react';
import Cards from '../cards/Cards';
import Table from '../tables/Table';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Cards />
            <Table />
        </div>
    )
}

export default Dashboard
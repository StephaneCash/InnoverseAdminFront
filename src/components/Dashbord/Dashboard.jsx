import React from 'react';
import Cards from '../cards/Cards';
import BasicTable from '../tables/Table';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Cards />
            <BasicTable />
        </div>
    )
}

export default Dashboard
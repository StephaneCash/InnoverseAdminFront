import React, { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import BasicTable from '../tables/Table';
import "./Dashboard.css";
import axios from 'axios';
import { baseUrl } from '../../bases/baseUrl';
import { UserContext } from '../../AppContext';


const Dashboard = () => {

    const [transactions, setTransactions] = useState([]);

    const { compteUser } = React.useContext(UserContext);

    const getAllTransactions = () => {
        axios.get(baseUrl + "/transactions")
            .then(res => {
                setTransactions(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    useEffect(() => {
        getAllTransactions();
    }, []);

    return (
        <div className='dashboard'>
            <Cards transactions={transactions} />
            <BasicTable data={transactions} compteUser={compteUser} />
        </div>
    )
}

export default Dashboard
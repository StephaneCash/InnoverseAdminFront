import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import "./Transactions.css";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import BasicTable from "./Table"

const Transactions = () => {
    return (
        <div className='compteCustom'>
            <Navbar />
            <div className='compte'>
                <Sidebar />
                <div className='transactions'>
                    <Link to="/dashboard" className='retour'>
                        <FaArrowLeft /> Retour
                    </Link>
                    <div className='text'>
                        Transactions
                    </div>

                    <div className='contentTable'>
                        <div className='alertContent'>
                            <div className='bloc1'>
                                <h6>(0) Transactions</h6>
                                <div className='transfert'>
                                    <Link to="/compte/transactions/transfert-argent">
                                        <button className='transfertBtn' type='button'>Transférer de l'argent</button>
                                    </Link>
                                </div>
                            </div>

                            <div className='search'>
                                <input type="search" /> <button type='button'>Rechercher <FaSearch /></button>
                            </div>
                        </div>
                        <BasicTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions
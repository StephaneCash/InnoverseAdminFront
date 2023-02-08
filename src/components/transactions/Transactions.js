import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import "./Transactions.css";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import BasicTable from "./Table";
import axios from 'axios';
import { baseUrl } from '../../bases/baseUrl';
import { UserContext } from '../../AppContext';

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

    const { compteUser, deviseCompte } = React.useContext(UserContext);

    const [valueSearch, setValueSearch] = useState('');
    const [btnClic, setBtnClic] = useState(false);

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
        setBtnClic(true);
    }, []);

    const handleChange = (e) => {
        setValueSearch(e.target.value);
        setBtnClic(false);
    };

    const searchTransaction = () => {
        setBtnClic(true);
    };

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
                                <h6>({transactions && transactions.taille && transactions.taille}) Transactions</h6>
                                <div className='transfert'>
                                    <Link to="/compte/transactions/transfert-argent">
                                        <button className='transfertBtn' type='button'>Transférer de l'argent</button>
                                    </Link>
                                </div>
                            </div>

                            <div className='search'>
                                <input
                                    placeholder='Rechercher par motif, nom du client'
                                    type="search"
                                    onChange={handleChange}
                                />
                                <button
                                    type='button'
                                    onClick={searchTransaction}
                                >
                                    Rechercher <FaSearch />
                                </button>
                            </div>
                        </div>
                        <BasicTable
                            data={transactions}
                            compteUser={compteUser}
                            deviseCompte={deviseCompte}
                            valueSearch={btnClic && valueSearch}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions
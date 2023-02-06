import React from 'react'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import BasicTable from '../transactions/Table'

const Main = () => {
    return (
        <div className='compteCustom'>
            <Navbar />
            <div className='compte'>
                <Sidebar />
                <div className='mainPret transactions'>
                    <Link to="/dashboard" className='retour'>
                        <FaArrowLeft /> Retour
                    </Link>
                    <div className='text'>
                        Liste de prêts
                    </div>

                    <div className='contentTable'>
                        <div className='alertContent'>
                            <div className='bloc1'>
                                <h6>(0) Prêts</h6>
                                <div className='transfert'>
                                    <Link to="/pret/demande">
                                        <button className='transfertBtn' type='button'>Demander un prêt</button>
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

export default Main
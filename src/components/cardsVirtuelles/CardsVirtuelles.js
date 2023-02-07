import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import "./CardsVirtuelles.css"

const CardsVirtuelles = () => {
    return (
        <div className='compteCustom'>
            <Navbar />
            <div className='compte'>
                <Sidebar />

                <div className='cartes'>
                    Cartes
                </div>
            </div>
        </div>
    )
}

export default CardsVirtuelles
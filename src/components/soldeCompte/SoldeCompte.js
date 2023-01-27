import React from 'react'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './SoldeCompte.css';
import { useState } from 'react';
import { FaDollarSign, FaEuroSign } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"

const SoldeCompte = () => {

    const [chaneCard, setChangeCard] = useState(0);
    const [changeDevise, setChangeDevise] = useState(0);
    const [changeDevise2, setChangeDevise2] = useState(0);
    const [changeDevise3, setChangeDevise3] = useState(0);

    const onSubmit = () => {
        const data = {};
        if (chaneCard === 0) {
            toast.error('Veuillez chosir un type de compte !')
        } else {
            if (chaneCard === 1) {
                data.type = 'Compte courant';
                if (changeDevise === 1) {
                    data.devise = ["Euro"]
                }
                if (changeDevise2 === 1) {
                    data.devise.push("Dollar")
                }
                if (changeDevise3 === 1) {
                    data.devise.push("CDF")
                }
            }
            if (chaneCard === 2) {
                data.type = 'Compte épargne';
                if (changeDevise === 1) {
                    data.devise = ["Euro"]
                }
                if (changeDevise2 === 1) {
                    data.devise.push("Dollar")
                }
                if (changeDevise3 === 1) {
                    data.devise.push("CDF")
                }
            }
        }
        console.log(data)
    };

    return (
        <>
            <div className='mainSoldeCompte'>
                <Navbar />
                <div className='contentSoldeCompte'>
                    <Sidebar />
                    <div className='contentCompte'>
                        <h4>Configuration de votre compte</h4>
                        <div className='configSolde'>
                            <h6>Choisir le type de compte</h6>
                            <div className="cards">
                                <div className={chaneCard === 1 ? "card actived" : "card"} onClick={() => setChangeCard(1)}>
                                    <h4>Compte courant</h4>
                                </div>

                                <div className={chaneCard === 2 ? "card actived" : "card"} onClick={() => setChangeCard(2)}>
                                    <h4>Compte épargne</h4>
                                </div>
                            </div>
                        </div>
                        {
                            chaneCard === 1 || chaneCard === 2 ?
                                <div className='configSolde'>
                                    <h6>Choisir la (les) devise (s)</h6>
                                    <div className="devises">
                                        <div className={changeDevise === 1 ? "devise actived" : "devise"}>
                                            <p><FaEuroSign /> </p>
                                            <button onClick={() => { setChangeDevise(1) }}>Choisir</button>
                                            <button onClick={() => { setChangeDevise(0) }}>Annuler</button>
                                        </div>

                                        <div className={changeDevise2 === 1 ?
                                            "devise actived" : "devise"}
                                        >
                                            <p><FaDollarSign /> </p>
                                            <button onClick={() => { setChangeDevise2(1) }}>
                                                Choisir
                                            </button>
                                            <button onClick={() => { setChangeDevise2(0) }}>
                                                Annuler
                                            </button>
                                        </div>

                                        <div className={changeDevise3 === 1 ?
                                            "devise actived" : "devise"}
                                        >
                                            <p>CDF</p>
                                            <button onClick={() => { setChangeDevise3(1) }}>
                                                Choisir
                                            </button>
                                            <button onClick={() => { setChangeDevise3(0) }}>
                                                Annuler
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                : ""
                        }

                        <div className='buttonValid'>
                            <button onClick={onSubmit}>Valider</button>
                        </div>

                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default SoldeCompte
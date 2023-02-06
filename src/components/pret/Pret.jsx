import { Paper } from '@mui/material';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Main from './forms/Main';
import "./Pret.css";

const Pret = () => {

    const [showMainForm, setShowMainForm] = useState(false);

    return (
        <div className='compteCustom'>
            <Navbar />
            <div className='compte'>
                <Sidebar />
                <div className='pret'>
                    <div className='conditions'>
                        <div>
                            <img src="/pret.png" alt="" />
                        </div>
                        <div className='pretPersonnel'>
                            <h1>Qu'est-ce que le prêt personnel ?</h1>
                            <p>
                                Il s'agit d'un crédit à taux fixe que l'on peut utiliser pour n'importe quel projet.
                                On emprunte en fonction de ses besoins et de ses capacités de remboursement.
                                Taux, montant, durée, tout est défini lors de la souscription.
                            </p>

                            <h5>Quelles sont les conditions d'éligibilité ?</h5>
                            <div>
                                <div>
                                    <FaCheck />
                                    <span>Être majeur</span>
                                </div>
                                <div>
                                    <FaCheck />
                                    <span> Avoir des revenus réguliers </span>
                                </div>
                                <div>
                                    <FaCheck />
                                    <span> Résider fiscalement en RDC métropolitaine</span>
                                </div>
                                <div>
                                    <FaCheck />
                                    <span>
                                        Être titulaire d'un Compte Aveniria depuis au moins 3 mois
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='formulaire'>
                        <h1 style={{ textAlign: "center" }}>Etes-vous prêt et éligible ?</h1>
                        <div className='btns'>
                            <button onClick={() => setShowMainForm(true)}>Oui</button>
                            <button onClick={() => setShowMainForm(false)}>Non</button>
                        </div>

                        <div className='formData'>
                            {
                                showMainForm &&
                                <Paper
                                    variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                                    style={{ backgroundColor: "#13203b", color: "aliceblue" }}
                                >
                                    <Main />
                                </Paper>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pret
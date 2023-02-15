import React, { useContext, useEffect } from 'react'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './SoldeCompte.css';
import { useState } from 'react';
import { FaDollarSign, FaEuroSign, FaRegCheckSquare, FaCogs, FaPlusCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from '../../AppContext';
import axios from 'axios';
import { baseUrl } from '../../bases/baseUrl';
import Compte from './Compte';

const SoldeCompte = () => {

    const [chaneCard, setChangeCard] = useState(0);
<<<<<<< HEAD
    const [dollar, setDollar] = useState(0);
    const [euro, setEuro] = useState(0);
    const [cdf, setCDF] = useState(0);
=======
    const [changeDevise, setChangeDevise] = useState(0);

>>>>>>> e6a3c04dc6b11ed358ae4147ad4cdbac72f45edc
    const [typeEpargne, setTypeEpargne] = useState(0);

    const { compteUser } = useContext(UserContext);

    const onSubmit = () => {
<<<<<<< HEAD
        const data = {}
        const devises = [];
=======
        const data = {};
>>>>>>> e6a3c04dc6b11ed358ae4147ad4cdbac72f45edc
        if (chaneCard === 0) {
            toast.error('Veuillez chosir un type de compte !');
        } else {
            if (chaneCard === 1) {
<<<<<<< HEAD
                data.type = "Courant";

                if (dollar === 1) {
                    devises.push("Dollar");
                }
                if (euro === 1) {
                    devises.push("Euro");
                }
                if (cdf === 1) {
                    devises.push("CDF");
                }
            } else if (chaneCard === 2) {
                data.type = "Epargne";
                if (typeEpargne === 1) {
                    data.nom = "Objectif";
                    if (dollar === 1) {
                        devises.push("Dollar");
                    }
                    if (euro === 1) {
                        devises.push("Euro");
                    }
                    if (cdf === 1) {
                        devises.push("CDF");
                    }
                } else if (typeEpargne === 2) {
                    data.nom = "Objectif+";
                    if (dollar === 1) {
                        devises.push("Dollar");
                    }
                    if (euro === 1) {
                        devises.push("Euro");
                    }
                    if (cdf === 1) {
                        devises.push("CDF");
                    }
                }
=======
                data.nom = 'courant';
                if (changeDevise === 1) {
                    data.devise = "Euro"
                }
                if (changeDevise === 2) {
                    data.devise = "Dollar"
                }
                if (changeDevise === 3) {
                    data.devise = "CDF"
                }
            }
            if (chaneCard === 2) {
                data.nom = "epargne"
                if (typeEpargne === 1) {
                    data.type = "Objectif";
                    if (changeDevise === 1) {
                        data.devise = "Euro"
                    }
                    if (changeDevise === 2) {
                        data.devise = "Dollar"
                    }
                    if (changeDevise === 3) {
                        data.devise = "CDF"
                    }
                } else if (typeEpargne === 2) {
                    data.type = "Objectif +";
                    if (changeDevise === 1) {
                        data.devise = "Euro";
                    }
                    if (changeDevise === 2) {
                        data.devise = "Dollar";
                    }
                    if (changeDevise === 3) {
                        data.devise = "CDF";
                    }
                }

>>>>>>> e6a3c04dc6b11ed358ae4147ad4cdbac72f45edc
            }
        }
        let btn = document.getElementById('btnValid')
        btn.innerHTML = "Validation...";

<<<<<<< HEAD
        axios.post(baseUrl + "/comptes/config", {
            compteId: compteUser && compteUser._id,
            nom: data.nom,
            devise: devises,
            type: data.type
        })
            .then(resp => {
                console.log(resp)
                toast.success('Compte configuré avec succès.');
                setTimeout(() => {
                    window.location.reload('');
                }, [5000]);
            })
            .catch(err => {
                console.log(err);
                btn.innerHTML = "Valider"
=======
        axios.post(baseUrl + "/devises", {
            nom: data.nom,
            compteId: compteUser && compteUser._id,
            type: data.type,
            intitule: data.devise,
            montant: 0
        })
            .then(resp => {
                toast.success('Compte configuré avec succès.');
                setTimeout(() => {
                    window.location.reload('');
                }, [6000]);
            })
            .catch(err => {
                console.log(err)
>>>>>>> e6a3c04dc6b11ed358ae4147ad4cdbac72f45edc
            })
    };

    return (
        <>
            <div className='mainSoldeCompte'>
                <Navbar />
                <div className='contentSoldeCompte'>
                    <Sidebar />
                    <div className='contentCompte'>
                        {
                            compteUser && compteUser.isValid === false ? (
                                <>
                                    <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                                        Configuration de votre compte <FaCogs /> </h4>
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
                                        chaneCard === 2 && (
                                            <div className='grilleEpargne'>
                                                <div className={typeEpargne === 1 ? "card actived" : "card"}>
                                                    <h4>Objectif</h4>
                                                    <p>
                                                        Voulez-vous disposer de toute liberté de votre compte épargne de manière flexible ? <br />
                                                        Opter pour Objectif, une solution d'épargne avec une horizon inférieure à 12 mois.
                                                        <div className='list'>
                                                            <div>
                                                                <FaRegCheckSquare /> <div>4 % intérêt de base</div>
                                                            </div>
                                                            <div >
                                                                <FaRegCheckSquare /> <div>2 %  prime de fidelité</div>
                                                            </div>
                                                        </div>

                                                        <button onClick={() => setTypeEpargne(1)}>Choisir</button>
                                                        <button onClick={() => setTypeEpargne(0)}>Annuler</button>
                                                    </p>
                                                </div>
                                                <div className={typeEpargne === 2 ? "card actived" : "card"}>
                                                    <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                                                        Objectif <FaPlusCircle />
                                                    </h4>
                                                    <p>
                                                        Vous envisagez de laisser votre argent sur votre compte d'épargne pendant
                                                        au moins 12 mois.
                                                        <br />
                                                        Bénéficier avec le compte Objectif
                                                        <div className='list'>
                                                            <div>
                                                                <FaRegCheckSquare /> <div>5 % intérêt de base</div>
                                                            </div>
                                                            <div >
                                                                <FaRegCheckSquare /> <div>2 %  prime de fidelité</div>
                                                            </div>
                                                        </div>
                                                        <button onClick={() => setTypeEpargne(2)}>Choisir</button>
                                                        <button onClick={() => setTypeEpargne(0)}>Annuler</button>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {

                                        chaneCard === 1 || chaneCard === 2 && typeEpargne === 1 || typeEpargne === 2 ?
                                            <div className='configSolde'>
                                                <h6>Choisir la (les) devise (s)</h6>
                                                <div className="devises">
<<<<<<< HEAD
                                                    <div className={euro === 1 ? "devise actived" : "devise"}>
                                                        <p><FaEuroSign /> </p>
                                                        <button onClick={() => { setEuro(1) }}>Choisir</button>
                                                        <button onClick={() => { setEuro(0) }}>Annuler</button>
                                                    </div>

                                                    <div className={dollar === 1 ?
                                                        "devise actived" : "devise"}
                                                    >
                                                        <p><FaDollarSign /> </p>
                                                        <button onClick={() => { setDollar(1) }}>
                                                            Choisir
                                                        </button>
                                                        <button onClick={() => { setDollar(0) }}>
=======
                                                    <div className={changeDevise === 1 ? "devise actived" : "devise"}>
                                                        <p><FaEuroSign /> </p>
                                                        <button onClick={() => { setChangeDevise(1) }}>Choisir</button>
                                                        <button onClick={() => { setChangeDevise(0) }}>Annuler</button>
                                                    </div>

                                                    <div className={changeDevise === 2 ?
                                                        "devise actived" : "devise"}
                                                    >
                                                        <p><FaDollarSign /> </p>
                                                        <button onClick={() => { setChangeDevise(2) }}>
                                                            Choisir
                                                        </button>
                                                        <button onClick={() => { setChangeDevise(0) }}>
>>>>>>> e6a3c04dc6b11ed358ae4147ad4cdbac72f45edc
                                                            Annuler
                                                        </button>
                                                    </div>

<<<<<<< HEAD
                                                    <div className={cdf === 1 ?
                                                        "devise actived" : "devise"}
                                                    >
                                                        <p>CDF</p>
                                                        <button onClick={() => { setCDF(1) }}>
                                                            Choisir
                                                        </button>
                                                        <button onClick={() => { setCDF(0) }}>
=======
                                                    <div className={changeDevise === 3 ?
                                                        "devise actived" : "devise"}
                                                    >
                                                        <p>CDF</p>
                                                        <button onClick={() => { setChangeDevise(3) }}>
                                                            Choisir
                                                        </button>
                                                        <button onClick={() => { setChangeDevise(0) }}>
>>>>>>> e6a3c04dc6b11ed358ae4147ad4cdbac72f45edc
                                                            Annuler
                                                        </button>
                                                    </div>

                                                </div>
                                            </div> : ""
                                    }

                                </>
                            ) : compteUser && compteUser.isValid === true && (
<<<<<<< HEAD
                                <Compte compteUser={compteUser} />
=======
                                <Compte />
>>>>>>> e6a3c04dc6b11ed358ae4147ad4cdbac72f45edc
                            )
                        }

                        {
                            compteUser && compteUser.isValid === false &&
<<<<<<< HEAD
                            <div className='buttonValid' style={{marginBottom:"1rem"}}>
                                <button onClick={onSubmit} type="button" id="btnValid">Valider</button>
                            </div>
                        }
=======
                            <div className='buttonValid'>
                                <button onClick={onSubmit} type="button" id="btnValid">Valider</button>
                            </div>
                        }


>>>>>>> e6a3c04dc6b11ed358ae4147ad4cdbac72f45edc
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default SoldeCompte
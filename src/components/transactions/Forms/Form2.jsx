import React, { useEffect, useState } from 'react'
import { UserContext } from '../../../AppContext';
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import axios from 'axios';
import { baseUrl } from '../../../bases/baseUrl';
import { ToastContainer, toast } from "react-toastify"

const Form2 = () => {

    const {
        activeStep, setActiveStep, setDataTransfert,
        dataTransfert, setUserDataCompte
    } = React.useContext(UserContext);

    const [compte, setCompte] = useState(0);
    const [numeroCompte, setNumeroCompte] = useState("");

    const [valueCompte, setValueCompte] = useState(null);
    const [etat, setEtat] = useState(false);
    const [montant, setMontant] = useState(0);

    const [nombreDeTransfert, setNombreDeTransfert] = useState(0);

    const handleValidNumberTransfert = () => {
        if (nombreDeTransfert !== 0) {
            
        }
    }

    const getCompteUser = () => {
        axios.post(baseUrl + "/comptes/getCompteByNum", { numCompte: numeroCompte })
            .then(resp => {
                if (resp.status === 200) {
                    setValueCompte(resp.data);
                    setEtat(true);
                    setUserDataCompte(resp.data);
                    setDataTransfert({ ...dataTransfert, 'pseudo': resp.data.user && resp.data.user.pseudo })
                } else {
                    setEtat(false);
                }
            })
            .catch(err => {
                if (err && err.response && err.response && err.response.status === 500) {
                    setEtat(false);
                }
                console.log(err)
            })
    };

    useEffect(() => {
        if (numeroCompte) {
            getCompteUser();
        };

        if (numeroCompte !== "") {
            setDataTransfert({ ...dataTransfert, 'numCompteDest': numeroCompte })
        }
    }, [numeroCompte]);

    console.log(dataTransfert)

    useEffect(() => {
        if (montant) {
            setDataTransfert({ ...dataTransfert, 'montant': parseInt(montant) })
        };
    }, [montant]);


    useEffect(() => {
        if (compte === 1) {
            setDataTransfert({ ...dataTransfert, 'compte': "Innoverce" })
        }
    }, [compte]);

    const handleNextStep = () => {
        if (
            montant && valueCompte && valueCompte.user && valueCompte.user.pseudo
            && dataTransfert && dataTransfert.motif
        ) {
            if (numeroCompte) {
                setDataTransfert({ ...dataTransfert, 'numCompteDest': numeroCompte })
                setActiveStep(activeStep + 1);
            }
        } else {
            toast.warning('Veuillez remplir tous les champs svp');
        }

    }

    return (
        <>
            <div className='form1'>
                <h4>Veuillez choisir un type de transaction et entrez toutes les données nécessaires</h4>

                <p onClick={() => setCompte(1)} className={compte === 1 ? "actived" : ""}>
                    <div className='content'>Comptes Innoverce {compte === 1 && <FaCheckCircle color='green' />}</div>
                </p>
                <p onClick={() => setCompte(2)} className={compte === 2 ? "actived" : ""}>
                    <div className='content'> Comptes d'autres banques {compte === 2 && <FaCheckCircle color='green' />}</div>
                </p>
                <p onClick={() => setCompte(3)} className={compte === 3 ? "actived" : ""}>
                    <div className='content'> Bénéficiaire enregistré {compte === 3 && <FaCheckCircle color='green' />}</div>
                </p>

                {
                    compte === 1 || compte === 2 || compte === 3 ?
                        dataTransfert && dataTransfert.typeTransfert && parseInt(dataTransfert.typeTransfert) === 1 &&
                        (
                            <>
                                <div className='formData'>
                                    <div className='contentForm'>
                                        <label>Compte</label>
                                        <input
                                            type="text"
                                            className="formText"
                                            placeholder='Numéro de compte du bénéficiaire'
                                            onChange={(e) => {
                                                setNumeroCompte(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className='contentForm'>
                                        <label>Nom</label>
                                        <input
                                            type="text"
                                            className="formText"
                                            placeholder='Nom du bénéficiaire'
                                            value={
                                                numeroCompte && etat ?
                                                    valueCompte && valueCompte.user && valueCompte.user.pseudo
                                                    : ""
                                            }
                                            disabled={true}
                                        />
                                    </div>

                                    <div className='contentForm'>
                                        <label>Banque</label>
                                        <input
                                            type="text"
                                            className="formText"
                                            placeholder='Nom de la banque'
                                            value={compte === 1 ? "Innoverce" : ""}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className='formData'>
                                    <div className='contentForm'>
                                        <label>Montant</label>
                                        <input
                                            type="number"
                                            className="formText"
                                            placeholder='Entrer un montant'
                                            onChange={(e) => setMontant(e.target.value)}
                                        />
                                    </div>

                                    <div className='contentForm'>
                                        <label>Motif</label>
                                        <input
                                            type="text"
                                            className="formText2"
                                            placeholder='Motif du transfert'
                                            onChange={(e) => {
                                                setDataTransfert({ ...dataTransfert, "motif": e.target.value })
                                            }}
                                        />
                                    </div>
                                </div>
                            </>
                        )

                        : ''
                }

                {
                    compte === 1 || compte === 2 || compte === 3 ?
                        dataTransfert && dataTransfert.typeTransfert && parseInt(dataTransfert.typeTransfert) === 2 && (
                            <div className='multiTransfert'>
                                <div className='search'>
                                    <input
                                        type="number"
                                        placeholder='Entrer le nombre de personnes'
                                        onChange={(e) => setNombreDeTransfert(e.target.value)}
                                    />
                                    <button onClick={handleValidNumberTransfert}>Valider</button>
                                </div>
                            </div>
                        ) : ""
                }

                <div className='btns'>
                    <button
                        style={{ display: "flex", alignItems: "center", gap: ".4rem" }}
                        onClick={() => setActiveStep(activeStep - 1)}
                    >
                        <FaChevronLeft />
                        Retour
                    </button>
                    <button
                        style={{ display: "flex", alignItems: "center", gap: ".4rem" }}
                        onClick={handleNextStep}
                    >
                        Suivant
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Form2
import React, { useState } from 'react'
import { UserContext } from '../../../AppContext';
import { FaCheckCircle } from "react-icons/fa"

const Form2 = () => {

    const { activeStep, setActiveStep, deviseCompte, compteUser } = React.useContext(UserContext);

    const [compte, setCompte] = useState(0);

    return (
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
                    (
                        <>
                            <div className='formData'>
                                <div className='contentForm'>
                                    <label>Compte</label>
                                    <input
                                        type="text"
                                        className="formText"
                                        placeholder='Numéro de compte du bénéficiaire'
                                    />
                                </div>

                                <div className='contentForm'>
                                    <label>Nom</label>
                                    <input
                                        type="text"
                                        className="formText"
                                        placeholder='Nom du bénéficiaire'
                                    />
                                </div>

                                <div className='contentForm'>
                                    <label>Banque</label>
                                    <input
                                        type="text"
                                        className="formText"
                                        placeholder='Nom de la banque'
                                    />
                                </div>
                            </div>

                            <div className='formData'>
                                <div className='contentForm'>
                                    <label>Montant</label>
                                    <input
                                        type="text"
                                        className="formText"
                                        placeholder='Entrer un montant'
                                    />
                                </div>

                                <div className='contentForm'>
                                    <label>Motif</label>
                                    <input
                                        type="text"
                                        className="formText2"
                                        placeholder='Motif du transfert'
                                    />
                                </div>
                            </div>
                        </>
                    )

                    : ''
            }
            <div className='btns'>
                <button onClick={() => setActiveStep(activeStep - 1)}>Retour</button>
                <button onClick={() => setActiveStep(activeStep + 1)}>Suivant</button>
            </div>
        </div>
    )
}

export default Form2
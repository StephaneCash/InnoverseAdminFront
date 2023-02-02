import React from 'react'
import { UserContext } from '../../../AppContext';
import { FaDollarSign, FaEuroSign, FaChevronLeft } from "react-icons/fa"
import "./Form.css";

const Form1 = () => {
    const { setActiveStep, deviseCompte, compteUser, activeStep } = React.useContext(UserContext);

    return (
        <div className='form1'>
            <h4 style={{ textAlign: "center" }}>Veuillez choisir le compte</h4>

            <p onClick={() => setActiveStep(activeStep + 1)} >
                <span>Votre compte : {compteUser && compteUser.numero}</span>
                <span style={{ display: "flex", alignItems: "center" }}>
                    Solde : 
                    {
                        deviseCompte && deviseCompte[0].intitule === "Dollar" ? <FaDollarSign /> :
                            deviseCompte && deviseCompte[0].intitule === "Euro" ? <FaEuroSign /> :
                                deviseCompte && deviseCompte[0].intitule === "CDF" && "CDF"
                    }
                    {
                        deviseCompte && deviseCompte[0].nom === "epargne" ?
                            deviseCompte && deviseCompte[0].typeCompteEpargnes && deviseCompte[0].typeCompteEpargnes[0].montant
                            : deviseCompte && deviseCompte[0].montant
                    }
                </span>
            </p>

            <button
                onClick={() => { setActiveStep(activeStep - 1) }}
                style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
            >
                <FaChevronLeft /> Retour
            </button>
        </div>
    )
}

export default Form1
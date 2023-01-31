import React, { useState } from 'react'
import { UserContext } from '../../../AppContext';

const Form2 = () => {

    const { activeStep, setActiveStep, deviseCompte, compteUser } = React.useContext(UserContext);

    const [compte, setCompte] = useState(0);

    return (
        <div className='form1'>
            <h4>Veuillez choisir un type de transaction et entrez toutes les données nécessaires</h4>

            <p onClick={() => setCompte(1)}>
                Comptes Innoverce
            </p>
            <p onClick={() => setCompte(2)}>
                Compte d'autres banques
            </p>
            <p onClick={() => setCompte(3)}>
                Bénéficiaire enregistré
            </p>

            <div className='btns'>
                <button>Retour</button>
                <button>Suivant</button>
            </div>
        </div>
    )
}

export default Form2
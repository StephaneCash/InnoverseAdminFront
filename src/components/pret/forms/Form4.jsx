import React from "react";
import { UserContext } from "../../../AppContext";

const Form4 = () => {

    const { stepCurrent, setstepCurrent } = React.useContext(UserContext);

    return (
        <div className="form4">
            <div className="bloc1">
                <input type="text" placeholder="Entrer le montant que vous souhaitez prêter" />
                <select>
                    <option>--Choisir une durrée de rembourssement--</option>
                    <option>5 mois</option>
                    <option>12 mois</option>
                    <option>2 ans</option>
                    <option>3 ans</option>
                    <option>5 ans</option>
                    <option>10 ans</option>
                </select>
            </div>

            <div className='groupButtons'>
                <button onClick={() => setstepCurrent(stepCurrent - 1)}>Retour</button>
                <button onClick={() => setstepCurrent(stepCurrent + 1)}>Suivant</button>
            </div>
        </div>
    )
}

export default Form4;
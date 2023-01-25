import React, { useState } from 'react';

const InfosProfil = () => {

    const [prenom, setPrenom] = useState('');
    const [nomFamille, setNomFamille] = useState('');
    const [email, setEmail] = useState('');
    const [numTel, setNumTel] = useState('');
    const [ville, setVille] = useState('');
    const [adresse, setAdresse] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [dateAniv, setDateAniv] = useState("");
    const [sexe, setSexe] = useState('');

    return (
        <div className='form'>
            <h4>Informations générales du Compte</h4>
            <div className='contentForm'>
                <label>Prénom</label>
                <input type="text" className="Prénom" placeholder='Prénom' value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            </div>
            <div className='contentForm'>
                <label>Nom de famille</label>
                <input type="text" placeholder="Nom de famille" />
            </div>
            <div className='contentForm'>
                <label>Adresse Email</label>
                <input type="text" className="Prénom" placeholder='Votre adresse email' />
            </div>
            <div className='contentForm'>
                <label>Numéro de Téléphone</label>
                <input type="text" className="Prénom" placeholder='Votre numéro de téléphone' />
            </div>
            <div className='contentForm'>
                <label>Pays</label>
                <input type="text" className="Prénom" placeholder='Votre pays' value={"RDC"} />
            </div>
            <div className='contentForm'>
                <label>Cité/Ville</label>
                <input type="text" className="Prénom" placeholder='Votre cité / ville' />
            </div>
            <div className='contentForm'>
                <label>Adresse Complète</label>
                <textarea type="text" className="Prénom" placeholder='Votre adresse complète' rows="4" />
            </div>
            <div className='contentForm'>
                <label>Code Postal/Zip Code</label>
                <input type="text" className="Prénom" placeholder='Code postal de votre pays' />
            </div>
            <div className='contentForm'>
                <label>Anniversaire</label>
                <input type="date" className="Prénom" />
            </div>
            <div className='contentForm'>
                <label>Genre (Sexe)</label>
                <select>
                    <option value="" key="">--Votre sexe--</option>
                    <option value="M">Homme</option>
                    <option value="F">Femme</option>
                </select>
            </div>
            <hr />
            <div className='button'>
                <button>Mettre à jour</button>
            </div>
        </div>
    )
}

export default InfosProfil
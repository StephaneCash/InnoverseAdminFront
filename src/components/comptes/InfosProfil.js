import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { addInfosSupplementairesUser } from "../../api/InfosUserAPI"
import { UserContext } from "../../AppContext";
import { ToastContainer } from 'react-toastify';


const InfosProfil = () => {

    const { userData, infosUser } = useContext(UserContext);

    const [prenom, setPrenom] = useState('');
    const [nomFamille, setNomFamille] = useState('');
    const [numTel, setNumTel] = useState('');
    const [ville, setVille] = useState('');
    const [adresse, setAdresse] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [dateAniv, setDateAniv] = useState("");
    const [sexe, setSexe] = useState('');

    const handleSaveInfosSupplementairesUser = () => {
        let dataUser = {};
        dataUser.prenom = prenom;
        dataUser.nomFamille = nomFamille;
        dataUser.numTel = numTel;
        dataUser.ville = ville;
        dataUser.adresse = adresse;
        dataUser.codePostal = codePostal;
        dataUser.dateAniv = dateAniv;
        dataUser.sexe = sexe;
        dataUser.userId = userData._id;
        dataUser.id = infosUser && infosUser[0] && infosUser[0]._id

        addInfosSupplementairesUser(dataUser);
    };

    useEffect(() => {
        if (infosUser && infosUser[0]) {
            setPrenom(infosUser && infosUser[0] && infosUser[0].prenom);
            setNomFamille(infosUser && infosUser[0] && infosUser[0].nomFamille);
            setNumTel(infosUser && infosUser[0] && infosUser[0].numTel);
            setVille(infosUser && infosUser[0] && infosUser[0].ville);
            setAdresse(infosUser && infosUser[0] && infosUser[0].adresse);
            setCodePostal(infosUser && infosUser[0] && infosUser[0].codePostal);
            setDateAniv(infosUser && infosUser[0] && infosUser[0].dateAniv);
            setSexe(infosUser && infosUser[0] && infosUser[0].sexe);
        }
    }, [infosUser]);

    return (
        <>
            <div className='form'>
                <h4>Informations générales du Compte</h4>
                <div className='contentForm'>
                    <label>Prénom</label>
                    <input type="text" className="Prénom"
                        placeholder='Prénom' value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                </div>
                <div className='contentForm'>
                    <label>Nom de famille</label>
                    <input
                        type="text" placeholder="Nom de famille"
                        value={nomFamille}
                        onChange={(e) => setNomFamille(e.target.value)}
                    />
                </div>
                <div className='contentForm'>
                    <label>Numéro de Téléphone</label>
                    <input
                        type="text"
                        className="Prénom"
                        placeholder='Votre numéro de téléphone'
                        value={numTel} onChange={(e) => setNumTel(e.target.value)}
                    />
                </div>
                <div className='contentForm'>
                    <label>Pays</label>
                    <input
                        type="text"
                        className="Prénom"
                        placeholder='Votre pays'
                        defaultValue="RDC"
                    />
                </div>
                <div className='contentForm'>
                    <label>Cité/Ville</label>
                    <input
                        type="text"
                        className="Prénom"
                        placeholder='Votre cité / ville'
                        value={ville} onChange={(e) => setVille(e.target.value)}
                    />
                </div>
                <div className='contentForm'>
                    <label>Adresse Complète</label>
                    <textarea
                        type="text"
                        className="Prénom"
                        placeholder='Votre adresse complète'
                        rows="4"
                        value={adresse} onChange={(e) => setAdresse(e.target.value)}
                    />
                </div>
                <div className='contentForm'>
                    <label>Code Postal/Zip Code</label>
                    <input
                        type="text"
                        className="Prénom"
                        placeholder='Code postal de votre pays'
                        value={codePostal} onChange={(e) => setCodePostal(e.target.value)}
                    />
                </div>
                <div className='contentForm'>
                    <label>Anniversaire</label>
                    <input type="date" className="Prénom"
                        value={dateAniv} onChange={(e) => setDateAniv(e.target.value)}
                    />
                </div>
                <div className='contentForm'>
                    <label>Genre (Sexe)</label>
                    <select onChange={(e) => setSexe(e.target.value)}>
                        <option value="" key="">--Votre sexe--</option>
                        <option
                            value={"M"}
                        >
                            Homme
                        </option>
                        <option
                            value={"F"}
                        >
                            Femme
                        </option>
                    </select>
                </div>
                <hr />
                <div className='button'>
                    <button
                        onClick={handleSaveInfosSupplementairesUser}
                        disabled={prenom && sexe && dateAniv && codePostal && adresse && ville && numTel && nomFamille ? false : true}
                    >
                        Mettre à jour
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default InfosProfil
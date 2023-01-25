import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaUserShield, FaGoogle, FaSms, FaMailBulk } from "react-icons/fa";
import { timestampParser } from "../../Utils"
import avatar from "../../images/avatar.png";

const MainCompte = () => {

    const userReducer = useSelector(state => state.userReducer);
    const compteUser = useSelector(state => state.compteUserReducer);
    const [detailClic, setDetailClic] = useState(1);

    const [cardPassword, setCardPassword] = useState(1);

    return (
        <div className='mainCompte'>
            <div className='toolbar'>
                <div className='icon'><FaUserShield size={30} /></div>
                <div className='textCompteIdAndDate'>
                    <span>Votre numéro de compte : {compteUser && compteUser.numero}</span>
                    <span>Utilisateur depuis {timestampParser(compteUser && compteUser.createdAt)}</span>
                </div>
            </div>

            <div className='profilInfo'>
                <div className='photo'>
                    <img src={avatar} alt="User" />
                    <div className='userName'>
                        <span>{userReducer && userReducer.pseudo}</span>
                        <span>Cliquez sur l'image pour changer la photo de profil. Taille Max: 2MB</span>
                    </div>
                </div>
            </div>

            <div className='formProfil'>
                <div className='detailUser'>
                    <h4 className={detailClic === 1 ? "activePDetail" : ""} onClick={() => setDetailClic(1)}>Profil</h4>
                    <h4 className={detailClic === 2 ? "activePDetail" : ""} onClick={() => setDetailClic(2)}>Mode de paiement</h4>
                    <h4 className={detailClic === 3 ? "activePDetail" : ""} onClick={() => setDetailClic(3)}>Sécurité</h4>
                </div>
                {
                    detailClic === 1 ?
                        <div className='form'>
                            <h4>Informations générales du Compte</h4>
                            <div className='contentForm'> <label>Prénom</label> <input type="text" className="Prénom" placeholder='Prénom' /></div>
                            <div className='contentForm'> <label>Nom de famille</label> <input type="text" placeholder="Nom de famille" /></div>
                            <div className='contentForm'> <label>Adresse Email</label> <input type="text" className="Prénom" /></div>
                            <div className='contentForm'> <label>Numéro de Téléphone</label> <input type="text" className="Prénom" /></div>
                            <div className='contentForm'> <label>Pays</label> <input type="text" className="Prénom" /></div>
                            <div className='contentForm'> <label>Cité/Ville</label> <input type="text" className="Prénom" /></div>
                            <div className='contentForm'> <label>Adresse Complète</label> <input type="text" className="Prénom" /></div>
                            <div className='contentForm'> <label>Code Postal/Zip Code</label> <input type="text" className="Prénom" /></div>
                            <div className='contentForm'> <label>Anniversaire</label> <input type="date" className="Prénom" /></div>
                            <div className='contentForm'> <label>Genre (Sexe)</label> <input type="text" className="Prénom" /></div>
                            <hr />
                            <div className='button'>
                                <button>Mettre à jour</button>
                            </div>
                        </div>
                        :
                        detailClic === 2 ?
                            <div className='formPaiement'>
                                <h4>Paramètre de Paiement</h4>
                                <div className='contentForm'> <label>Prénom</label> <input type="text" className="Prénom" placeholder='Prénom' /></div>
                                <div className='contentForm'> <label>Nom de famille</label> <input type="text" placeholder="Nom de famille" /></div>
                                <div className='contentForm'> <label>Adresse Email</label> <input type="text" className="Prénom" /></div>
                                <div className='contentForm'> <label>Numéro de Téléphone</label> <input type="text" className="Prénom" /></div>
                                <div className='contentForm'> <label>Pays</label> <input type="text" className="Prénom" /></div>
                                <div className='contentForm'> <label>Cité/Ville</label> <input type="text" className="Prénom" /></div>
                                <div className='contentForm'> <label>Adresse Complète</label> <input type="text" className="Prénom" /></div>
                                <div className='contentForm'> <label>Code Postal/Zip Code</label> <input type="text" className="Prénom" /></div>
                                <div className='contentForm'> <label>Anniversaire</label> <input type="date" className="Prénom" /></div>
                                <div className='contentForm'> <label>Genre (Sexe)</label> <input type="text" className="Prénom" /></div>
                                <hr />
                                <div className='button'>
                                    <button>Mettre à jour</button>
                                </div>
                            </div>
                            : detailClic === 3 ?
                                <div className='formSecurite'>
                                    <div className='col1'>
                                        <h4>Modifier le Mot de Passe</h4>
                                        <input
                                            type="password"
                                            className="Prénom"
                                            placeholder='Ancien mot de passe'
                                        />
                                        <input
                                            type="password"
                                            className="Prénom"
                                            placeholder='Ancien mot de passe'
                                        />
                                        <input
                                            type="password"
                                            className="Prénom"
                                            placeholder='Ancien mot de passe'
                                        />
                                        <div className='button'>
                                            <button>Modifier le mot de passe</button>
                                        </div>
                                    </div>
                                    <div className='col2'>
                                        <h4>Modifier le Code Pin</h4>
                                        <input
                                            type="password"
                                            className="Prénom"
                                            placeholder='Ancien mot de passe'
                                        />
                                        <input
                                            type="password"
                                            className="Prénom"
                                            placeholder='Ancien mot de passe'
                                        />
                                        <input
                                            type="password"
                                            className="Prénom"
                                            placeholder='Ancien mot de passe'
                                        />
                                        <div className='button'>
                                            <button>Mettre à jour</button>
                                        </div>
                                    </div>
                                </div>
                                : ""
                }
                {
                    detailClic === 3 &&
                    <div className='auth'>
                        <h4>Authentification à double Facteurs (2FA Auth)</h4>
                        <div className='grille'>
                            <div className={cardPassword === 1 ? "card activeCard" : "card"} onClick={() => setCardPassword(1)}>
                                <h5>Aucun</h5>
                                <div className="card-body">
                                    Accédez directement dans votre compte après une
                                    connexion réussie (Niveau de sécurité bas)
                                </div>
                            </div>
                            <div className={cardPassword === 2 ? "card activeCard" : "card"} onClick={() => setCardPassword(2)}>
                                <h5><FaGoogle /></h5>
                                <div className="card-body">
                                    Utilisez l'application GOOGLE AUTHENTICATOR comme couche supplémentaire de sécurité.
                                </div>
                            </div>
                            <div className={cardPassword === 3 ? "card activeCard" : "card"} onClick={() => setCardPassword(3)}>
                                <h5><FaSms /></h5>
                                <div className="card-body">
                                    Recevoir un code par SMS pour accéder dans votre compte après la connexion.
                                </div>
                            </div>
                            <div className={cardPassword === 4 ? "card activeCard" : "card"} onClick={() => setCardPassword(4)}>
                                <h5><FaMailBulk /></h5>
                                <div className="card-body">
                                    Recevoir un code par Mail pour accéder dans votre compte après la connexion.
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default MainCompte
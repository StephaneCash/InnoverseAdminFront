import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaUserShield, FaGoogle, FaSms, FaMailBulk } from "react-icons/fa";
import { timestampParser } from "../../Utils"
import avatar from "../../images/avatar.png";
import { uploadPicture } from '../../actions/user.actions';
import InfosProfil from './InfosProfil';
import InfosPaiement from './InfosPaiement';
import InfosPassWord from './InfosPassWord';

const MainCompte = () => {

    const userReducer = useSelector(state => state.userReducer);
    const compteUser = useSelector(state => state.compteUserReducer);
    const [detailClic, setDetailClic] = useState(1);
    const picUser = useSelector(state => state.pictureUser);

    const [cardPassword, setCardPassword] = useState(1);

    const [file, setFile] = useState('');

    const dispatch = useDispatch();

    const handleUploadPhotoUser = () => {
        const dataUser = new FormData();
        dataUser.append('userId', userReducer._id);
        dataUser.append('image', file);

        if (!file) {
            alert('Veuillez chosir une photo svp !');
        } else {
            dispatch(uploadPicture(dataUser));
        }
    };

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
                    <div className="personal-image">
                        <label className="label">
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                            <figure className="personal-figure">
                                <img src={picUser ? "/" + picUser.url : avatar} className="personal-avatar" alt="avatar" />
                                <figcaption className="personal-figcaption">
                                    <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt="avatar" />
                                </figcaption>
                            </figure>
                        </label>
                    </div>
                    <div className='userName'>
                        <span>{userReducer && userReducer.pseudo}</span>
                        <span>Cliquez sur l'image pour changer la photo de profil. Taille Max: 2MB</span>
                        <button className='btnChangeImage' onClick={handleUploadPhotoUser}>Modifier la photo de profil</button>
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
                        <InfosProfil /> :
                        detailClic === 2 ?
                            <InfosPaiement />
                            : detailClic === 3 ?
                                <InfosPassWord />
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
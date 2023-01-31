import React, { useContext } from 'react';
import { UserContext } from "../../AppContext";
import "./TypeCompte.css";
import { FaChartLine, FaHistory, FaDollarSign, FaEuroSign, FaUserCog } from "react-icons/fa"
import BasicTable from './Table';

const Compte = () => {

    const { compteUser, userData, deviseCompte } = useContext(UserContext);

    return (
        <div className='compteTypeDevise'>
            <div className='name'>Salut {userData && userData.pseudo}</div>

            <div className='alert'>
                Numéro de compte : {compteUser && compteUser.numero}
            </div>

            <div className='typeCompte'>
                <div className='card'>
                    <FaUserCog size={30} />
                    <h4>Compte : {deviseCompte && deviseCompte[0].nom}</h4>
                    <h4>
                        Type compte :
                        {
                            deviseCompte && deviseCompte[0].nom === "epargne" ?
                                deviseCompte && deviseCompte[0].typeCompteEpargnes && deviseCompte[0].typeCompteEpargnes[0].nom
                                : deviseCompte && deviseCompte[0].nom === "courant" &&
                                ""
                        }
                    </h4>
                    <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        Devise : {
                            deviseCompte && deviseCompte[0].intitule === "Dollar" ? <FaDollarSign /> :
                                deviseCompte && deviseCompte[0].intitule === "Euro" ? <FaEuroSign /> :
                                    deviseCompte && deviseCompte[0].intitule === "CDF" && "CDF"
                        }
                    </h4>
                </div>

                <div className='card'>
                    <FaChartLine size={30} />
                    <h4 style={{ color: "silver" }}>Solde</h4>
                    <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {
                            deviseCompte && deviseCompte[0].intitule === "Dollar" ? <FaDollarSign /> :
                                deviseCompte && deviseCompte[0].intitule === "Euro" ? <FaEuroSign /> :
                                    deviseCompte && deviseCompte[0].intitule === "CDF" && "CDF"
                        }
                        {deviseCompte && deviseCompte[0].typeCompteEpargnes && deviseCompte[0].typeCompteEpargnes[0].montant}
                    </h4>
                </div>

            </div>

            <div className='historique'>
                <BasicTable FaHistory={FaHistory} />
            </div>
        </div>
    )
}

export default Compte
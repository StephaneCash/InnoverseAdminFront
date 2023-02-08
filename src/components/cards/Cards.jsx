import React, { useContext } from 'react'
import "./Card.css";
import { CardsData } from "../../data/Data"
import Card from "../card/Card";
import { UserContext } from '../../AppContext';

const Cards = (props) => {

    const { deviseCompte } = useContext(UserContext);

    const transactions = props.transactions;

    return (
        <div className='cards'>
            {
                CardsData && CardsData.map((card, i) => {
                    return (
                        <div className='parentContainer'>
                            <Card
                                title={card.title}
                                color={card.color}
                                barValue={card.barValue}
                                value=
                                {
                                    card.title === "Solde" ?
                                        deviseCompte && deviseCompte[0] && deviseCompte[0].nom === "epargne" ?
                                            deviseCompte && deviseCompte[0].typeCompteEpargnes && deviseCompte[0].typeCompteEpargnes[0] && deviseCompte[0].typeCompteEpargnes[0].montant
                                            : deviseCompte && deviseCompte[0] && deviseCompte[0].montant
                                        : card.title === "Transactions" ? transactions && transactions.taille && transactions.taille
                                            : card.title === "Cartes" && <span style={{ fontSize: "12px" }}>Aucune carte disponible</span>
                                }
                                png={card.png}
                                series={card.series}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards
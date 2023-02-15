import React, { useContext } from 'react'
import "./Card.css";
import { CardsData } from "../../data/Data"
import Card from "../card/Card";
import { UserContext } from '../../AppContext';

const Cards = (props) => {

    const { compteUser } = useContext(UserContext);

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
                                        compteUser && compteUser.devises && compteUser.devises.map((value, i) => {
                                            if (value.devise === "Dollar") {
                                                return value.montant
                                            }
                                        })
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
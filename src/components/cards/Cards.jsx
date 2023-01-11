import React from 'react'
import "./Card.css";
import { CardsData } from "../../data/Data"
import Card from "../card/Card"

const Cards = () => {
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
                                value={card.value}
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
import React, { useEffect, useState } from 'react'
import {
    CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import Chart from 'react-apexcharts';
import { baseUrl } from '../../bases/baseUrl';
import axios from 'axios';
import { timestampParser } from '../../Utils';
import "./Card.css"
import { useRef } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../AppContext';


function Card() {

    const { compteUser } = useContext(UserContext);

    const [progress, setProgress] = useState(0);
    let interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(() => {
            setProgress((old) => old + 50);
        }, 1000);
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    useEffect(() => {
        if (progress < 100) return;
        clearInterval(interval.current);
    }, [progress]);

    const [transactions, setTransactions] = useState([]);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (compteUser) {
            setUserId(compteUser && compteUser.userId)
        }
    }, [compteUser]);

    const getAllTransactions = () => {
        axios.get(`${baseUrl}/transactions/getByUserId/${userId}`)
            .then(res => {
                setTransactions(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    useEffect(() => {
        if (userId) {
            getAllTransactions();
        }
    }, [userId]);


    const state = {
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: transactions && transactions.data && transactions.data.map(value => {
                    return timestampParser(value.createdAt).substring(0, 19)
                })
            }
        },
        series: [{
            name: 'series-1',
            data: transactions && transactions.data && transactions.data.map(value => {
                return value.montant
            })
        }]
    }

    return (
        <div className='cards'>

            <div className='card' style={{ width: 320, padding: "0 3rem" }}>
                <div>Solde</div>
                <div className='cardChilds'>
                    {
                        compteUser && compteUser.devises.map((devise, i) => {
                            return (
                                <div className='cardMin' key={devise._id}>
                                    {
                                        devise.devise === "Dollar" ?
                                            "$ " : devise.devise === "Euro" ?
                                                "€ " : devise.devise === "CDF" ? "CDF " : ""
                                    }
                                    <span>{devise.montant}</span>

                                </div>
                            )
                        })
                    }
                </div>

                <div className='circular'>
                    <div className='cardLastChild'>
                        <span style={{ margin: "1rem" }}>Transferts gratuits </span>
                    </div>
                    <CircularProgressbarWithChildren value={66}>
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong>66%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>

            <div className='card'>
                <span>Vos activités</span>
                <Chart options={state.options} series={state.series} type="line" width={400} height={320} />
            </div>
        </div >
    )
}


export default Card
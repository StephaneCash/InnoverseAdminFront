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
import { FaCcMastercard, FaCcVisa, FaList } from 'react-icons/fa';


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
        series:[
            {
                name:"Activités transactionnelles",
                data: transactions && transactions.data && transactions.data.map(value => {
                    return value.montant
                })
            }
        ],
        options: {
            chart: {
                type: "area",
                height: "auto"
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 3,
                blur: 3,
                color: "red",
                opacity: 0.35
            },
            fill: {
                color: ['#fff'],
                type: "gradient"
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["silver"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            },
            grid: {
                show: true
            },
            xaxis: {
                categories: transactions && transactions.data && transactions.data.map(value => {
                    return timestampParser(value.createdAt).substring(0, 19)
                })
            }
        }
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
                    <div className='cardCircular'>
                        <div className='cardLastChild'>
                            <span style={{ margin: "1rem" }}> <FaList size={33} /> Transferts gratuits </span>
                        </div>
                        <CircularProgressbarWithChildren value={66}>
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                                <strong>66%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div className='cardCircular'>
                        <div className='cardLastChild'>
                            <span style={{ margin: "1rem" }}> <FaCcVisa size={50} /> (Usage)</span>
                        </div>
                        <CircularProgressbarWithChildren value={100}>
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                                <strong>100%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div className='cardCircular'>
                        <div className='cardLastChild'>
                            <span style={{ margin: "1rem" }}> <FaCcMastercard size={50} /> (Usage)</span>
                        </div>
                        <CircularProgressbarWithChildren value={100}>
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                                <strong>100%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
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
import React, { useEffect, useState } from 'react'
import {
    CircularProgressbar,
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
import ReactApexChart from 'react-apexcharts';


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

    const state = {
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
    }

    return (
        <div className='cards'>

            <div className='card' style={{ width: 320 }}>
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
                        <span style={{margin:"1rem"}}>Transferts gratuits </span>
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
                <Chart options={state.options} series={state.series} type="bar" width={500} height={320} />
            </div>
        </div >
    )
}


export default Card
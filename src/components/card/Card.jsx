import React, { useEffect, useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { UilTimes } from "@iconscout/react-unicons"
import Chart from 'react-apexcharts';
import { baseUrl } from '../../bases/baseUrl';
import axios from 'axios';
import { timestampParser } from '../../Utils';

const Card = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            {
                expanded ? (
                    <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
                ) :
                    <CompactCard param={props} setExpanded={() => setExpanded(true)} />
            }
        </AnimateSharedLayout>
    )
}

function CompactCard({ param, setExpanded }) {

    const Png = param.png;

    return (
        <motion.div className='compactCard'
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            onClick={setExpanded}
            layoutId="expandableCard"
        >
            <div className='radialBar'>
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}`}
                />
                <span>{param.title}</span>
            </div>
            <div className='detail'>
                <Png />
                <span>
                    {param.title === "Solde" ? "$" + param.value : param.value}
                </span>
                <span>24 heures Passées</span>
            </div>
        </motion.div>
    )
}

// Expandend Card 

function ExpandedCard({ param, setExpanded }) {

    const [transactions, setTransactions] = useState([]);

    const getAllTransactions = () => {
        axios.get(baseUrl + "/transactions")
            .then(res => {
                setTransactions(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    useEffect(() => {
        getAllTransactions();
    }, []);

    const data = {
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
                categories: transactions && transactions.data && transactions.data.map(res => {
                    return timestampParser(res.createdAt)
                })
            }
        }
    }

    console.log(transactions)

    return (
        <motion.div className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            layoutId="expandableCard"
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "silver" }}>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className='chartContainer'>
                <Chart series={
                    param.title === "Transactions" ?
                        transactions && transactions.taille > 0 && transactions.data.map((res, i) => {
                            return i + 1
                        })
                        : param.series
                } type="area" options={data.options} />
            </div>
            <span>Last 24 heures</span>
        </motion.div>
    )
}

export default Card
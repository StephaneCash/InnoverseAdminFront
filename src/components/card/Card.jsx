import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { UilTimes } from "@iconscout/react-unicons"
import Chart from 'react-apexcharts';
import { UserContext } from '../../AppContext';

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

//CompactCard

function CompactCard({ param, setExpanded }) {

    const Png = param.png;

    const { deviseCompte,
        dataTransfert } = React.useContext(UserContext);
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
                   $
                    {param.value}</span>
                <span>Last 24 heures</span>
            </div>
        </motion.div>
    )
}

// Expandend Card 

function ExpandedCard({ param, setExpanded }) {

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
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        }
    }

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
                <Chart series={param.series} type="area" options={data.options} />
            </div>
            <span>Last 24 heures</span>
        </motion.div>
    )
}

export default Card
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
import { timestampParser } from '../../Utils';
import { FaDollarSign, FaEuroSign } from 'react-icons/fa';

export default function BasicTable(props) {

    const data = props.data;

    const compteUser = props.compteUser;

    const [userId, setUserId] = React.useState('');

    React.useEffect(() => {
        setUserId(compteUser && compteUser.userId)
    }, [compteUser]);

    return (
        <div className='table'>
            <h3>Dernières transactions</h3>
            <TableContainer component={Paper}
                style={{ backgroundColor: "#13203b", color: "white" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{ color: "silver" }}>N°</TableCell>
                            <TableCell style={{ color: "silver" }}>Motif</TableCell>
                            <TableCell align="left" style={{ color: "silver" }}>Montant</TableCell>
                            <TableCell align="left" style={{ color: "silver" }}>Client</TableCell>
                            <TableCell align="left" style={{ color: "silver" }}>Date</TableCell>
                            <TableCell align="left" style={{ color: "silver" }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data && data.data ? data.data.map((row, i) => {
                                if (row.userId === userId) {
                                    return (
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left" style={{ color: "silver" }}>{i + 1} </TableCell>
                                            <TableCell align="left" style={{ color: "silver" }}>{row.motif} </TableCell>
                                            <TableCell align="left" style={{ color: "silver", display: "flex", alignItems: "center", gap: ".3rem" }}>
                                                {row.deviseId === "Dollar" ? <FaDollarSign /> :
                                                    row.deviseId === "Euro" ? <FaEuroSign /> : row.deviseId === "CDF" ? "CDF" : ""}
                                                {row.montant}
                                            </TableCell>
                                            <TableCell align="left" style={{ color: "silver" }}>{row.nomClient}</TableCell>
                                            <TableCell align="left" style={{ color: "silver" }}>
                                                {timestampParser(row.createdAt)}
                                            </TableCell>
                                            <TableCell align="left" style={{ color: "silver" }}>{row.status === true ?
                                                <i style={{ background: "silver", color: "green", borderRadius: "10px", padding: "5px" }}>
                                                    Réussie</i> : "Echec"}
                                            </TableCell>
                                        </TableRow>
                                    )
                                }
                            }
                            ) :

                                <TableCell align="left" style={{ color: "silver", textAlign: "center" }} colSpan="5px">
                                    <i className='fa fa-spinner fa-pulse fa-2x'></i> Chargement...
                                </TableCell>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

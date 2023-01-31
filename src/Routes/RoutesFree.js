import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from '../components/Dashbord/Main';
import SignIn from "../components/Auth/SignIn"
import SignUp from "../components/Auth/SignUp"
import Compte from '../components/comptes/Compte';
import SoldeCompte from '../components/soldeCompte/SoldeCompte';

import RoutesPrivate from './RoutesPrivate';
import Parametres from '../components/config/Parametres';
import Transactions from '../components/transactions/Transactions';
import CreateTransaction from '../components/transactions/CreateTransaction';

const RoutesFree = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/inscription' element={<SignUp />} />

                <Route element={<RoutesPrivate />}>
                    <Route path='/dashboard' element={<Main />} />
                    <Route path='/compte/config/profil' element={<Compte />} />
                    <Route path='/compte/config/compte-user' element={<SoldeCompte />} />
                    <Route path='/compte/config' element={<Parametres />} />
                    <Route path='/compte/transactions' element={<Transactions />} />
                    <Route path='/compte/transactions/transfert-argent' element={<CreateTransaction />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesFree
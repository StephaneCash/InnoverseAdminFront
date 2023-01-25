import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from '../components/Dashbord/Main';
import SignIn from "../components/Auth/SignIn"
import SignUp from "../components/Auth/SignUp"
import Compte from '../components/comptes/Compte';
import SoldeCompte from '../components/soldeCompte/SoldeCompte';

const RoutesFree = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/inscription' element={<SignUp />} />
                <Route path='/dashboard' element={<Main />} />
                <Route path='/user/profil' element={<Compte />} />
                <Route path='/user/compte' element={<SoldeCompte />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesFree
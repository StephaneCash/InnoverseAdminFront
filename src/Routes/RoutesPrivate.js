import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from "../AppContext";

const RoutesPrivate = () => {

    const coockie = window.coockie;

    console.log(coockie)

    return (
       coockie !== null ? <Outlet /> : <Navigate to="/" />
    )
}

export default RoutesPrivate
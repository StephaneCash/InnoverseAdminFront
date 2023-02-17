import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from "../AppContext";

const RoutesPrivate = () => {

    const { uid } = useContext(UserContext)

    return (
        uid !== "" ? <Outlet /> : <Navigate to="/" />
    )
}

export default RoutesPrivate
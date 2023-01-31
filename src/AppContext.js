import axios from 'axios';
import React, { useEffect, useState } from 'react'
import App from './App';
import { baseUrl } from './bases/baseUrl';

export const UserContext = React.createContext();

const AppContext = () => {

    const [uid, setUid] = useState(null);
    const [compteUser, setCompteUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [photoUser, setPhotoUser] = useState(null);
    const [infosUser, setInfosUser] = useState(null);
    const [InfosPaiement, setOnfosPaiement] = useState(null);
    const [deviseCompte, setDeviseCompte] = useState(null);

    const verifUserConnected = async () => {
        await axios.get(`${baseUrl}/jwtid`, { withCredentials: true })
            .then(resp => {
                setUid(resp.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    const getUser = () => {
        axios.get(baseUrl + "/users/" + uid)
            .then(res => {
                setUserData(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getCompteUser = () => {
        axios.post(baseUrl + "/comptes/getCompteById/", { userId: uid })
            .then(res => {
                setCompteUser(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    };

    const getPictureUser = () => {
        axios
            .get(baseUrl + "/user/" + uid)
            .then(resp => {
                setPhotoUser(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getInfosUser = () => {
        axios
            .patch(baseUrl + "/user/infos", { userId: uid })
            .then(resp => {
                setInfosUser(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getInfosPaiement = () => {
        axios
            .patch(baseUrl + "/compte/modes-paiement", { userId: uid })
            .then(resp => {
                setOnfosPaiement(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        verifUserConnected();
        if (uid) {
            getUser();
            getCompteUser();
            getPictureUser();
            getInfosUser();
            getInfosPaiement();
        };
    }, [uid]);

    const getDeviseByCompteId = () => {
        axios.post(baseUrl + "/devises/findDevisesByCompteId", { compteId: compteUser && compteUser._id && compteUser._id })
            .then(resp => {
                setDeviseCompte(resp.data);
            })
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(() => {
        if (compteUser && compteUser._id && compteUser._id) {
            getDeviseByCompteId();
        };
    }, [compteUser]);

    return (
        <UserContext.Provider
            value={{ compteUser, userData, photoUser, infosUser, setInfosUser, InfosPaiement, deviseCompte }}
        >
            <App />
        </UserContext.Provider>
    )
}

export default AppContext
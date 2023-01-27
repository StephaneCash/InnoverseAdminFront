import React, { useState } from 'react'
import "./Login.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../bases/baseUrl';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const [btnClic, setBtnClic] = useState(false);

    const maxAge = 3 * 24 * 60 * 60 * 1000;

    const handleLogin = (e) => {
        e.preventDefault();
        setBtnClic(true);
        axios.post(`${baseUrl}/users/login`, { email, password })
            .then(resp => {
                console.log(resp);
                setBtnClic(false);
                if (resp.status && resp.data && resp.data.token && resp.data.token) {
                    toast.success("Vous êtes connecté avec succès");
                    document.cookie = `jwt=${resp.data.token}; max-age=${maxAge}`;
                    setBtnClic(false);
                    window.location = "/dashboard";
                }
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setBtnClic(false);
                setErr(err.response.data.errors ? err.response.data.errors : null);
            })
    }

    return (
        <>
            <div className='app'>
                <div className='login'>
                    <div className='form'>
                        <div className='logoInnoverce'>
                            <img src={logo} alt='Logo' />
                            <span>Innoverce</span>
                        </div>
                        <h3>Se connecter</h3>
                        {
                            err && err ? (
                                <div className='error'>
                                    {err}
                                </div>
                            ) : ""
                        }
                        <label>Entrer votre adresse email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder='Votre adresse email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label>Créer un mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder='Créer un mot de passe'
                            onChange={(e) => setPassword(e.target.value)} value={password}
                        />
                        <br />
                        <button className='button' onClick={handleLogin}>
                            {
                                btnClic ? (
                                    <>
                                        Connexion...<i className='fa fa-spinner fa-pulse'></i>
                                    </>
                                ) :
                                    "Se connecter"
                            }
                        </button>
                        <p>
                            Vous n'avez pas de compte ?
                            <br /><br />
                            <Link to="/inscription">Créer un compte ici</Link>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default SignIn
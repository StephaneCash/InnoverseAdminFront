import React, { useState } from 'react';
import "./Login.css";
import logo from "../../images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../bases/baseUrl';

const SignUp = () => {

    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [err, setErr] = useState('');

    const navigate = useNavigate();

    const [errPseudo, setErrPseudo] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [formSubmit, setFormSubmit] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Les deux mots de passe ne correspondent pas.');
        } else {

            axios.post(`${baseUrl}/users/`, { pseudo, email, password })
                .then(resp => {
                    console.log(resp.data.errors);
                    if (resp.data && resp.data.errors && resp.data.errors) {
                        setErrPseudo(resp.data.errors.pseudo);
                        setEmailErr(resp.data.errors.email);
                        setPassErr(resp.data.errors.password);

                        if (resp.data.errors.pseudo === "" && resp.data.errors.email === ""
                            && resp.data.errors.password === "") {
                            setFormSubmit(true);
                        }
                    } else {
                        navigate('/');
                    }
                })
                .catch(error => {
                    console.log(error);
                   // setErr(error.response.data.errors ? error.response.data.errors : null)
                });
        }
    };


    return (
        <div className='app'>
            <div className='login'>
                <div className='form'>
                    <div className='logoInnoverce'>
                        <img src={logo} alt='Logo' />
                        <span>Innoverce</span>
                    </div>
                    <h3>S'inscrire</h3>

                    <label>Entrer votre nom</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Votre nom' value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)} />
                    {
                        errPseudo &&
                        <div className='pseudo error'>{errPseudo ? errPseudo : ""}</div>
                    }

                    <label>Entrer votre adresse email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder='Votre adresse email'
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />

                    {
                        emailErr &&
                        <div className='email error'>{emailErr ? emailErr : ""}</div>
                    }

                    <label>Créer un mot de passe</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder='Créer un mot de passe' value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        passErr &&
                        <div className='password error'>{passErr ? passErr : ""}</div>
                    }

                    <label>Répeter le mot de passe</label>
                    <input
                        type="password" className="form-control"
                        placeholder='Répeter le mot de passe' value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <br />
                    <button className='button' onClick={handleRegister}>S'inscrire</button>

                    <p>
                        Avez-vous déjà un compte ?
                        <br />
                        <Link to="/">Connectez-vous ici</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
import React from 'react'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './SoldeCompte.css';
import epargne from "../../images/epargne.png";
import courant from "../../images/courant.jpg"

const SoldeCompte = () => {
    return (
        <div className='mainSoldeCompte'>
            <Navbar />
            <div className='contentSoldeCompte'>
                <Sidebar />
                <div className='contentCompte'>
                    <h4>Compte</h4>
                    <div className='configSolde'>
                        <p>Choisir le type de compte</p>
                        <div className="cards">
                            <div className="card">
                                <header>
                                    <h2>Compte courant</h2>
                                </header>
                                <div className='card-body'>
                                    <img src={courant} alt="Hot air balloons" />

                                    <div className="content">
                                        Dans son acceptation la plus conventionnelle, le compte bancaire se
                                        réfère le plus souvent au « compte courant » ou « compte de dépôt ».
                                        Un compte courant fait référence à un compte dans lequel aucune opération n'est limitée pendant un jour ouvrable.
                                        <br />
                                        Ainsi, il permet de faire des transactions et opérations financières telles que le virement
                                        du salaire et encaissement de paiements, prélèvement automatique des factures, réalisation de virements externes, les opérations bancaires par Internet, etc. Par ailleurs, un compte permet à la personne titulaire d’avoir un découvert, c’est à dire que l’on peut y retirer de
                                        l’argent quand le compte n’est pas crédité.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <header>
                                    <h2>Compte épargne</h2>
                                </header>
                                <div className='card-body'>
                                    <img src={epargne} alt="Hot air balloons" />
                                    <div className="content">
                                        Un compte épargne est un compte destiné aux personnes qui aiment épargner pour satisfaire à leurs besoins financiers futurs. Les comptes épargnes comportent généralement certains avantages, ce qui en fait un choix de placement idéal. Ils viennent également avec des fonctionnalités supplémentaires qui les rendent plus adaptés à certaines fins. Par exemple, pour les comptes épargnes, les banques offrent un taux d'intérêt légèrement supérieur au taux d'inflation.
                                        <br /> Cela permet à votre argent de croître au fil du temps.
                                    </div>
                                </div>
                                <footer>I have a footer!</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoldeCompte
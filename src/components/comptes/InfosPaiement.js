import React from 'react'

const InfosPaiement = () => {
    return (
        <div className='formPaiement'>
            <h4>Paramètre de Paiement</h4>
            <div className='contentForm'> <label>Airtel Money CD</label> <input type="text"
                className="Prénom" placeholder='Votre compte Airtel (Numéro de téléphone)' /></div>
            <div className='contentForm'> <label>M-PESA CD</label> <input
                type="text" placeholder="Votre compte M-PSA (Numéro de téléphone)" /></div>
            <div className='contentForm'> <label>Perfect Money</label> <input type="text"
                className="Prénom" placeholder='Votre compte Perfect Money' /></div>
            <div className='contentForm'> <label>Bitcoin</label> <input type="text"
                className="Prénom" placeholder='Votre compte BitCoin ex: 1Hsy1WDazYWajUpxyFH1kGCsSPoDMDesWW' /></div>
            <hr />
            <div className='button'>
                <button>Mettre à jour</button>
            </div>
        </div>
    )
}

export default InfosPaiement
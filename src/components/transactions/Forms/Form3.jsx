import React from 'react'
import { UserContext } from '../../../AppContext';
import { FaDollarSign, FaEuroSign } from "react-icons/fa"

const Form3 = () => {

  const { activeStep, setActiveStep, deviseCompte, setDataTransfert, dataTransfert, compteUser } = React.useContext(UserContext);

  console.log(dataTransfert)

  return (
    <div className='form1'>
      <div className='alert'>
        Montant : {dataTransfert && dataTransfert.montant} {deviseCompte && deviseCompte[0].intitule === "Dollar" ? <FaDollarSign /> :
          deviseCompte && deviseCompte[0].intitule === "Euro" ? <FaEuroSign /> :
            deviseCompte && deviseCompte[0].intitule === "CDF" && "CDF"}
      </div>
      <div className='main'>
        <div className='card'>
          <div className='head'>
            De :  {dataTransfert && dataTransfert.compte}
          </div>
          <div className='body'>
            <span>{compteUser && compteUser.numero}</span>
          </div>
        </div>

        <div className='card'>
          <div className='head'>
            A :  {dataTransfert && dataTransfert.compte}
          </div>
          <div className='body'>
            <span> {dataTransfert && dataTransfert.numeroCompteDest}</span> <br />
            <span>{dataTransfert && dataTransfert.pseudo}</span>
          </div>
        </div>
      </div>

      <button style={{float:"right"}}>Confirmer</button>
    </div>
  )
}

export default Form3
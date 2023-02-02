import React from 'react'
import { UserContext } from '../../../AppContext';
import { ToastContainer, toast } from 'react-toastify';
import { FaDollarSign, FaEuroSign } from 'react-icons/fa';
import axios from 'axios';
import { baseUrl } from '../../../bases/baseUrl';

const Form3 = () => {

  const { activeStep, setActiveStep, deviseCompte, setDataTransfert,
    dataTransfert, compteUser, userDataCompte } = React.useContext(UserContext);

  const handleSubmit = () => {
    if (deviseCompte && deviseCompte[0].nom === "epargne") {
      if (deviseCompte && deviseCompte[0].typeCompteEpargnes &&
        deviseCompte[0].typeCompteEpargnes[0].montant > dataTransfert.montant) {

        axios.post(baseUrl + '/transactions', {
          type: deviseCompte && deviseCompte[0].nom === "epargne" ?
            "epargne"
            : deviseCompte && deviseCompte[0].nom === "courant" &&
            "",
          compteId: compteUser._id,
          userId: compteUser._id,
          montant: dataTransfert.montant,
          deviseTypeId: deviseCompte && deviseCompte[0].nom === "epargne" &&
            deviseCompte && deviseCompte[0].typeCompteEpargnes && deviseCompte[0].typeCompteEpargnes[0]._id,
          deviseIdDest: userDataCompte.compte._id,
          montantDest: userDataCompte.compte.montant + dataTransfert.montant
        })
          .then(resp => {
            console.log(resp)
            if (resp.status === 200) {
              toast.success('Transaction effectuée avec succès')
            }
          })
          .catch(err => {
            console.log(err)
          })

      } else {
        toast.error('Solde insuffisant')
      }
    } else {
      if (deviseCompte && deviseCompte[0].montant > dataTransfert.montant) {

        axios.post(baseUrl + '/transactions', {
          type: deviseCompte && deviseCompte[0].nom === "epargne" ?
            deviseCompte && deviseCompte[0].typeCompteEpargnes && deviseCompte[0].typeCompteEpargnes[0].nom
            : deviseCompte && deviseCompte[0].nom === "courant" &&
            "",
          compteId: compteUser._id,
          userId: compteUser._id,
          montant: dataTransfert.montant,
          deviseTypeId: deviseCompte && deviseCompte[0].nom === "epargne" &&
            deviseCompte && deviseCompte[0].typeCompteEpargnes && deviseCompte[0].typeCompteEpargnes[0]._id,
          montantDest: userDataCompte.compte.montant + dataTransfert.montant,
          deviseIdDest: userDataCompte.compte._id,
        })
          .then(resp => {
            if (resp.status === 200) {
              console.log(resp)
              toast.success('Transaction effectuée avec succès')
            }
          })
          .catch(err => {
            console.log(err)
          })

      } else {
        toast.error('Solde insuffisant')
      }
    }
  }

  return (
    <>
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
              <br />
              <span>
                Compte : {
                  deviseCompte && deviseCompte[0].nom === "epargne" ?
                    deviseCompte && deviseCompte[0].typeCompteEpargnes && deviseCompte[0].typeCompteEpargnes[0].nom
                    : deviseCompte && deviseCompte[0].nom === "courant" &&
                    ""
                }
              </span>
            </div>

            <div className='footer'>
              <span>Motif: {dataTransfert && dataTransfert.motif}</span>
            </div>
          </div>


          <div className='card'>
            <div className='head'>
              A :  {dataTransfert && dataTransfert.compte}
            </div>

            <div className='body'>
              <span> {dataTransfert && dataTransfert.numCompteDest}</span> <br />
              <span>{dataTransfert && dataTransfert.pseudo}</span>
            </div>

            <div className='footer'>
              <span>---</span>
            </div>
          </div>
        </div>
        <button style={{ float: "right", marginLeft: "1rem" }} onClick={handleSubmit}>Confirmer</button>
        <button style={{ float: "right" }} onClick={() => { setActiveStep(activeStep - 1) }}>Retour</button>
      </div>
      <ToastContainer />
    </>
  )
}

export default Form3
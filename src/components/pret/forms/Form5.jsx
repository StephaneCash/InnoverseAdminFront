import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Form5 = () => {

  const handleValidation = () => {
    toast.success('Votre prêt a été bien reçu vous serez notifié dans un bref délai.')

    setTimeout(() => {
      window.location = "/pret";
    }, 5000);
  }

  return (
    <div className='form4'>
      <button onClick={handleValidation}>Valider votre prêt</button>
      <ToastContainer />
    </div>
  )
}

export default Form5